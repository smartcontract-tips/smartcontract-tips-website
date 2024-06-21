---
layout: post
title: "Abstract Accounts in Ethereum: a no-nonsense Guide. With Pictures"
date: 2024-06-20 
type: post
related: true

category: Basic
image: /pics/posts/abstract-accounts-head-first/image.png
author: davide
tags: 
    - ERC-4337
    - Abstract Accounts
    - Account Abstraction
    - ERC-3074
    - Smart contract wallet
---
The Account Abstraction is certainly one of the topics of the moment in the world of web3. But in general the descriptions of this protocol and its architecture oscillate between banal and superficial articles that announce a sort of revolution in a sensationalistic and empty way and the actual technical articles which instead immediately delve into technical detail, losing sight of the vision of together, and above all the reason for some technical choices. With this article we try to remedy this.

## Some historical context

The year was 1998: economist Paul Krugman [ launched a provocation against the nascent Internet](https://www.laphamsquarterly.org/revolutions/miscellany/paul-krugmans-poor-prediction), saying that it would have no significant impact, comparing it to the fax. This was partly justified by the fact that large American companies at the time were mostly traditional companies. Yes, there were also Microsoft and Intel, but a real web economy did not yet exist. 


{% include imagebox.html text="Enough with the web. Get a real job!" imgurl="/pics/posts/abstract-accounts-head-first/1.webp" %}

After twenty years, the situation has completely changed: the top five American companies are all digital and operate on the web, reversing the proportions between the two ways of doing industry. In 2018, [ Krugman began criticizing cryptocurrencies and the world of blockchain](https://www.investopedia.com/news/what-paul-krugmans-problem-bitcoin/), saying that they represented a regression compared to the state of the art at the time. Here too, there was a time when an industry became mainstream, that of the digital web, but Web 3 is still something that has not caught on.



## Web3 is cool but it has some flaws

If we wanted to identify just one property that clearly distinguishes web3 from the more traditional web we could say that it is control. The control of data, contents, assets and above all of one's identity is no longer intermediated by a third-party service, but in theory is in our hands and managed by our wallet through our keys.

But in reality things don't work as well as we imagine.

{% include imagebox.html text="
Enough with WEB3. Get a real job!" imgurl="/pics/posts/abstract-accounts-head-first/1.webp" %}

The critics of Web 3, after all, have some reason. They often ask themselves: “What problem are you solving? You are more of a solutionist with technology, but in reality you are not providing added value.” Furthermore, a problem that is certainly deeply felt is that accessing the functions of the so-called Web 3, using decentralized finance protocols and platforms, involves deviations that constitute a major barrier to entry. 

### Logging into any decentralized finance app for the first time can be a frustrating experience.

For example, to get to our favorite dApp site, we need to download and configure a wallet, save 12 words that are a cryptographic secret for wallet recovery at any time.


{% include imagebox.html text="Connect to the dAPP!" imgurl="/pics/posts/abstract-accounts-head-first/22.webp" %}

{% include imagebox.html text="You need a wallet!" imgurl="/pics/posts/abstract-accounts-head-first/23.webp" %}

{% include imagebox.html text="Create and store the 12 secret words in a secure place!" imgurl="/pics/posts/abstract-accounts-head-first/24.webp" %}


Once the wallet has been configured, we need to obtain cryptocurrency to pay for the so-called gas, that is, to pay for transactions with the blockchain.


{% include imagebox.html text="You need ether to pay the gas!" imgurl="/pics/posts/abstract-accounts-head-first/25.webp" %}

This means looking for an exchange, doing KYC (Know Your Customer) with the exchange and then undergoing customer due diligence measures. In short, it is a complicated process.


{% include imagebox.html text="Go to some exchange, but beware of scams!" imgurl="/pics/posts/abstract-accounts-head-first/26.webp" %}

{% include imagebox.html text="Interview, KYC, AML, Are you a terrorist? Send us all your personal data. What was that money transfer of 10$ to DooDoo Ltd." imgurl="/pics/posts/abstract-accounts-head-first/27.webp" %}


### We need to work a lot on the user experience.


By foreseeing a series of steps, we see that there are many and they certainly represent a large entry barrier for the new user who wants to use these tools. We can probably say that we are not yet in a true Web 3 phase open to all and easy to use.


{% include imagebox.html text="It's not that I'm liking this web3 so far
" imgurl="/pics/posts/abstract-accounts-head-first/3.webp" %}

As users, we are familiar with a number of tools and flows, and we expect to find them in Web 3. For example, if we lose our wallet key in Web 3, we should make Web 3 as easy as possible to use.


### Make using it as easy as possible, but not easier.

However, we must not fall into the temptation of making Web 3 applications, therefore blockchain applications, something highly centralized and managed, practically like normal cloud computing or Web 2.


{% include imagebox.html text="Make things as simple as possible, but no simpler." imgurl="/pics/posts/abstract-accounts-head-first/2.webp" %}

We need to minimize the complexity visible to users, but this does not mean that on the implementation side things are simpler. Indeed, the more we try to make life simple for the user, the more we have to mask a complexity that must still maintain a high level of security, privacy and also a high level of decentralization and control that remains in the hands of the users, because in the end this it is the characteristic of Web 3.


### A conjecture on ease, security and self-custody.


The idea or conjecture that  [ we cannot simultaneously have systems that are secure, easy to use and even self-custodial](/articoli/transazioni-gasless-per-facilitare-lonboarding-degli-utenti-ethereum/), under our control, is easily verifiable. In fact, choosing two at random among these characteristics is easily achievable, but putting all three together could instead be a very difficult challenge to meet.

![conjecture web3](/featured_images/image-e1699635470183.png)

If we want to give an example, creating something easy to use and secure already exists: this is cloud computing, the Web 2 that we use today. However, having something that is self-custodial, therefore under our control, together with the other two characteristics, is more complex. This is the challenge that the new account abstraction protocol aims to address. Before delving into this solution, let's talk about accounts.


{% include imagebox.html text="You have to choose, you can't have everything!" imgurl="/pics/posts/abstract-accounts-head-first/1.webp" %}


## Smart Contract Account Vs. External Owned Account

For those accustomed to using applications, cryptocurrencies and wallets, it is well known that there are two types of accounts. For example, in the Ethereum network there are accounts owned by the user through the control of his private keys (Externally Owned Accounts, or EOAs) and contract accounts, i.e. the smart contracts of the network. The latter also have their own account in the sense that they can own funds or assets.


![eoa vs contract account](/pics/posts/abstract-accounts-head-first/eoa-vs-sc.png)

The difference between the two is substantial. Both have an address on the blockchain and both can own funds, but the former are controlled by private keys and are not programmable, as they perform actions based on the will of the user who owns the keys. They have no active control, but simply execute transactions. While the former are active and can take the initiative, the latter are purely reactive and can only respond and execute the logic for which they have been programmed.


Losing private keys or having them compromised is the main problem for the user. The idea can then arise: what if we used a smart contract as our wallet? This is an important and interesting first step, which in reality is already often done by those who are used to using more complex systems.


{% include imagebox.html text="What if we used smart contracts as wallets?" imgurl="/pics/posts/abstract-accounts-head-first/2.webp" %}

## Smart contracts as wallets? they are not new after all

For example, in Ethereum there are multi-sig contracts, i.e. wallets shared between 2, 3 or more participants, with a complex logic whereby funds can only be moved if there is a majority vote (for example, two out of three ).


These contracts allow you to implement much more flexible logic than the simple wallet. However, loss or misplacement of the private key remains a problem, as does a key that has been compromised because it was copied or filtered by a hacker.


{% include imagebox.html text="This doesn't seem like a great idea to me. However to **vote** multisig transactions you need an EOA to interact with the smart contract and to pay for the gas" imgurl="/pics/posts/abstract-accounts-head-first/3.webp" %}

However, the fact remains that you have to pay for the gas directly, and therefore have the so-called native coin, such as Ether or Matic, to be able to carry out transactions on the blockchain. So, this is a partial solution.



## We introduce the first element of the Account Abstraction according to the ERC-4337 protocol: please meet the Bundler.

We could ask someone, who in [Account Abstraction terminology is called a Bundler](https://www.erc4337.io/docs), to collect the request, then the user's command off-chain, without making a transaction and without using gas to pay. We ask this Bundler to collect the user's request and transform it into a transaction on the chain.


![erc4337 diagram](/assets/4337-diagram.webp)

The flow becomes a bit like this: the user has his key, with this key he signs a command but does not pay for the gas because he is not making a real on-chain transaction. Please sign to authenticate the origin and authenticity of this request.


{% include imagebox.html text="The user signs a request, not really a transaction.
" imgurl="/pics/posts/abstract-accounts-head-first/12.webp" %}

Then we have the Bundler, who is an agent or someone who takes charge of this request, packages it together perhaps with the requests of other users and takes care of making a real transaction on the blockchain, paying for the gas and communicating with the smart contract wallet associated with our user. This wallet contains the funds and assets needed to perform, for example, an asset transfer.


{% include imagebox.html text="The bundler packages the request into a real transaction" imgurl="/pics/posts/abstract-accounts-head-first/15.webp" %}

The criticism immediately arises: okay, it's flexible, but why should the Bundler do this operation? He's not a benefactor, so why should he spend his gas and Ether?

{% include imagebox.html text="And why would the bundler do this? He's not a benefactor
" imgurl="/pics/posts/abstract-accounts-head-first/3.webp" %}

You might suggest that the user and the Bundler make a deal and the user pays, I don't know, monthly by credit card. However, we are introducing an element of centralization, because if the Bundler then disappears, the user is left without service. There could be many Bundlers, but the user would have to make sure to make deals with several Bundlers, which would become too complex. It couldn't work that way.


## The Entry Point, the Account Abstraction cashier.

Then a further element called entry point is inserted. The entry point has a more specific function: it is a bit like a cashier, as you can also see from the illustrations. The entry point is a smart contract, so it is something cybernetic compared to the user and the Bundler, who are instead human beings or more traditional agents. These may be software or programs, but they are not smart contracts.


{% include imagebox.html text="I calculate how much ether is needed for the gas, forward the command to the wallet and take the refund to send to the bundler
" imgurl="/pics/posts/abstract-accounts-head-first/16.webp" %}

In this case, we have a more complicated flow but one that can work. The user pays and signs a command, authenticating it with his signature on a certain request, for example to transfer funds. The Bundler collects this request, inserts it into a transaction and advances the gas, paying with its Ether. Then he expects to receive a refund, perhaps with interest, because he is performing a service.


At this point, we have the entry point, another smart contract that calculates how much gas must be paid to carry out that specific transaction and forwards the actual command to the wallet. The entry point holds the amount of gas necessary to repay the Bundler.


The flow described can be divided into several clear and well-defined steps. Here's how the process works:


1. **User init:**
   - The user decides to carry out an operation, such as transferring funds.
   - Start the operation by signing a command. The signature is used to authenticate the specific request.

2. **Bundler execution:**
   - The Bundler, a sort of intermediary, collects the request signed by the user.
   - He or she inserts this request into a transaction on the blockchain and advances the cost of the gas needed to execute it, paying with his Ether (ETH).


3. **Refund Expectation:**
   - After prepaying the gas, the Bundler expects a refund for the gas spent, possibly adding interest, since it is providing a facilitation service.


4. **Interaction with the Entry Point:**
   - The transaction puts another smart contract into action, defined as an entry point.
   - This smart contract is unique in the network, technically it is called **singleton** 

5. **Execution and refund:**
   - The entry point forwards the command to the wallet to complete the operation.
   - It holds the amount of gas that will be used to repay the Bundler, ensuring that there are no losses for the intermediary.

This flow ensures that all parties involved in the transaction, from the user to the Bundler, are properly compensated or reimbursed for their services and expenses. In this way, an economic and functional system is created that benefits all the actors involved.

So, we got a decentralized flow, because we don't need to make specific agreements with a single Bundler. We can imagine that they compete to collect requests from many users. We have a single entry point, which is unique for each chain and represents what is called a Singleton.

In this way, the user no longer needs to have coins to pay for gas in his account, but all funds are simply stored in the smart contract wallet.



## The ERC-4337 Architecture for Account Abstraction

The architecture that is created is an architecture in which we can have N users, N Bundlers, a single entry point and a queue where the requests of the various users are placed, which are gradually collected by the Bundlers available to provide the service . Finally, we have smart wallets or smart accounts, each mapped to a specific user.


![erc-4337 architecture](/pics/posts/abstract-accounts-head-first/arch.png)

One thing we didn't see in the previous slide is that the entry point can calculate what the fees and gas are, holding it directly from the smart wallet. However, this presupposes that there is, for example, Ether in the smart wallet to pay for gas, which is not always a given. We can imagine that the user has the smart wallet simply to store assets, such as NFTs, and therefore does not want to have Ether or other cryptocurrencies inside that wallet.


For this purpose, the figure of the "Paymaster" was also born, which is another smart contract that pays for gas on behalf of the user without the user keeping cryptocurrencies in his smart wallet. At this point, we have come full circle, creating a very flexible structure that overlaps the existing structure. Users create requests, which are not transactions, and these requests are then transformed into actual blockchain transactions by other operators, thus decoupling the user function.


## The ERC-4337 Protocol can work right away. No Hard Fork
 
One interesting thing about this protocol, which is called ERC-4337 or, equivalently, EIP-4337 (Ethereum Improvement Proposal), is that it does not require a hard fork. This means that the Ethereum consensus protocol, as it stands, does not need to be changed for this new account abstraction protocol to work. It can work directly with the features that blockchain already has today, without needing to modify Ethereum's consensus protocol. This is definitely a big plus.


## Adozione di ERC-4337

It is a relatively recent solution, which however has seen a growing adoption rate in the last year. In fact, [this graph taken from the Dune website](https://dune.com/niftytable/account-abstraction), which always presents a large number of very interesting statistics on Web 3 protocols, shows us the number of users, or rather active smart accounts, month by month in the last 12 months or so. An interesting thing is that the graph is disaggregated for the different chains. As you can see very easily, the dominant color is that of Polygon. Therefore, Polygon is the chain in which it is being experimented and used the most, or in any case the number of smart accounts is predominant.

![erc-4337 analytics](/pics/posts/abstract-accounts-head-first/dune0.png)

In reality, if we then look at the economic volume and therefore the band economics, i.e. where the Bundlers receive a greater number of transactions, we see that Ethereum has a different disaggregation. Yes, there is always Polygon, but we see that there is also Ethereum and other chains that have good volume, especially layer 2 of Ethereum.

![erc-4337 analytics](/pics/posts/abstract-accounts-head-first/dune.png)

## ERC-4337 paves the way for different forms of authentication

The ERC-4337 protocol for account abstraction, which makes it much more flexible and allows further benefits for users. Not only the advantage of not having to sign actual on-chain transactions and therefore not having to have gas available, but also the possibility of using more complex authentication schemes, which are more traditional in the Web 2 world we are used to.

This means that we can certainly use the private key, which perhaps as Web 3 users we already know how to use, but we can also use other signature or authentication methods, such as passkeys, which are becoming popular in web services more generally. A world therefore opens up that allows us to authenticate a request that is no longer an on-chain transaction, but which will ultimately still be authenticated by our smart contract wallet.


{% include imagebox.html text="I can authenticate with the usual key I use in the ethereum wallet" imgurl="/pics/posts/abstract-accounts-head-first/12.webp" %}

{% include imagebox.html text="...or I can use more classic credentials such as username and password, complete with recovery..." imgurl="/pics/posts/abstract-accounts-head-first/17.webp" %}

{% include imagebox.html text="...or even I can authenticate myself with biometrics
" imgurl="/pics/posts/abstract-accounts-head-first/18.webp" %}

This also opens up the possibility of recovering access to a wallet, since we can have what are called social accounts. We can imagine being able to rotate the keys we use to authenticate our requests, making the entire flow we know today for decentralized applications much more flexible. Many of these decentralized finance protocols are already migrating, starting to implement and provide support for abstract accounts.


## ERC-3074 as an alternative to ERC-4337



ERC-4337 is not the only proposal in the field for account abstraction. Notably, there is another proposal called [ERC-3074](https://eips.ethereum.org/EIPS/eip-3074) , which is essentially an alternative, but requires a hard fork. What does it mean? It requires the Ethereum consensus protocol to be changed and new opcodes to be inserted.


Opcodes are elementary instructions executed by the Ethereum Virtual Machine (EVM). These new instructions would allow a smart contract, delegated by the user, to perform operations on the user's behalf.


| AUTH | sets an authorized context variable based on an ECDSA signature, allowing a smart contract to temporarily assume the identity of an EOA |
| AUTHCALL | Similar to the existing CALL opcode, AUTHCALL enables a smart contract to make calls as if it were the authorized EOA |

**In a certain sense, if ERC-4337 aims to transform a smart contract into something that replaces our EOA account, on the contrary ERC-3074 tries to transform our EOA account into something "programmable" similar to smart contracts**

The hard fork has already been approved, meaning these instructions have been voted on and approved by the community.


## Conclusions

[Between ERC-4337 and ERC-3074. Who will win in the end? They seem like two alternatives ,](/articoli/ethereums-wallet-evolution-comparing-eip-3074-and-erc-4337/),but it's more likely we'll see them work together. For the moment, the one we have is ERC-4337, which is already immediately usable. There are a whole series of presentations that illustrate this, but making a fork is not entirely positive, especially because some critics see the problem that wallet makers can immediately request authorizations which are then never revoked, thus giving power to those who already have them .

This is a criticism that is debated in the community, and only over time will we see which of the two solutions will gain more traction and which will prove to be the most suitable to meet user needs. Probably, ERC-4337 with its multi-player architecture guarantees great flexibility, which I don't know if it will be equaled by implementations that will only use ERC-3074. However, this remains to be verified.


