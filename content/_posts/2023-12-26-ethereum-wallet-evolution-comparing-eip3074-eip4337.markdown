---
layout: post
title: 'Ethereum’s Wallet Evolution: Comparing EIP-3074 and ERC-4337'
date: 2023-12-26 10:59:49.000000000 +01:00
last_modified: 2024-04-11 10:59:49.000000000 +01:00
category: Advanced

tags:
  - erc4337
  - erc3074
  - account abstraction


excerpt: Account Abstraction in Ethereum brings programmability to five key functionalities traditionally hardcoded in Externally Owned Accounts. Here a comparison among the two standards EIP 3074 and EIP 4337.
permalink: "/articoli/ethereums-wallet-evolution-comparing-eip-3074-and-erc-4337/"
image: featured_images/Screenshot-2023-12-26-alle-11.59.12.png
---


![cover](/featured_images/Screenshot-2023-12-26-alle-11.59.12.png)

Currently, Ethereum's wallet system exhibits significant limitations. Initially, to ensure simplicity and reliability, Ethereum adopted its wallet mechanism from pre-existing, thoroughly vetted blockchain models. However, developers quickly recognized its constraints and the potential for more advanced solutions in future Ethereum iterations. Following numerous proposals and refinements, it appears that a definitive solution for Ethereum's wallets is now within reach.

### What is Account Abstraction in Ethereum?

Account Abstraction in Ethereum brings programmability to five key functionalities traditionally hardcoded in Externally Owned Accounts (EOAs):

2.  **Authentication**: Moving from a fixed ECDSA key to diverse identity proof methods.

5.  **Authorization**: Transitioning from total authority granted by a single key to various access policies.

8.  **Replay Protection**: Separating transaction ordering from replay protection mechanisms.

11. **Gas Payment**: Decoupling the payment of gas from the account's ETH balance, allowing for alternative methods.

14. **Execution**: Evolving from a single call to one destination to complex execution logic involving multiple calls.

### Use Cases of Account Abstraction

-   **Advanced Signature Schemes**: Incorporating various cryptographic methods like Schnorr, BLS, and post-quantum signatures.

-   **Key Management**: Implementing key rotation for security and deadman's switches for inheritance purposes.

-   **Access Policies**: Introducing multisig and role-based access controls, and dapp-specific session keys.

-   **Replay Protection Innovations**: Allowing parallel transactions and pre-signed future actions.

-   **Gas Abstraction**: Facilitating gas sponsorship and payments in assets other than ETH.

-   **Execution Enhancements**: Enabling batching and atomicity in transactions, and tailored dapp user experiences.

### Account abstraction in Ethereum introduces versatility in key areas:

-   **Signature Schemes**: Adoption of diverse cryptographic methods, including secp256r1, Schnorr, BLS, post-quantum signatures, and ZK proofs.

-   **Key Management**: Features for key rotation and inheritance-focused deadman's switches.

-   **Access Control**: Multisig, role-based access, dapp-specific session keys, and social recovery options.

-   **Replay Protection**: Facilitating parallel transactions and third-party pre-signed transactions.

-   **Gas Management**: Allowing third-party gas sponsorship and non-ETH asset payments.

-   **Privacy Enhancements**: Anonymous transactions, airdrop claims, and secure withdrawals.

-   **Execution Flexibility**: Supporting batched calls, atomic transactions, and dapp-specific user experience improvements.

These examples illustrate the expanded capabilities and security improvements in Ethereum's account framework.

### EIP-3074 and ERC-4337 Enhancements

**Advancing EOAs with EIP-3074**

The Ethereum community has long sought a standardized method for augmenting wallet functionality. The debate centers around two innovative yet divergent ideas:

-   Integrating smart capabilities within EOAs.

-   Extending standard EOA features to smart contract wallets.

![](/assets/2023/12/image-5.png)



*EIP 3074 transaction flow*
---------------------------

