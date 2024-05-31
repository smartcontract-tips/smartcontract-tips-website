---
layout: post
title: "Abstract Accounts in Ethereum: una Guida illustrata e ragionata."
date: 2024-05-31 
type: post

category: Basic

tags: 
    - ERC-4337
    - Abstract Accounts
    - Account Abstraction
    - ERC-3074
    - Smart contract wallet
---


## Un po' di contesto

Correva l'anno 1998: l'economista Paul Krugman lancia una provocazione contro il nascente Internet, dicendo che non avrebbe avuto alcun impatto significativo, paragonandolo al fax. Questo era in parte giustificato dal fatto che all'epoca le grandi aziende americane erano per lo più aziende tradizionali. Sì, c'erano anche Microsoft e Intel, ma non esisteva ancora una vera e propria web economy. 

![krugman](/pics/posts/abstract-accounts-head-first/1.webp)
**Basta con il web. Cercati un lavoro vero!**

Dopo vent'anni, la situazione è completamente cambiata: le prime cinque aziende americane sono tutte digitali e operano nel web, ribaltando le proporzioni tra i due modi di fare industria. Nel 2018, Krugman inizia a criticare le criptovalute e il mondo della blockchain, dicendo che presentavano una regressione rispetto allo stato dell'arte dell'epoca. Anche qui, c'è stato un momento in cui un'industria è diventata tradizionale, quella del web digitale, ma il Web 3 è ancora qualcosa che non ha preso piede.

![krugman 2](/pics/posts/abstract-accounts-head-first/1.webp)
**Basta con il web3. Cercati un lavoro vero!**

## Il Web3, affascinante idea ma ha anche dei difetti

I critici del Web 3, in fondo, hanno qualche ragione. Spesso si chiedono: "Ma che problema risolvete? Siete più che altro soluzionisti con la tecnologia, ma in realtà non state dando un valore aggiunto." Inoltre, un problema sicuramente molto sentito è che accedere alle funzionalità del cosiddetto Web 3, utilizzando protocolli e piattaforme di finanza decentralizzata, comporta deviazioni che costituiscono una grossa barriera all'ingresso. 

### Il  primo accesso ad una qualsiasi app di finanza decentralizzata può diventare un'esperienza frustrante.

Per esempio, per arrivare sul nostro sito dApp preferito, dobbiamo scaricare e configurare un wallet, salvare 12 parole che sono un segreto crittografico per il recovery del wallet in qualsiasi momento. Una volta configurato il wallet, dobbiamo procurarci criptovaluta per pagare il cosiddetto gas, cioè per pagare le transazioni con la blockchain. Questo significa cercare un exchange, fare il KYC (Know Your Customer) con l'exchange e quindi sottoporsi a misure di adeguata verifica della clientela. Insomma, è un processo complicato.

### Bisogna lavorare tanto sull'esperienza utente.

Prevedendo una serie di passaggi, vediamo che sono tanti e rappresentano sicuramente una grossa barriera d'ingresso per il neo utente che vuole utilizzare questi strumenti. Possiamo probabilmente affermare che non siamo ancora in una vera fase Web 3 aperta a tutti e facile da usare. Come utenti, abbiamo familiarità con una serie di strumenti e flussi, e ci aspettiamo di ritrovarli nel Web 3. Per esempio, se nel Web 3 perdiamo la chiave del nostro wallet, dovremmo fare in modo che il Web 3 sia il più semplice possibile da usare.

### Rendere l'utilizzo il più semplice possibile, ma non più semplice.

Non dobbiamo però cadere nella tentazione di rendere le applicazioni Web 3, quindi le applicazioni della blockchain, qualcosa di fortemente centralizzato e gestito, praticamente come un normalissimo cloud computing o Web 2. Dobbiamo ridurre al minimo la complessità visibile agli utenti, ma questo non significa che dal lato implementativo le cose siano più semplici. Anzi, più cerchiamo di rendere la vita semplice all'utente, più dobbiamo mascherare una complessità che deve comunque mantenere un alto livello di sicurezza, privacy e anche un alto livello di decentralizzazione e di controllo che rimane nelle mani degli utenti, perché alla fine questa è la caratteristica del Web 3.

