---
layout: post
title: Cosa sono gli smart contract, definizione ed esempi
date: 2023-10-15
last_modified: 2024-07-01
type: post
category: Mid
tags: [smart-contract]
toc: true
permalink: "/articoli/cosa-sono-gli-smart-contract-definizione-ed-esempi/"
image: /talking-about-smart-contracts.jpeg
author: davide
---
Gli smart contract sono una nuova categoria di programmi software legati alle criptovalute. In un certo senso possiamo considerare le criptovalute come denaro programmabile e gli smart contract sono esattamente il risultato di tale programmazione. Che relazione c'è tra smart contract e contratti più tradizionali? Quali sono le applicazioni reali degli smart contract? Come funzionano gli smart contract? Esistono gli smart contract in Bitcoin? Proviamo a rispondere a tutte queste domande in questa guida.

![Robot and Man signing a contract](/assets/images/robot-and-signed-contract.webp)


La prima menzione al termine *Smart Contract* la dobbiamo a Nick Szabo nel lontano 1994.

> *A smart contract is a computerized transaction protocol that executes the terms of a contract. The general objectives of smart contract design are to satisfy common contractual conditions (such as payment terms, liens, confidentiality, and even enforcement), minimize exceptions both malicious and accidental, and minimize the need for trusted intermediaries. Related economic goals include lowering fraud loss, arbitration and enforcement costs, and other transaction costs
[Nick Szabo](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html)*


Come vedremo di seguito, la prassi e l'implementazione del concetto di smart contract ha raggiunto una grande popolarità con la nascita della rete Ethereum, nata proprio con lo scopo di permettere agli utenti di scrivere e mettere in esecuzione sui nodi della blockchain del codice contenente delle business logic arbitrarie.

E' bene considerare che gli smart contract come realizzati nella rete Ethereum sono un caso di misnaming. Essi infatti [non sono legalmente dei contratti e non sono neanche smart](/it/post/smart-contract-significato-del-termine.html) se per smart intendiamo qualcosa in grado di prendere decisioni sulla base di informazioni ridotte o insufficienti.

> **Smart contracts are neither smart nor contracts.**


