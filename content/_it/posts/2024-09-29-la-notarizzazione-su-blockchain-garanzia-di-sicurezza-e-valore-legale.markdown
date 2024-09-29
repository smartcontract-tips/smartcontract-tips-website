---
title: "La Notarizzazione su Blockchain: Tecnica, Garanzia di Sicurezza e Valore Legale"
date: 2024-09-29
image: /pics/posts/2024-09-29-la-notarizzazione-su-blockchain-garanzia-di-sicurezza-e-valore-legale/cover.jpeg
tags: ["notarizzazione", "blockchain", "autenticità", "documento", "hash"]
excerpt: "La notarizzazione su Blockchain garantisce l'**immutabilità** e l'autenticità dei documenti, registrando un hash univoco che testimonia l'esistenza di un file a una certa data. Questa tecnologia offre un **valore legale** grazie alla sua trasparenza nella verifica, eliminando la necessità di intermediari e riducendo i costi di gestione."
category: survey
author: davide
layout: post
---


L'argomento di cui vogliamo parlare è la notarizzazione di documenti attraverso la tecnologia Blockchain. Questo processo consente di autenticare, certificare e garantire l'integrità di documenti digitali, sfruttando l'hashing per creare impronte digitali uniche che attestano l'immutabilità dei dati registrati. **La notarizzazione su Blockchain offre la prova di esistenza e autenticità di un documento in un determinato momento, rendendo impossibile qualsiasi successivo cambiamento senza che ciò venga rilevato.** 

![cover](/pics/posts/2024-09-29-la-notarizzazione-su-blockchain-garanzia-di-sicurezza-e-valore-legale/cover.jpeg)



Una Panoramica sull'argomento
---------

### La Notarizzazione su Blockchain: Funzionamento e Sicurezza

La notarizzazione su blockchain rappresenta una pratica innovativa per garantire l'autenticità e l'integrità dei documenti digitali. **Questo processo implica la creazione di un hash, un'impronta digitale unica** del documento, che viene registrata su una blockchain. In caso di qualsiasi modifica al documento, anche la più piccola, l'hash cambierebbe, segnalando così una modifica e attestando l’immodificabilità del contenuto nella data specifica della notarizzazione. Questa tecnologia si avvale di algoritmi crittografici per garantire la sicurezza dei dati e per registrare in modo permanente il timestamp, rendendo la registrazione immutabile nel tempo. Le aziende che offrono servizi di notarizzazione enfatizzano l'importanza di questa metodologia per prevenire frodi e garantire la verità della documentazione.

### Vantaggi e Sfide dell'Uso della Blockchain

Ci sono molteplici vantaggi legati all'adozione della notarizzazione su blockchain. **Tra i principali si trovano l'immutabilità e la trasparenza delle informazioni**, consentendo a chiunque di verificare la validità dei documenti senza la necessità di intermediari. Le leggi, come l'articolo 8-ter della legge n. 12/2019 in Italia, riconoscono il valore legale dei documenti notarizzati su blockchain, conferendo loro la stessa autonomia probatoria di un contratto notarile tradizionale. Tuttavia, sussistono anche delle sfide, principalmente riguardanti la conservazione dei documenti digitali e la garanzia della loro validità legale nel tempo, come indicato nelle normative AgID e CAD. La necessità di conservare il documento originale, che non è caricato sulla blockchain, pone interrogativi sulla sua accettazione legale a lungo termine.

### L'Impatto della Blockchain sul Settore Professionale

L'implementazione della tecnologia blockchain nel processo di notarizzazione potrebbe trasformare significativamente il ruolo dei notai e dei professionisti legali. **È evidente che la blockchain presenta una serie di vantaggi rispetto ai tradizionali metodi notarili**, come la velocità e la costante disponibile accessibilità ai documenti. Nonostante ciò, i notai potrebbero continuare a svolgere un ruolo importante nella validazione e nel riconoscimento legale di tali documenti, integrandosi con la tecnologia blockchain per offrire un servizio più completo. In un futuro prossimo, è prevedibile una coesistenza tra la tecnologia decentralizzata e la professione notarile, mentre si esplora il potenziale della blockchain per semplificare e rendere più efficienti i processi tradizionali.

Il processo di notarizzazione
-----------

Il processo di notarizzazione basato su blockchain segue i seguenti passaggi:

1. **Inizio:** Il processo inizia quando l'utente carica un documento sulla piattaforma sicura.

2. **Caricamento del documento:** L'utente invia il proprio documento alla piattaforma di notarizzazione.

3. **Generazione dell'hash:** La piattaforma genera un hash unico per il documento caricato. L'hash rappresenta una firma digitale univoca del documento.

4. **Registrazione dell'hash su una blockchain:** A questo punto, l'hash generato viene registrato su una delle blockchain supportate, come Bitcoin, Ethereum, EVM o Algorand. Ciascuna di queste blockchain è sicura e garantisce l'integrità del documento.

5. **Generazione della prova di notarizzazione:** Dopo la registrazione, la piattaforma genera un certificato di notarizzazione che prova l'autenticità e l'integrità del documento.

6. **Ricezione della prova da parte dell'utente:** L'utente riceve la prova di notarizzazione, che può essere utilizzata per dimostrare che il documento non è stato alterato e che è autenticato dalla blockchain.

7. **Condivisione del documento notarizzato:** L'utente può ora condividere il documento e la prova di notarizzazione con terze parti, sapendo che la blockchain garantisce la sicurezza e la trasparenza dell'intero processo.

8. **Fine:** Il processo si conclude con la condivisione del documento notarizzato.

![bpmn](/pics/posts/2024-09-29-la-notarizzazione-su-blockchain-garanzia-di-sicurezza-e-valore-legale/bpmn.png)

