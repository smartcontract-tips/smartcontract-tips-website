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

contract B {
    // Event declaration for function g
    event FunctionGCalled();

    // Function g that emits an event when called
    function g() public {
        emit FunctionGCalled();
    }
}

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