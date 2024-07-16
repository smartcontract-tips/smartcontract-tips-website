---
layout: post
title: "Stages: il Framework per valutare il Rischio e la Sicurezza di un Rollup Ethereum"
date: 2024-05-12 
type: post
draft: true
category: Mid
image: /pics/posts/stages/cover.png

tags: [rollup, L2, layer-2, ethereum, scalability, zk-rollup, optimistic-rollup, optimism, arbitrum]
---
Usiamo Arbitrum o Optimism invece di Ethereum perché le transazioni su quest'ultimo sono troppo costose, ma sappiamo cosa stiamo facendo e a cosa andiamo incontro? Le soluzioni L2, come Optimistic Rollups e ZK-Rollups, mirano a migliorare la scalabilità di Ethereum riducendo il carico sulla rete principale (Layer 1). Ma la domanda è: quanto sono sicuri?

## Quando parliamo di sicurezza in un L2 cosa intendiamo in realtà?

La sicurezza nelle soluzioni di Layer 2 (L2) su Ethereum riguarda principalmente la protezione dei fondi degli utenti e l'integrità delle transazioni. È essenziale garantire che i bridge, che permettono il trasferimento di asset tra Layer 1 e Layer 2 e viceversa, siano sicuri per evitare furti. In buona sostanza, quanto sono realmente decentralizzati e quanto la volontà dell'utente di prelevare i propri fondi non si scontra con la discrezionalità di chi opera il rollup o altro protocollo L2?


## Breve descrizione dell'architettura Rollup: termini e funzioni dei vari componenti

Facciamo un passo indietro, cosa sono i rollup? In parole povere sono delle soluzioni che "comprimono" le transazioni degli utenti all'interno di batch. Invece di avere N transazioni utente nelle chain, queste vengono appunto incluse in un batch ed ogni batch viene poi "inserito" nella chain principale.

Questo significa che le N transazioni di cui sopra alla fine risultano in una sola transazione sulla chain principale. Comodo, no?

## Entrare e uscire dal Rollup

Qui viene il bello, alla fine quando si vuole usare un rollup almeno una transazione in L1 che mette i nostri fondi a disposizione del rollup in L2 la dobbiamo fare. E viceversa quando abbiamo deciso che del rollup non ne abbiamo più bisogno dobbiamo poter far uscire i nostri fondi da L2 a L1 senza che altri abbiano ad obiettare, a meno che noi non stiamo cercando di commettere una truffa, naturalmente. Sul protocollo anti-truffa ci torneremo a breve.

{% include imagebox.html text="Aspetta, ma se mando i soldi ad un rollup che differenza c'è con un exchange centralizzato!" imgurl="/pics/commons/paul.webp" %}

In effetti all'estremo le stesse cose che fa un L2 potrebbero essere realizzate da un'entità centralizzata che riceve i fondi di Alice, Bob e tutti gli altri e poi quando questi vogliono fare transazioni fra loro tiene i conti su un ledger centralizzato. Come farebbe un istituto di pagamento se fossero soldi fiat.

Ma il punto è proprio questo. Un L2 deve (o dovrebbe) sostituire la parte di esecuzione "centralizzata" con un protocollo che non richieda l'intervento di un individuo. Ma è proprio così?

## A cosa serve STAGES
Stages è un framework che può aiutare gli sviluppatori, gli investitori e gli utenti a fare scelte informate quando considerano l'utilizzo di uno specifico rollup.

Il framework "STAGES" per valutare la maturità dei rollup si basa su una scala di valutazione da 0 a 2 per determinare lo stato di sviluppo e decentralizzazione dei vari rollup su Ethereum. Ogni "stage" rappresenta un livello di maturità:

