---
layout: post
title: "ERC-404: Lo standard ibrido per i token semi-fungibili"
date: 2024-02-16 
type: post

#usemathjax: true

categories:
- DeFi
- In-Depth

tags: [NFT, Tokens, ERC-404, ERC]
---
Il post introduce ERC-404, uno standard di token sperimentale su Ethereum che unisce le caratteristiche dei token fungibili e non fungibili in "semi-fungibili". Questa innovazione apre nuove possibilità in vari settori come l'arte, l'immobiliare e il gaming, facilitando la proprietà frazionata e migliorando la liquidità degli NFT. Viene discusso il potenziale di ERC-404 attraverso esempi come Pandora e DeFrogs, evidenziando le opportunità e le sfide, tra cui questioni tecniche, di sicurezza e regolamentari. Il testo sottolinea l'importanza della collaborazione comunitaria per superare queste sfide e realizzare il potenziale degli token semi-fungibili.

![cover](/assets/images/erc-404-cover.png)

## Cosa significa "Hybrid Token Standard": Fungibile e Infungibile allo stesso tempo?

Un "hybrid token standard" (standard di token ibrido) si riferisce a un formato di token digitale su una blockchain che combina le caratteristiche di due o più tipi diversi di token, tipicamente token fungibili e non fungibili (NFT). In altre parole, è uno standard di tokenizzazione che integra le funzionalità e i benefici sia dei token fungibili, come le criptovalute (per esempio, Ether su Ethereum), che possono essere scambiati uno per uno in modo indistinguibile, sia dei token non fungibili, che rappresentano beni unici e collezionabili digitali con proprietà distintive.

Questo approccio ibrido permette di creare token che possono funzionare in più modi, adattandosi a una varietà di casi d'uso e di applicazioni all'interno dell'ecosistema blockchain. Per esempio, un token ibrido potrebbe agire come una valuta all'interno di una piattaforma, ma allo stesso tempo rappresentare la proprietà di un oggetto virtuale unico, come un'opera d'arte digitale, un elemento di gioco o una quota in un bene immobiliare.

Gli standard di token ibridi mirano a sfruttare i vantaggi di entrambi i mondi: la liquidità e la fungibilità dei token fungibili con l'unicità e la rarità dei NFT, aprendo nuove possibilità per la tokenizzazione di asset e la creazione di nuovi modelli economici e finanziari nel mondo digitale.

## Quali casi d'uso per ERC-404?

### 1. **Arte Digitale e Collezionismo**
Gli standard di token ibridi possono rivoluzionare il mondo dell'arte digitale e del collezionismo permettendo agli artisti di emettere opere come token non fungibili (NFT) per garantirne l'unicità e la provenienza, integrando al contempo funzionalità fungibili che consentono la frazionabilità dell'opera. Ciò significa che un'opera d'arte digitale unica può essere di proprietà collettiva di più persone, ognuna delle quali possiede una "quota" dell'opera sotto forma di token fungibili. Questo approccio abbassa la barriera economica all'acquisto di arte, democratizzando l'accesso e potenzialmente ampliando il mercato per gli artisti.

### 2. **Videogiochi e Metaverso**
Nel settore dei videogiochi e del metaverso, gli standard di token ibridi possono essere utilizzati per rappresentare asset di gioco, come armature, terreni o edifici virtuali, che hanno sia caratteristiche uniche (NFT) sia elementi fungibili. Ad esempio, un pezzo di terra in un mondo virtuale può essere suddiviso in parcelle più piccole, ognuna delle quali rappresentata da token fungibili che conferiscono ai proprietari diritti di uso o di costruzione. Questo modello facilita la compravendita e lo scambio di asset di gioco, migliorando la liquidità e l'interoperabilità all'interno di ecosistemi virtuali complessi.

### 3. **Finanza Decentralizzata (DeFi) e Proprietà Immobiliare**
Gli standard di token ibridi trovano applicazione anche nella finanza decentralizzata (DeFi) e nella tokenizzazione della proprietà immobiliare. Per esempio, un immobile reale può essere tokenizzato in modo che la proprietà dell'edificio sia rappresentata da un NFT unico, mentre le quote di proprietà siano suddivise in token fungibili. Questo consente agli investitori di acquistare frazioni di immobili, rendendo l'investimento immobiliare accessibile a un pubblico più ampio e facilitando la liquidità attraverso la possibilità di scambiare le quote sul mercato. Inoltre, gli standard ibridi possono permettere lo sviluppo di nuovi prodotti finanziari DeFi, come prestiti garantiti da frazioni di asset reali.


## ERC-404 è uno standard sicuro?

L'adozione di standard di token ibridi, nonostante offra numerose opportunità innovative, presenta anche specifici rischi e sfide che devono essere attentamente considerati:

