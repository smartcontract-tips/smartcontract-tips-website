---
title: "Nuova Vulnerabilità YubiKey Scoperta: Clonazione con Attacchi Side-Channel"
date: 2024-09-15
image: /pics/posts/2024-09-15-nuova-vulnerab/cover.png
tags: ["yubikey", "cloning-attack", "side-channel", "cryptographic-flaw", "infineon"]
excerpt: "Le YubiKeys, dispositivi hardware ampiamente utilizzati per l'autenticazione a due fattori, sono recentemente state scoperte vulnerabili ad attacchi di clonazione a causa di un canale laterale critt..."
category: news
layout: post
---



Le YubiKeys, dispositivi hardware ampiamente utilizzati per l'autenticazione a due fattori, sono recentemente state scoperte vulnerabili ad attacchi di clonazione a causa di un canale laterale crittografico precedentemente sconosciuto. Ricercatori hanno individuato questo difetto nel microcontrollore utilizzato, rendendo possibile la clonazione dei dispositivi quando un attaccante riesce ad ottenerne l'accesso fisico temporaneo. Yubico, il produttore, ha emesso un avviso e ha implementato aggiornamenti nei modelli successivi per correggere questa vulnerabilità.

Scoperta una Vulnerabilità Criptografica.
-----------

Una vulnerabilità nella libreria crittografica di Infineon è stata scoperta dai ricercatori di NinjaLab e pubblicata il 3 settembre 2024. Questa vulnerabilità riguarda i dispositivi YubiKey della serie 5 (versioni precedenti alla 5.7.0), le Security Key e lo YubiHSM 2 (versioni precedenti alla 2.4.0), che utilizzano la libreria crittografica di Infineon per l'algoritmo ECDSA. L'attacco, descritto come un attacco side-channel, permette agli aggressori di clonare le chiavi private ECDSA se hanno temporaneo accesso fisico al dispositivo e dispongono di attrezzature specializzate. La vulnerabilità deriva dal mancato utilizzo della difesa 'constant time' nell'implementazione dell'Extended Euclidean Algorithm, utilizzato per la modular inversion nelle operazioni ECDSA. Questa scoperta è significativa poiché le chiavi YubiKey sono ampiamente usate per l'autenticazione a due fattori, protezione delle password e accesso sicuro. Non è possibile aggiornare il firmware dei YubiKey già in uso, rendendo i dispositivi affetti permanentemente vulnerabili. Yubico ha risposto con un avviso di sicurezza, indicando che i dispositivi successivi alla versione 5.7 hanno una libreria crittografica personalizzata che risolve il problema. La vulnerabilità è stata valutata con una gravità moderata, e Yubico raccomanda di mantenere il controllo fisico delle chiavi e deregistrarle prontamente in caso di smarrimento.


Le Cause della Vulnerabilità di YubiKey
-----------

Le vulnerabilità riscontrate nei dispositivi YubiKey e in altre soluzioni di sicurezza basate su microcontrollori Infineon derivano principalmente da insufficienti difese contro gli attacchi "side channel". In particolare si tratta di una falla che emerge attraverso l'analisi di emissioni elettromagnetiche, tempi di esecuzione o altri segnali fisici durante l'esecuzione di operazioni crittografiche. Nel caso specifico, il problema riguarda l'implementazione dell'algoritmo Elliptic Curve Digital Signature Algorithm (ECDSA) contenuto nella libreria crittografica di Infineon, che non ha impiegato tecniche di difesa comuni come l'esecuzione in tempo costante per proteggere le operazioni di inversione in modulo.

Queste vulnerabilità non possono essere eliminate mediante aggiornamenti firmware, il che rende permanente il rischio per le versioni precedenti al firmware 5.7 per YubiKey e 2.4 per YubiHSM. Di conseguenza, Yubico ha sviluppato una propria libreria crittografica per le versioni più recenti dei dispositivi, eliminando la dipendenza da Infineon e mitigando future esposizioni. La necessità di avere accesso fisico ai dispositivi, accoppiata alla complessità tecnica degli attacchi, riduce il rischio immediato ma non lo elimina. La scelta di Yubico di non permettere aggiornamenti firmware mira a mantenere un ambiente sicuro, evitando potenziali vulnerabilità introdotte da modifiche software post-produzione.