- **Stage 0**: In questo stadio, i rollup sono nella fase più basilare dello sviluppo. Sono prevalentemente in fase di test o hanno appena iniziato ad operare in condizioni controllate o limitate.
- **Stage 1**: I rollup a questo livello sono più avanzati rispetto allo Stage 0. Hanno dimostrato un certo grado di funzionalità e affidabilità, ma potrebbero non avere ancora attuato tutte le caratteristiche necessarie per un funzionamento completamente sicuro e decentralizzato.
- **Stage 2**: Questo è il livello più alto, dove i rollup hanno pienamente realizzato le loro caratteristiche tecniche e operazionali, offrendo alta sicurezza, scalabilità e decentralizzazione.

Il framework STAGES aiuta gli sviluppatori, gli investitori e gli utenti a comprendere il livello di sviluppo di un rollup, facilitando decisioni più informate riguardo l'adozione o l'investimento in queste tecnologie.


## Come usare il framework per fare le nostre valutazioni

TL;DR
In pratica: 
**stage 0** è un rollup totalmente in mano agli operatori
**stage 1** è un rollup parzialmente in mano agli operatori e parzialmente autonomo
**stage 2** è totalmente autonomo e basato sugli smart contract

Scendendo maggiormente nei dettagli ecco i vari requisiti


### Stage 0
Questa fase si concentra sulla validazione elementare e sulla trasparenza del rollup:
- **Identificazione come Rollup**: Verifica se il progetto si autodefinisce un rollup.
- **Pubblicazione delle L2 state roots su L1**: Assicura che le L2 state roots siano postate sulla blockchain di livello 1.
- **Disponibilità dei Dati su L1**: Controlla se il progetto fornisce la disponibilità dei dati sulla blockchain di livello 1. Anche se gli zk-rollup non avrebbero in teoria la necessità di mostrare i dati, ma solo le proof, per dimostrare la correttezza delle operazioni, resta invece necessario permettere l'accesso ai dati delle transazioni anche allo scopo di ricostruire l'intero stato. 
- **Accessibilità del codice sorgente**: Valuta se il software capace di ricostruire lo stato del rollup è disponibile come sorgente aperto.

### Stage 1
Questa fase verifica la robustezza del sistema di proof e l'interazione degli attori esterni:
- **Utilizzo di un sistema di proof appropriato**: Conferma l'uso di un sistema di proof adeguato per il rollup.
- **Sottomissione di proof di frode da parte di attori esterni**: Verifica la capacità di almeno 5 attori esterni di inviare una proof di frode.
- **Uscita degli utenti senza coordinazione dell'operatore**: Controlla se gli utenti possono uscire dal sistema senza il coordinamento dell'operatore.
- **Tempo di uscita per gli utenti**: Assicura che gli utenti abbiano almeno 7 giorni per uscire in caso di aggiornamenti indesiderati.
- **Configurazione del Security Council**: Esamina se il Consiglio di Sicurezza è impostato correttamente.

### Stage 2
La fase finale valuta l'automazione completa e la decentralizzazione del sistema di proof:
- **Sistema di proof di frode senza permessi**: Valuta se il sistema di proof di frode è permissionless, permettendo a chiunque di partecipare.
- **Periodo esteso di uscita per gli utenti**: Conferma che gli utenti abbiano almeno 30 giorni per uscire in caso di aggiornamenti indesiderati.
- **Limitazioni del Security Council**: Assicura che il Security Council possa agire solo in risposta a errori rilevati sulla blockchain.

Per maggiori dettagli su ciascun requisito e approfondimenti sul loro impatto e applicazione, puoi consultare l'articolo originale su Medium a questo [link](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe).


## Quanto sono sicuri i maggiori Rollup che usiamo?

