---
layout: post
title: "Multicall functions in Smart Contracts"
date: 2024-03-14 
type: post

category: In-Depth

tags: [Solidity]
featured_image: /pics/posts/etherscan-multicall.png
---
In the Ethereum blockchain, a multicall transaction is a way to execute multiple function calls across different smart contracts within a single transaction. This can significantly save on gas fees and reduce network congestion by batching together many actions into one. 

## Multicalls

If you have ventured to check the blockchain explorer for a Uniswap transaction you might have notices that the name of the function is an obscure ```multicall```.

![etherscan screenshot](/pics/posts/etherscan-multicall.png)



A multicall transaction is a way to execute multiple function calls across different smart contracts within a single transaction. This can significantly save on gas fees and reduce network congestion by batching together many actions into one.

In the Ethereum blockchain, a multicall transaction is a way to execute multiple function calls across different smart contracts within a single transaction. This can significantly save on gas fees and reduce network congestion by batching together many actions into one. The Multicall pattern is especially useful for decentralized applications (dApps) that need to interact with several contracts simultaneously.

To illustrate, I'll provide a simple example with two smart contracts, `A` and `B`, each having a function: `A.f()` and `B.g()`. Let's assume these functions just emit an event to keep it simple. 

**Smart Contract A**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract A {
    // Event declaration for function f
    event FunctionFCalled();

    // Function f that emits an event when called
    function f() public {
        emit FunctionFCalled();
    }
}
```

**Smart Contract B**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract B {
    // Event declaration for function g
    event FunctionGCalled();

    // Function g that emits an event when called
    function g() public {
        emit FunctionGCalled();
    }
}
```

These contracts are straightforward: each contains a single function (`f` in `A` and `g` in `B`) that, when called, emits an event indicating the function was called. 

To execute both `A.f()` and `B.g()` in a single transaction, you would typically use a Multicall contract that aggregates these calls into one. The implementation of such a Multicall contract involves more advanced Solidity concepts like low-level calls (`address.call()`) and requires knowledge of the ABI encoding for the function calls. The basic idea is to construct a list of calls you want to make (including the target contract addresses and encoded function call data) and then execute them in a loop within the Multicall contract.

## Make the Multicall finally

To demonstrate how a multicall works in practice, I'll create a simple Multicall contract example. This contract will allow us to execute multiple calls to different contracts (`A` and `B` from the previous example) within a single Ethereum transaction. 

First, let's recap the setup: we have two contracts, `A` and `B`, each with a function (`f()` in `A` and `g()` in `B`) that we want to call together in a single transaction.

The Multicall contract works by accepting a list of calls, where each call is specified by the target contract's address and the call data (i.e., the encoded function call). The contract then iterates over this list, executing each call one by one. 

Here is a simple implementation of a Multicall contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Multicall {
    // Structure to hold the details of each call
    struct Call {
        address target; // Target contract address
        bytes callData; // Encoded function call
    }

    // Event to indicate the result of a call
    event CallExecuted(
        address indexed target,
        bool success,
        bytes data
    );

    // The multicall function accepts an array of `Call` objects and executes them.
    function multiCall(Call[] calldata calls) external {
        for (uint i = 0; i < calls.length; i++) {
            // Execute call to target contract
            (bool success, bytes memory data) = calls[i].target.call(calls[i].callData);

            // Emit an event with the result of the call
            emit CallExecuted(calls[i].target, success, data);

            // Revert if any call fails, optional behavior
            require(success, "Call failed");
        }
    }
}
```

This Multicall contract has a `multiCall` function that accepts an array of `Call` objects, each specifying a target contract address and the encoded function call data. It then iterates through the array, executing each call. If a call fails, the entire transaction is reverted, ensuring atomicity (though this behavior can be modified based on your requirements).

To use this Multicall contract, you would:
1. Deploy the Multicall contract to the Ethereum network.
2. Encode the function calls to `A.f()` and `B.g()` that you want to execute. This step typically involves using web3 libraries to encode the function signature and arguments.
3. Create `Call` objects for each encoded call, specifying the target contract address and the encoded call data.
4. Call the `multiCall` function of the Multicall contract, passing in the array of `Call` objects.

This pattern is powerful for optimizing transactions and reducing gas costs when interacting with multiple contracts or performing multiple actions in a single transaction.

