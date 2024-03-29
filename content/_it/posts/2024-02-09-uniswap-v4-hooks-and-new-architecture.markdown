---
layout: post
title: "Uniswap v4: Come cambierà l'exchange decentralizzato più famoso?"
date: 2024-02-09 
type: post


category: Basic

tags: 
 - Uniswap
 - DeFi
---

Uniswap V4 introduce funzionalità innovative come gli "hook" personalizzabili per l'aggiustamento dinamico delle commissioni e funzionalità migliorate nelle pool di liquidità, insieme a un'architettura "singleton model" efficiente in termini di costi. Pone l'accento sull'efficienza del gas e sulla personalizzazione, con l'obiettivo di rivoluzionare il trading decentralizzato. Il rilascio è previsto dopo l'aggiornamento Cancun di Ethereum nel primo trimestre del 2024, sotto una Business Source License che passerà a GPL dopo quattro anni. Questi aggiornamenti promettono trading DeFi e gestione della liquidità più flessibili ed economici.


## Da factory a singleton: la prima differenza tra v3 e v4

Immagina il modello "singleton" come un tipo unico di negozio che gestisce tutto da solo, super efficiente ma con un'unica versione che tutti usano. Il modello "factory", invece, è come avere una fabbrica che può creare tanti negozi diversi, ognuno con le sue particolarità. Mentre il "singleton" punta sull'efficienza e sulla semplicità, la "factory" offre più flessibilità, permettendoti di avere versioni diverse per esigenze diverse.

**E nel caso di Uniswap che significa?**

Nel contesto di Uniswap, il modello "singleton" si riferisce all'approccio adottato nella nuova versione, dove viene utilizzata una singola istanza di contratto per gestire tutte le operazioni, mirando a ottimizzare l'efficienza e ridurre i costi delle transazioni. Questo contrasta con il modello "factory" precedente, che creava nuovi contratti per ogni coppia di token, aumentando la flessibilità ma anche i costi operativi. Quindi, in Uniswap V4, il passaggio a un modello "singleton" significa una struttura più efficiente in termini di gas per le operazioni.

## Esempio di vantaggio con il singleton: route fra token in pool diverse

Nel modello a istanze multiple di Uniswap V3, per fare uno swap tra ETH e DAI usando le pool ETH-USDC e USDC-DAI, seguiresti un flusso in due fasi. Prima, scambieresti ETH per USDC nella pool ETH-USDC. Poi, utilizzeresti USDC per acquistare DAI nella pool USDC-DAI. Questo processo, noto come "route through an intermediary token" (percorso attraverso un token intermediario), consente di completare lo swap desiderato anche se non esiste una pool diretta tra i due token finali.

Fare uno swap attraverso pool intermedie in Uniswap V3 comporta un costo in termini di fee. Ogni volta che fai uno swap in una pool, paghi una commissione (fee) basata sulla quantità di token scambiati. Quindi, se passi da ETH a USDC e poi da USDC a DAI, pagherai due volte le commissioni: una per ogni transazione. Questo può aumentare il costo complessivo dello swap rispetto a uno swap diretto in una singola pool, se fosse disponibile.

Nel modello singleton di Uniswap V4, **la situazione migliora grazie all'architettura più efficiente in termini di gas** e alla possibilità di personalizzare le fee attraverso gli "hooks". Questo modello può ridurre i costi delle transazioni complessive, anche quando si effettuano scambi attraverso pool intermedie, poiché l'infrastruttura ottimizzata mira a ridurre le spese di gas per ogni operazione.

![uniswap v4](/assets/images/uniswap4-1.jpg)
*source uniswap.com*

## Cosa sono gli hook di Uniswap v4?

Gli "hook" in Uniswap V4 sono funzionalità personalizzabili che possono essere attivate da specifici eventi nella piattaforma, come l'esecuzione di uno swap o il cambio nelle condizioni di mercato. Questi permettono di adattare dinamicamente le commissioni di transazione o di attivare altre logiche personalizzate, migliorando l'efficienza e la flessibilità delle operazioni di scambio.

Gli hook in Uniswap V4 possono essere attivati da una varietà di eventi all'interno del protocollo, come l'esecuzione di scambi, l'aggiunta o la rimozione di liquidità, o cambiamenti nelle condizioni di mercato. Questi hook offrono agli sviluppatori la possibilità di intervenire e personalizzare il comportamento del protocollo in risposta a queste azioni, consentendo una maggiore flessibilità e controllo sulle operazioni eseguite all'interno della piattaforma.

