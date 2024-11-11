---
title: "Migrating to Infinitism: An Updated Guide and Tutorial to ERC-4337 Implementation"
date: 2024-11-08
image: /pics/posts/2024-11-11-updated-guide-to-erc4337-migrating-to-infinitism/cover.png
tags: ["erc-4337", "abstract-account", "account-abstraction","tutorial"]
excerpt: "The original article - Harnessing ERC-4337: A Step-by-Step Guide to Implementing Ethereum's Account Revolution (ERC-4337 Guide Stackup) - has been updated to reflect important changes in the ERC-4337 ecosystem"
layout: post
---

The original article "Harnessing ERC-4337: A Step-by-Step Guide to Implementing Ethereum's Account Revolution" ([ERC-4337 Guide Stackup](https://smartcontract.tips/articoli/erc-4337-tutorial-a-step-by-step-guide-to-implementing-ethereums-account-abstraction/)) has been updated to reflect important changes in the ERC-4337 ecosystem.

## Important Update: Transition to Infinitism

Due to Stackup's recent announcement about their change in direction https://www.stackup.sh/blog/stackups-new-direction , this guide has been updated to use the official Eth-Infinitism implementation instead of Stackup's solution. This change ensures long-term sustainability and better alignment with the canonical ERC-4337 implementation.

## Key Changes from Previous Implementation

The fundamental architecture remains the same, but the implementation now uses the official Infinitism repository instead of Stackup's tooling. This brings several advantages:

- Direct integration with the canonical implementation
- More frequent updates and broader community support
- Enhanced security through wider audit coverage
- Better standardization and compatibility

## Updated Implementation Steps

### Initial Setup
Instead of using Stackup's repository, use the official Infinitism implementation:

```bash
git clone https://github.com/eth-infinitism/account-abstraction.git
cd account-abstraction
yarn install
```

### Configuration
Replace the previous Stackup configuration with Infinitism's setup:

```javascript
{
  "rpcUrl": "YOUR_RPC_URL",
  "signingKey": "YOUR_PRIVATE_KEY",
  "entryPoint": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
  "simpleAccountFactory": "0x9406Cc6185a346906296840746125a0E44976454"
}
```
### Smart Contract Deployment

The deployment process now uses Infinitism's contracts directly:

```javascript
// SimpleAccount.sol
import "@account-abstraction/contracts/core/BaseAccount.sol";
import "@account-abstraction/contracts/samples/SimpleAccount.sol";

contract MyAccount is SimpleAccount {
    constructor(IEntryPoint anEntryPoint) SimpleAccount(anEntryPoint) {}
}
```

```javascript
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

/* solhint-disable avoid-low-level-calls */
/* solhint-disable no-inline-assembly */
/* solhint-disable reason-string */

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "../core/BaseAccount.sol";
import "../core/Helpers.sol";
import "./callback/TokenCallbackHandler.sol";

/**
  * minimal account.
  *  this is sample minimal account.
  *  has execute, eth handling methods
  *  has a single signer that can send requests through the entryPoint.
  */
contract SimpleAccount is BaseAccount, TokenCallbackHandler, UUPSUpgradeable, Initializable {
    address public owner;

    IEntryPoint private immutable _entryPoint;

    event SimpleAccountInitialized(IEntryPoint indexed entryPoint, address indexed owner);

    modifier onlyOwner() {
        _onlyOwner();
        _;
    }

    /// @inheritdoc BaseAccount
    function entryPoint() public view virtual override returns (IEntryPoint) {
        return _entryPoint;
    }

    // solhint-disable-next-line no-empty-blocks
    receive() external payable {}

    constructor(IEntryPoint anEntryPoint) {
        _entryPoint = anEntryPoint;
        _disableInitializers();
    }

    function _onlyOwner() internal view {
        //directly from EOA owner, or through the account itself (which gets redirected through execute())
        require(msg.sender == owner || msg.sender == address(this), "only owner");
    }

    /**
     * execute a transaction (called directly from owner, or by entryPoint)
     * @param dest destination address to call
     * @param value the value to pass in this call
     * @param func the calldata to pass in this call
     */
    function execute(address dest, uint256 value, bytes calldata func) external {
        _requireFromEntryPointOrOwner();
        _call(dest, value, func);
    }

    /**
     * execute a sequence of transactions
     * @dev to reduce gas consumption for trivial case (no value), use a zero-length array to mean zero value
     * @param dest an array of destination addresses
     * @param value an array of values to pass to each call. can be zero-length for no-value calls
     * @param func an array of calldata to pass to each call
     */
    function executeBatch(address[] calldata dest, uint256[] calldata value, bytes[] calldata func) external {
        _requireFromEntryPointOrOwner();
        require(dest.length == func.length && (value.length == 0 || value.length == func.length), "wrong array lengths");
        if (value.length == 0) {
            for (uint256 i = 0; i < dest.length; i++) {
                _call(dest[i], 0, func[i]);
            }
        } else {
            for (uint256 i = 0; i < dest.length; i++) {
                _call(dest[i], value[i], func[i]);
            }
        }
    }

    /**
     * @dev The _entryPoint member is immutable, to reduce gas consumption.  To upgrade EntryPoint,
     * a new implementation of SimpleAccount must be deployed with the new EntryPoint address, then upgrading
      * the implementation by calling `upgradeTo()`
      * @param anOwner the owner (signer) of this account
     */
    function initialize(address anOwner) public virtual initializer {
        _initialize(anOwner);
    }

    function _initialize(address anOwner) internal virtual {
        owner = anOwner;
        emit SimpleAccountInitialized(_entryPoint, owner);
    }

    // Require the function call went through EntryPoint or owner
    function _requireFromEntryPointOrOwner() internal view {
        require(msg.sender == address(entryPoint()) || msg.sender == owner, "account: not Owner or EntryPoint");
    }

    /// implement template method of BaseAccount
    function _validateSignature(PackedUserOperation calldata userOp, bytes32 userOpHash)
    internal override virtual returns (uint256 validationData) {
        bytes32 hash = MessageHashUtils.toEthSignedMessageHash(userOpHash);
        if (owner != ECDSA.recover(hash, userOp.signature))
            return SIG_VALIDATION_FAILED;
        return SIG_VALIDATION_SUCCESS;
    }

    function _call(address target, uint256 value, bytes memory data) internal {
        (bool success, bytes memory result) = target.call{value: value}(data);
        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    }

    /**
     * check current account deposit in the entryPoint
     */
    function getDeposit() public view returns (uint256) {
        return entryPoint().balanceOf(address(this));
    }

    /**
     * deposit more funds for this account in the entryPoint
     */
    function addDeposit() public payable {
        entryPoint().depositTo{value: msg.value}(address(this));
    }

    /**
     * withdraw value from the account's deposit
     * @param withdrawAddress target to send to
     * @param amount to withdraw
     */
    function withdrawDepositTo(address payable withdrawAddress, uint256 amount) public onlyOwner {
        entryPoint().withdrawTo(withdrawAddress, amount);
    }

    function _authorizeUpgrade(address newImplementation) internal view override {
        (newImplementation);
        _onlyOwner();
    }
}
```

### Account Creation and Management
The core functionality remains similar, but now uses Infinitism's contracts directly:

```typescript
import { SimpleAccountFactory__factory } from "@account-abstraction/contracts";

async function deployAccount(owner: string) {
    const factory = await new SimpleAccountFactory__factory(deployer).deploy(
        ENTRY_POINT_ADDRESS
    );
    
    const salt = ethers.constants.Zero;
    const accountAddress = await factory.createAccount(owner, salt);
    
    return accountAddress;
}
```

### Transaction Execution

The UserOperation building process is now more direct:

```typescript
import { UserOperationBuilder } from "@account-abstraction/sdk";

async function executeTransaction(
    account: string,
    to: string,
    value: string
) {
    const userOpBuilder = new UserOperationBuilder()
        .setSender(account)
        .setTarget(to)
        .setAmount(value)
        .setEntryPoint(ENTRY_POINT_ADDRESS);
        
    const userOp = await userOpBuilder.buildOp();
    return userOp;
}
```






## New Features Available

### Bundler Integration

With Infinitism's implementation, you can run your own bundler:

```typescript
import { Bundler } from "@account-abstraction/bundler";

const bundler = new Bundler({
    entryPoint: ENTRY_POINT_ADDRESS,
    beneficiary: BENEFICIARY_ADDRESS,
    minBalance: ethers.utils.parseEther("0.1")
});
```

### Advanced Validation

The new implementation offers enhanced validation capabilities:

```typescript
async function validateUserOp(userOp: UserOperation) {
    const validationResult = await entryPoint.callStatic.simulateValidation(
        userOp,
        { gasLimit: 5000000 }
    );
    return validationResult;
}
```

### Paymaster Integration

The Paymaster implementation is more flexible:

```typescript
import { VerifyingPaymaster } from "@account-abstraction/contracts";

const paymaster = await new VerifyingPaymaster__factory(deployer).deploy(
    entryPoint.address,
    verifier.address
);
```

## Testing the Implementation

```typescript
describe("Account Abstraction", function () {
    it("Should deploy and execute transactions", async function () {
        const account = await deployAccount(owner.address);
        const userOp = await executeTransaction(
            account,
            recipient.address,
            ethers.utils.parseEther("0.1")
        );
        
        const tx = await bundler.sendUserOperation(userOp);
        await tx.wait();
        
        expect(await ethers.provider.getBalance(recipient.address))
            .to.equal(ethers.utils.parseEther("0.1"));
    });
});
```




## Migration Guide from Stackup

To migrate existing implementations:

1. Replace dependencies:
```bash
yarn remove @stackup/sdk
yarn add @account-abstraction/sdk @account-abstraction/contracts
```

2. Update contract imports:
```javascript
// Old
import "@stackup/contracts/account/SimpleAccount.sol";
// New
import "@account-abstraction/contracts/samples/SimpleAccount.sol";
```

3. Modify UserOperation creation:
```typescript
// Old
const userOp = await stackup.buildUserOp(/* ... */);
// New
const userOp = await new UserOperationBuilder()
    .setSender(account)
    /* ... */
    .buildOp();
```


## Conclusion
This updated implementation provides a more robust and standardized approach to Account Abstraction, directly aligned with the Ethereum community's official implementation.

While this update requires some migration effort, the transition to the official Infinitism implementation ensures better long-term sustainability and standardization of your ERC-4337 implementations. The core concepts and benefits of Account Abstraction remain unchanged, but you now have access to the most up-to-date and widely supported implementation in the ecosystem.

For the complete implementation details and further updates, refer to the official Infinitism repository documentation https://github.com/eth-infinitism/account-abstraction