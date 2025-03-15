---
title: "Hardware Wallet: Recovery Tips when your Wallet is Lost or Broken"
date: 2025-02-01
image: /pics/posts/2025-02-01-hardware-wallet-ripristino-consigli-pratici/cover.png

tags: ["wallet", "recovery", "hardware-wallet", "trezor", "ledger", "mnemonic", "bip44"]
layout: post

---

Contrary to what many still seem to think, hardware wallets (and I would say wallets in a broader sense) do not "contain" bitcoin or other assets themselves, but act as secure devices for storing private keys, which are needed to sign and authorize transactions on the blockchain. Here are some key points:

1.  **Private Key Custody** :\
    Hardware wallets store private keys in an isolated, offline environment, protecting them from possible online attacks. This isolation is essential to keeping digital assets safe.

2.  **Digital Signatures** :\
    When you make a transaction, the hardware wallet uses the private key to generate a digital signature. This signature confirms the authenticity of the transaction without exposing the private key, thus maintaining the security of the process.

3.  **Blockchain Assets** :\
    Bitcoin and other assets actually exist (are accounted for) on the blockchain. The wallet (be it hardware or software) serves as a tool to interact with the blockchain, authorizing movements and verifying the balance. The actual "control" of the assets is tied to the private key, not the physical device.

My Trezor (or Ledger) broke, what do I do?
------------------------------------------

What happens when our hw wallet trezor or ledger nano no longer works? We understandably enter a state of anxiety and almost panic.

Calm down, The safety and ownership of your assets is guaranteed by your **recovery phrase** (or seed phrase), which you had to write down during the initial setup. Here's what happens and what you can do:

1.  **Importance of Recovery Phrase** :\
    The recovery phrase is the key to regenerating your private keys. If your device breaks or gets lost, you can use this phrase to restore your wallet to a new hardware wallet or compatible software wallet.

2.  **Recovery process** :

    -   **Buying a new device** : You can buy a new hardware wallet (it can be the same type or another, as long as it supports recovery standards like BIP39/BIP44).
    -   **Wallet Recovery** : When setting up your new device, you will be asked to enter your recovery phrase. If you enter it correctly, your new device will regenerate your private keys and you will be able to access your assets.

We understand that even if your hardware wallet stops working, the most important thing is that you have stored your recovery phrase correctly. This is the key to maintaining control over your assets and being able to restore them to a new device without losing anything.

You no longer have your recovery phrase, your Ledger/Trezor or other HW wallet is broken or lost?
-------------------------------------------------------------------------------------------------

Here is perhaps the perfect storm that you should **NEVER** get into. In fact, in these cases things get really difficult and if you had large amounts of coins managed by that wallet, well, the chances of seeing them again are close to zero.

Recovery procedure
------------------

> Recovery instructions starting from 12 or 24 words are always a bit commercially biased, that is, both Trezor and Ledger in their documentation assume that, given the 24 words of the mnemonic, these will be used to transfer the funds to a new copy of their products.

True, recovery instructions provided by Trezor, Ledger, and other hardware wallets often focus on using their specific device for recovery, and this may seem like a "salesy" approach. However, it is important to keep a few key points in mind:

1.  **Industry Standards** :\
    The seed phrases (12 or 24 words) follow open standards such as BIP39 and BIP44, which means that, in theory, they are interoperable between different compatible wallets. This means that, while official documentation may assume that you are using their product, your mnemonic can be used to recover funds on other devices or wallet software that support the same standards.

2.  **Flexibility and Alternative Options** :\
    If you prefer not to rely solely on a single provider, you have the option of using alternative solutions. For example, you can import your seed phrase into another compatible hardware wallet or a secure software wallet, provided you follow security best practices. However, it should be noted that this should be done with extreme caution, as entering your seed phrase into a device or application that is not fully trusted may expose it to risks.

3.  **Business Motivations and User Simplification** :\
    Hardware wallet vendors try to simplify the process for users, assuming that most will prefer to use the device they purchased the service for. This can lead to documentation that, while functional and security-oriented, does not fully explore all the possibilities for interoperability with other systems.

4.  **Awareness and Education** :\
    It is important to be informed about how the standards behind mnemonics work and to know your options. If you decide to use your seed phrase on a different device, make sure you fully understand the security implications and that you are operating in a safe and trusted environment. For example, do not enter the mnemonic into online sites just to see what addresses are associated with it. If you must do these tests, do them using a PC that is not connected to the network and use your own code or code under your control. A great exercise if you are a programmer is to use bitcoin libraries in python or other languages ​​and generate the addresses that you can then check in explorer to see the balance. Do not make copies of the mnemonic, you are playing with fire!

However, while the manufacturers' official instructions tend to guide you toward using their products, your seed phrase is an independent and standardized means of regaining access to your funds. With due caution, you can opt for alternatives that you feel are more suitable for your needs, always keeping the security of your mnemonic at the center.