Questa è una domanda interessante alla quale possiamo provare a dare una risposta grazie alle analisi fornite dal sito [l2beat](https://l2beat.com/).

Il profilo di rischio è costituito da 5 attributi che rispondono sempre ad un criterio fondamentale: **sono in grado di estrarre i miei fondi dal rollup in qualsiasi momento?** Questo dovrebbe essere garantito anche se parte dell'infrastruttura del rollup va giù.

- data availability
- exit window
- proposer failure
- sequencer failure
- state validation

![risk profile based on a pie with 5 attributes by color](/pics/posts/stages/2.png)

[Source](https://l2beat.com/)

**Data availability**: anche se alcuni i rollup usano le zero knowledge proof tutte i calldata delle transazioni devono essere disponibili. Ad esempio in caso di disastro i calldata sarebbero l’unico modo di ricostruire lo stato a partire da zero. Tenere i calldata in L1 è il modo più sicuro ma troppo costoso.

**Exit Window**: un parametro opinionato di chi ha creato la metrica, in pratica risponde al requisito “Do users have at least 7 days to exit in case of unwanted upgrades”?

**Proposer Failure**: Proposer e Prover sono praticamente lo stesso ruolo, salvo che nel caso del rollup optimistic non genera prove ma propone solo il nuovo blocco da mettere in L1. In caso di guasto del proposer l’utente può usare un workaround (buono) per prelevare i fondi dal rollup, generare lui stesso una proof (buono)  oppure non può fare nulla (non buono) e attendere il ripristino.

**Sequence Failure**: come abbiamo visto il sequencer è un po’ il punto di ingresso delle transazioni che vengono raccolte in batch. Se questo è rotto abbiamo due possibilità: esiste un workaround che permette di aggirare il sequencer a agire in L1 direttamente (buono) oppure non possiamo fare nulla (non buono) fino a che non viene ripristinato.

**State validation**: significa esattamente quello che dice. Si può verificare che il blocco inserito in L1 è valido? Gli zk-rollup lo fanno by definition, quelli optimistic invece no, prevedono un protocollo di challenge e fraud-proof. In certi rollup il protocollo di challenge lo possono lanciare tutti gli utenti (buono) in altri casi esiste una whitelist “manipolabile” di utenti che possono fare la challenge (non buono)

![fig biggest L2 by value locked](/pics/posts/stages/1.png)

[Source](https://l2beat.com/)

Nella figura sono mostrati i Rollup con più di $1b di capitale, ma per brevità ci limitiamo ad analizzare i dati riportati per Arbitrum e per Optimism.


## Analisi di Arbitrum secondo il framework Stages

Secondo il sito [l2beat.com](https://l2beat.com/scaling/projects/arbitrum)  Arbitrum è uno Stage 1

Esso rispetta tutti i requirements Stage 0 e Stage 1

- The project calls itself a rollup.
- L2 state roots are posted to Ethereum L1.
- Inputs for the state transition function are posted to L1.
- A source-available node exists that can recreate the state from L1 data.

e inoltre...

- A complete and functional proof system is deployed.
- There are at least 5 external actors who can submit fraud proofs.
- Users are able to exit without the help of the permissioned operators.
- In case of an unwanted upgrade by actors more centralized than a Security Council, users have at least 7d to exit.
- The Security Council is properly set up


Il problema che non consente lo Stage 2 è che Arbitrum essendo un rollup di tipo optimistic deve implementare un meccanismo di fraud proof, nel caso di Arbitrum questo meccanismo è attivabile solo da un set di attori whitelisted e la whitelist è governata centralmente. Chiaramente questo significa usare un protocollo teoricamente decentralizzato in una maniera "centralizzata".

Inoltre, gli upgrade al protocollo possono essere resi effettivi in 3 giorni, considerato che ne serve almeno 1 per la transazione d'uscita, significa dare solo 2 giorni effettivi di exit window (ricordiamo che dovrebbero essere almeno 7).


## Conclusioni

Questo articolo non vuole essere assolutamente un attacco agli L2 come Arbitrum che, nonostante i limiti attuali di operatività, forniscono un valido strumento ed anche un caso pilota interessante all'interno dell'ecosistema Ethereum.

Deve essere però chiaro a chi li usa la differenza tra la sicurezza e solidità di una transazione in L1 e quello che può avvenire in L2 che rappresentano sempre un compromesso. D'altronde se così non fosse allora anche Ethereum potrebbe implementare lui stesso la stessa architettura di un rollup ed essere più scalabile di come è in realtà, ma come abbiamo visto, un L2 ha senso se esiste un L1 che lo "supporta".