### Una congettura su facilità, sicurezza e auto-custodia.

L'idea o la congettura che non possiamo avere contemporaneamente dei sistemi che siano sicuri, facili da usare e anche self-custodial, sotto il nostro controllo, è facilmente verificabile. Infatti, scegliere due a caso tra queste caratteristiche è facilmente realizzabile, ma metterle tutte e tre insieme potrebbe invece essere una sfida molto difficile da raccogliere. 

Se vogliamo fare un esempio, creare qualcosa di facile da usare e sicuro già esiste: questo è il cloud computing, il Web 2 che utilizziamo oggi. Tuttavia, avere qualcosa che sia self-custodial, quindi sotto il nostro controllo, insieme alle altre due caratteristiche, è più complesso. Questa è la sfida che vuole cogliere il nuovo protocollo di astrazione degli account. Prima di approfondire questa soluzione...


## Smart Contract Account Vs. External Owned Account

Per chi è abituato a utilizzare le applicazioni, le criptovalute e i wallet, è ben noto che esistono due tipi di account. Per esempio, nella rete Ethereum ci sono gli account posseduti dall'utente attraverso il controllo delle sue chiavi private (Externally Owned Accounts, o EOAs) e i contract account, ovvero gli smart contract della rete. Anche questi ultimi hanno un loro account nel senso che possono possedere fondi o asset.

La differenza tra i due è sostanziale. Entrambi hanno un indirizzo sulla blockchain ed entrambi possono possedere fondi, ma i primi sono controllati da chiavi private e non sono programmabili, poiché eseguono le azioni basate sulla volontà dell'utente che possiede le chiavi. Non hanno un controllo attivo, ma eseguono semplicemente delle transazioni. Mentre i primi sono attivi e possono prendere l'iniziativa, i secondi sono puramente reattivi e possono soltanto rispondere ed eseguire la logica per cui sono stati programmati.

Perdere le chiavi private o vederle compromesse è il problema principale per l'utente. Può nascere quindi l'idea: e se usassimo uno smart contract come nostro wallet? Questo è un primo passo importante e interessante, che in realtà si fa già spesso per chi è abituato a utilizzare sistemi più complessi. 

## Gli smart contract come wallets? non sono poi una novità

Per esempio, in Ethereum esistono i contratti multi-sig, ovvero wallet condivisi fra 2, 3 o più partecipanti, con una logica complessa per cui i fondi possono essere spostati solo se c'è un voto di maggioranza (ad esempio, due su tre).

Questi contratti consentono di implementare logiche molto più flessibili del semplice wallet. Tuttavia, la perdita o lo smarrimento della chiave privata rimane un problema, così come una chiave compromessa perché copiata o filtrata da un hacker. Resta comunque il fatto che bisogna pagare il gas direttamente, quindi avere il cosiddetto coin nativo, come Ether o Matic, per poter effettuare le transazioni sulla blockchain. Quindi, questa è una soluzione parziale.


## Introduciamo il primo elemento dell'Account Abstraction: il Bundler.

Potremmo chiedere a qualcuno, che nella terminologia dell'Account Abstraction si chiama Bundler, di raccogliere la richiesta, quindi il comando dell'utente off-chain, senza fare una transazione e senza usare il gas per pagare. Chiediamo a questo Bundler di raccogliere la richiesta dell'utente e trasformarla in una transazione sulla chain. 

Il flusso diventa un po' così: l'utente ha la sua chiave, con questa chiave firma un comando ma non paga il gas perché non sta facendo una vera e propria transazione on-chain. Metta la firma per autenticare la provenienza e l'autenticità di questa richiesta. Abbiamo poi il Bundler, che è un agente o qualcuno che si fa carico di questa richiesta, la imballa insieme magari alle richieste di altri utenti e si occupa lui di fare una vera e propria transazione sulla blockchain, pagando il gas e comunicando con lo smart contract wallet associato al nostro utente. Questo wallet contiene i fondi e gli asset necessari per eseguire, per esempio, il trasferimento di un asset.

