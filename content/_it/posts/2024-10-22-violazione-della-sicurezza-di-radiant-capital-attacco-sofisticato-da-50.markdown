---
title: "Violazione della sicurezza di Radiant Capital: attacco sofisticato da $50 milioni."
date: 2024-10-22
image: /pics/posts/2024-10-22-violazione-della-sicurezza-di-radiant-capital-attacco-sofisticato-da-50/cover.png
tags: ["radiant-capital", "post-mortem", "security-breach", "multi-signature", "attack-vector","hack-explained","blind-signing"]
excerpt: "Radiant Capital ha subito un attacco informatico il 16 ottobre 2024, portando alla perdita di circa $50 milioni. Attaccanti hanno compromesso dispositivi di tre sviluppatori tramite malware, consentendo la firma di transazioni malevole. **Nonostante procedure di sicurezza rigorose, le transazioni apparivano legittime, rendendo l'attacco difficile da rilevare.**"
category: hack_explained
layout: post
---



Il tipo di hack descritto è un attacco di **malware injecting** a livello dei dispositivi. Gli attaccanti hanno compromesso i dispositivi di almeno tre sviluppatori di Radiant utilizzando malware sofisticato, il quale ha permesso loro di firmare transazioni fraudolente che apparivano legittime. **I dispositivi compromessi presentavano segnali di errore comuni, rendendo difficile rilevare l'infiltrazione.** Questa tecnica ha consentito agli attaccanti di ottenere approvazioni multi-firma senza destare sospetti e di drenare circa $50 milioni USD dai mercati.

Violazione della sicurezza di Radiant Capital.
--------

Il 16 ottobre 2024, Radiant Capital ha subito una violazione della sicurezza a causa di un attacco informatico sofisticato, risultando **in una perdita di circa 50 milioni di dollari USD**. Gli aggressori hanno compromesso i dispositivi di almeno tre sviluppatori di Radiant attraverso un'iniezione di malware, riuscendo a firmare transazioni malevole mascherate da operazioni legittime. Il metodo d'attacco ha sfruttato il "blind signing", presentando transazioni normali durante il processo di revisione, inducendo i firmatari a ignorare eventuali anomalie. **La mancanza di avvisi evidenti durante la revisione manuale ha reso difficile la rilevazione dell'attacco**. Si stima che tutti gli utenti della piattaforma Radiant siano stati a rischio, dovendo revocare le approvazioni su tutte le catene coinvolte, tra cui Arbitrum e BSC. Le implicazioni di questa violazione suggeriscono che **numerosi protocolli DeFi potrebbero essere vulnerabili**, evidenziando la necessità di strategie di verifica più rigorose e l'uso di dispositivi indipendenti per la convalida delle transazioni.


Come viene orchestrato l'attacco.
--------

Un attaccante può sfruttare la vulnerabilità compromettendo i dispositivi hardware wallet di sviluppatori fidati attraverso un'iniezione di malware sofisticata. **Questo malware consente all'attaccante di mostrare transazioni legittime sull'interfaccia di Safe{Wallet} mentre in realtà sta firmando transazioni malevole in background.** Quando lo sviluppatore approva la transazione legittima, il dispositivo compromesso intercetta l'approvazione e invia una transazione dannosa per la firma. Poiché il dispositivo mostra messaggi di errore innocui durante il processo di firma, **questi difetti appaiono come normali problemi di funzionamento, rendendo difficile la rilevazione dell'attacco.** Convalidando l'approvazione del firmatario, gli attaccanti ottengono le firme necessari per eseguire la funzione di transferOwnership, permettendo loro di svuotare i fondi dalle piattaforme compromesse. Utilizzando più tentativi di firma, l'attaccante raccoglie firme valide ma malevole, **aggirando i controlli manuali di sicurezza previsti.**


In cosa si distingue da attacchi simili
--------

L'attacco subito da Radiant Capital si distingue per la sua **elevata sofisticazione** e per il metodo di compromissione dei dispositivi degli sviluppatori, tramite un'iniezione di malware che ha manipolato le transazioni a livello di dispositivo. A differenza di attacchi come il "phishing", che si basa sull'inganno dell'utente per ottenere informazioni sensibili, o gli "attacchi di tipo man-in-the-middle", che cercano di intercettare le comunicazioni, questo attacco ha sfruttato vulnerabilità non visibili nel software utilizzato, eludendo i controlli di sicurezza standard. Inoltre, mentre gli attacchi "flash loan" spesso si servono di titoli di credito temporanei per sfruttare lacune nei protocolli, qui la compromissione avveniva attraverso firme digitali apparentemente legittime, rendendo difficile il rilevamento fino a che non era già avvenuta la sottrazione di fondi. Infine, **la tempestività e la segretezza che hanno caratterizzato l'implementazione dell'attacco** lo rendono unico e particolarmente pericoloso nel panorama della sicurezza informatica nel settore DeFi.

Quali sono le possibili conseguenze per le vittime?
--------

Le conseguenze per le vittime dell'attacco sono state devastanti, con una perdita complessiva di circa **$50 milioni USD**. I fondi sono stati drenati dai mercati principali su Arbitrum e BSC, e gli attaccanti hanno anche sfruttato approvazioni aperte per prelevare fondi dagli account degli utenti. **Tutti gli utenti della piattaforma Radiant sono stati fortemente avvisati di revocare tutte le approvazioni su tutti i chain**, inclusi Arbitrum, BSC, Ethereum e Base, per contenere i danni. La compromissione dei dispositivi di almeno tre sviluppatori di fiducia ha sollevato gravi interrogativi sulla sicurezza delle pratiche operative, lasciando gli utenti vulnerabili a future attacchi. La DAO è rimasta a disposizione delle agenzie di legge per identificare gli exploitatori e recuperare i fondi, ma il trauma e la perdita di fiducia verso il sistema sono stati significativi tra gli utenti colpiti. **La complicata natura dell'attacco ha reso impossibile la rilevazione pre-azione**, sottolineando la necessità di rivedere le misure di sicurezza attuali nel settore DeFi.


Quali contromisure adottare per mitigare l'attacco?
--------

Per mitigare attacchi simili a quello subito, è fondamentale adottare **misure preventive robusti**. Innanzitutto, è consigliabile implementare una **multi-layer signature verification**, che blocchi il processo se uno o più firmatari segnalano anomalie durante la transazione. Inoltre, utilizzare un **dispositivo indipendente e non compromesso** per verificare i dati delle transazioni prima della firma è cruciale. È importante ridurre l'uso del **blind signing** per transazioni critiche e assicurarsi che ogni interazione con hardware wallets preveda un livello visibile di verifica. L'integrazione di un **monitoraggio automatico degli errori** che attivi una revisione completa in caso di ripetuti problemi transazionali è raccomandata. Infine, **esaminare manualmente i payload delle transazioni** può rivelare eventualmente discrepanze nei dati, contribuendo a evitare firme non autorizzate. Queste strategie potrebbero significativamente ridurre la superficie di attacco e salvaguardare i fondi degli utenti.





**Links**


- [Radiant Capital Post-Mortem. Events Summary - by Radiant Capital - Oct, 2024 - Medium](https://medium.com/@RadiantCapital/radiant-post-mortem-fecd6cd38081)