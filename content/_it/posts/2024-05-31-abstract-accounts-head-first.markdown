---
layout: post
title: "Abstract Accounts in Ethereum: una Guida illustrata, ragionata e ragionevole."
date: 2024-05-31 
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
L'Account Abstraction è sicuramente uno dei temi del momento nel mondo del web3. Ma in generale le descrizioni di questo protocollo e della sua architettura oscillano tra articoli banali e superficiali che annunciano in modo sensazionalistico e vuoto una sorta di rivoluzione e gli articoli tecnici veri e propri che invece si infilano subito nel dettaglio tecnico perdendo di vista la visione d'insieme, e soprattutto il perché di alcune scelte tecniche. Con questo articolo cerchiamo di rimediare.

## Un po' di contesto

Correva l'anno 1998: l'economista Paul Krugman [lancia una provocazione contro il nascente Internet](https://www.laphamsquarterly.org/revolutions/miscellany/paul-krugmans-poor-prediction), dicendo che non avrebbe avuto alcun impatto significativo, paragonandolo al fax. Questo era in parte giustificato dal fatto che all'epoca le grandi aziende americane erano per lo più aziende tradizionali. Sì, c'erano anche Microsoft e Intel, ma non esisteva ancora una vera e propria web economy. 


{% include imagebox.html text="Basta con il web. Cercati un lavoro vero!" imgurl="/pics/posts/abstract-accounts-head-first/1.webp" %}

Dopo vent'anni, la situazione è completamente cambiata: le prime cinque aziende americane sono tutte digitali e operano nel web, ribaltando le proporzioni tra i due modi di fare industria. Nel 2018, [Krugman inizia a criticare le criptovalute e il mondo della blockchain](https://www.investopedia.com/news/what-paul-krugmans-problem-bitcoin/), dicendo che rappresentavano una regressione rispetto allo stato dell'arte dell'epoca. Anche qui, c'è stato un momento in cui un'industria è diventata tradizionale, quella del web digitale, ma il Web 3 è ancora qualcosa che non ha preso piede.






## Il Web3, affascinante idea ma ha anche dei difetti

Se volessimo individuare una sola proprietà che distingue in modo netto il web3 dal web più tradizionale potremmo dire che è il controllo. Il controllo dei dati, dei contenuti, degli asset e soprattutto della propria identità, non è più intermediato da un servizio terzo, ma in teoria sta nelle nostre mani e gestito dal nostro wallet attraverso le nostre chiavi.

Però le cose nella realtà non funzionano bene come ce le immaginiamo.

{% include imagebox.html text="Basta con il WEB3. Cercati un lavoro vero!" imgurl="/pics/posts/abstract-accounts-head-first/1.webp" %}

I critici del Web 3, in fondo, hanno qualche ragione. Spesso si chiedono: "Ma che problema risolvete? Siete più che altro soluzionisti con la tecnologia, ma in realtà non state dando un valore aggiunto." Inoltre, un problema sicuramente molto sentito è che accedere alle funzionalità del cosiddetto Web 3, utilizzando protocolli e piattaforme di finanza decentralizzata, comporta deviazioni che costituiscono una grossa barriera all'ingresso. 

### Il  primo accesso ad una qualsiasi app di finanza decentralizzata può diventare un'esperienza frustrante.

Per esempio, per arrivare sul nostro sito dApp preferito, dobbiamo scaricare e configurare un wallet, salvare 12 parole che sono un segreto crittografico per il recovery del wallet in qualsiasi momento. 

{% include imagebox.html text="Collegati alla dApp!" imgurl="/pics/posts/abstract-accounts-head-first/22.webp" %}

{% include imagebox.html text="Ti serve un wallet!" imgurl="/pics/posts/abstract-accounts-head-first/23.webp" %}

{% include imagebox.html text="Devi memorizzare e conservare le 12 parole in un luogo sicuro!" imgurl="/pics/posts/abstract-accounts-head-first/24.webp" %}


Una volta configurato il wallet, dobbiamo procurarci criptovaluta per pagare il cosiddetto gas, cioè per pagare le transazioni con la blockchain. 

{% include imagebox.html text="Ti serve l'ether per pagare il gas!" imgurl="/pics/posts/abstract-accounts-head-first/25.webp" %}

Questo significa cercare un exchange, fare il KYC (Know Your Customer) con l'exchange e quindi sottoporsi a misure di adeguata verifica della clientela. Insomma, è un processo complicato.

{% include imagebox.html text="Vai su un exchange, attento a non farti fregare!" imgurl="/pics/posts/abstract-accounts-head-first/26.webp" %}

{% include imagebox.html text="Adeguata verifica, KYC, AML, dobbiamo sapere se sei un terrorista malfattore. Inviaci tutti i tuoi dati personali" imgurl="/pics/posts/abstract-accounts-head-first/27.webp" %}


### Bisogna lavorare tanto sull'esperienza utente.

Prevedendo una serie di passaggi, vediamo che sono tanti e rappresentano sicuramente una grossa barriera d'ingresso per il neo utente che vuole utilizzare questi strumenti. Possiamo probabilmente affermare che non siamo ancora in una vera fase Web 3 aperta a tutti e facile da usare. 

{% include imagebox.html text="Non è che questo web3 mi stia piacendo tanto fin qui" imgurl="/pics/posts/abstract-accounts-head-first/3.webp" %}

Come utenti, abbiamo familiarità con una serie di strumenti e flussi, e ci aspettiamo di ritrovarli nel Web 3. Per esempio, se nel Web 3 perdiamo la chiave del nostro wallet, dovremmo fare in modo che il Web 3 sia il più semplice possibile da usare.

### Rendere l'utilizzo il più semplice possibile, ma non più semplice.

Non dobbiamo però cadere nella tentazione di rendere le applicazioni Web 3, quindi le applicazioni della blockchain, qualcosa di fortemente centralizzato e gestito, praticamente come un normalissimo cloud computing o Web 2. 

{% include imagebox.html text="Make things as simple as possible, but no simpler." imgurl="/pics/posts/abstract-accounts-head-first/2.webp" %}

Dobbiamo ridurre al minimo la complessità visibile agli utenti, ma questo non significa che dal lato implementativo le cose siano più semplici. Anzi, più cerchiamo di rendere la vita semplice all'utente, più dobbiamo mascherare una complessità che deve comunque mantenere un alto livello di sicurezza, privacy e anche un alto livello di decentralizzazione e di controllo che rimane nelle mani degli utenti, perché alla fine questa è la caratteristica del Web 3.

### Una congettura su facilità, sicurezza e auto-custodia.

L'idea o la congettura che [non possiamo avere contemporaneamente dei sistemi che siano sicuri, facili da usare e anche self-custodial](/articoli/transazioni-gasless-per-facilitare-lonboarding-degli-utenti-ethereum/), sotto il nostro controllo, è facilmente verificabile. Infatti, scegliere due a caso tra queste caratteristiche è facilmente realizzabile, ma metterle tutte e tre insieme potrebbe invece essere una sfida molto difficile da raccogliere. 

![conjecture web3](/featured_images/image-e1699635470183.png)

Se vogliamo fare un esempio, creare qualcosa di facile da usare e sicuro già esiste: questo è il cloud computing, il Web 2 che utilizziamo oggi. Tuttavia, avere qualcosa che sia self-custodial, quindi sotto il nostro controllo, insieme alle altre due caratteristiche, è più complesso. Questa è la sfida che vuole cogliere il nuovo protocollo di astrazione degli account. Prima di approfondire questa soluzione parliamo di accounts.

{% include imagebox.html text="Devi scegliere, non puoi avere tutto!" imgurl="/pics/posts/abstract-accounts-head-first/1.webp" %}


## Smart Contract Account Vs. External Owned Account

Per chi è abituato a utilizzare le applicazioni, le criptovalute e i wallet, è ben noto che esistono due tipi di account. Per esempio, nella rete Ethereum ci sono gli account posseduti dall'utente attraverso il controllo delle sue chiavi private (Externally Owned Accounts, o EOAs) e i contract account, ovvero gli smart contract della rete. Anche questi ultimi hanno un loro account nel senso che possono possedere fondi o asset.

![eoa vs contract account](/pics/posts/abstract-accounts-head-first/eoa-vs-sc.png)

La differenza tra i due è sostanziale. Entrambi hanno un indirizzo sulla blockchain ed entrambi possono possedere fondi, ma i primi sono controllati da chiavi private e non sono programmabili, poiché eseguono le azioni basate sulla volontà dell'utente che possiede le chiavi. Non hanno un controllo attivo, ma eseguono semplicemente delle transazioni. Mentre i primi sono attivi e possono prendere l'iniziativa, i secondi sono puramente reattivi e possono soltanto rispondere ed eseguire la logica per cui sono stati programmati.

Perdere le chiavi private o vederle compromesse è il problema principale per l'utente. Può nascere quindi l'idea: e se usassimo uno smart contract come nostro wallet? Questo è un primo passo importante e interessante, che in realtà si fa già spesso per chi è abituato a utilizzare sistemi più complessi. 

{% include imagebox.html text="E se usassimo gli smart contract come wallet?" imgurl="/pics/posts/abstract-accounts-head-first/2.webp" %}

## Gli smart contract come wallets? non sono poi una novità

Per esempio, in Ethereum esistono i contratti multi-sig, ovvero wallet condivisi fra 2, 3 o più partecipanti, con una logica complessa per cui i fondi possono essere spostati solo se c'è un voto di maggioranza (ad esempio, due su tre).

Questi contratti consentono di implementare logiche molto più flessibili del semplice wallet. Tuttavia, la perdita o lo smarrimento della chiave privata rimane un problema, così come una chiave compromessa perché copiata o filtrata da un hacker. 

{% include imagebox.html text="Non mi sembra questa grande idea. Comunque serve la tua chiave e devi fare delle transazioni, e poi devi avere il tanto per pagare il gas nel tuo wallet eoa" imgurl="/pics/posts/abstract-accounts-head-first/3.webp" %}

Resta comunque il fatto che bisogna pagare il gas direttamente, quindi avere il cosiddetto coin nativo, come Ether o Matic, per poter effettuare le transazioni sulla blockchain. Quindi, questa è una soluzione parziale.


## Introduciamo il primo elemento dell'Account Abstraction secondo il protocollo ERC-4337: il Bundler.

Potremmo chiedere a qualcuno, che nella [terminologia dell'Account Abstraction](https://www.erc4337.io/docs) si chiama Bundler, di raccogliere la richiesta, quindi il comando dell'utente off-chain, senza fare una transazione e senza usare il gas per pagare. Chiediamo a questo Bundler di raccogliere la richiesta dell'utente e trasformarla in una transazione sulla chain. 


Il flusso diventa un po' così: l'utente ha la sua chiave, con questa chiave firma un comando ma non paga il gas perché non sta facendo una vera e propria transazione on-chain. Metta la firma per autenticare la provenienza e l'autenticità di questa richiesta. 

{% include imagebox.html text="L'utente firma una richiesta, non proprio una transazione." imgurl="/pics/posts/abstract-accounts-head-first/12.webp" %}

Abbiamo poi il Bundler, che è un agente o qualcuno che si fa carico di questa richiesta, la imbusta insieme magari alle richieste di altri utenti e si occupa lui di fare una vera e propria transazione sulla blockchain, pagando il gas e comunicando con lo smart contract wallet associato al nostro utente. Questo wallet contiene i fondi e gli asset necessari per eseguire, per esempio, il trasferimento di un asset.

{% include imagebox.html text="Il bundler imbusta la richiesta in una vera transazione" imgurl="/pics/posts/abstract-accounts-head-first/15.webp" %}

Nasce subito la critica: va bene, è flessibile, ma perché il Bundler dovrebbe fare questa operazione? Non è un benefattore, quindi perché dovrebbe spendere lui il gas e i suoi Ether? 

{% include imagebox.html text="E perché il bundler dovrebbe farlo? Non è mica un benefattore" imgurl="/pics/posts/abstract-accounts-head-first/3.webp" %}

Si potrebbe suggerire che l'utente e il Bundler faccianno un accordo e l'utente paga, non so, mensilmente con la carta di credito. Tuttavia, stiamo introducendo un elemento di centralizzazione, perché se il Bundler poi sparisce, l'utente rimane senza servizio. Potrebbero esserci molti Bundler, ma l'utente dovrebbe assicurarsi di fare accordi con diversi Bundler, il che diventerebbe troppo complesso. Così non potrebbe funzionare.

## L'Entry Point, il cassiere dell'Account Abstraction.

Quindi viene inserito un ulteriore elemento che si chiama entry point. L'entry point ha una funzione più specifica: è un po' come un cassiere, come vedete anche dalle illustrazioni. L'entry point è uno smart contract, quindi è qualcosa di cibernetico rispetto all'utente e al Bundler, che invece sono esseri umani o agenti di tipo più tradizionale. Questi possono essere software o programmi, ma non sono smart contract.

{% include imagebox.html text="Io calcolo quanti ether servono per il gas, inoltro il comando al wallet e prendo il rimborso da mandare al bundler" imgurl="/pics/posts/abstract-accounts-head-first/16.webp" %}

In questo caso, abbiamo un flusso più complicato ma che può funzionare. L'utente paga e firma un comando, autenticandolo con la sua firma su una certa richiesta, per esempio di trasferire dei fondi. Il Bundler raccoglie questa richiesta, la inserisce in una transazione e anticipa il gas, pagando con i suoi Ether. Poi si aspetta di ricevere un rimborso, magari con degli interessi, perché sta svolgendo un servizio.



A questo punto, abbiamo l'entry point, un altro smart contract che calcola quanto gas deve essere pagato per svolgere quella determinata transazione e inoltra il comando vero e proprio al wallet. L'entry point trattiene la quantità di gas necessaria per rimborsare il Bundler.

Il flusso descritto può essere suddiviso in diversi step chiari e ben definiti. Ecco come si articola il processo:

1. **Inizializzazione dell'utente:**
   - L’utente decide di effettuare un'operazione, come il trasferimento di fondi.
   - Avvia l'operazione firmando un comando. La firma serve per autenticare la richiesta specifica.

2. **Intervento del Bundler:**
   - Il Bundler, una sorta di intermediario, raccoglie la richiesta firmata dall'utente.
   - Inserisce questa richiesta all'interno di una transazione sulla blockchain e anticipa il costo del gas necessario per eseguirla, pagando con i suoi Ether (ETH).

3. **Aspettativa di rimborso:**
   - Dopo aver anticipato il gas, il Bundler si aspetta un rimborso per il gas speso, possibilmente aggiungendo un interesse, poiché sta fornendo un servizio di facilitazione.

4. **Interazione con l'Entry Point:**
   - La transazione mette in azione un altro smart contract, definito come entry point.
   - Questo smart contract è unico nella rete, tecnicamente si dice **singleton** 

5. **Esecuzione e rimborso:**
   - L'entry point inoltra il comando al wallet per completare l'operazione.
   - Trattiene la quantità di gas che sarà usata per rimborsare il Bundler, assicurando che non ci siano perdite per l'intermediario.

Questo flusso assicura che tutte le parti coinvolte nella transazione, dall'utente al Bundler, siano correttamente compensate o rimborsate per i loro servizi e spese. In questo modo, si crea un sistema economico e funzionale che beneficia tutti gli attori coinvolti.



Quindi, abbiamo ottenuto un flusso decentralizzato, perché non abbiamo bisogno di prendere accordi specifici con un singolo Bundler. Possiamo immaginare che essi competano per raccogliere le richieste di molti utenti. Abbiamo un unico entry point, che è unico per ogni chain e rappresenta quello che si dice un Singleton.

In questo modo, l'utente non ha più bisogno di avere i coin per pagare il gas nel suo account, ma tutti i fondi sono semplicemente conservati nello smart contract wallet.


## L'Architettura di ERC-4337 per l'Account Abstraction

L'architettura che si viene a creare è un'architettura in cui possiamo avere N utenti, N Bundler, un unico entry point e una coda dove vengono messe le richieste dei vari utenti, che vengono via via raccolte dai Bundler disponibili a fornire il servizio. Infine, abbiamo gli smart wallet o smart account, ognuno mappato con un determinato utente. 

![erc-4337 architecture](/pics/posts/abstract-accounts-head-first/arch.png)

Una cosa che non abbiamo visto nella slide precedente è che l'entry point può calcolare quali sono le fee e il gas, trattenendolo direttamente dallo smart wallet. Tuttavia, questo presuppone che nello smart wallet ci siano, ad esempio, Ether per pagare il gas, cosa che non è sempre scontata. Possiamo immaginare che l'utente abbia lo smart wallet semplicemente per conservare degli asset, come degli NFT, e quindi non voglia avere Ether o altre criptovalute dentro quel wallet.

A questo scopo, nasce anche la figura del "Paymaster", che è un altro smart contract che si occupa di pagare il gas per conto dell'utente senza che l'utente tenga criptovalute nel suo smart wallet. A questo punto, abbiamo completato il cerchio, creando una struttura molto flessibile che si sovrappone alla struttura già esistente. Gli utenti creano delle richieste, che non sono transazioni, e queste richieste vengono poi trasformate in vere e proprie transazioni blockchain da altri operatori, disaccoppiando così la funzione dell'utente.

## Il Protocollo ERC-4337 può funzionare subito. No Hard Fork 

Una cosa interessante di questo protocollo, che si chiama ERC-4337 o, in modo equivalente, EIP-4337 (Ethereum Improvement Proposal), è che non richiede un hard fork. Questo significa che il protocollo di consenso di Ethereum, così com'è, non deve essere cambiato per far funzionare questo nuovo protocollo di account abstraction. Può funzionare direttamente con le caratteristiche che la blockchain ha già oggi, senza bisogno di modificare il protocollo di consenso di Ethereum. Questo è sicuramente un grande vantaggio. 

Questa è una slide un po' più tecnica, ma mostra esattamente gli stessi concetti della slide precedente.


## Adozione di ERC-4337

È una soluzione nata relativamente da poco, che comunque ha visto nell'ultimo anno un crescente tasso di adozione. Infatti, [questo grafico tratto dal sito di Dune](https://dune.com/niftytable/account-abstraction), che presenta sempre un gran numero di statistiche interessantissime sui protocolli del Web 3, ci mostra il numero di utenti, o meglio di smart account attivi, mese per mese negli ultimi 12 mesi circa. Una cosa interessante è che il grafico è disaggregato per le diverse chain. Come si può vedere molto facilmente, il colore che domina è quello di Polygon. Quindi, Polygon è la chain in cui si sta sperimentando e utilizzando maggiormente, o comunque il numero di smart account è preponderante.

![erc-4337 analytics](/pics/posts/abstract-accounts-head-first/dune0.png)

In realtà, se poi andiamo a vedere il volume economico e quindi la band economics, ovvero dove i Bundler ricevono un numero maggiore di transazioni, vediamo che Ethereum ha una disaggregazione diversa. Sì, c'è sempre Polygon, ma vediamo che c'è anche Ethereum e altre chain che hanno un buon volume, soprattutto i layer 2 di Ethereum. 

![erc-4337 analytics](/pics/posts/abstract-accounts-head-first/dune.png)

## ERC-4337 apre la strada a diverse forme di autenticazione

Il protocollo ERC-4337 per l'astrazione degli account, che rende molto più flessibile e permette ulteriori vantaggi per gli utenti. Non solo il vantaggio di non dover firmare vere e proprie transazioni on-chain e quindi di non dover avere gas a disposizione, ma anche la possibilità di utilizzare schemi di autenticazione più complessi, che sono più tradizionali nel mondo del Web 2 a cui siamo abituati.

Questo significa che possiamo sicuramente utilizzare la chiave privata, che magari come utenti Web 3 sappiamo già usare, ma possiamo anche utilizzare altre modalità di firma o di autenticazione, come le passkey, che stanno prendendo piede nei servizi web più in generale. Si apre quindi un mondo che permette di autenticare una richiesta che non è più una transazione on-chain, ma che alla fine sarà comunque autenticata dal nostro smart contract wallet.

{% include imagebox.html text="Posso autenticarmi con la solita chiave che uso nel wallet ethereum" imgurl="/pics/posts/abstract-accounts-head-first/12.webp" %}

{% include imagebox.html text="...oppure posso usare credenziali più classiche come username e password, con tanto di recovery..." imgurl="/pics/posts/abstract-accounts-head-first/17.webp" %}

{% include imagebox.html text="...o perfino posso autenticarmi con la biometria" imgurl="/pics/posts/abstract-accounts-head-first/18.webp" %}

Questo apre anche alla possibilità di recuperare l'accesso a un wallet, poiché possiamo avere quelli che sono chiamati social accounts. Possiamo immaginare di poter far ruotare le chiavi che utilizziamo per autenticare le nostre richieste, rendendo molto più flessibile tutto il flusso che oggi conosciamo per le applicazioni decentralizzate. Molti di questi protocolli di finanza decentralizzata stanno già migrando, cominciando a implementare e a fornire supporto agli abstract account.



## ERC-3074 come alternativa a ERC-4337:

ERC-4337 non è l'unica proposta in campo per l'astrazione degli account. In particolare, esiste un'altra proposta chiamata [ERC-3074](https://eips.ethereum.org/EIPS/eip-3074), che è sostanzialmente un'alternativa, ma richiede un hard fork. Cosa significa? Richiede che il protocollo di consenso di Ethereum venga modificato e che vengano inseriti nuovi opcode. 

Gli opcode sono istruzioni elementari eseguite dalla Ethereum Virtual Machine (EVM). Queste nuove istruzioni permetterebbero a uno smart contract, delegato dall'utente, di eseguire operazioni per conto dell'utente.

| AUTH | sets an authorized context variable based on an ECDSA signature, allowing a smart contract to temporarily assume the identity of an EOA |
| AUTHCALL | Similar to the existing CALL opcode, AUTHCALL enables a smart contract to make calls as if it were the authorized EOA |

**In un certo senso, se ERC-4337 mira trasformare uno smart contract in qualcosa che rimpiazzi il nostro account EOA, al contrario ERC-3074 cerca di trasformare il nostro account EOA in qualcosa di "programmabile" simile agli smart contract**

L'hard fork è già stato approvato, nel senso che queste istruzioni sono state votate e approvate dalla community.


## Conclusioni

[Tra ERC-4337 e ERC-3074Chi vincerà alla fine? Sembrano due alternative](/articoli/ethereums-wallet-evolution-comparing-eip-3074-and-erc-4337/), ma è più probabile che le vedremo lavorare insieme. Per il momento, quella che abbiamo è ERC-4337, che è già immediatamente utilizzabile. Esistono tutta una serie di presentazioni che lo illustrano, ma fare una fork non è del tutto positivo, soprattutto perché alcuni critici vedono il problema che i wallet maker possono richiedere subito autorizzazioni che poi non vengono mai revocate, dando così potere a chi già ne ha.

Questa è una critica che viene dibattuta nella community, e solo col tempo vedremo quale delle due soluzioni prenderà maggiormente piede e quale si rivelerà la più adatta a rispondere alle esigenze degli utenti. Probabilmente, ERC-4337 con la sua architettura a vari player garantisce una grande flessibilità, che non so se sarà eguagliata dalle implementazioni che utilizzeranno solo ERC-3074. Tuttavia, questo è tutto da verificare.


