---
title: "Vulnerabilità del tool Profanity: rischi e contromisure per gli utenti"
date: 2024-09-15
image: /pics/posts/2024-09-15-profanity/cover.png
tags: ["profanity", "vulnerability", "vanity-address", "ethereum", "hack"]
excerpt: "La vulnerabilità descritta nel contesto di Profanity, uno strumento per la generazione di indirizzi vanity di Ethereum, è una tecnica di <brute-force> per il recupero delle chiavi private associate..."
category: hack_explained
layout: post
---

![cover](/pics/posts/2024-09-15-profanity/cover.png)

La vulnerabilità descritta nel contesto di Profanity, uno strumento per la generazione di indirizzi vanity di Ethereum, è una tecnica di <brute-force> per il recupero delle chiavi private associate a indirizzi generati dall'applicazione. Questo exploit sfrutta l'uso di un vettore casuale a 32 bit per seminare chiavi private a 256 bit, rendendo possibile il recupero delle chiavi private partendo dall'indirizzo vanity. Attraverso questo metodo, risulta possibile calcolare in modo efficiente le chiavi private di portafogli a rischio, potenzialmente causando una violazione della sicurezza dei fondi in essi custoditi.

Cos'è l'hack della vulnerabilità Profanity su Ethereum?
--------

La vulnerabilità scoperta nel tool Profanity, utilizzato per generare indirizzi vanity su Ethereum, è grave e deriva dall’uso di un vettore casuale a 32 bit per generare chiavi private a 256 bit. Ciò consente ai malintenzionati di effettuare attacchi di brute force per recuperare chiavi private associate a indirizzi vanity. I contributori del 1inch Network hanno dimostrato che era possibile risalire alle chiavi private in modo significativamente più efficiente rispetto ai metodi tradizionali.

I segnali di un attacco sono emersi quando vari progetti hanno riportato attività sospette relative a fondi airdropped, suggerendo che almeno cinque portafogli di deployers fossero compromessi, portando alla scoperta che molti indirizzi vanity creati con Profanity potrebbero essere stati violati. Il danno stimato potrebbe ammontare a decine, se non centinaia di milioni di dollari, dal momento che il numero potenziale delle vittime è imponente, considerando la popolarità di Profanity nell’ambito delle criptovalute. Al momento, si stima che i fondi rubati possano essere rilevati su blockchain, mantenendo traccia degli attacchi avvenuti.


Come viene orchestrato l'attacco.
--------

L'attaccante può sfruttare la vulnerabilità del tool Profanity, utilizzato per generare indirizzi Ethereum personalizzati, sfruttando la debolezza nella creazione delle chiavi private. Profanity utilizza un vettore casuale di 32 bit per generare chiavi private a 256 bit, rendendo possibile recuperarle attraverso un attacco di brute-force.

Per sferrare l’attacco, l’aggressore può seguire questi passaggi:

1. **Preparazione**: Scaricare e configurare lo strumento di brute-force disponibile su GitHub, assicurandosi di avere accesso a una macchina con una potente GPU.

2. **Raccolta di informazioni**: L'attaccante deve ottenere almeno un indirizzo pubblico corrispondente all'indirizzo vanity e un hash di una transazione firmata.

3. **Recupero della chiave pubblica**: Utilizzando il script fornito, l’attaccante trae la chiave pubblica dall'hash della transazione.

4. **Brute-force**: Correndo il programma contro la chiave pubblica recuperata, l'attaccante può tentare di rigenerare la chiave privata associata all'indirizzo vanity.

Se il programma trova la chiave privata, l'attaccante acquisisce il controllo totale sul wallet generato tramite Profanity, compromettendo potenzialmente milioni di dollari in criptovalute.

Quali sono le possibili conseguenze per le vittime?
--------

Le conseguenze per le vittime dell'attacco al tool Profanity, che consente la generazione di indirizzi Ethereum personalizzati, possono essere estremamente gravi. L'exploit scoperto ha reso vulnerabili i portafogli generati con questo strumento, permettendo ai malintenzionati di ricavare le chiavi private associate. Ciò implica che, una volta compromesso l'indirizzo, i fondi possono essere trasferiti senza alcuna possibilità di recupero.

Le vittime si trovano di fronte alla perdita totale delle loro criptovalute, che possono ammontare a decine o addirittura centinaia di milioni di dollari. Inoltre, la compromissione dell'indirizzo potrebbe estendersi a smart contract, delle cui proprietà potrebbe essere mutata l'assegnazione, gravando ulteriormente sulle risorse di chi utilizza il tool. La reputazione degli utenti e dei progetti coinvolti può subire danni irreparabili, generando una diffidenza generalizzata verso strumenti simili. Infine, la stabilità economica delle vittime potrebbe risultarne seriamente compromessa, con ripercussioni a lungo termine sulla loro attività commerciale e investimenti nel settore delle criptovalute.


Quali contromisure adottare per mitigare l'attacco?
--------


Per mitigare il rischio di attacchi che sfruttano la vulnerabilità di Profanity, è fondamentale adottare alcune misure preventive. Innanzitutto, gli utenti che hanno generato indirizzi Ethereum utilizzando Profanity devono trasferire immediatamente tutti i loro fondi a portafogli diversi, preferibilmente utilizzando strumenti di generazione di indirizzi più sicuri, come ad esempio wallet hardware o generatori di portafogli rinomati e verificati.

In secondo luogo, se sono stati creati contratti smart con indirizzi vanity tramite Profanity, è raccomandabile cambiare gli indirizzi dei proprietari di tali contratti per proteggere i beni in essi contenuti. 

Inoltre, è consigliabile monitorare costantemente le attività delle proprie transazioni e mantenere una vigilanza sugli sviluppi in ambito sicurezza delle criptovalute. Utilizzare strumenti di sicurezza come autenticazione a due fattori (2FA) e gestione delle chiavi di accesso può ulteriormente aumentare la protezione contro potenziali attacchi. Infine, rimanere aggiornati sulle ultime notizie e sugli aggiornamenti di sicurezza della comunità cryptocurrency è cruciale per una corretta gestione del rischio.




**Links**


- [A vulnerability disclosed in Profanity, an Ethereum vanity address tool](https://blog.1inch.io/a-vulnerability-disclosed-in-profanity-an-ethereum-vanity-address-tool/)
- [GitHub - rebryk/profanity-brute-force: Tool to hack a vanity address generated with Profanity](https://github.com/rebryk/profanity-brute-force)