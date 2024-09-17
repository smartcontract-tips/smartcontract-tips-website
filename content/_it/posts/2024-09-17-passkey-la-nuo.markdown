---
title: "Passkey: la nuova Frontiera per la Sicurezza Online ed Accesso ai Servizi"
date: 2024-09-17
image: /pics/posts/2024-09-17-passkey-la-nuo/cover.png
tags: ["passkey", "security", "authentication", "password", "technology"]
excerpt: "Il protocollo è il Web Authentication (WebAuthn), un sistema che utilizza la crittografia a chiave pubblica per migliorare la sicurezza degli accessi online. Invece di fare affidamento su..."
category: protocol_explained
layout: post
---

![cover](/pics/posts/2024-09-17-passkey-la-nuo/cover.png)

Il protocollo è il Web Authentication (WebAuthn), un sistema che utilizza la crittografia a chiave pubblica per migliorare la sicurezza degli accessi online. Invece di fare affidamento su username e password, WebAuthn crea una coppia di chiavi: una chiave pubblica, memorizzata sui server del servizio, e una chiave privata, conservata sul dispositivo dell'utente. Quando si effettua il login, viene generata una sfida a cui il dispositivo risponde utilizzando la chiave privata, senza trasferire informazioni sensibili. Questo approccio riduce il rischio di phishing e furto di dati, rendendo l’accesso più intuitivo e sicuro rispetto alle password tradizionali.

Cos'è un passkey e come funziona il protocollo?
--------

### Cos'è una passkey?

Una passkey rappresenta una nuova modalità di accesso a servizi online, progettata per essere più sicura e user-friendly rispetto alle tradizionali password. Utilizzando la crittografia a chiave pubblica, le passkeys eliminano la necessità di ricordare o di inserire password complesse, riducendo il rischio di attacchi phishing e altre forme di compromissione. Quando un utente si registra per un servizio che utilizza questa tecnologia, il dispositivo crea un paio di chiavi, una pubblica e una privata, garantendo così una maggiore sicurezza dei dati e un'esperienza di accesso semplificata.

### Come funzionano le passkeys?

Le passkeys operano attraverso uno standard web noto come Web Authentication (WebAuthn), che sfrutta la crittografia a chiave pubblica. Quando un utente crea un account su un servizio abilitato, il dispositivo genera una chiave privata che rimane sicura e non viene mai condivisa, mentre la chiave pubblica viene memorizzata sui server del servizio. Durante il login, il servizio invia una sfida al dispositivo, che utilizza la chiave privata per dimostrare la propria identità senza rivelarla, Proprio per questo, le passkeys sono considerate una soluzione di accesso più sicura rispetto alle password tradizionali.

### Le prospettive delle passkeys

Sebbene le passkeys rappresentino un significativo passo avanti nella sicurezza informatica, la loro adozione generale è ancora in fase di sviluppo. Attualmente, solo alcune grandi aziende e servizi le supportano, e la compatibilità tra dispositivi e sistemi operativi rimane limitata. Nonostante i progressi, le password tradizionali non sono destinate a scomparire immediatamente, poiché molti servizi continuano a fare affidamento su di esse. Il futuro sembra promettente, ma ci vorrà tempo prima che le passkeys diventino lo standard universale per l'autenticazione online.


Quali sono gli attori del protocollo.
--------

Si possono identificare diversi attori chiave legati all'innovazione della sicurezza informatica attraverso l'uso delle passkeys.

1. **FIDO Alliance**: Un gruppo di aziende che ha sviluppato lo standard delle passkeys, impegnandosi a creare un'alternativa più sicura rispetto alle password tradizionali. Tra i membri possiamo citare Apple, Google e Microsoft.

2. **Utenti finali**: Siamo noi, gli utilizzatori della tecnologia, che beneficeremo di un sistema di autenticazione più semplice e sicuro, eliminando i problemi legati alla memorizzazione e all’uso delle password.

3. **Aziende tecnologiche**: Queste aziende stanno implementando il supporto per le passkeys nei loro servizi e applicazioni. Questo include nomi noti come PayPal, Adobe e TikTok.

4. **Sistemi operativi**: iOS, macOS, Android e Windows sono esempi di piattaforme che stanno integrando il supporto alle passkeys, consentendo una gestione più sicura degli accessi.

Insieme, questi attori stanno collaborando per superare le limitazioni delle password tradizionali, promuovendo un futuro più sicuro per l'autenticazione online.

Qual è il flusso principale di esecuzione?
--------

### Attori
- **Utente**
- **Dispositivo (smartphone o computer)**
- **Servizio online**

### Sequenza di azioni
1. **Utente**: Inserisce l'indirizzo email (facoltativo) e clicca su "Registrati con passkey".
2. **Dispositivo**: Crea una coppia di chiavi (pubblica e privata) utilizzando la crittografia a chiave pubblica.
3. **Dispositivo**: Invia la chiave pubblica al **Servizio online**.
4. **Servizio online**: Memorizza la chiave pubblica e invia a **Dispositivo** una richiesta di verifica.
5. **Dispositivo**: Risolve la richiesta di verifica utilizzando la chiave privata senza rivelarla al **Servizio online**.
6. **Dispositivo**: Invia la risposta di verifica al **Servizio online**.
7. **Servizio online**: Autentica l'**Utente** e concede accesso all'account.

![uml](/pics/posts/2024-09-17-passkey-la-nuo/uml-1.png)



Conclusioni
--------

Il protocollo delle passkey rappresenta un significativo passo avanti nella sicurezza online, superando le limitazioni delle tradizionali password. Le passkey sono basate sulla crittografia a chiave pubblica, che permette di verificare l'identità dell'utente senza trasmettere informazioni sensibili. Invece di una password da ricordare, l'utente deve semplicemente autenticarsi tramite un dispositivo, utilizzando metodi biometrici come FaceID o TouchID.

Supportati principalmente da aziende come Apple, Google e Microsoft, i passkey stanno guadagnando terreno come alternativa più sicura e conveniente per l'accesso a servizi online. Tuttavia, la loro adozione non è ancora universale e l'integrazione tra diversi sistemi operativi presenta delle sfide. Mentre l'implementazione delle passkey continua a espandersi, è consigliabile non abbandonare completamente i gestori di password, poiché potrebbero ancora rivelarsi utili in vari scenari. In sintesi, le passkey offrono una soluzione promettente per affrontare le vulnerabilità delle password tradizionali, pur necessitando di un ulteriore sviluppo per diventare lo standard comune.




**Links**


- [Passkeys explained: What are passkeys and how do they work? - Zapier](https://zapier.com/blog/what-is-a-passkey/)