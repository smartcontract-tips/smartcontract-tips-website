---
layout: post
title: "Smart Contract in Bitcoin: esempi e funzionamento"
date: 2024-06-09 
type: post
category: Mid
tags: [smart contract, bitcoin]
toc: true
image: /pics/posts/smart-contract-in-bitcoin/image.webp

---

Quando si parla di smart contract si pensa subito alla blockchain Ethereum, che in effetti è nata proprio per rendere questa funzionalità accessibile a tutti con dei linguaggi di programmazione moderni.

Tuttavia anche Bitcoin utilizza istruzioni per definire le sue logiche on-chain e come vedremo il mondo degli smart contract in Bitcoin è tuttaltro che banale.

## Smart contract in Bitcoin

In un [precedente articolo abbiamo chiarito che gli smart contract non sono contratti](/articoli/cosa-sono-gli-smart-contract-definizione-ed-esempi/), tuttavia continueremo a chiamarli così per ragioni di semplicità e di prassi. 

Essi possono di fatto funzionare come delle transazioni articolate e condizionali.

Anche Bitcoin è dotato di una forma elementare di programmabilità delle transazioni. Infatti anche un semplice pagamento come:

> Si paghi 1 coin a Bob --- firmato Alice

Nasconde un procedimento sottostante piuttosto complesso. Per essere più precisi un pagamento semplice in Bitcoin andrebbe visto in questi termini:

> Prendi come input l'**output O** non speso della **transazione A**, usalo come **input I** e crea un nuovo **output Q** di 1 coin a favore di Bob --- *firmato Alice*

Sembra complicato perché di fatto input ed output sono dei veri e propri programmi, o smart contract se si preferisce, scritti in un linguaggio di programmazione chiamato **Script** che ha una sintassi simile a quella del linguaggio **Forth**. Il programma che risiede sull'output di una transazione viene chiamato script di blocco. Questo significa che Alice ha bloccato un coin attraverso uno script e chiunque potrebbe in teoria fornire un script di sblocco.