Nasce subito la critica: va bene, è flessibile, ma perché il Bundler dovrebbe fare questa operazione? Non è un benefattore, quindi perché dovrebbe spendere lui il gas e i suoi Ether? Si potrebbe dire che l'utente e il Bundler fanno un accordo e l'utente paga, non so, mensilmente con la carta di credito. Tuttavia, stiamo introducendo un elemento di centralizzazione, perché se il Bundler poi sparisce, l'utente rimane senza servizio. Potrebbero esserci molti Bundler, ma l'utente dovrebbe assicurarsi di fare accordi con diversi Bundler, il che diventerebbe troppo complesso. Così non potrebbe funzionare.

## L'Entry Point, il cassiere dell'Account Abstraction.

Quindi viene inserito un ulteriore elemento che si chiama entry point. L'entry point ha una funzione più specifica: è un po' come un cassiere, come vedete anche dalle illustrazioni. L'entry point è uno smart contract, quindi è qualcosa di cibernetico rispetto all'utente e al Bundler, che invece sono esseri umani o agenti di tipo più tradizionale. Questi possono essere software o programmi, ma non sono smart contract.

In questo caso, abbiamo un flusso più complicato ma che può funzionare. L'utente paga e firma un comando, autenticandolo con la sua firma su una certa richiesta, per esempio di trasferire dei fondi. Il Bundler raccoglie questa richiesta, la inserisce in una transazione e anticipa il gas, pagando con i suoi Ether. Poi si aspetta di ricevere un rimborso, magari con degli interessi, perché sta svolgendo un servizio.

A questo punto, abbiamo l'entry point, un altro smart contract che calcola quanto gas deve essere pagato per svolgere quella determinata transazione e inoltra il comando vero e proprio al wallet. L'entry point trattiene la quantità di gas necessaria per rimborsare il Bundler.

Quindi, abbiamo ottenuto un flusso decentralizzato, perché non abbiamo bisogno di prendere accordi specifici con un singolo Bundler. Possiamo immaginare che essi competano per raccogliere le richieste di molti utenti. Abbiamo un unico entry point, che è unico per ogni chain e rappresenta quello che si dice un Singleton.

In questo modo, l'utente non ha più bisogno di avere i coin per pagare il gas nel suo account, ma tutti i fondi sono semplicemente conservati nello smart contract wallet.


## L'Architettura di ERC-4337 per l'Account Abstraction

L'architettura che si viene a creare è un'architettura in cui possiamo avere N utenti, N Bundler, un unico entry point e una coda dove vengono messe le richieste dei vari utenti, che vengono via via raccolte dai Bundler disponibili a fornire il servizio. Infine, abbiamo gli smart wallet o smart account, ognuno mappato con un determinato utente. 

Una cosa che non abbiamo visto nella slide precedente è che l'entry point può calcolare quali sono le fee e il gas, trattenendolo direttamente dallo smart wallet. Tuttavia, questo presuppone che nello smart wallet ci siano, ad esempio, Ether per pagare il gas, cosa che non è sempre scontata. Possiamo immaginare che l'utente abbia lo smart wallet semplicemente per conservare degli asset, come degli NFT, e quindi non voglia avere Ether o altre criptovalute dentro quel wallet.

A questo scopo, nasce anche la figura del "Paymaster", che è un altro smart contract che si occupa di pagare il gas per conto dell'utente senza che l'utente tenga criptovalute nel suo smart wallet. A questo punto, abbiamo completato il cerchio, creando una struttura molto flessibile che si sovrappone alla struttura già esistente. Gli utenti creano delle richieste, che non sono transazioni, e queste richieste vengono poi trasformate in vere e proprie transazioni blockchain da altri operatori, disaccoppiando così la funzione dell'utente.

## Il Protocollo ERC-4337 puà funzionare subito. No Hard Fork 

Una cosa interessante di questo protocollo, che si chiama ERC-4337 o, in modo equivalente, EIP-4337 (Ethereum Improvement Proposal), è che non richiede un hard fork. Questo significa che il protocollo di consenso di Ethereum, così com'è, non deve essere cambiato per far funzionare questo nuovo protocollo di account abstraction. Può funzionare direttamente con le caratteristiche che la blockchain ha già oggi, senza bisogno di modificare il protocollo di consenso di Ethereum. Questo è sicuramente un grande vantaggio. 