### 1. **Complessità Tecnica e Sicurezza**
La complessità intrinseca degli standard di token ibridi può aumentare il rischio di vulnerabilità di sicurezza. La programmazione e la gestione di smart contract che supportano funzionalità sia fungibili che non fungibili richiedono una conoscenza approfondita e una progettazione attenta per evitare bug o lacune che potrebbero essere sfruttate da attaccanti, mettendo a rischio gli asset degli utenti.

### 2. **Interoperabilità**
Gli standard ibridi potrebbero affrontare sfide di interoperabilità con le piattaforme e gli ecosistemi esistenti. La compatibilità tra diversi standard e protocolli è fondamentale per garantire scambi fluidi e l'accesso ai servizi, ma la natura unica degli standard ibridi potrebbe richiedere aggiornamenti significativi o addirittura nuove infrastrutture per essere pienamente integrata.

### 3. **Liquidità**
Mentre uno degli obiettivi degli standard ibridi è migliorare la liquidità, soprattutto per gli asset tipicamente considerati non fungibili, l'effettivo raggiungimento di questo obiettivo dipende dalla domanda del mercato. La frazionabilità degli NFT e la creazione di mercati per i token fungibili associati potrebbero non tradursi automaticamente in liquidità elevata senza una domanda adeguata.

### 4. **Questioni Legali e Regolamentari**
La regolamentazione delle criptovalute e degli NFT è ancora in fase di sviluppo in molte giurisdizioni. Gli standard di token ibridi potrebbero introdurre ulteriori complessità legali, soprattutto in termini di definizione della proprietà, diritti e responsabilità degli investitori. Le incertezze regolamentari possono rappresentare un rischio per gli sviluppatori e gli utenti di tali token.

### 5. **Valutazione e Stabilità del Prezzo**
La valutazione degli asset rappresentati da token ibridi può essere complessa, dato che combinano elementi fungibili e non fungibili. La determinazione del valore di tali asset, e quindi la stabilità del loro prezzo, potrebbe essere influenzata da fattori volatili e da speculazioni di mercato, aumentando il rischio per gli investitori.

### 6. **Adozione e Accettazione**
L'adozione diffusa degli standard di token ibridi dipende dall'accettazione da parte della comunità di utenti e sviluppatori. Senza un sostegno significativo e l'adozione di tali standard da parte di piattaforme e applicazioni esistenti, la loro utilità e il potenziale innovativo potrebbero essere limitati.

## ERC 404, dubbi sul processo di standardizzazione

Al momento (Febbraio 2024), non esiste uno standard ERC-404 ufficialmente riconosciuto o documentato nell'ambito degli Ethereum Improvement Proposals (EIPs). Gli EIPs sono proposte formali attraverso le quali gli sviluppatori possono suggerire miglioramenti o nuove funzionalità per l'ecosistema Ethereum, incluse le specifiche per nuovi standard di token come ERC-20 per token fungibili o ERC-721 per token non fungibili (NFT).

La procedura standard per proporre e testare nuovi standard ERC (Ethereum Request for Comments) include vari passaggi:

1. **Creazione di una Proposta:** Lo sviluppatore o il team di sviluppatori redige un EIP seguendo un template specifico che descrive dettagliatamente la proposta, le specifiche tecniche, i casi d'uso e la motivazione dietro l'innovazione.

2. **Discussione e Feedback:** Una volta pubblicata, la proposta viene discussa dalla comunità di Ethereum. Questo processo di feedback può avvenire su varie piattaforme, come forum di Ethereum, GitHub, o incontri di sviluppatori. Lo scopo è raccogliere feedback, identificare potenziali problemi e perfezionare la proposta.

3. **Revisione:** Le proposte che ricevono un supporto significativo e superano le fasi iniziali di discussione vengono revisionate da un comitato di editor degli EIP. Questi editor valutano la proposta per assicurarsi che sia ben formata, che rispetti le linee guida e che porti un contributo significativo all'ecosistema.

4. **Implementazione e Test:** Prima che un EIP possa essere accettato come standard, deve essere implementato e testato. Questo spesso significa scrivere il codice effettivo che esegue le funzionalità proposte e dimostrare che funziona come previsto senza causare problemi di compatibilità o sicurezza.

5. **Accettazione:** Se l'EIP supera tutte queste fasi, può essere accettato come uno standard ufficiale per Ethereum. Questo non significa che verrà adottato universalmente o implementato da tutti gli sviluppatori, ma diventa una parte riconosciuta dell'ecosistema Ethereum con il sostegno della comunità.

Questo lascia concludere che "ERC-404" sia uno standard sperimentale, potrebbe trattarsi di una proposta in fase preliminare di sviluppo o discussione, o potrebbe essere un concetto ipotetico utilizzato per esplorare nuove idee. **Il fatto che non esista una discussione nei canali ufficiali con un continuo review del protocollo mette un grosso punto interrogativo su questo standard**