---
title: "Prepararsi per i Cambiamenti di Granite"
date: 2024-09-08
image: /pics/posts/2024-09-08-prepararsi-per/cover.png
tags: ["upgrade-proposal", "granite", "protocol-upgrade", "optimism", "security"]
excerpt: "Prepararsi per i Cambiamenti di Granite. La proposta di aggiornamento Granite della rete OP risponde a una serie di vulnerabilità di sicurezza identificate durante audit di terze parti condotti da S..."
category: news
layout: post
---



Prepararsi per i Cambiamenti di Granite

![cover](/pics/posts/2024-09-08-prepararsi-per/cover.png)

La proposta di aggiornamento Granite della rete OP risponde a una serie di vulnerabilità di sicurezza identificate durante audit di terze parti condotti da Spearbit, Cantina e Code4rena. Sebbene nessuna vulnerabilità sia stata sfruttata e i beni degli utenti non siano mai stati a rischio, viene attivato un meccanismo fallback per garantire stabilità mentre le falle vengono risolte. L'aggiornamento include miglioramenti ai contratti smart e una hardfork L2 per ottimizzare stabilità e performance del sistema di fault proof.

Aggiornamento sulla Sicurezza di OP: Cosa è Accaduto?
-----------

Il "Granite Network Upgrade" rappresenta una proposta di aggiornamento del protocollo Optimism Collective, presentata da Mofi, un ingegnere di protocollo presso OP Labs, il 16 agosto 2024. L'aggiornamento è stato motivato dall'identificazione di vulnerabilità di sicurezza durante audit condotti da Spearbit, Cantina e Code4rena. Sebbene nessuna di queste vulnerabilità sia stata sfruttata e i beni degli utenti non siano mai stati a rischio, è stato attivato un meccanismo di fallback per prevenire potenziali instabilità. 

L'aggiornamento include una serie di miglioramenti agli smart contract e un hardfork di secondo livello (L2) per migliorare la stabilità e le prestazioni del sistema di proof di fault. Inoltre, estende le capacità dei ruoli Guardian e DeputyGuardian per prevenire la referenziazione di stati di ancoraggio non validi. Si prevede anche di resettare i prelievi degli utenti. L'intervento è stato già attivato su reti di sviluppo interne e sulla Sepolia Superchain, con il rilascio finale programmato per l'11 settembre 2024.


Cause dell'Aggiornamento della Rete Granite
-----------

La proposta di aggiornamento #10 di Optimism, nota come "Granite Network Upgrade," è una risposta a vulnerabilità di sicurezza identificate da audit di terze parti. Sebbene nessuna vulnerabilità sia stata sfruttata e gli asset degli utenti non siano mai stati a rischio, per precauzione è stato attivato un meccanismo fallback permesso, limitando l'approvazione delle uscite a un proponente fidato e bloccando temporaneamente i prelievi per garantire la stabilità. L'upgrade include miglioramenti a contratti smart e una hardfork L2 per incrementare stabilità e performance del sistema proof-of-fault. Le modifiche proposte mirano a risolvere queste vulnerabilità e migliorare ulteriormente la sicurezza, con implementazioni tecniche mirate e aggiornamenti di sistema documentati per operatori di nodi e catene.

Dichiarazioni sull'Aggiornamento della Rete Granite
-----------

Nel contesto dell'aggiornamento Granite della rete Optimism, diversi esponenti di rilievo hanno espresso le loro opinioni e supporto. Mofi, ingegnere di protocollo presso OP Labs, ha evidenziato che l'aggiornamento risponde a vulnerabilità di sicurezza identificate durante audit di sicurezza di terze parti. Ha rassicurato gli utenti affermando che nessun asset è mai stato a rischio e che sono state introdotte misure cautelative, come il fallback permissionato, per garantire la stabilità. Katie e lefterisjp, delegati di Optimism con sufficiente potere di voto, hanno dichiarato di ritenere il proposta pronta per il voto, fidandosi dei giudizi degli auditor e degli sviluppatori. Raffy.eth ha sollevato questioni tecniche riguardanti lo stato di ancoraggio e i giochi di disputa permissionati, chiedendo chiarimenti su alcune decisioni. Infine, Takeshi ha espresso preoccupazione riguardo alla mancanza di un audit completo per l'hardfork, sottolineando che un'ulteriore bug potrebbe causare danni irreparabili. Queste dichiarazioni riflettono un ampio supporto, ma anche preoccupazioni tecniche e richieste di chiarimenti sulle implicazioni dell'aggiornamento.


Possibili Conseguenze e Sviluppi dell'Aggiornamento della Rete Granite
-----------


L'aggiornamento Granite per la rete Optimism rappresenta un intervento cruciale per consolidare la sicurezza e migliorare le performance del sistema di fault proof. Le conseguenze principali per gli utenti riguarderanno la necessità di ri-sottomettere le richieste di prelievo avviate nei sette giorni precedenti l'aggiornamento, poiché queste saranno invalidate. Inoltre, il limite massimo per l'input alla precompilazione "ecPairing" verrà ridotto, anche se questa misura non dovrebbe influire negativamente sugli utenti data l'analisi del comportamento passato sulla rete.

Per i gestori di catene e gli operatori di nodi, sarà essenziale aggiornare il software dei nodi alla versione più recente e configurare la data di attivazione di Granite. Ciò implica il settaggio appropriato di configurazioni nei file di sistema o tramite opzioni CLI, a seconda della specificità della catena operata. Una verifica accurata delle configurazioni di avvio dei nodi garantirà una transizione senza problemi e preverrà possibili conflitti nel consenso della rete.

Qualora dovessero emergere criticità post-implementazione, i meccanismi di fallback resteranno attivi per facilitare interventi correttivi, assicurando così la stabilità della rete fino al completo reintegro delle modalità di proposta permessa.


Conclusioni
-----------

Il Proposta di Aggiornamento #10, noto come Granite Network Upgrade, mira a risolvere vulnerabilità di sicurezza identificate durante audit da Spearbit, Cantina e Code4rena. Nessuna vulnerabilità è stata sfruttata e gli asset degli utenti non sono mai stati a rischio. L'aggiornamento include miglioramenti ai contratti intelligenti e un hardfork L2 per aumentare stabilità e performance del sistema di fault proof. Inoltre, estende le capacità dei ruoli di Guardian e DeputyGuardian per prevenire riferimenti a stati di ancoraggio non validi e include altre modifiche per migliorare la robustezza del sistema.



**Links**


- [Upgrade Proposal #10: Granite Network Upgrade - Protocol Upgrade - Optimism Collective](https://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733)
- [Preparing for Granite Breaking Changes. Optimism Docs](https://docs.optimism.io/builders/notices/granite-changes)