Sebbene non siano ancora operativi è possibile trovare il codice di [molti hook in questa risorsa dedicata](https://github.com/hyperoracle/awesome-uniswap-hooks)

Ecco alcuni esempi di hook in Uniswap v4:

- **Limit Order**: Permette agli utenti di piazzare ordini a limite, specificando un prezzo al quale sono disposti a comprare o vendere un asset.
- **Geomean Oracle**: Rende una pool Uniswap funzionante come un oracolo, calcolando il prezzo medio geometrico degli asset nella pool.
- **TWAMM**: Market maker a media ponderata nel tempo, utilizzato per eseguire grandi ordini nel tempo, riducendo l'impatto sul mercato.
- **Volatility Oracle**: Fornisce informazioni sulla volatilità di un asset, utili per la valutazione di opzioni e altri derivati.
- **Full Range**: Consente alla pool di fornire liquidità per un'ampia gamma di prezzi, utile per mercati volatili o con poca liquidità.

Questi hook dimostrano la versatilità di Uniswap v4 nel personalizzare le operazioni di pool, migliorando l'efficienza e introducendo nuove strategie di trading.

## Uniswap e KYC

Sì, con gli hook di Uniswap v4 è possibile implementare meccanismi di KYC (Know Your Customer), consentendo di eseguire controlli sui clienti prima che essi possano effettuare scambi in una specifica pool. Questo può essere utilizzato per assicurare che solo utenti verificati possano partecipare a determinate operazioni di scambio, aumentando la sicurezza e la conformità normativa delle transazioni sulla piattaforma.


## Perchè Uniswap v4 non è ancora attivo?

Uniswap v4 potrebbe utilizzare dati transienti per ottimizzare le operazioni on-chain, come l'aggiornamento delle pool di liquidità, il calcolo delle commissioni, o l'esecuzione di strategie di trading complesse. Questo approccio può ridurre i costi del gas e migliorare l'efficienza delle transazioni, rendendo la piattaforma più scalabile e flessibile, ma richiede che Ethereum implementi un nuovo tipo di OPCODE per lo storage transiente. 

Tale specifica detta EIP-1153 (non ancora disponibile in Ethereum alla data del presente articolo) propone un meccanismo di "transient storage" su Ethereum, consentendo contratti intelligenti di leggere e scrivere dati temporanei senza consumare gas per lo storage permanente. Questa funzionalità può ridurre i costi delle transazioni e aumentare l'efficienza, particolarmente utile per operazioni complesse come quelle previste in Uniswap v4.

**perché non usare le variabili in-memory?**

Le variabili in-memory in Solidity sono usate per memorizzare dati temporanei durante l'esecuzione di una funzione, ma queste variabili sono limitate alla durata della funzione stessa e non possono essere utilizzate per scambiare dati tra chiamate di funzioni diverse o tra transazioni. L'EIP-1153, proponendo un "transient storage", mira a superare queste limitazioni, consentendo una gestione dei dati temporanei più flessibile e potenzialmente più economica in termini di gas, adatta per operazioni complesse che richiedono uno stato intermedio persistente tra le transazioni.


## La licenza di Uniswap v4

La Business Source License (BSL) di Uniswap è una licenza software che limita l'uso commerciale del codice per un certo periodo di tempo, dopodiché diventa open-source sotto una General Public License (GPL). Questo modello permette agli sviluppatori originali di Uniswap di proteggere e monetizzare il loro lavoro nel breve termine, pur contribuendo alla comunità open-source nel lungo termine. La BSL assicura che nuove funzionalità o prodotti possano essere sviluppati e utilizzati inizialmente in maniera esclusiva o limitata prima di diventare completamente accessibili.

La Business Source License (BSL) di Uniswap effettivamente **limita l'uso commerciale del codice per un periodo prefissato (ad esempio, 4 anni)**, dopo il quale il codice diventa open-source sotto GPL. Questo modello consente a Uniswap di beneficiare inizialmente delle innovazioni mantenendole proprietarie, per poi condividerle con la comunità open-source. **Questo approccio può influenzare le decisioni degli sviluppatori esterni riguardo al contribuire direttamente al progetto durante il periodo di esclusività.**