Lo stesso Vitalik Buterin, uno dei fondatori di Ethereum, ha ammesso che la scelta di chiamare Smart Contract i programmi in esecuzione su Ethereum è stato probabilmente un errore e che [forse il termine tecnicamente più adatto sarebbe dovuto essere "persistent script"](https://twitter.com/VitalikButerin/status/1051160932699770882).

![persistent-script](/assets/images/persistent-script.png)



Gli smart contract sono programmi dunque ma l'aspetto economico e l'aspetto tecnologico sono legati in modo molto stretto. Un errore nella logica o nell'implementazione di uno smart contract può causare un danno diretto con possibile distruzione della quantità di criptovaluta coinvolta.


## Quale può essere un esempio di smart contract

Partiamo con tre esempi di smart contract semplici e poi più in fondo nell'articolo ne vedremo altri con maggiori dettagli.

### Esempio di smart contract: i token fungibili

> Voglio costruire un sistema di loyalty basato su un token che permette a chi lo accumula di avere sconti e benefici sulla mia piattaforma.

Questo è il classico esempio di token fungibile che può essere definito dall'utente (in questo caso lo sviluppatore) e che diventa a tutti gli effetti come una moneta privata ma interoperabile con i wallet della blockchain. Come vedremo ci sono vari standard di smart contract per token di questo tipo, il più famoso e diffuso si chiama [ERC20](https://ethereum.org/developers/docs/standards/tokens/erc-20).


### Esempio di smart contract: i token non fungibili (NFT)

I Non Fungible Token (NFT) sono oggetti digitali unici e collezionabili, essi hanno invaso le cronache negli anni 2021 e 2022 per la loro immensa popolarità. Questi token sono anch'essi degli smart contract che permettono di essere scambiati tra utenti attraverso i wallet e che hanno la possibilità anche di incorporare o linkare degli asset digitali esterni come ad esempio immagini o suoni, garantendo una forma di "notarizzazione" degli stessi. Qui [una panoramica delle possibili applicazioni degli NFT](https://tomatosrl.com/blog/practical-application-nft-business.html)


![fungible vs non fungible assets](/assets/images/fungible-non-fungible.png)


### Esempio di smart contract: l'escrow

La logica di escrow è ben nota nel mondo delle vendite immobiliari, almeno nel mondo anglosassone e un po' meno da noi. Ma il concetto è quello del deposito a garanzia con un agente terzo, banca o notaio, che ha il compito di eseguire il pagamento solo se sono soddisfatti i requisiti dell'affare.
Gli smart contract permettono di eseguire questa logica quando i pagamenti sono effettuati con cripto valute. Qui un [esempio di applicazione degli smart contract alla logica di escrow](https://uniscrow.com).




## Gli smart contract in Ethereum e gli smart contract Turing-complete


Tecnicamente si definisce Turing completo un sistema di regole, e quindi anche un linguaggio di programmazione, che abbia la capacità di eseguire qualunque logica eseguibile da una macchina di Turing che a sua volta è un modello di calcolo definito dal celebre scienziato Alan Turing. La macchina di Turing è una macchina ideale che con teoriche operazioni di scrittura su una casella, lettura da una casella e movimento del nastro contenente le caselle è in grado di risolvere tutti i problemi calcolabili.

Abbiamo visto come [la programmabilità di Bitcoin consenta di andare oltre il mero trasferimento diretto da un partecipante ad un altro](/it/post/smart-contract-in-bitcoin). Gli scripts possono anche essere usati per pagamenti multifirma, per sbloccare premi per la soluzione di problemi di calcolo e si può anche costruire uno script che affermi qualcosa come "questo Bitcoin UTXO è tuo se sei in grado di provare tramite Merkle tree che tu mi invii una transazione di Dogecoin di questo valore", consentendo essenzialmente la funzione di cambio fra criptovalute diverse.

![utxo](/pics/posts/smart-contract-in-bitcoin/utxo.jpg)
[Source](https://scrypt.io/scrypt-ts/overview/#utxo-model)

Tuttavia gli script eseguibili dai nodi Bitcoin sono limitati "by design" in diversi ambiti:

non sono Turing completi in quanto non possono eseguire costrutti iterativi;

sono funzioni pure, ovvero stateless, e non hanno nessuna visibilità né dello stato della blockchain (ad esempio numero del blocco corrente) né dello stato del coin che sono programmati a bloccare o sbloccare. La blockchain Bitcoin è basata sul concetto di UTXO (Unspent Transaction Output) e ogni UTXO durante una transazione è speso integralmente o non lo è affatto.

Questo significa che non sarà mai possibile implementare una logica del tipo:

> Esegui N volte le seguenti istruzioni: op_code1 op_code2 ...

dove N è una variabile scelta dall'utente al momento di creazione della transazione. Una logica del genere potrebbe essere architettata in modo malevolo (ad esempio con N scelto artificiosamente molto grande) e tutti i nodi della rete una volta raccolta tale transazione per la validazione e la conferma si troverebbero ad eseguire praticamente all'infinito il codice senza mai terminare l'esecuzione. Per ragioni di sicurezza Bitcoin quindi non consente la logica iterativa in nessuna forma per non compromettere la sicurezza della rete.

Anche se l'esecuzione di una transazione Bitcoin è "stateless" questo non significa che la blockchain non abbia uno stato, anzi possiamo identificare lo stato S come l'insieme di tutti gli UTXO e formalizzare una transazione TX come:

> APPLY(S,TX) -> S'

Dove S' è lo stato della blockchain successivo alla transazione TX.

A differenza di Bitcoin, Ethereum non esclude la possibilità di scrivere codice contenente cicli di iterazione, anzi fa proprio della Turing completezza un fattore distintivo rispetto a Bitcoin. Inoltre definisce un modello di computazione stateful, ovvero i suoi script possono avere visibilità sia dei registri in memoria interni, che chiamiamo variabili di stato, che di variabili esterne agli stessi script ma legate allo stato generale della blockchain come ad esempio il saldo di un determinato account, il numero di blocco precedente, il suo timestamp e così via.



## Come si scrive uno smart contract

![](/talking-about-smart-contracts.jpeg)

Da un punto di vista operativo ogni nodo Ethereum mette in esecuzione una Ethereum Virtual Machine (EVM), ovvero un modulo software in grado di emulare il comportamento di uno pseudo-processore dotato di istruzioni elementari che possono compiere operazioni aritmetiche, crittografiche e di controllo del flusso di esecuzione come IF e cicli FOR. Senza entrare nei dettagli tecnici della EVM, diciamo semplicemente che è come una CPU ma virtuale, ed è dedicata all'esecuzione di un set di istruzioni pensate per l'esecuzione di codice in blockchain e non un set di istruzioni "general purpose" come quelle ad esempio eseguite da un PC.

Il linguaggio macchina finale eseguito dalla EVM sarebbe costituito solo da numeri (bytecode) e come tale poco leggibile e non sarebbe utile riportarne qui un esempio. I programmatori utilizzano un linguaggio detto di alto livello che possa essere successivamente tradotto in istruzioni macchina elementari da un apposito software chiamato "compilatore". 

![Write Compile and Deploy a Smart Contract](/assets/images/write-compile-deploy.png)
*source @lightrainstech*

Tra questi linguaggi di alto livello, quello che va per la maggiore su Ethereum è il linguaggio Solidity ed un semplice contratto potrebbe essere scritto come segue:

```
pragma solidity >=0.4.0 <0.6.0;
contract SimpleStorage {
   uint storedData;
   function set(uint x) public {
      storedData = x;
   }
   function get() public view returns (uint) {
      return storedData;
   }
}
```

Nell'esempio precedente il contratto di nome SimpleStorage dichiara di contenere un registro chiamato ```storedData```, di tipo "intero" senza segno e inizializzato al valore zero e poi fornisce anche una funzione ```set(uint x)``` per assegnare un valore a tale registro attraverso una transazione.

L'esempio riportato è minimalista e privo di qualsiasi utilità se non quella di mostrare pochi elementi della sintassi. 

Gli smart contract, sebbene in genere non lunghissimi, possono essere costituiti da centinaia o migliaia di linee di codice. Naturalmente lo spazio occupato dallo smart contract durante la sua esecuzione, spazio che include anche il suo codice eseguibile, è un costo per la rete e come tale viene tassato. Questo pone agli sviluppatori un ulteriore requisito, quello di scrivere smart contract brevi e compatti oltreché **sicuri**.

## Come funziona uno smart contract nei dettagli


Quando un miner riceve una transazione indirizzata ad un contratto, se tale richiesta è legittima, il contratto eseguirà il cambiamento del suo stato. Lo stato di uno smart contract non è registrato nella memoria di un solo computer ma in quella di tutti i computer partecipanti. La rete nella sua interezza si comporta quindi come un computer globale e ogni programma anche composto da poche istruzioni viene eseguito da migliaia di computer in modo identico con lo scopo di poter raggiungere un consenso che tradotto in linguaggio umano apparirebbe come: acconsento, siamo d'accordo sullo stato successivo del programma.

Questa esecuzione appare terribilmente inefficiente  ma risulta essere praticamente inarrestabile, infatti una volta che il contratto è in esecuzione questo non può essere interrotto o sospeso da nessuno a meno che tali stati di interruzione e sospensione non siano stati previsti dai suoi programmatori. Questa caratteristica rende gli smart contract resistenti alla censura. Tale resistenza in realtà dipende dalla capacità della blockchain sottostante di assorbire un attacco, anzi più in generale possiamo dire che uno smart contract potrà essere resistente al massimo quanto lo è la blockchain in cui viene eseguito ma in realtà lo sarà di meno in quanto le istruzioni e la logica dello smart contract potrebbero contenere errori di programmazione e risultare quindi meno sicuri della blockchain sottostante. In una rete di fatto controllata da poche entità, qualunque programma potrebbe essere fermato o manipolato facilmente se gli attori che governano il sistema si mettono d'accordo. La varietà e la quantità dei partecipanti ad una rete e alla scrittura della sua blockchain sono fattori essenziali per garantirne la sicurezza. Per tale motivo l'esecuzione di smart contract su una blockchain privata, di consorzio o, come spesso accade, denominata ledger distribuito (DL) in contrapposizione alle blockchain di tipo pubblico, non può essere considerata né immutabile né resistente alla censura.



## Smart contract e gas


Appurato che una transazione Ethereum è il risultato dell'esecuzione di tante istruzioni elementari che modificano lo stato di uno smart contract e quindi in generale lo stato della blockchain. Tali istruzioni vengono eseguite dai miner che competono per formare il blocco successivo e ottenere l'incentivo. Le istruzioni all'interno di una transazione devono essere eseguite fino in fondo senza errori altrimenti l'intera transazione fallisce e tutte le variabili di stato del contratto sono ripristinate ai valori precedenti la transazione, incluso ogni eventuale somma spedita o ricevuta dallo smart contract. Ogni istruzione viene eseguita dai miner e contabilizzata con un'unità di costo macchina chiamata gas. Ogni unità di gas a sua volta potrà essere "comprata" ad un certo prezzo espresso in ether.

Perché non è stato direttamente assegnato un prezzo in ether alle istruzioni della macchina? La ragione è che si è voluto separare il **costo computazionale da quello economico**. In un certo senso il gas è una misura empirica di quanto costa alla rete eseguire un certo pezzo di codice. Un po' come calcolare il consumo di un'auto per percorrere un determinato tratto di strada, tale costo si misura in litri e non in euro. Poi se troviamo un distributore economico spendiamo meno magari, ma il consumo resta quello.

Quando creiamo una transazione possiamo decidere due parametri: uno è il gas limit e l'altro è il gas price. Il gas limit è la quantità massima di gas di cui vogliamo dotare la nostra transazione. Questo valore deve essere opportunamente stimato perché con un gas limit troppo basso rischiamo di finire il gas nel mezzo della transazione e quindi questa non sarà completata. Sarebbe come decidere di far decollare un razzo per Marte senza mettere abbastanza carburante per raggiungere la destinazione. Se il carburante finisce difficilmente troveremo un distributore a metà strada e l'impresa fallirà.

Come abbiamo già descritto in precedenza per sua natura una transazione o è completa oppure viene ripristinato lo stato precedente. D'altro canto assegnare un gas troppo abbondante significa impegnare troppi dei nostri ether in attesa della fine della transazione anche se il gas che avanza ci verrà restituito. La restituzione del gas in eccesso impegnato per una transazione viene restituito ma a patto che la transazione vada fino in fondo con successo. Se il miner si blocca per un errore dovuto alla logica del nostro smart contract il gas viene comunque interamente trattenuto dal miner. Questa è una scelta di progetto dell'intero sistema che è volta a penalizzare l'esecuzione di transazioni che risultano non consentite come deterrente contro l'orchestrazione di attacchi di tipo denial of service.

Ad esempio se abbiamo uno smart contract programmato per erogare una somma solo ad una determinata data e cerchiamo di ottenere la somma prima della data stabilita questa condizione causerà il rifiuto della transazione da parte del miner e ci costerà la perdita di tutto il gas impegnato con il parametro gas limit.

Il gas price invece è quanto siamo disposti noi a pagare per una singola unità di gas affinché la nostra transazione con uno smart contract venga eseguita. Per restare nella metafora della benzina e dell'auto è come quando al distributore troviamo una gran fila, il costo di un litro di carburante è pari a €1.50 e noi abbiamo fretta. Potremmo offrire al benzinaio di pagare €2.50 al litro per passare avanti. In nessun distributore reale sarebbe possibile, ma nella blockchain è invece esattamente quello che accade. Nessuno ci impone di prezzare il gas più o meno degli altri, ma meno intendiamo pagare meno i miner saranno incentivati a validare e inserire la nostra transazione nel prossimo blocco con il rischio che un gas price decisamente troppo basso causi un tempo di attesa enorme se non infinito. Per questo motivo è bene orientarsi attraverso delle statistiche e cercare di pagare più della media se vogliamo una conferma rapida della nostra transazione, oppure un po' meno della media se non non abbiamo particolarmente fretta.

## Smart contract esempi e casi d'uso


Gli smart contract hanno una vasta gamma di applicazioni in diversi settori. Ecco alcune delle applicazioni più comuni:

### Finanza e Criptovalute:


-   DeFi (Finanza Decentralizzata): Gli smart contract permettono di creare piattaforme di prestito, scambio, yield farming e altri servizi finanziari senza intermediari.

-   Tokenizzazione: Possibilità di rappresentare asset reali come immobili, opere d'arte, ecc., sotto forma di token su una blockchain.

### Immobiliare:


-   Vendita e Acquisto: Gli smart contract possono automatizzare il processo di vendita, dall'accettazione dell'offerta fino alla chiusura.

-   Affitti: Gestione automatizzata dei contratti di affitto e dei pagamenti.

### Supply Chain:


-   Tracciabilità: Monitoraggio e verifica dell'origine e della movimentazione dei prodotti lungo la catena di approvvigionamento.

-   Pagamenti Automatici: Esecuzione automatica dei pagamenti al raggiungimento di determinate condizioni.

### Voto:

Elezioni Online: Gli smart contract possono essere utilizzati per garantire l'integrità e la trasparenza dei sistemi di voto online.

### Identità Digitale:


-   Verifica dell'Identità: Gli smart contract possono facilitare la verifica dell'identità degli utenti in modo sicuro e privato.

### Gaming:

-   Oggetti di Gioco: Creazione e scambio di oggetti di gioco tokenizzati.

-   Economia del Gioco: Gestione delle transazioni e delle economie interne dei giochi.

### Diritto e Governance:

-   Notarizzazione: Registro e verifica di documenti legali.

-   Gestione Societaria: Automatizzazione della governance e delle decisioni aziendali.

### Salute:

-   Gestione delle Informazioni Sanitarie: Consentire un accesso sicuro e controllato alle informazioni sanitarie dei pazienti.

### Energia:


-   Scambio di Energia: Gli smart contract permettono scambi di energia peer-to-peer in modo efficiente e automatizzato.

### Media e Intrattenimento:

-   Diritti d'Autore: Automatizzazione della distribuzione dei pagamenti relativi ai diritti d'autore.

-   Contenuti Digitali:** Vendita e distribuzione automatizzata di contenuti digitali.

## Conclusioni


Gli smart contract sono strumenti potenti e flessibili che stanno guadagnando popolarità in molti settori. Tuttavia, è importante notare che presentano anche sfide e limitazioni, come problemi di sicurezza, scalabilità e privacy, che devono essere affrontate man mano che la tecnologia matura.