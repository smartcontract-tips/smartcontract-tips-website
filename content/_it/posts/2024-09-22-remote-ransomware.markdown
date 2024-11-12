---
title: "Misure efficaci per prevenire e mitigare attacchi di remote ransomware"
date: 2024-09-22
image: /pics/posts/2024-09-22-remote-ransomware/cover.webp
tags: ["remote-ransomware", "ransomware", "endpoint-security", "encryption", "network"]
excerpt: "L'articolo descrive il remote ransomware, una forma complessa di ransomware che utilizza endpoint compromessi per criptare i dati su tutta la rete di una vittima."
category: hack_explained
layout: post
---


L'articolo descrive il "remote ransomware", una forma complessa di ransomware che utilizza endpoint compromessi per criptare i dati su tutta la rete di una vittima. Gli attaccanti prendono controllo di un endpoint collegato alla rete e lo usano per criptare i dati su altri dispositivi della stessa rete, evitando i sistemi di sicurezza del dispositivo bersaglio. Questo tipo di attacco è pericoloso perché può propagarsi rapidamente e sfruttare dispositivi non gestiti all'interno della rete. Il "remote ransomware" bypassa le difese tradizionali concentrandosi sul comportamento dell'encryption piuttosto che sulla presenza di codice malevolo.

Cos'è il Remote ransomware
--------

Remote ransomware, noto anche come malicious remote encryption, rappresenta una minaccia significativa per le organizzazioni a causa della sua capacità di diffondersi rapidamente attraverso le reti compromesse. Questo tipo di attacco sfrutta endpoint compromessi per crittografare dati su altri dispositivi collegati alla stessa rete, bypassando spesso le difese di sicurezza esistenti. Secondo un’analisi di Sophos, circa il 60% degli attacchi ransomware orchestrati da esseri umani utilizzano remote ransomware, con l'80% degli attacchi originati da dispositivi non gestiti. Nonostante l’uso di protezioni avanzate sugli endpoint, la presenza di un singolo endpoint vulnerabile può comprometterne l’intera rete. Sophos raccomanda di adottare strumenti moderni che rilevino il comportamento della crittografia dei file piuttosto che cercare solo codice malevolo. Misure come la segmentazione della rete, l’autenticazione forte e un programma di sicurezza stratificato possono mitigare l’impatto di questi attacchi. Negli anni recenti, i cybercriminali hanno utilizzato varianti come WannaCry, Ryuk e LockBit per eseguire tali attacchi, causando danni significativi a diverse organizzazioni. Sebbene una stima precisa del numero di vittime e dei danni non sia facilmente ricavabile, l'entità delle perdite è significativa e in crescita costante.


Come viene orchestrato l'attacco.
--------

Un attaccante che utilizza il remote ransomware inizia compromettendo un endpoint all'interno della rete bersaglio. Successivamente, sfrutta questo endpoint compromesso per crittografare i dati presenti su altri dispositivi connessi alla stessa rete, evitando di attivare le difese di sicurezza del dispositivo target. Questo viene fatto osservando il comportamento anomalo di trasmissione di documenti tra l'endpoint compromesso e altri dispositivi nella rete. Una volta compromesso un dispositivo, l'attaccante utilizza l'architettura di dominio dell'organizzazione per diffondere la crittografia ai dispositivi uniti al dominio gestito. L'intero processo – analisi di ingresso, esecuzione del payload e crittografia – avviene sul dispositivo già compromesso, bypassando le misure di sicurezza moderne. La maggior parte degli attacchi ha origine da dispositivi non gestiti all'interno della rete, rendendo queste azioni particolarmente pericolose per l'organizzazione poiché un singolo endpoint vulnerabile può compromettere l'intera rete.


In cosa si distingue il Remote ransomware da altri attacchi simili
--------

Il Remote ransomware si distingue da altri attacchi simili, come il ransomware tradizionale, per la sua capacità di propagarsi nelle reti compromettendo un solo endpoint. Mentre il ransomware tradizionale richiede che ogni dispositivo attaccato sia individualmente infettato attraverso file dannosi o exploit, nel caso del remote ransomware un singolo endpoint compromesso viene utilizzato per crittografare i dati su altri dispositivi della rete, evitando le difese di sicurezza moderne. Un altro attacco simile è il malware basato su file, dove il focus è sui file e processi dannosi presenti sui dispositivi protetti; tuttavia, remote ransomware elude queste misure operando sul dispositivo già compromesso.

Quali sono le possibili conseguenze per le vittime?
--------

Un attacco di remote ransomware comporta gravi conseguenze per le vittime. Gli attaccanti sfruttano un endpoint compromesso per crittografare i dati su altri dispositivi della stessa rete, bypassando le difese di sicurezza tradizionali del dispositivo bersaglio. Questo rende il ransomware remoto particolarmente pericoloso, poiché può diffondersi rapidamente da un singolo endpoint vulnerabile, mettendo a rischio l'intera rete aziendale. Inoltre, dato che le attività malevole avvengono sul dispositivo già compromesso, gli strumenti di sicurezza tradizionali, focalizzati sulla rilevazione di file e processi malevoli sul dispositivo protetto, non sono efficaci. Le vittime possono riscontrare la perdita di dati critici e sensibili, interruzioni operative e possibili richieste di riscatto per il recupero dei dati crittografati.


Quali contromisure adottare per mitigare l'attacco?
--------

Per mitigare un attacco di remote ransomware, è essenziale adottare una serie di misure preventive. Innanzitutto, implementare strumenti di endpoint moderni che possano analizzare i file per segni di crittografia malevola, indipendentemente da dove vengono eseguiti i processi. È utile bloccare sia gli attacchi locali che quelli remoti concentrandosi sul contenuto dei file piuttosto che sul codice dannoso. 

Creare backup temporanei dei file e ripristinarli automaticamente allo stato non crittografato in caso di attacco può essere un'ulteriore salvaguardia. Bloccare automaticamente i dispositivi remoti che tentano di crittografare i file sul dispositivo della vittima e proteggere il master boot record da crittografia o cancellazioni forzate sono altre misure fondamentali. 

Mantenere una configurazione firewall efficace, che blocchi gli indirizzi IP sospetti e utilizzi il geo-filtering, oltre a limitare il traffico uscente e a rivedere regolarmente le regole del firewall è anche cruciale. È importante avere un programma di sicurezza stratificato, che includa gestione della superficie di attacco, formazione sulla sicurezza, backup di sistema e dati, e capacità di rilevamento e risposta agli incidenti. Infine, implementare l'autenticazione forte, una possibile architettura zero-trust e la segmentazione della rete per garantire una protezione completa.




**Links**


- [Remote ransomware: What is and how to stop it - SC Media](https://www.scmagazine.com/resource/remote-ransomware-what-is-and-how-to-stop-it)