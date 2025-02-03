---
title: "Blockchain Notarization: Technique, Security and Legal Acceptance"
date: 2024-09-29
image: /pics/posts/2024-09-29-la-notarizzazione-su-blockchain-garanzia-di-sicurezza-e-valore-legale/cover.jpeg
tags: ["notarization", "blockchain", "authenticity", "document", "hash", "notarizzazione"]
category: survey
author: davide
layout: post
---

The topic we want to talk about is the notarization of documents through Blockchain technology. This process allows you to authenticate, certify and guarantee the integrity of digital documents, using hashing to create unique fingerprints that attest to the immutability of the recorded data. **The notarization on Blockchain offers proof of the existence and authenticity of a document at a given moment, making any subsequent change impossible without this being detected.**

An overview on the subject
--------------------------

### Blockchain Notarization: Operations and Safety

Blockchain notarization represents an innovative practice to guarantee the authenticity and integrity of digital documents. **This process involves creating a hash, a unique fingerprint** of the document, which is recorded on a blockchain. In the event of any modification to the document, even the smallest, the hash would change, thus indicating a modification and attesting the immodability of the content on the specific date of the notarization. This technology uses cryptographic algorithms to ensure data security and to permanently record the timestamp, making recording immutable over time. Companies offering notarization services emphasize the importance of this methodology to prevent fraud and guarantee the truth of the documentation.

### Advantages and Challenges of Blockchain Use

There are multiple advantages related to the adoption of the notarization on blockchain. **Among the main ones are the immutability and transparency of information**, allowing anyone to verify the validity of documents without the need for intermediaries. Laws, such as article 8-ter of law no. 12/2019 in Italy, recognize the legal value of documents notarized on blockchain, giving them the same probative autonomy as a traditional notarial contract. However, there are also challenges, mainly regarding the conservation of digital documents and the guarantee of their legal validity over time, as indicated in the AgID and CAD regulations. The need to keep the original document, which is not uploaded to the blockchain, raises questions about its long-term legal acceptance.

### The Blockchain Impact on the Professional Sector

The implementation of blockchain technology in the notarization process could significantly transform the role of notaries and legal professionals. **It is clear that blockchain has a number of advantages over traditional notarial methods**, such as speed and constant available accessibility to documents. Despite this, notaries could continue to play an important role in the validation and legal recognition of such documents, integrating with blockchain technology to offer a more complete service. In the near future, a coexistence between decentralized technology and the notarial profession is foreseeable, while exploring the potential of the blockchain to simplify and make traditional processes more efficient.

The notarization process
------------------------

The blockchain-based notarization process follows the following steps:

1.  **Start:** The process begins when the user uploads a document to the secure platform.

2.  **Loading the document:** The user sends his document to the notarization platform.

3.  **Hash generation:** The platform generates a unique hash for the uploaded document. The hash represents a unique digital signature of the document.

4.  **Hash recording on a blockchain:** At this point, the generated hash is recorded on one of the supported blockchains, such as Bitcoin, Ethereum, EVM or Algorand. Each of these blockchains is secure and guarantees the integrity of the document.

5.  **Generation of the notarization test:** After registration, the platform generates a notarization certificate that proves the authenticity and integrity of the document.

6.  **Receipt of proof by the user:** The user receives the notarization test, which can be used to demonstrate that the document has not been altered and that it is authenticated by the blockchain.

7.  **Sharing of the notarized document:** The user can now share the document and the notarization test with third parties, knowing that the blockchain guarantees the security and transparency of the entire process.

8.  **End:** The process ends with sharing the notarized document.

![bpmn](/pics/posts/2024-09-29-la-notarizzazione-su-blockchain-garanzia-di-sicurezza-e-valore-legale/bpmn.png)