But be careful, it's easy to say standard. The Electrum case
------------------------------------------------------------

Not all wallet developers use standards. This is a somewhat extreme case that does not involve a hardware wallet. Electrum uses its own mnemonic system rather than adopting a standard like BIP39, and there are several reasons for this:

1.  **Historical Origins** :\
    When Electrum was developed, the BIP39 standard had not yet been defined. So, the creators of Electrum designed their own method of generating and managing mnemonics, based on the knowledge and needs of the time.

2.  **Design and Security** :\
    By using a proprietary algorithm, Electrum was able to implement security mechanisms and logic that it deemed most suitable for its architecture. This approach allowed, for example, to specifically manage key derivation and optimize the recovery process, although it may be less interoperable with other wallets that use standards such as BIP39.

3.  **Backwards Compatibility** :\
    Electrum's mnemonic system was designed from the start to ensure security and ease of use for Electrum users. Changing the standard in use could have broken backwards compatibility with existing wallets and confused users accustomed to the original method.

So, Electrum does not use a standard like BIP39 for mnemonics because its system was born before the adoption of such standards, and was designed to offer specific guarantees of security and flexibility, maintaining complete control over the key generation and management process. However, this choice means that Electrum mnemonics are incompatible with other wallets that are based on BIP39, making direct transfer between platforms less immediate.

**We don't want to judge whether they are good or not, but you need to know!**

It should be noted that Electrum uses its own protocol for generating mnemonics which is not importable into other wallets in general, but fortunately the opposite is not true, i.e. standard bip39 mnemonics can be imported into Electrum.

The road to recovery without re-importing on the same product
-------------------------------------------------------------

> Of course, if you choose the path of recovery from the 24 words without following the procedure to transfer to a new copy of the same wallet, you get into some technicalities and it takes a bit of skill, as well as calm and chalk. Doing the recovery and then seeing the balance equal to zero is certainly a cause for anxiety but let's not give in to panic. **If the 24 words are the right ones, there is a way**

When it comes to retrieving your seed phrase (those 24 words), the process can require a bit of technical know-how, especially if you're not using the same device or interface that originally created your wallet. Here are a few things to keep in mind:

1.  **Key Derivation Paths** :\
    Not all wallets automatically choose the same derivation path. If your balance appears to be zero after resetting, you may need to verify and, if possible, change your derivation path to ensure you are seeing the correct addresses where your funds are stored.

2.  **Address Format Differences** :\
    Depending on whether your wallet uses legacy, SegWit, or native (bech32) addresses, recovery may not immediately show your balance if the software is not examining the correct format. Some wallets offer options to switch between these formats during recovery.

3.  **Calm and method** :\
    It is understandable that seeing a zero balance can generate anxiety, but if the seed is correct, the funds are definitely still on the blockchain. It is useful to take the time to:
    -   Please review the recovery procedure carefully.
    -   Consult official guides or community resources which often explain how to select the correct derivation path.
    -   Consider using temporary software wallets (always with due caution) to check if the funds appear with a different configuration.
4.  **Support and Community** :\
    You are not alone in this situation: many people have had to deal with the problem of the balance not being immediately visible. Forums, discussion groups and online guides can offer ideas and practical solutions. Even contacting the wallet support, although it can sometimes be a bit slow, can help clarify any doubts.

With a little patience, research and maybe the help of the community, you will surely find a way to make the correct balance appear. Keep calm and proceed step by step: recovery can be a technical process, but with the right approach the solution is there.

> One of the main causes of seeing the balance equal to zero after such a "manual" recovery is precisely not remembering what type of address our wallet used. Let's remember that in the recovery phase we generally have to decide whether to recover legacy addresses, or p2pksh segwit or native segwit, if we do not remember we may have to try the various options until we see the balance appear on our wallet software.

This is one of the most critical aspects when performing a "manual" seed recovery. If you do not remember what type of address (legacy, p2pkh segwit, native segwit, etc.) the wallet originally used, the balance may not appear immediately. Here are some key points to consider:

1.  **Different Address Formats** :\
    Wallets can use different address formats. For example, a legacy address has a different structure than a SegWit address (both p2pkh segwit and native). If the correct derivation path or originally used address format is not selected during restore, the wallet may not "see" the deposited funds.

2.  **Derivation Path** :\
    Choosing the right derivation path is crucial. Some wallets use standard paths, but the default path is not always guaranteed to be the correct one for you. You may need to explore several options until you find one that shows the correct balance.

3.  **Verification Procedure** :\
    If you are faced with a zero balance, try:

    -   Change the address format (from legacy to SegWit or vice versa).
    -   Change the derivation path to the original wallet specifications.
    -   Consult guides and documentation specific to the wallet you are using, as there are often detailed instructions on how to properly recover your funds.