![utxo](/pics/posts/smart-contract-in-bitcoin/utxo.jpg)
[Source](https://scrypt.io/scrypt-ts/overview/#utxo-model)


Durante la validazione di una transazione i miner caricano lo script di blocco e quello di sblocco, li mettono in esecuzione uno di seguito all'altro e se il risultato complessivo dell'operazione è "**true**" (vero booleano) allora il coin viene speso, ovvero messo a disposizione di un successivo script di blocco, altrimenti no.

Storicamente lo script di blocco è stato chiamato con il codename scriptPubKey mentre quello di sblocco è stato chiamato scriptSig.

Un pagamento verso un indirizzo ad esempio è codificato normalmente con uno script di tipo pay-to-pubkey-hash. Ad esempio un pagamento da Alice a Bob potrebbe essere formulato in una transazione creata da Alice che crea un nuovo output con uno script di blocco come segue:

> OP_DUP OP_HASH160 <Bob Key Hash> OP_EQUAL OP_CHECKSIG

Bob potrà spendere il suo coin quando vorrà a patto di inserire in una nuova transazione il seguente script di sblocco.

> <Bob Signature> <Bob Public Key>

Sebbene relativamente semplici, la leggibilità degli script Bitcoin non è il massimo. Per questo motivo nelle sezioni successive si farà largo uso di pseudo codice e descrizioni in lingua italiana per garantire una migliore leggibilità.

Grazie a questa programmabilità delle transazioni anche in Bitcoin è possibile realizzare delle logiche più complesse del semplice "Alice paga 1 coin a Bob".

Tra queste logiche ad esempio è possibile il pagamento multifirma o **multisig address**. Un pagamento multifirma di fatto non è altro che una somma spendibile a favore di un determinato beneficiario ma solo a patto che tale transazione sia firmata da due o più chiavi private. La logica del pagamento multifirma potrebbe essere descritta con qualcosa tipo:

Alice blocca 1 coin che può essere sbloccato se almeno due tra Alice, Bob e Trent sono d'accordo.

Lo script di blocco nella formulazione in Script potrebbe essere scritto come:

> 2 <Alice> <Bob> <Trent> 3 OP_CHECKMULTISIG

Dove con <Alice> intendiamo la chiave pubblica di Alice e così via. Un possibile script di sblocco potrebbe essere:

> OP_0 <Firma di Alice> <Firma di Trent>


## Gli smart contract come escrow

Questa tipologia di script consente di implementare gli escrow, ovvero degli arbitri che decidono sulla regolarità di una transazione. Supponiamo che Alice acquisti una bicicletta online da Bob e paghi con i bitcoin. Nel caso di acquisto senza escrow potrebbero verificarsi tre diverse situazioni:

-   Alice paga Bob ma questi non spedisce la bicicletta o la bicicletta è rotta.

-   Bob spedisce la bicicletta ma Alice non vuole pagare.

-   Alice paga Bob che spedisce una bicicletta in buone condizioni.

Solo l'ultimo caso è quello "felice", negli altri casi qualcosa va storto e ricordiamo che un pagamento in criptovaluta è irreversibile e normalmente non conosciamo l'identità di chi sta dall'altra parte, cosa che rende vano o molto improbabile ogni tentativo di recupero.

Nel caso particolare della vendita della bicicletta possiamo costruire un contratto con un bitcoin bloccato da Alice che può essere sbloccato solo da 2 su 3 firme fra quelle di Alice, Bob e Trent. A questo punto possiamo analizzare nel dettaglio i vari casi precedenti.

-   Alice spedisce il coin 2 su 3 a Bob ma Bob non spedisce la bicicletta. Bob non può da solo sbloccare il coin a proprio favore. Alice si lamenta con Trent, Trent non firmerà lo sblocco del coin a meno che Bob non fornisca prova di aver veramente spedito la bicicletta.

-   Alice spedisce il coin 2 su 3 a Bob ma la bici e rotta. Alice si lamenta con Trent e documenta attraverso immagini che la bicicletta è rotta. Bob non è in grado di provare che fosse integra quindi Trent non sblocca il coin.

-   Bob spedisce la bicicletta ma Alice non vuole sbloccare il coin agendo dunque in modo disonesto. Bob si rivolge a Trent e le loro due firme possono ora sbloccare il coin a favore di Bob.

-   Nell'ultimo caso Alice riceve la bicicletta ed è soddisfatta. Alice e Bob firmano per sbloccare il coin a favore di Bob. Trent non deve nemmeno intervenire.

## Smart contract come wallet

L'applicazione del pagamento multifirma alla vendita tramite escrow è solo uno dei casi possibili, di seguito riportiamo altri casi d'uso:

-   1-of-2: Fondo familiare corrente -- una sola firma tra quelle dei coniugi è sufficiente a sbloccare un pagamento..

-   2-of-2: Conto familiare di risparmio --- i coniugi devono entrambi firmare per sbloccare un pagamento.

-   2-of-3: Conto familiare per i figli -- il figlio può spendere i fondi solo se almeno uno dei genitori approva. Da parte loro nessuno dei genitori può individualmente prelevare i fondi a meno che non si accordino entrambi.

-   2-of-2: Wallet di autenticazione a due fattori -- Una chiave privata risiede sul PC ed un'altra sul cellulare, è necessario disporre di entrambi i dispositivi per prelevare i fondi. Questa soluzione si adotta per prevenire l'attacco da parte di hacker che potrebbero riuscire a ottenere il controllo di uno dei vostri dispositivi.

## Verificare l'hash invece di tutto lo smart contract: pay-to-script-hash (P2SH)

Gli script introducono molte possibilità nelle transazioni Bitcoin tuttavia sono un po' difficili da usare. Ad esempio nel caso di uno script multisig con molte parti in causa (ad esempio un quorum 5 s 7) ognuna di queste dovrebbe capire come realizzare uno script custom e in generale le transazioni risultanti sarebbero molto più grandi, richiedendo maggiori fee e occupando molto spazio nella memoria dei miner.

Per rendere più pratico l'utilizzo degli script in Bitcoin, nel 2012 è stata introdotta una nuova possibilità detta pay-to-script-hash (P2SH). In pratica invece di memorizzare nell'output di una transazione un intero script ne viene memorizzata solo un hash di 20 byte.

> OP_HASH160 <20-byte hash dello script di riscatto> OP_EQUAL

A questo punto è onere di chi vuole sbloccare l'output presentare sia il testo dello script di blocco che il corrispondente script di sblocco, che in parole povere si traduce nel farsi anche carico di tutte le spese supplementari dovute per la creazione di una transazione contenente il testo dello script.



Un'altra innovazione della funzionalità P2SH è la possibilità di codificare un hash di script come un indirizzo. Gli indirizzi P2SH sono riconoscibili perché iniziano con un "3". Ad esempio uno script multisig codificato come un indirizzo Bitcoin diventa un vero e proprio address al quale possono essere spedite delle somme come ad un qualunque altro indirizzo.

## Pagamento post-datato in Bitcoin

Un altro caso d'uso elementare di uno smart contract è quello del pagamento post-datato. Sebbene molto comune nel mondo analogico per mezzo degli assegni cartacei, il pagamento a tempo è meno banale di quanto si pensi nel caso del denaro elettronico. Infatti se interagendo con una banca possiamo impostare pagamenti a tempo questo implica che un sistema esterno (il computer della banca) gestisca il pagamento per noi. Di fatto stiamo dando mandato a qualcuno di ricordarsi di fare un pagamento ad una certa data. Nel caso dello smart contract invece il denaro resta sotto il nostro controllo ma possiamo programmarlo per trasferirsi dopo un certo tempo a qualcun altro. In tali casi si parla di timelock, ovvero una transazione che può essere confermata in blockchain solo dopo una determinata data.