Dichiarazioni
-----------

**Sintesi delle Dichiarazioni degli Esponenti di Rilievo:**

1. **Dan Goodin, Senior Security Editor, Ars Technica:**
   - Dichiarazione: "La falla criptografica rende i dispositivi YubiKey 5 vulnerabili al clonaggio se un attaccante ha accesso temporaneo fisico."

2. **Thomas Roche, Co-fondatore di NinjaLab:**
   - Dichiarazione: "La vulnerabilità scoperta è nel tempo necessario per l'inversione modulare in ECDSA nell'algoritmo esteso euclideo di Infineon, rilevabile tramite un’oscilloscopio."

3. **Yubico, Security Advisory:**
   - Dichiarazione: "Il problema è una vulnerabilità di canale laterale nell'implementazione ECDSA nella libreria crittografica Infineon. La correzione prevede la rimozione della libreria Infineon a favore di una libreria propria."

4. **Domande Frequenti di Yubico:**
   - Dichiarazione: "Non tutte le nostre chiavi sono affette. L’exploit è complesso. La disattivazione tempestiva delle chiavi smarrite mitiga il rischio. La nostra posizione è non consentire aggiornamenti del firmware per garantire la massima sicurezza delle chiavi."


Conseguenze e Sviluppi: Analisi delle Implicazioni e dei Progressi
-----------


La scoperta della vulnerabilità nelle chiavi YubiKey, nota come attacco laterale, ha seriousi implicazioni sul fronte della sicurezza per gli utenti di questi dispositivi. Le possibili conseguenze includono il rischio che attaccanti sofisticati, in possesso fisico della chiave e di attrezzatura specializzata, possano clonare i dispositivi e recuperare le chiavi private crittografiche. Questo comprometterebbe seriamente l'integrità delle autenticazioni a due fattori, così come altre applicazioni di sicurezza che dipendono da questi dispositivi.

In risposta a questa vulnerabilità, Yubico ha già preso iniziative per mitigare il problema: tutte le nuove versioni dei dispositivi YubiKey e YubiHSM, a partire dal firmware 5.7.0, utilizzano una libreria crittografica sviluppata internamente, che elimina la dipendenza dalla vulnerabile libreria di Infineon. Per gli utenti con dispositivi datati, che non possono essere aggiornati, Yubico raccomanda di mantenere un controllo rigoroso su chiavi fisiche e deregistrare immediatamente eventuali chiavi smarrite o rubate. 

Le organizzazioni, inoltre, sono invitate a rafforzare le loro strategie di autenticazione, implementando misure complementari come l'uso di altre forme di autenticazione (es. RSA) e regolando le impostazioni dei provider di identità per ridurre la durata delle sessioni e richiedere frequenti autenticazioni. Yubico ha dichiarato che, nonostante l'inconveniente, le chiavi mantengono un livello di sicurezza superiore rispetto a metodi meno robusti come OTP o SMS.


Conclusioni
-----------

Un'importante vulnerabilità nella libreria crittografica di Infineon ha reso i dispositivi YubiKey 5 vulnerabili ad attacchi di clonazione mediante tecniche di side-channel. Questo difetto riguarda tutti i modelli con firmware precedente alla versione 5.7. Per sfruttare questa vulnerabilità, un attaccante deve avere accesso fisico al dispositivo, oltre a conoscenze specifiche e attrezzature specializzate. Yubico ha aggiornato i dispositivi più recenti con la propria libreria crittografica, eliminando la dipendenza da Infineon nei nuovi modelli. Gli utenti sono invitati a mantenere il controllo fisico delle loro YubiKeys e a deregistrarle se perse o rubate.



**Links**


- [YubiKeys are vulnerable to cloning attacks thanks to newly discovered side channel. Ars Technica](https://arstechnica.com/security/2024/09/yubikeys-are-vulnerable-to-cloning-attacks-thanks-to-newly-discovered-side-channel/)
- [Security Advisory YSA-2024-03. Yubico](https://www.yubico.com/support/security-advisories/ysa-2024-03/)
- [Detailed Hack Report from NinjaLabs](https://ninjalab.io/wp-content/uploads/2024/09/20240903_eucleak.pdf)