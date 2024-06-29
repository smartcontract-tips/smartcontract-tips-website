---
layout: post
title: "Zero-Knowledge Proofs (ZKP) e Problemi NP"
date: 2024-06-09 
type: post
category: Mid
tags: [zkp, zero-knowledge, zero-knowledge-proof, np-problem, cryptography]
toc: true
image: /pics/posts/zkp/image.webp

---

I problemi NP (Non-deterministici in tempo Polinomiale) sono una classe di problemi nella teoria della complessità computazionale. Per comprendere meglio questi problemi, rivediamo prima alcuni concetti chiave:

1. **Problema di decisione**: Un problema che ha una risposta "sì" o "no".
2. **Classe P**: Insieme di problemi di decisione che possono essere risolti in tempo polinomiale da una [macchina di Turing](https://it.wikipedia.org/wiki/Macchina_di_Turing) deterministica. Cioè, esiste un algoritmo che può risolvere il problema in un tempo che è una funzione polinomiale della dimensione dell'input.
3. **Classe NP**: Insieme di problemi di decisione per i quali una soluzione proposta può essere verificata in tempo polinomiale da una macchina di Turing deterministica. In altre parole, se ti viene data una possibile soluzione, puoi verificarne la correttezza rapidamente (in tempo polinomiale).

## Caratteristiche dei Problemi NP

1. **Verifica Rapida**: Se viene fornita una soluzione potenziale, è possibile verificare se è corretta in tempo polinomiale.
2. **Esistenza di Certificati**: Per ogni istanza del problema con risposta "sì", esiste un "certificato" che può essere verificato in tempo polinomiale.
3. **Soluzione veloce non conosciuta**: Per molti problemi NP, non si conosce un algoritmo che trovi sempre la soluzione in tempo polinomiale (cioè, non si sa se possono essere risolti in tempo polinomiale).

![img](/pics/posts/zkp/image.webp)

## Esempi di Problemi NP

1. **SAT (Problema di soddisfacibilità)**: Dato un insieme di variabili booleane e una formula logica composta da queste variabili, esiste un'assegnazione di valori (vero/falso) alle variabili che renda vera l'intera formula?
2. **Problema del Commesso Viaggiatore (Traveling Salesman Problem, TSP)**: Dato un insieme di città e le distanze tra ogni coppia di città, esiste un percorso che visita ogni città esattamente una volta e ritorna al punto di partenza con una lunghezza totale minore o uguale a un valore dato?
3. **Problema dello zaino (Knapsack Problem)**: Dato un insieme di oggetti, ognuno con un peso e un valore, è possibile riempire uno zaino con un sottoinsieme di questi oggetti in modo che il valore totale sia almeno un certo valore dato?


## Zero-Knowledge Proofs (ZKP) e Problemi NP

### Zero-Knowledge Proofs (Prove a Conoscenza Zero)

Le **Zero-Knowledge Proofs** (ZKP) sono un concetto fondamentale nella crittografia e nella teoria della complessità computazionale. Una prova a conoscenza zero è un metodo mediante il quale una parte (il **prover**, dimostratore) può dimostrare a un'altra parte (il **verifier**, verificatore) che una certa affermazione è vera senza rivelare alcuna informazione aggiuntiva oltre alla validità dell'affermazione stessa. 

Per comprendere meglio questo concetto, esaminiamo le tre proprietà principali delle ZKP:

1. **Completezza**: Se l'affermazione è vera, un dimostratore onesto può convincere il verificatore di questa verità.
2. **Solidità**: Se l'affermazione è falsa, nessun dimostratore disonesto può convincere il verificatore che è vera, eccetto con una probabilità molto bassa.
3. **Conoscenza Zero**: Se l'affermazione è vera, il verificatore non apprende nulla di più oltre al fatto che l'affermazione è vera. In altre parole, il verificatore non ottiene alcuna informazione utile che potrebbe essere utilizzata per dedurre ulteriori dettagli sull'affermazione.

### Relazione tra ZKP e Problemi NP

Le ZKP sono strettamente legate ai problemi NP in quanto molti protocolli ZKP sono utilizzati per provare affermazioni relative ai problemi NP. Un problema NP è tale che, se viene fornita una soluzione, questa può essere verificata rapidamente (in tempo polinomiale). Le ZKP offrono un modo per verificare tali soluzioni senza rivelare la soluzione stessa.

Consideriamo un esempio classico di un problema NP e come una ZKP potrebbe essere utilizzata:

### Esempio: Problema di Soddisfacibilità (SAT)

Il problema SAT è uno dei più noti problemi NP-completi. Data una formula logica composta da variabili booleane, si tratta di determinare se esiste un'assegnazione di valori (vero/falso) alle variabili che renda vera l'intera formula.

Supponiamo che il dimostratore conosca una soluzione a una formula SAT e voglia convincere il verificatore che tale soluzione esiste senza rivelare l'assegnazione specifica. Ecco come una ZKP potrebbe funzionare in questo contesto:

1. **Preparo la Prova**: Il dimostratore prepara una prova crittografica basata sulla soluzione che possiede, ma senza rivelare i dettagli della soluzione.
2. **Interazione**: Attraverso una serie di interazioni, il dimostratore fornisce al verificatore delle informazioni crittografiche che dimostrano la validità della soluzione senza rivelarne i dettagli.
3. **Verifica**: Il verificatore utilizza queste informazioni per convincersi che il dimostratore conosce effettivamente una soluzione senza apprendere nulla di nuovo sulla soluzione stessa.

### Applicazioni delle ZKP

Le ZKP trovano applicazioni in molti campi, specialmente nella sicurezza informatica e nella crittografia. Alcuni esempi includono:

- **Autenticazione**: Permettere a una parte di dimostrare la propria identità senza rivelare la password o altri dettagli sensibili.
- **Transazioni Sicure**: Verificare la validità delle transazioni in criptovalute senza rivelare i dettagli delle transazioni stesse.
- **Privacy dei Dati**: Consentire l'accesso a informazioni sensibili solo se certi criteri sono soddisfatti, senza rivelare le informazioni stesse.