*Source: [Proof of Docs - Tomato Srl](https://tomatosrl.com/pod.html)*

Example: Implementation on Ethereum
-----------------------------------

Notarizing a document using the Ethereum network is a process that uses blockchain technology to guarantee the integrity and authenticity of the document without revealing its content. Here is a practical example of how you could do it:

1.  **Preparation of the document:** Suppose you have a work contract in PDF format that you wish to notarize.

2.  **Document hash generation:** Use a hash algorithm, such as SHA-256, to generate a unique hash of the PDF file. This hash is a cryptographic representation of the content of the document, so even a small change in the document would change the hash.

    Example:

    ```
    sha256sum contratto-lavoro.pdf

    ```

    The output will be a hash, for example:

    ```
    3a9d0e8f15b8d7bfcf8d92b9b1dbef6b1e36f4587b1a8a4d6c2f8e84fb0bbf5e

    ```

3.  **Creating a transaction on Ethereum:** Once the hash is obtained, the next step is to create a transaction that includes the hash on the Ethereum blockchain. You can do this using a specific smart contract for notarization or using existing platforms.

    Example of smart contract for notarization:

    ```
    pragma solidity ^0.8.0;

    contract Notarization {
        mapping(bytes32 => bool) public documentNotarized;

        function notarizeDocument(bytes32 documentHash) public {
            require(!documentNotarized[documentHash], "Document already notarized");
            documentNotarized[documentHash] = true;
        }

        function verifyDocument(bytes32 documentHash) public view returns (bool) {
            return documentNotarized[documentHash];
        }
    }

    ```

    You can use [**Remix**](https://remix.ethereum.org/) or other platforms to compile and distribute this smart contract on the Ethereum network. After distribution, you can interact with it to send the document hash to the blockchain.

4.  **Sending the hash to the blockchain:** Run the function `notarizeDocument` of the smart contract, passing the hash of the document as a parameter. This action will store the hash of your document on the Ethereum blockchain in an immutable way.

    Example:

    ```
    notarizeDocument("0x3a9d0e8f15b8d7bfcf8d92b9b1dbef6b1e36f4587b1a8a4d6c2f8e84fb0bbf5e")

    ```

5.  **Receiving the notarization confirmation:** Once the transaction is complete, the document hash will be immutably stored on the Ethereum network. You can verify that the document has been notarized by recovering the transaction from the blockchain or by calling up the function `verifyDocument` of the smart contract.

6.  **Notarization test:** The notarization test can be the transaction recorded on the blockchain. You can provide the transaction number or smart contract address to interested parties, showing that the document was notarized on a specific date.

    Anyone can use the address of the smart contract and the hash of the document to verify that the notarization took place on the Ethereum blockchain at one **certain date** and without changing the content.

### Gas and Disadvantage in notarizing one document at a time

One of the main disadvantages of notarizing a single document on Ethereum for each transaction is the **cost of gas**. Whenever you make a transaction, such as registering a hash on the blockchain, you need to pay a commission in **ether (ETH)** to cover network processing costs. This cost of gas may vary depending on the congestion of the Ethereum network.

### Disadvantages of the gas fee:

-   **Variable and unpredictable costs:** The cost of gas is not fixed and can increase in periods of high activity on the network. This means that the cost of notarizing a document can be relatively low in times of low congestion, but it can become very high during peaks in network usage.

-   **Not suitable for large volumes of documents:** If you need to notarize many documents, the cost of gas for each can add up quickly, making the process economically inefficient for use cases with high volumes of notarizations.

-   **Competition for inclusion in transactions:** Since gas is used to prioritize transactions, there may be a delay in including your blockchain transaction if you do not pay a competitive rate, resulting in potential delay in the notarization process.

### Efficient implementations with Merkle Tree

The use of a **Merkle Tree** to notarize multiple documents in a single batch is an effective solution to reduce gas costs on Ethereum or Bitcoin.

Instead of sending a transaction for each document, you can combine the hash of multiple documents in a Merkle tree structure and notarize only the root of this tree in a single transaction. Here's how it works:

![merkle tree](/pics/posts/2024-09-29-la-notarizzazione-su-blockchain-garanzia-di-sicurezza-e-valore-legale/merkle.png)

#### 1 **Generation of document hashes:**

Each document is processed with a hash algorithm (such as SHA-256) to obtain a unique hash. Suppose we have N documents.

Example with 4 documents in one batch:

```
   Documento L1 hash: H00 = sha256(document1.pdf)
   Documento L2 hash: H01 = sha256(document2.pdf)
   ...
   Documento L4 hash: H11 = sha256(document4.pdf)

```

#### 2 **Construction of the Merkle Tree:**

The various document hashes are then combined in pairs to form the Merkle tree. Each parent node is a hash of its two chained child nodes. This process continues until a single hash is called **Merkle Root**.

Example:

-   The lower level of the shaft is made up of H00, H01, H10, H11
-   These hashes are chained in pairs and then re-hashati to form the next level.
-   We continue to form new levels until we reach a single root.

```
   H0 = sha256(H00 + H01)
   H1 = sha256(H10 + H11)
   ...
   Merkle Root = sha256(H0 + H1)

```

#### 3 **Notarization of Merkle Root on Ethereum:**

Now that you have it **Merkle Root**, you can send a single transaction on Ethereum to record the hash on the blockchain. This reduces the number of transactions to one, regardless of how many documents you have.

Example:

```
   notarizeDocument(sha256(Merkle Root))

```

In this way, the root of the Merkle Tree is recorded on the blockchain, indirectly representing all the documents included in the batch.

#### 4 **Verification of a single document:**

If someone wants to verify that a single document has been notarized, they can provide:

-   The hash of the document.
-   The **Merkle proof**, that is, a set of intermediate hashes necessary to rebuild the Merkle Root starting from the specific document.

This process allows anyone to verify, using the Merkle Root recorded on the blockchain, that a specific document is part of the notarized batch.

Verification example:

-   Suppose you want to check the **document L1**. Calculate the hash of **H00** and then use the Merkle proof (i.e. the hash of **H01** and the intermediate hash **H1**) to recalculate the Merkle Root.
-   If the recalculated root coincides with that recorded on the blockchain, the validity of the document is confirmed.

#### 5 **Advantages:**

-   **Gas savings:** By notifying only Merkle Root instead of the hashes of each individual document, the number of transactions and therefore the costs of gas are drastically reduced.
-   **Scalability:** You can notarize thousands or millions of documents in one transaction, improving the scalability of the system.
-   **Security and transparency:** The Merkle Tree ensures that each document is uniquely represented, and the verification process is transparent and secure.

#### 6 **Disadvantages:**

-   **Additional complexity:** Requires the management of Merkle Tree and the generation of inclusion tests (Merkle proofs) to verify the notarization of a single document.
-   **Manual verification:** The verification requires the Merkle proof, which must be kept by the user or provided during the verification phase.

With this approach, you can notarize N documents with a single transaction, significantly reducing costs and improving system efficiency.

In addition, and it is a very important thing, it allows you to use blockchain with high transaction fees which typically means **safer blockchains such as Bitcoin. In fact, this approach can also be immediately used on Bitcoin thanks to the fact that in a transaction it is possible to insert a data up to a limit of 80 bytes, sufficient to contain the Merkle root**.

Conclusions
-----------

The notarization on Blockchain represents an innovative solution to guarantee '**immutability and integrity of documents**thus offering high security and transparency. The use of the hashing allows you to create a unique reference for each document, making it **proof of existence** at a certain moment. In addition, with the adequate conservation and management of digital documents, Blockchain technology can provide a **legal value recognized** in various legal contexts, representing a significant step towards the digitization of notarial processes.

Questions and answers
---------------------

### Advantages of blockchain notarization

Blockchain notarization offers several significant advantages. **Ensures the immutability and transparency of data**, ensuring that any registered document cannot be altered. It also eliminates the need for intermediaries, reducing management costs and times. Thanks to its decentralized structure, the blockchain provides a high level of security, preventing manipulations and ensuring the traceability of information.

### Legal value of blockchain notarization

Blockchain notarization has increasing legal value. **The computer document meets the written form requirement**, ensuring that, in the presence of a digital electronic signature, the document is unchangeable and legally recognized. Some countries, such as the United States, already recognize blockchain notarization as valid for legal purposes.

### Legal references for blockchain notarization

In Italy, the legal references for blockchain notarization are contained in the **Law Decree 135/2018**, converted into law on February 7, 2019, which in article 8-ter establishes that the storage of a data in blockchain produces the legal effects of electronic time validation. In addition, European regulations such as '**eIDAS** support the legal value of documents notarized in electronic format.

**Links**

-   [Proof of Docs - Tomato Srl](https://tomatosrl.com/pod.html)
-   [Notarization - Blockchain Italia](https://www.blockchainitalia.io/it/notarizzazione/)
-   [Verification of data intended for notarization in Blockchain - RINA Italy](https://www.rina.org/it/blockchain-registration)
-   [AlmavivA - Notarization of documents on Blockchain - Giotto onchain](https://notarizzazione.almaviva.it/)