Questa è una slide un po' più tecnica, ma mostra esattamente gli stessi concetti della slide precedente.


## Adozione di ERC-4337

È una soluzione nata relativamente da poco, che comunque ha visto nell'ultimo anno un crescente tasso di adozione. Infatti, questo grafico tratto dal sito di Dune, che presenta sempre un gran numero di statistiche interessantissime sui protocolli del Web 3, ci mostra il numero di utenti, o meglio di smart account attivi, mese per mese negli ultimi 12 mesi circa. Una cosa interessante è che il grafico è disaggregato per le diverse chain. Come si può vedere molto facilmente, il colore che domina è quello di Polygon. Quindi, Polygon è la chain in cui si sta sperimentando e utilizzando maggiormente, o comunque il numero di smart account è preponderante.

In realtà, se poi andiamo a vedere il volume economico e quindi la band economics, ovvero dove i Bundler ricevono un numero maggiore di transazioni, vediamo che Ethereum ha una disaggregazione diversa. Sì, c'è sempre Polygon, ma vediamo che c'è anche Ethereum e altre chain che hanno un buon volume, soprattutto i layer 2 di Ethereum. 


## ERC-4337 apre la strada a diverse forme di autenticazione

Il protocollo ERC-4337 per l'astrazione degli account, che rende molto più flessibile e permette ulteriori vantaggi per gli utenti. Non solo il vantaggio di non dover firmare vere e proprie transazioni on-chain e quindi di non dover avere gas a disposizione, ma anche la possibilità di utilizzare schemi di autenticazione più complessi, che sono più tradizionali nel mondo del Web 2 a cui siamo abituati.

Questo significa che possiamo sicuramente utilizzare la chiave privata, che magari come utenti Web 3 sappiamo già usare, ma possiamo anche utilizzare altre modalità di firma o di autenticazione, come le passkey, che stanno prendendo piede nei servizi web più in generale. Si apre quindi un mondo che permette di autenticare una richiesta che non è più una transazione on-chain, ma che alla fine sarà comunque autenticata dal nostro smart contract wallet.

Questo apre anche alla possibilità di recuperare l'accesso a un wallet, poiché possiamo avere quelli che sono chiamati social accounts. Possiamo immaginare di poter far ruotare le chiavi che utilizziamo per autenticare le nostre richieste, rendendo molto più flessibile tutto il flusso che oggi conosciamo per le applicazioni decentralizzate. Molti di questi protocolli di finanza decentralizzata stanno già migrando, cominciando a implementare e a fornire supporto agli abstract account.



## ERC-3074 come alternativa a ERC-4337:

ERC-4337 non è l'unica proposta in campo per l'astrazione degli account. In particolare, esiste un'altra proposta chiamata ERC-3074, che è sostanzialmente un'alternativa, ma richiede un hard fork. Cosa significa? Richiede che il protocollo di consenso di Ethereum venga modificato e che vengano inseriti nuovi opcode. Gli opcode sono istruzioni elementari eseguite dalla Ethereum Virtual Machine (EVM). Queste nuove istruzioni permetterebbero a uno smart contract, delegato dall'utente, di eseguire operazioni per conto dell'utente.

L'hard fork è già stato approvato, nel senso che queste istruzioni sono state votate e approvate dalla community.


## Conclusioni

Chi vincerà alla fine? Sembrano due alternative, ma è più probabile che le vedremo lavorare insieme. Per il momento, quella che abbiamo è ERC-4337, che è già immediatamente utilizzabile. Esistono tutta una serie di presentazioni che lo illustrano, ma fare una fork non è del tutto positivo, soprattutto perché alcuni critici vedono il problema che i wallet maker possono richiedere subito autorizzazioni che poi non vengono mai revocate, dando così potere a chi già ne ha.

Questa è una critica che viene dibattuta nella community, e solo col tempo vedremo quale delle due soluzioni prenderà maggiormente piede e quale si rivelerà la più adatta a rispondere alle esigenze degli utenti. Probabilmente, ERC-4337 con la sua architettura a vari player garantisce una grande flessibilità, che non so se sarà eguagliata dalle implementazioni che utilizzeranno solo ERC-3074. Tuttavia, questo è tutto da verificare.