If you are unsure, the best procedure is to try the different options until you get the correct balance indication. In this way, even a manual recovery becomes a feasible operation, although it requires a bit of technical "hand" and patience.

Derivation Path
---------------

For legacy Bitcoin addresses, i.e. those starting with '1', the BIP44 standard generally provides the following derivation path:

```
m/44'/0'/0'/0

```

Here's what each component means:

-   **44'** : Indicates the "purpose" according to the BIP44 standard.
-   **0'** : Represents the coin type for Bitcoin (0 for Bitcoin).
-   **0'** : This is the account, typically the first account (account 0).
-   **0** : Indicates the address type, where 0 stands for receiving addresses (while 1 would be for remainders).

At this point, individual addresses are derived by adding the address index (e.g., 0, 1, 2, ...), resulting in paths like:

-   First receiving address:`m/44'/0'/0'/0/0`
-   Second address:`m/44'/0'/0'/0/1`
-   And so on.

If you do not see the expected balance during the manual restore, make sure you have selected the correct derivation path. If in doubt, you can try changing the last index or verify that the wallet software is examining the correct "branch" (receiving vs. remaining). This is especially important if you have used custom paths in the past or if the original wallet had non-standard settings.

For legacy addresses, the BIP44 standard defines a separate path for **change** addresses. The typical derivation path for change addresses in a legacy wallet is:

```
m/44'/0'/0'/1

```

Let's see the meaning of each part:

-   **44'** : Indicates the BIP44 standard.
-   **0'** : Coin type for Bitcoin (0 for Bitcoin).
-   **0'** : First account (account 0).
-   **1** : This index indicates the "remainder", as opposed to **0** which is used for receiving addresses.

To derive individual remainder addresses, the address index is added to the end of the path. For example:

-   First return address:`m/44'/0'/0'/1/0`
-   Second address for rest:`m/44'/0'/0'/1/1`
-   And so on.

By using this path during the manual restore process, the wallet software should be able to correctly scan and recognize the change addresses associated with your legacy wallet.

Segwit Addresses
----------------

For SegWit addresses the derivation depends on the adopted standard. The two most common variants are:

1.  **P2SH-SegWit (BIP49)** :
    -   **Receiving Addresses** :\
        `m/49'/0'/0'/0`\
        The addresses derived in this branch will have the format P2SH (generally starting with the number "3" for Bitcoin).
    -   **Exchange Addresses** :\
        `m/49'/0'/0'/1`\
        In this branch the exchange addresses are generated.
2.  **Native SegWit (Bech32, BIP84)** :
    -   **Receiving Addresses** :\
        `m/84'/0'/0'/0`\
        The addresses derived in this branch will be in Bech32 format (generally starting with "bc1" for Bitcoin).
    -   **Exchange addresses** :\
        `m/84'/0'/0'/1`

**Important Notes** :

-   The prefix `0'`after the coin type indicates Bitcoin (coin type 0).
-   The use of `44'`, `49'`or `84'`in the path serves to identify the adopted standard (BIP44 for legacy, BIP49 for P2SH-SegWit, BIP84 for Native SegWit).
-   It is critical that you select the correct derivation path when restoring, otherwise you may not see the balance associated with the addresses if the wallet is not scanning the correct chain.

By choosing the appropriate path depending on the standard originally used by your wallet, you will be able to correctly view the funds present on the blockchain.

To conclude
-----------

> Private keys should never leave the device they were created on, the same goes for the mnemonic, which should be handwritten on a medium that never becomes accessible online. Software wallets are generally less secure than hardware ones, which by their nature are not susceptible to viruses and malware that can instead attack PCs.

**If you want to transfer funds from a hardware wallet to a software wallet, you need to know what you are doing, and it should not be a permanent solution.**

Private keys and mnemonics are extremely sensitive and must be protected at all times. Here are some key points to clarify the concept:

1.  **Private Key Isolation** :\
    Private keys should never leave the device they were generated on. Hardware wallets are specifically designed to keep keys in an isolated environment, making them inaccessible to viruses, malware, or cyber attacks that may affect internet-connected devices.

2.  **Mnemonic Protection** :\
    The mnemonic (seed phrase) should be handwritten and stored securely, preferably offline, on durable media and protected from unauthorized access. Its exposure or storage in digital format (especially online) increases the risk of compromise.

3.  **Risks of software wallets** :\
    Software wallets, while offering greater convenience and accessibility, are generally less secure because they operate in environments (PC, smartphone) exposed to possible attacks by viruses and malware. Transferring funds from a hardware wallet to a software wallet implies lowering the level of security, and therefore should only be done if you are absolutely sure of your technical capabilities and the context in which you are operating.

4.  **Transfers and Temporary Solutions** :\
    If you decide to transfer your funds from a hardware wallet to a software wallet, it is essential to be aware of the security implications. This should be considered a temporary or one-time solution, and not a permanent method of long-term storage of your funds.