*Source: [Proof of Docs - Tomato Srl](https://tomatosrl.com/pod.html)*



Esempio: Implementazione su Ethereum
-----------

Notarizzare un documento utilizzando la rete Ethereum è un processo che sfrutta la tecnologia della blockchain per garantire l'integrità e l'autenticità del documento senza rivelarne il contenuto. Ecco un esempio pratico di come si potrebbe fare:


1. **Preparazione del documento:**
   Supponiamo che tu abbia un contratto di lavoro in formato PDF che desideri notarizzare.

2. **Generazione dell'hash del documento:**
   Utilizza un algoritmo di hash, come SHA-256, per generare un hash univoco del file PDF. Questo hash è una rappresentazione crittografica del contenuto del documento, quindi anche un piccolo cambiamento nel documento cambierebbe l'hash.

   Esempio:
   ```bash
   sha256sum contratto-lavoro.pdf
   ```

   L'output sarà un hash, ad esempio:
   ```
   3a9d0e8f15b8d7bfcf8d92b9b1dbef6b1e36f4587b1a8a4d6c2f8e84fb0bbf5e
   ```

3. **Creazione di una transazione su Ethereum:**
   Una volta ottenuto l'hash, la prossima fase è creare una transazione che includa l'hash sulla blockchain di Ethereum. Puoi farlo usando uno smart contract specifico per la notarizzazione o sfruttando piattaforme esistenti.

   Esempio di smart contract per notarizzazione:
   ```rust
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

   Puoi usare [**Remix**](https://remix.ethereum.org) o altre piattaforme per compilare e distribuire questo smart contract sulla rete Ethereum. Dopo la distribuzione, puoi interagire con esso per inviare l'hash del documento alla blockchain.

4. **Invio dell'hash alla blockchain:**
   Esegui la funzione `notarizeDocument` dello smart contract, passando l'hash del documento come parametro. Questa azione memorizzerà l'hash del tuo documento sulla blockchain di Ethereum in modo immutabile.

   Esempio:
   ```rust
   notarizeDocument("0x3a9d0e8f15b8d7bfcf8d92b9b1dbef6b1e36f4587b1a8a4d6c2f8e84fb0bbf5e")
   ```

5. **Ricezione della conferma di notarizzazione:**
   Una volta completata la transazione, l'hash del documento sarà immutabilmente memorizzato sulla rete Ethereum. Puoi verificare che il documento è stato notarizzato recuperando la transazione dalla blockchain o richiamando la funzione `verifyDocument` dello smart contract.

6. **Prova di notarizzazione:**
   La prova di notarizzazione può essere la transazione registrata sulla blockchain. Puoi fornire il numero della transazione o l'indirizzo dello smart contract alle parti interessate, dimostrando che il documento è stato notarizzato in una data specifica.

   Chiunque può usare l'indirizzo dello smart contract e l'hash del documento per verificare che la notarizzazione è avvenuta sulla blockchain di Ethereum ad una **data certa** e senza modifica del contenuto.


### Gas e Svantaggio nella notarizzazione di un documento per volta


Uno degli svantaggi principali della notarizzazione su Ethereum di un solo documento per ogni transazione è il **costo del gas**. Ogni volta che si esegue una transazione, come la registrazione di un hash sulla blockchain, è necessario pagare una commissione in **ether (ETH)** per coprire i costi di elaborazione della rete. Questo costo del gas può variare a seconda della congestione della rete Ethereum.

### Svantaggi del gas fee:
- **Costi variabili e imprevedibili:** Il costo del gas non è fisso e può aumentare in periodi di elevata attività sulla rete. Questo significa che il costo di notarizzare un documento può essere relativamente basso in momenti di bassa congestione, ma può diventare molto alto durante picchi di utilizzo della rete.
  
- **Non adatto a grandi volumi di documenti:** Se hai bisogno di notarizzare molti documenti, il costo del gas per ciascuno può sommarsi rapidamente, rendendo il processo economicamente inefficiente per casi d'uso con volumi elevati di notarizzazioni.

- **Competizione per l'inclusione nelle transazioni:** Poiché il gas è utilizzato per dare priorità alle transazioni, potrebbe esserci un ritardo nell'inclusione della tua transazione sulla blockchain se non paghi una tariffa competitiva, con conseguente potenziale ritardo nel processo di notarizzazione.


### Implementazioni efficienti con Merkle Tree

L'uso di un **Merkle Tree** per notarizzare più documenti in un singolo batch è una soluzione efficace per ridurre i costi del gas su Ethereum o su Bitcoin.

Invece di inviare una transazione per ogni documento, si può combinare l'hash di più documenti in una struttura ad albero di Merkle e notarizzare solo la radice di questo albero in un'unica transazione. Ecco come funziona:

![merkle tree](/pics/posts/2024-09-29-la-notarizzazione-su-blockchain-garanzia-di-sicurezza-e-valore-legale/merkle.png)

#### 1. **Generazione degli hash dei documenti:**
   Ogni documento viene processato con un algoritmo di hash (come SHA-256) per ottenere un hash univoco. Supponiamo di avere N documenti.

   Esempio con 4 documenti in un solo batch:

   ```rust
   Documento L1 hash: H00 = sha256(document1.pdf)
   Documento L2 hash: H01 = sha256(document2.pdf)
   ...
   Documento L4 hash: H11 = sha256(document4.pdf)
   ```

#### 2. **Costruzione del Merkle Tree:**
   I vari hash dei documenti vengono poi combinati in coppie per formare l’albero di Merkle. Ogni nodo genitore è un hash dei suoi due nodi figli concatenati. Questo processo continua fino a quando non si arriva a un unico hash, chiamato **Merkle Root**.

   Esempio:
   - Il livello inferiore dell'albero è composto da H00, H01, H10, H11
   - Questi hash vengono concatenati a coppie e poi re-hashati per formare il livello successivo.
   - Continuiamo a formare nuovi livelli fino ad arrivare a un'unica radice.

   ```rust
   H0 = sha256(H00 + H01)
   H1 = sha256(H10 + H11)
   ...
   Merkle Root = sha256(H0 + H1)
   ```

#### 3. **Notarizzazione della Merkle Root su Ethereum:**
   Ora che hai la **Merkle Root**, puoi inviare una singola transazione su Ethereum per registrarne l’hash sulla blockchain. Questo riduce il numero di transazioni a una sola, indipendentemente da quanti documenti hai.

   Esempio:
   ```bash
   notarizeDocument(sha256(Merkle Root))
   ```

   In questo modo, la radice del Merkle Tree viene registrata sulla blockchain, rappresentando indirettamente tutti i documenti inclusi nel batch.

#### 4. **Verifica di un singolo documento:**
   Se qualcuno vuole verificare che un singolo documento è stato notarizzato, può fornire:
   - L’hash del documento.
   - La **Merkle proof**, cioè un insieme di hash intermedi necessari per ricostruire la Merkle Root partendo dal documento specifico.

   Questo processo consente a chiunque di verificare, utilizzando la Merkle Root registrata sulla blockchain, che un documento specifico fa parte del batch notarizzato.

   Esempio di verifica:
   - Supponiamo che tu voglia verificare il **documento L1**. Calcoli l'hash di **H00** e poi usi la Merkle proof (cioè l'hash di **H01** e l'hash intermedio **H1**) per ricalcolare la Merkle Root.
   - Se la radice ricalcolata coincide con quella registrata sulla blockchain, la validità del documento è confermata.

#### 5. **Vantaggi:**
   - **Risparmio sul gas:** Notarizzando solo la Merkle Root anziché gli hash di ogni singolo documento, si riduce drasticamente il numero di transazioni e quindi i costi del gas.
   - **Scalabilità:** Puoi notarizzare migliaia o milioni di documenti in una sola transazione, migliorando la scalabilità del sistema.
   - **Sicurezza e trasparenza:** Il Merkle Tree garantisce che ogni documento sia rappresentato in modo univoco, e il processo di verifica è trasparente e sicuro.

#### 6. **Svantaggi:**
   - **Complessità aggiuntiva:** Richiede la gestione del Merkle Tree e la generazione delle prove di inclusione (Merkle proofs) per verificare la notarizzazione di un singolo documento.
   - **Verifica manuale:** La verifica richiede la Merkle proof, che deve essere conservata dall'utente o fornita in fase di verifica.



Con questo approccio, puoi notarizzare N documenti con una singola transazione, riducendo notevolmente i costi e migliorando l'efficienza del sistema.

Inoltre, ed è una cosa molto importante, consente di utilizzare blockchain con fee di transazione alte che in genere significa **blockchain più sicure come ad esempio Bitcoin. Infatti questo approccio è immediatamente utilizzabile anche su Bitcoin grazie al fatto che in una transazione è possibile inserire un dato fino ad un limite di 80 byte, sufficiente a contenere il Merkle root**.



Conclusioni
-----------
La notarizzazione su Blockchain rappresenta una soluzione innovativa per garantire l’**immutabilità e l’integrità dei documenti**, offrendo così un'elevata sicurezza e trasparenza. L'uso dell’hashing permette di creare un riferimento unico per ogni documento, rendendolo **prova di esistenza** in un determinato momento. Inoltre, con l'adeguata conservazione e gestione dei documenti digitali, la tecnologia Blockchain può fornire un **valore legale riconosciuto** in vari contesti giuridici, rappresentando un passo significativo verso la digitalizzazione dei processi notarili.


Domande e risposte
-----------

### Vantaggi della notarizzazione in blockchain
La notarizzazione in blockchain offre diversi vantaggi significativi. **Assicura l'immutabilità e la trasparenza dei dati**, garantendo che ogni documento registrato non possa essere alterato. Inoltre, elimina la necessità di intermediari, riducendo costi e tempi di gestione. Grazie alla sua struttura decentralizzata, la blockchain fornisce un elevato livello di sicurezza, prevenendo manipolazioni e garantendo la tracciabilità delle informazioni.

### Valore legale della notarizzazione in blockchain
La notarizzazione in blockchain ha un valore legale crescente. **Il documento informatico soddisfa il requisito della forma scritta**, garantendo che, in presenza di una firma elettronica digitale, il documento risulti immodificabile e legalmente riconosciuto. Alcuni paesi, come gli Stati Uniti, già riconoscono la notarizzazione blockchain come valida ai fini legali.

### Riferimenti di legge per la notarizzazione in blockchain
In Italia, i riferimenti legali per la notarizzazione in blockchain sono contenuti nel **Decreto Legge 135/2018**, convertito in legge il 7 febbraio 2019, che all'articolo 8-ter stabilisce che la memorizzazione di un dato in blockchain produce gli effetti giuridici della validazione temporale elettronica. Inoltre, regolamenti europei come l'**eIDAS** supportano la valenza giuridica dei documenti notarizzati in formato elettronico.

**Links**


- [Proof of Docs - Tomato Srl](https://tomatosrl.com/pod.html)
- [Notarizzazione - Blockchain Italia](https://www.blockchainitalia.io/it/notarizzazione/)
- [La verifica dei dati destinati alla notarizzazione in Blockchain - RINA Italy](https://www.rina.org/it/blockchain-registration)
- [AlmavivA - Notarizzazione documenti su Blockchain - Giotto onchain](https://notarizzazione.almaviva.it/)