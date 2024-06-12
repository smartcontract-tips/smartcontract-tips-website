---
layout: post
title: 'Zero-knowledge proof: cosa sono e perché sono importanti.'
date: 2023-10-22 
type: post
parent_id: '0'
category: Mid
tags: [zkp, cryptography, zero knowledge, zksnark]
permalink: "/articoli/zero-knowledge-proof-cosa-sono-e-perch-sono-cos-importanti/"
image: featured_images/DALL·E2023-10-1921.26.58-Photoin16_9formatofavastdigitallandscapewithpatternsrepresentingencrypteddata.AmagnifyingglasshoversrevealingthewordsZeroKnowl.png
---

Zero Knowledge Proof (ZKP) è una sigla che racchiude le tecniche crittografiche che consentono di dimostrare il possesso di dati senza svelarne il contenuto. Ciò significa che due parti possono verificare la veridicità di un'affermazione senza doversi scambiare alcuna informazione riservata. Un po' come la combinazione  della valigetta, ma nel mondo digitale.


![](https://smartcontract.tips/assets/2023/10/image-2.png)

Alice sorprende Bob con una prova a conoscenza zero un po' insolita

![](https://smartcontract.tips/assets/2023/10/image-1.png)

Alice cerca di suggerire che conosce una soluzione all'equazione, ma si rende conto che solo con una prova Zero Knolwdge può dimostrare di conoscere il risultato senza rivelarne altri dettagli

Origine e storia del protocollo Zero Knowledge Proof
----------------------------------------------------

Possiamo far risalire la sua invenzione alla pubblicazione di Shafi Goldwasser, Silvio Micali e Charles Rackoff nel 1989. Micali è lo stesso professore che ha poi inventato e legato il suo nome alla blockchain Algorand e curiosamente Algorand non implementa dei meccanismi di ZKP nella sua blockchain.

Goldwasser, S., Micali, S., & Rackoff, C. (1989). The knowledge complexity of interactive proof systems. SIAM Journal on Computing, 18(1), 186-208.

È possibile trovare il testo completo dell'articolo a questo[ indirizzo](https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/The%20Knowledge%20Complexity%20of%20Interactive%20Proof%20Systems.pdf)

La comprensione di ZKP non è semplice per nessuno. Non solo non è semplice implementare e capire la crittografia che la realizza, ma per molti non è semplice neanche capire esattamente che problema risolve e a cosa potrebbe servire. Un'interessante intervista a cinque diverse persone con cinque diversi gradi di istruzione, dalle scuole primarie fino allo scienziato, è disponibile[ in questo simpatico video.](https://www.youtube.com/watch?v=fOGdb1CTu5c)

### La caverna di Mik Ali Babà e i 40 ladroni

Già nel 1998 venne pubblicato un divertente saggio intitolato "*How to Explain Zero-Knowledge Protocols to Your Children*" che cercava di rendere con un linguaggio semplice e fiabesco la portata dell'invenzione. La cosa spassosa è che il testo riprende la fiaba di Ali Babà e i quaranta ladroni e la riporta ai giorni nostri dove il protagonista è un suo discendente chiamato Mik Ali :) facendo il verso al cognome del famoso scienziato Silvio Micali.

> Jean-Jacques Quisquater, Louis C. Guillou, Thomas A. Berson. How to Explain Zero-Knowledge Protocols to Your Children. Advances in Cryptology - CRYPTO '89: Proceedings, v.435, p.628-631, 1990. [pdf](http://www.cs.wisc.edu/~mkowalcz/628.pdf)

La spiegazione per bambini fa uso della caverna e delle parole magiche che il protagonista non vuol rivelare al mondo ma di cui vuol provare a tutti la conoscenza.

Esiste una versione meno divertente ma più leggibile nella[ pagina wikipedia in italiano](https://it.wikipedia.org/wiki/Dimostrazione_a_conoscenza_zero#Esempio_astratto) dove al posto di Mik Ali abbiamo dei più anonimi Peggy e Victor.

![](https://smartcontract.tips/assets/2023/10/image.png)

La caverna di Alibaba, Alice dimostra di conoscere la parola segreta perché riesce sempre ad uscire dal lato urlato da Bob all'ingresso. Solo conoscendo il segreto Alice ha il 100% di probabilità di indovinare ad ogni tentativo.

La scelta dei nomi Peggy e Victor non è casuale, le loro iniziali indicano il Prover ovvero colui che genera la prova, ed il Verifier ovvero colui che la verifica.

In pratica Peggy può dimostrare a Victor di conoscere la frase magica, la famosa "Apriti Sesamo", per aprire la parete senza rivelare appunto che la frase è "Apriti Sesamo". Peggy entra nel tunnel mentre Victor resta all'ingrasso della caverna. Victor inizia la verifica indicando se Peggy debba uscire dal lato A o dal lato B. Peggy naturalmente potrà aprire la parete e uscire dalla parte giusta senza rivelare appunto la frase magica a Victor.

### Il problema dei milionari

Non è legato alla[ stretta di mano segreta dei miliardari](https://www.youtube.com/watch?v=t55W0TsqriU) e neanche "quale auto abbinare con la cravatta stamattina" (pare lo facesse G. Agnelli). Il problema consiste nel determinare fra Alice e Bob, entrambi milionari, chi dei due sia più milionario dell'altro. Tutto questo senza rivelare l'ammontare del proprio patrimonio.

Ne esiste anche una variante detta "socialist millionaire problem" in cui Alice e Bob cercano di capire se i loro patrimoni sono grosso modo equivalenti oppure completamente diversi, ma senza determinare chi sia il più ricco fra i due.

Quali sono i diversi tipi di prove a conoscenza zero?
-----------------------------------------------------

Vi sono due tipi principali di prove a conoscenza zero: prove interattive e prove non interattive.

### Prove zero-knowledge con interazione.

In questo tipo di ZKP, il prover e il verificatore interagiscono più volte. Il verificatore sfida il prover che risponde a queste sfide finché il verificatore non si convince. La prova con la caverna Apriti Sesamo sembra per l'appunto essere una prova interattiva.

### Prove zero-knowledge non interattive

In questo tipo di protocolli detti Non Interactive Zero Knowledge (NIZK), la prova fornita dal prover può essere verificata dal verificatore in qualsiasi momento. Le prove a conoscenza zero non interattive sono un tipo particolare di prove a conoscenza zero in cui il prover può generare la prova senza interagire con il verificatore. I protocolli NIZK sono molto adatti alle applicazioni della blockchain di Ethereum, perché consentono ad uno smart contract di agire come verificatore. In questo modo, chiunque può generare una prova e inviarla come parte di una transazione allo smart contract, che può eseguire un'azione a seconda che la prova sia valida o meno.\
**Quindi per ora diciamo che le prove zero-knowledge non interattive sono quelle più interessanti!!**

Quali sono alcuni esempi di applicazioni di ZKP?
------------------------------------------------

La tecnologia Zero Knowledge Proof può essere applicata a diversi problemi, tra cui l'autenticazione senza password, il rilevamento delle frodi e la gestione dei diritti digitali.

Ad esempio, le banche potrebbero utilizzare la tecnologia Zero Knowledge Proof per verificare l'identità dei clienti senza accedere ai loro dati o ai rapporti di credito. Allo stesso modo, le transazioni online, come i trasferimenti di criptovalute, potrebbero beneficiare dei suoi standard di crittografia.

Ecco una panoramica di altri e interessanti casi d'uso:

### ZKP e blockchain

-   **Blockchain e privacy:** La trasparenza delle blockchain pubbliche, come Bitcoin ed Ethereum, consente la verifica pubblica delle transazioni. Tuttavia, implica anche una scarsa privacy e può portare alla deanonimizzazione degli utenti. Le ZKP possono introdurre una maggiore privacy nelle blockchain pubbliche. Ad esempio, la criptovaluta Zcash si basa su Zero-Knowledge Succinct Non-Interactive Argument of Knowledge (zk-SNARK), un tipo di metodo crittografico a conoscenza zero. Un altro esempio è Zero-Knowledge Scalable Transparent Argument of Knowledge (zk-STARK), utilizzato nella blockchain di Ethereum, che garantisce privacy e scalabilità.

-   **Blockchain e scalabilità:** il caso degli Zk-Rollup. Un ZK-Rollup è una soluzione di scalabilità in layer-2 per blockchain che raggruppa molteplici transazioni in un'unica prova crittografica che viene inserita in una transazione blockchain ed immediatamente verificata da [uno smart contract](https://smartcontract.tips/articoli/cosa-sono-gli-smart-contract-definizione-ed-esempi/ "Cosa sono gli smart contract, definizione ed esempi"), mantenendo la sicurezza on-chain della catena principale. Utilizza le prove a conoscenza zero (ZK) per verificare le transazioni, permettendo processamenti più rapidi e riducendo i costi sulla rete principale. E' un approccio che si distingue dall'optimistic rollup che invece prende per buona la "compressione" delle molteplici transazioni ma che richiede un probation time entro il quale chiunque può fornire una fraud proof e fare revert del blocco.

Ma le prove ZKP non sono usate solo nell'ambito della blockchain, esse possono trovare larghi impieghi anche altrove.

### Altri casi d'uso per ZKP

-   **Gaming e scalabilità**: una caratteristica dei server di gaming è che essi devono accentrare una gran quantità di eventi diventando dei colli di bottiglia. L'alternativa è quella di realizzare delle architetture p2p, ma purtroppo lascerebbe spazio a cheater e hacker di modificare la loro copia locale a loro vantaggio. Attraverso Zkp è [possibile costruire architetture di gaming p2p che sono comunque sicure rispetto a questo genere di attacchi](https://medium.com/@ingonyama/how-zero-knowledge-proofs-will-change-gaming-forever-1ed8ac6fe93f).

-   **Banking**: ING utilizza gli [ZKP che consentono ai clienti di dimostrare che il loro numero segreto si trova in un intervallo](https://www.ingwb.com/en/insights/distributed-ledger-technology/ing-launches-major-addition-to-blockchain-technology) noto. Ad esempio, chi richiede un mutuo può dimostrare che il suo reddito rientra nell'intervallo ammissibile senza rivelare il suo stipendio esatto.

-   **Voto online**: Le [ZKP possono consentire agli elettori di votare in modo anonimo e di verificare che il loro voto sia stato incluso nel conteggio finale](https://github.com/stonecoldpat/anonymousvoting), contare la somma dei voti senza conoscere il singolo voto, assicurarsi che un voto sia valido senza sapere che voto è.

-   **Autenticazione**: Le [ZKP possono essere utilizzate per autenticare gli utenti](https://identitymanagementinstitute.org/zero-knowledge-proof-identity-management/) senza scambiare informazioni segrete come le password.

-   **Apprendimento automatico**: Le [ZKP possono consentire al proprietario di un algoritmo di apprendimento automatico di convincere gli altri dei risultati del modello senza rivelare alcuna informazione sul modello stesso](https://eprint.iacr.org/2023/1174.pdf). E naturalmente questa cosa è estremamente interessante!! Soprattutto ora che si parla tanto di AI e chatGPT

Tra le prove NIZK ci sono le prove zk-SNARK che significa Succint Non-interactive ARgument of Knowledge. Essi sono un insieme di protocolli non interattivi a conoscenza zero che hanno una dimensione contenuta della prova - da cui l'aggetivo succinta - e un costo computazionale di verifica molto ridotto.

Classificazione dei termini
---------------------------

Proponiamo di seguito una semplice tassonomia zero-knowledge

```
Prove zkp
├── Interattive (IZK)
└── Non interattive (NIZK)
    ├── Non succinte
    └── Succinte
        ├── Zk snark
        │   └── Groth16 protocol
        └── Plonk
            ├── Implementazione plonk
            └── Implementazione fflonk
```


Un passo indietro, problemi P e NP
----------------------------------

Per comprendere appieno la logica che sta alla base dei protocolli ZKP dobbiamo fare un passo indietro e parlare di complessità computazionale. Sembra un parolone complicato ma in realtà è facile da capire: i problemi in informatica sono classificati sulla base di quante istruzioni o unità di tempo sono necessarie per essere risolti a partire dalla dimensione dell'input che in genere si indica con n.

Un problema con complessità O(n) ci indica che il tempo di esecuzione per la risoluzione del problema cresce linearmente con il crescere dell'input. Ad esempio se l'input è una lista di 1000 contatti e noi vogliamo ordinarli in ordine alfabetico secondo il cognome esistono varie soluzioni alcune più efficienti di altre e generalmente si può trovare un algoritmo che lo risolve in O(n * log n), il che significa che se per 1000 contatti il computer ci mette 1s allora per 1,000,000 di contatti (che equivale a n = 1000 volte l'input originale) ci metterebbe circa 1000 * 3 = 3000 volte tanto.

Se l'algoritmo fosse stato meno efficiente, ad esempio O(n^2) le cose sarebbero state ben diverse. Se per 1000 contatti il tempo di calcolo è 1s allora per 1,000,000 di contatti sarebbe pari a circa 1,000,000 di secondi.

In generale chiamiamo P la classe dei problemi che può essere risolta in un tempo ragionevole, diciamo con complessità polinomiale (ad esempio il tempo di soluzione cresce con il quadrato del numero di elementi dell'input).

Tuttavia esistono una serie di problemi chiamati NP che invece non sono risolvibili in tempo polinomiale ed in un certo senso sono intrattabili. Tuttavia di questi problemi quello che invece è trattabile è la verifica della soluzione.

La differenza principale tra i due è che i problemi P possono essere risolti in modo efficiente, mentre i problemi NP non possono essere risolti in modo efficiente ma possono essere verificati in modo efficiente.

In che modo i problemi NP e i protocolli a conoscenza zero ZKP sono collegati?
------------------------------------------------------------------------------

> "All languages in NP possess zero-knowledge proofs"
>
> Goldreich, Oded & Micali, Silvio & Wigderson, Avi. (1986). How to Prove all NP-Statements in Zero-Knowledge, and a Methodology of Cryptographic Protocol Design. 263. 171-185. 10.1007/3-540-47721-7_11.
>
> [Link](https://www.researchgate.net/publication/221354839_How_to_Prove_all_NP-Statements_in_Zero-Knowledge_and_a_Methodology_of_Cryptographic_Protocol_Design)

Nella teoria della computazione si parla di linguaggi senza intendere con questo il linguaggio di programmazione, ma piuttosto l'insieme degli elementi che possono essere considerate soluzioni valide di un problema. Quindi il linguaggio associato a un problema NP è quello composto dagli elementi che rappresentano le soluzioni valide del problema.

Un esempio di problema NP e il suo relativo linguaggio NP potrebbe essere il problema delle sotto-successioni comuni più lunghe (Longest Common Subsequence, LCS) in due stringhe. Il problema consiste nel trovare la sottosequenza più lunga che è presente in entrambe le stringhe. Il linguaggio NP associato a questo problema sarebbe composto dalle coppie di sotto-sequenze (una per ogni coppia di stringhe) che costituiscono la LCS più lunga.

Un altro problema,, considerato un classico NP, è quello del Commesso Viaggiatore che si stima avere una complessità pari a O(n!) ovvero il tempo di calcolo cresce con il fattoriale del numero di città:

dato un insieme di città, e note le distanze tra ciascuna coppia di esse, trovare il tragitto di minima percorrenza che un commesso viaggiatore deve seguire per visitare tutte le città una ed una sola volta e ritornare alla città di partenza

(da wikipedia)

La frase "All languages in NP possess zero-knowledge proofs" significa che per ogni linguaggio NP esiste una prova ZKP che può essere utilizzata per verificare che una determinata stringa appartenga al linguaggio senza rivelare ulteriori informazioni sulla stringa stessa. In altre parole, esiste una prova ZKP per ogni problema NP che consente di dimostrare che una soluzione è valida senza dover rivelare i dettagli della soluzione stessa.

Conclusioni
-----------

Le prove a conoscenza zero (ZKP) rappresentano una rivoluzione nell'ambito della crittografia e della privacy. Questa tecnologia, pur essendo complessa, ha il potenziale di rafforzare la sicurezza delle transazioni digitali, garantendo al contempo l'anonimato degli utenti. Non bisogna pensare che sia utile solo al settore della blockchain, anzi direi che la sua capacità innovativa potrebbe essere trasversale a molti settori del digitale.

Mentre l'adozione di ZKP cresce, è essenziale continuare a esplorare e comprendere le sue applicazioni, assicurando un futuro digitale più sicuro e privato per tutti.
