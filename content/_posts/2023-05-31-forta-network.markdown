---
layout: post
title: Forta Network, cos’è e come funziona?
date: 2023-05-31 14:26:36.000000000 +02:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
category: In-Depth
tags: []
permalink: "/articoli/forta-network/"
excerpt: Nel panorama in continua evoluzione della tecnologia blockchain, la sicurezza
  rimane una preoccupazione fondamentale. Forta Network, una piattaforma pionieristica,
  è emersa come una solida soluzione per affrontare le vulnerabilità e le minacce
  affrontate dalle aziende blockchain. Fondata da imprenditori visionari, Forta Network
  combina tecnologie avanzate e partecipazione incentivata per migliorare la sicurezza
  e l'integrità delle reti blockchain.
image: /featured_images/upload_996e77415aab480f8283f8b51e2eccec.png
author: alessandro
---
Forta Network, cos'è e come funziona?
=====================================

![forta network cosa è? ch l'ha fondato? come funziona?](/assets/2023/05/upload_996e77415aab480f8283f8b51e2eccec.png)Introduzione:

Nel panorama in continua evoluzione della tecnologia blockchain, la sicurezza rimane una preoccupazione fondamentale. Forta Network, una piattaforma pionieristica, è emersa come una solida soluzione per affrontare le vulnerabilità e le minacce ai protocolli di finanza decentralizzata.Fondata da imprenditori visionari, Forta Network combina tecnologie avanzate ed un'economia di incentivi per migliorare la sicurezza e l'integrità delle reti.In questo articolo, ci addentriamo nell'affascinante mondo di Forta Network, esplorandone le origini, le funzionalità e gli incentivi che offre a sviluppatori e partecipanti.

Cos'è Forta Network?
--------------------

Forta Network rivoluziona la sicurezza e il monitoraggio della blockchain offrendo un sistema decentralizzato in tempo reale. Il suo scopo principale è rilevare e affrontare minacce e anomalie su vari sistemi Web3, tra cui DeFi, NFT, governance e bridge cross-chain. Forta Network, fornendo tempestivamente preziose informazioni sulla sicurezza e la stabilità del sistema, consente agli sviluppatori dei contratti ed ai loro utenti di intraprendere azioni difensive e correttive immediate, riducendo al minimo le potenziali perdite.

Una delle caratteristiche chiave di Forta Network è il suo modello di incentivazione decentralizzato. Introduce il token $FORT per attrarre fornitori di nodi e sviluppatori di bot di rilevamento. I loro contributi svolgono un ruolo cruciale nella costruzione di un sistema di monitoraggio ampio e di facile utilizzo che opera in tempo reale. Utilizzando i modelli di bot di rilevamento forniti, gli sviluppatori degli smart contract possono monitorare facilmente le anomalie senza la necessità di scrivere codice. In alternativa, possono sfruttare Forta SDK per creare bot di rilevamento personalizzati a scopo di monitoraggio. Forta Network supporta anche i webhook di notifica, consentendo agli sviluppatori di automatizzare le misure di difesa dalle anomalie.

Forta Network si distingue per il suo approccio di monitoraggio modulare, standardizzato. Gli sviluppatori degli smart contract sono sollevati dall'onere di creare un sistema di monitoraggio autonomo, consentendo loro di concentrarsi sull'implementazione di solide misure di difesa. Questa enfasi sulla sicurezza contribuisce a creare un ecosistema Web3 più sicuro, salvaguardando le risorse di numerosi utenti.

Al momento, Forta Network monitora attivamente più blockchain, tra cui Ethereum, Avalanche e Polygon. Inoltre, collabora con importanti Dapp come Lido, Compound, MakerDAO, dYdX e Balancer per proteggere le risorse delle rispettive basi di utenti.

Chi ha fondato Forta Network?
-----------------------------

![forta network fondatori investitori coinbase kucoin web3 sicurezza](/assets/2023/05/forta+graph.png)

Forta Network è stato sviluppato da una costola di OpenZeppelin. Dai suoi repository GitHub principali, forta-core-go e forta-node, possiamo vedere che la maggior parte dei commit proviene da membri di OpenZeppelin o precedenti contributori di OpenZeppelin. Un'informazione pubblicamente disponibile è che il CTO di OpenZeppelin, Jonathan Alexander, è un co-fondatore di Forta.

Come funziona Forta Network?
----------------------------

Forta Network opera attraverso l'utilizzo di due moduli e tre ruoli distinti. Per comprendere il funzionamento della rete, è essenziale familiarizzare con questi moduli e ruoli.

I due moduli in Forta Network sono rispettivamente il bot di rilevamento e i nodi di scansione:

![](/assets/2023/05/forta+diagrams.png)

-   **Bot di rilevamento**

I bot di rilevamento svolgono un ruolo fondamentale in Forta Network, funzionando come script logici progettati per analizzare specifiche caratteristiche delle transazioni o monitorare i cambiamenti di stato all'interno di contratti intelligenti supportati su varie reti blockchain. Per semplificare il loro scopo, i robot di rilevamento fungono da telecamere di sicurezza che sovrintendono alle attività sulla chain. Gli sviluppatori hanno la possibilità di programmare questi bot con condizioni predefinite, consentendo loro di monitorare contenuti specifici come modifiche nella governance del contratto, aggiornamenti alle configurazioni contrattuali essenziali, operazioni anomale durante una chiamata API a un contratto e altro ancora.

Inoltre, i bot di rilevamento possono anche essere impiegati per tenere traccia di specifici stati blockchain, come le fluttuazioni dei prezzi dei token dagli oracoli, volumi di transazioni insoliti di un token o diminuzioni o aumenti significativi dei saldi dei conti a livello di rete.

Gli sviluppatori possono sfruttare i modelli di machine learning per prevedere e mitigare in modo proattivo potenziali comportamenti di attacco. In particolare, Forta Network facilita già la creazione di robot di rilevamento senza la necessità di codifica, consentendo agli utenti di stabilire condizioni di monitoraggio per la maggior parte dei contratti intelligenti senza sforzo.

-   **Nodi di scansione**

Queste entità sono responsabili della scansione dei dati delle transazioni di ogni blocco all'interno di una blockchain specifica. Possono essere paragonati a operatori di bot di rilevamento che recuperano dati da una blockchain mirata. Ogni volta che i bot di rilevamento all'interno di un nodo di scansione identificano schemi o eventi specifici che soddisfano determinate condizioni, trasmetteranno avvisi alla rete. Questi avvisi vengono quindi archiviati in IPFS (InterPlanetary File System) e chiunque può abbonarsi utilizzando Forta Explorer o API.

**I ruoli dei vari attori della Forta network**
-----------------------------------------------

La rete Forta è composta da tre ruoli principali: alert subscriber, bot developer e fornitori dei nodi di scansione.

-   **Alert subscriber**

Forta consente a chiunque di monitorare le attività di transazione e ricevere avvisi relativi a eventi di sicurezza, finanza, operazioni e governance su una blockchain specifica. I bot di rilevamento pubblico sulla rete Forta sono in genere open source, consentendo a chiunque di iscriversi a questi bot e ricevere avvisi. Gli abbonati possono scegliere di ricevere avvisi tramite vari canali come e-mail, Slack, Discord, Telegram o webhook personalizzati.

Possono anche utilizzare webhook personalizzati per azioni di difesa automatizzate quando viene attivato un avviso, contribuendo a mitigare potenziali perdite. Per gli abbonati che desiderano mantenere nascoste le proprie strategie di bot da potenziali aggressori che potrebbero sfruttare le loro misure di autodifesa, possono creare una rete privata per ospitare i propri bot. Le reti private operano indipendentemente dalla mainnet Forta e non sono coinvolte nell'allocazione dei bot di rilevamento pubblici.

-   **Sviluppatori dei bot di rilevamento:**

Gli sviluppatori hanno la possibilità di programmare bot di rilevamento sulla rete Forta puntando una certa quantità di $FORT per pubblicarli. Nelle prime fasi, lo sviluppo di bot di rilevamento pubblico di base è stato incentivato dai premi della Fondazione Forta. Man mano che la raccolta di modelli di bot di base della rete diventava più completa, gli sviluppatori hanno iniziato a pubblicare bot con requisiti di rilevamento specifici da protocolli, DAO o organizzazioni. Per prevenire l'utilizzo dannoso, come la creazione di bot per lo spamming o l'abuso delle risorse di rete, gli sviluppatori sono tenuti a mettere in gioco un minimo di 100 $FORT quando avviano un bot di rilevamento.

-   **Fornitori di nodi di scansione:**

I fornitori di nodi di scansione offrono nodi di scansione che eseguono script di bot di rilevamento per scansionare i dati di ciascun blocco. Per garantire la stabilità del nodo e il corretto funzionamento dei bot di rilevamento, i fornitori di nodi sono attualmente tenuti a puntare un minimo di 500 $ FORT per ciascun nodo. Tuttavia, a causa di un eccesso di offerta di nodi nella rete, la Fondazione Forta ha approvato una proposta per aumentare la quota per ciascun nodo a un minimo di 2.500 $ FORT a partire dal 30 settembre 2022. Inoltre, la fondazione ha proposto di includere il numero di bot di rilevamento in esecuzione su ciascun nodo come metrica per l'allocazione della ricompensa del nodo per migliorare l'utilizzo della rete.

Dal suo lancio nel settembre 2021, la comunità Forta ha implementato oltre 650 bot di rilevamento e 2.000 nodi di scansione sulla rete, garantendo la scansione continua di Dapp su sette blockchain Layer1 e Layer2. Ad agosto 2022, la rete ha registrato una crescita significativa con oltre 1.200 bot di rilevamento e 9.000 nodi di scansione, segnando un'espansione impressionante.

Meccanismi per l'operazione e l'economia dei token
--------------------------------------------------

![forta network Meccanismi per l'operazione e l'economia dei token](/assets/2023/05/forta+mechanisms.png)

Approfondiremo il flusso di lavoro completo e la tokenomics di Forta dal punto di vista di un bot di rilevamento:

1.  Prima che un bot di rilevamento venga pubblicato, la rete Forta avrebbe una serie di nodi di scansione preesistenti, che eseguiranno i bot pubblicati. La creazione di uno scan node richiede uno stake di almeno 500 $ FORT (la soglia dello stake verrà aumentata a 2.500 $ FORT dopo il 30 settembre 2022).

2.  Gli sviluppatori di bot metteranno in gioco 100 $ FORT per pubblicare un nuovo bot di rilevamento, che verrà impacchettato come mirror docker e inviato a uno o più nodi validi nella rete. La qualità di un nodo è misurata dal suo punteggio SLA. Normalmente, un nodo con un punteggio superiore a 0,9 può essere considerato un buon nodo. Lo SLA è un minimo tra il Resource Score e una media ponderata del Data Quality Score e del Uptime Score.

3.  Il bot di rilevamento controllerà i dati su ciascun blocco della catena registrato da uno scan node. Quando una strategia del bot corrisponde ai dati sul blocco, invierà un avviso a un server Forta Network tramite Graphql.

4.  Dopo aver ricevuto l'avviso, il server di rete Forta lo memorizzerà in IPFS, quindi invierà notifiche agli abbonati tramite i loro canali preimpostati (e-mail, bot Telegram, webhook, ecc.).

5.  Forta Network emetterà 400.000 $ FORT a settimana per premiare i nodi di scansione qualificati. Questa è anche la principale fonte di produzione del token.

6.  Oltre ai nodi di scansione e allo staking dei bot di rilevamento, i token $ FORT possono essere utilizzati come voti nella governance del progetto per decidere il suo percorso futuro.

**Ecco l'attuale distribuzione dei token $FORT (2022 SEP):**

![](/assets/2023/05/forta+pie.png)

Esistono due flussi di distribuzione del token: **community e contributore iniziale.**

-   **Dotazione comunitaria:**

si riferisce all'allocazione dei token detenuti dalla Fondazione Forta, che comprende ricompense durante la fase di fortificazione, lanci aerei e ricompense future. In generale, i token dell'allocazione della comunità non sono soggetti a lock-up o restrizioni di trasferimento. Tuttavia, per garantire l'allineamento con gli interessi a lungo termine della comunità, alcuni destinatari dell'assegnazione della comunità possono concordare restrizioni specifiche.

Ad esempio, circa il 2,2% dei token assegnati è soggetto a restrizioni che vanno dai 2 ai 4 anni. Queste restrizioni mirano a mantenere l'equità e salvaguardare i migliori interessi della comunità. È importante notare che l'assegnazione della comunità è separata dai primi contributori, il che significa che i primi contributori non sono idonei a partecipare all'assegnazione della comunità. Questa demarcazione garantisce una chiara distinzione e un'equa distribuzione all'interno dell'ecosistema Forta.

![](/assets/2023/05/forta+grap+h2.png)

-   **I primi contributori alla rete Forta:**

    sono costituiti da tre gruppi principali: sostenitori, contributori principali iniziali e OpenZeppelin. I sostenitori sono membri della comunità che hanno fornito supporto iniziale in vari aspetti come finanziamenti, sviluppo della rete e contributi ai nodi. I contributori principali iniziali sono i primi sviluppatori della rete Forta di OpenZeppelin. A queste persone è stato assegnato un totale del 20% della fornitura di token.

    Nel loro ruolo di incubatore della rete Forta, OpenZeppelin ha ottenuto il 10% della fornitura di token. Tutti i primi contributori, inclusi i sostenitori, i contributori principali iniziali e OpenZeppelin, sono soggetti a un periodo di maturazione lineare di 4 anni, che include un cliff di 1 anno. Il periodo di vesting è iniziato il 1 settembre 2021 e proseguirà fino al 1 settembre 2025. Una volta completato questo periodo, tutti i token assegnati ai primi contributori saranno completamente sbloccati.

    Conclusione:
    ------------

    Il tema della sicurezza Web3 ha raccolto un'attenzione significativa nel corso degli anni. Gli utenti sono sempre più preoccupati per la sicurezza delle loro risorse crittografiche e attribuiscono importanza ad aspetti come il controllo dei contratti e l'open source del codice. Tuttavia, vale la pena notare che l'industria della sicurezza Web3 è ancora agli inizi. Forta ha ottenuto l'adozione da progetti importanti come dYdX e Lido, indicando il ruolo cruciale che la difesa della sicurezza Web3 svolgerà nel futuro della conformità blockchain.

    Mentre molti progetti Web3 devono ancora implementare misure di monitoraggio per garantire la sicurezza dei loro contratti, il potenziale di crescita nel mercato della sicurezza Web3 è immenso. Dal suo lancio nel 2021, Forta, guidata da OpenZeppelin, è emersa come uno dei primi attori in questo campo, rivolgendosi a un mercato relativamente inesplorato. Proprio come OpenZeppelin ha stabilito lo standard per lo sviluppo dei contratti EVM quattro anni fa, siamo fiduciosi che continueranno a guidare e ad affermarsi come leader nella definizione dei futuri standard di sicurezza Web3.