The EIP-3074 proposal, championed by Sam Wilson, Matt Garnett, and collaborators, is aimed at the former. It suggests the introduction of two novel opcodes, AUTH and AUTHCALL, into the Ethereum Virtual Machine (EVM). These would be utilized by entities known as 'invokers'---smart contracts designated to operate on behalf of an EOA upon receiving authorization.

Under EIP-3074, users would digitally sign a message with their private keys to express their transactional intent. This signed message is then incorporated into a blockchain transaction that beckons an invoker. The invoker, in possession of the message and using the AUTH opcode, temporarily assumes command of the user's account. AUTHCALL is then employed to execute transactions for the user. Notably, this process liberates users from the necessity of holding ETH for transaction fees, as alternative compensations like ERC-20 tokens could be utilized.

EIP-3074 proposes a seamless enhancement to existing EOAs, sidestepping the need for asset migration to new wallet forms, a requirement of the ERC-4337 approach. This method can be envisioned as equipping EOAs with additional modular features.

**Concerns Regarding EIP-3074**

Despite its potential, EIP-3074 has elicited concerns, especially regarding the extensive control bestowed upon invokers. Critics draw parallels to the infamous DAO incident, suggesting that such power concentration might set the stage for similar vulnerabilities. The balance between added utility and system integrity remains a critical point of contention.

Amidst the progressive discussions, the introduction of ERC-4337 emerged, inspired by an idea from Ethereum's co-founder, Vitalik Buterin.



![](/assets/2023/12/image-3.png)



*ERC 4337 transaction flow*


![](/assets/2023/12/image-4.png)

*ERC 4337 transaction flow*

**Innovations with ERC-4337: A New Transaction Paradigm**\
ERC-4337 offers a fresh take on account abstraction by emulating the traditional transaction mempool at a more sophisticated level. Users dispatch 'UserOperation' objects to specific Ethereum bundlers, which then consolidate these objects into a comprehensive bundle transaction for integration into the blockchain.

**Entry Point Contract: The Heart of Operation**\
An 'Entry Point' contract is central to this framework, overseeing the initiation of user wallets and the validation of 'UserOperation' objects. It scrutinizes the legitimacy of these operations by interfacing with the respective wallet.

**Smart Contract Wallets: The Final Arbiters**\
The 'UserOperation' reaches its culmination within the smart contract wallet chosen by the user, which has been tailored to communicate effectively with the EntryPoint structure.

**Envisioning the Future of Wallet Integration**\
The dialogue surrounding these advancements aims to craft a long-term vision for Ethereum. The consensus points towards a future devoid of traditional EOAs, ushering in a new era of smart contract wallets.

**ERC-4337's Roadmap**\
Advocates for ERC-4337 anticipate a transition where the 'User Operation' mempool could eventually supplant the current system. A significant network upgrade could convert all EOAs into smart contract wallets capable of iterative enhancements, much like the strategies employed by platforms like Optimism. In contrast to this, adapting EIP-3074 to such a future might incur considerable technical complexities.

**EIP-3074's Counterproposal**\
Supporters of EIP-3074 propose an alternative trajectory. They envision account abstraction as a complementary feature to EIP-3074, with a focus on validating user intentions and providing safeguards against unauthorized invokers.

**The Arrival of Standard Smart Contract Wallets**\
While both EIP-3074 and ERC-4337 are on the brink of adoption, their respective implementation timelines differ due to the nature of their proposals:

-   EIP-3074 is a Core EIP, seeking to amend the consensus mechanism, thus necessitating a network-wide update. It is under consideration for the upcoming Shanghai upgrade. Its integration is straightforward for node developers.

-   ERC-4337, in contrast, entails a more extensive coding endeavor but operates independently of network upgrades like The Merge. It has garnered support across various clients and has been tested on the Goerli testnet. Efforts are underway to integrate it with popular interfaces like Metamask and various Layer 2 solutions.

**Conclusion: A New Dawn for Ethereum's User Experience**\
These proposals are the fruits of extensive research and experimentation, all aimed at refining the experience for Ethereum users. The notion of relying on physical tokens for blockchain access is nearing obsolescence, with account abstraction heralding a significant leap towards Ethereum's mass adoption.
