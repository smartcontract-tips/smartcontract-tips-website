---
title: "Web3 Security. Il 2024 in retrospettiva"
date: 2025-01-08
image: /pics/posts/2025-01-08-web3-security-2024-in-retrospective/cover.jpeg
tags: ["web3", "security", "hacks", "facts", "figures", "2024", "retrospective"]
layout: post
author: davide
---

Proviamo a fare un bilancio dell'anno 2024 appena trascorso in termini di violazioni di sicurezza legate al mondo web3 e dintorni.

Vecchi vizi
-----------

Partiamo da una tecnica di attacco vecchia come il mondo web3, la reentrancy. Nonostante il grave hack del DAO nel 2016, che ha messo in evidenza [la vulnerabilità della **reentrancy**](/articoli/il-registro-swc-cos-e-chi-lha-creato/), l'errore continua a essere commesso ancora dopo 8 anni da quell'evento.

Questo suggerisce che i progettisti di smart contract non sempre applicano le best practices di sicurezza o non effettuano controlli adeguati. In altre parole, non c'è una piena adozione delle lezioni apprese dal passato, forse a causa di una **mancanza di consapevolezza** o di **indifferenza alla sicurezza**.

![image of reentrancy timeline](/pics/posts/2025-01-08-web3-security-2024-in-retrospective/reentrancy-timeline.png)

<hr>

Entità dei danni causati
------------------------

Il 2024 è andato meglio degli anni precedenti. **E questa è una buona notizia**. Rispetto ai disastrosi anni 2021 e 2022, c'è stato un **miglioramento**, ma la quantità di denaro violato è ancora alta e il lavoro per rafforzare la sicurezza deve sicuramente continuare.

![image of volumes by the year](/pics/posts/2025-01-08-web3-security-2024-in-retrospective/volume-by-year.png)

<hr>

Taglia degli attacchi
-------------------------

I dati mostrano il **valore mediano** degli importi violati per anno, e ci offrono una visione interessante sull'andamento degli attacchi nel corso del tempo:

   - Nel periodo 2016-2018, gli attacchi erano relativamente più **grandi** in termini di importi mediani, passando da 60 milioni di USD nel 2016 a 117,5 milioni nel 2018.
   - A partire dal 2020, la **frequenza degli attacchi è aumentata**, ma i singoli eventi tendono a essere **meno gravi** rispetto agli anni precedenti. Il valore mediano scende fino a **2 milioni nel 2023**, segno che anche se gli attacchi sono numerosi, i danni per singolo attacco sono più contenuti.
   - Il valore mediano del 2024 ammonta **3,3 milioni** e suggerisce un'ulteriore **riduzione degli importi violati**, con attacchi molto più piccoli, ma comunque numerosi.


![image of median hack by the year](/pics/posts/2025-01-08-web3-security-2024-in-retrospective/median-by-year.png)

<hr>



Volumi violati per tecnica di attacco
--------------------------------

![volume of hack by technique](/pics/posts/2025-01-08-web3-security-2024-in-retrospective/volume-by-technique.png)

Il grafico mostra la distribuzione delle tecniche di attacco informatico nel 2024, evidenziando le principali modalità attraverso cui sono stati violati i sistemi. Ecco alcune osservazioni chiave:

### Privileged Key Compromised (41.3%)
   - La **compromissione delle chiavi private** è, di gran lunga, la tecnica più utilizzata, rappresentando **oltre il 40%** dei volumi violati nel 2024.
   - Questo dato mette in evidenza come la gestione delle **chiavi private** continui a essere il **punto debole** principale nel sistema di sicurezza delle criptovalute e degli smart contract. La protezione delle chiavi private è fondamentale, e la loro compromissione porta a danni ingenti, come dimostrato da numerosi attacchi storici.

### Phishing su Multisig Wallet (23.9%)
   - Un'altra tecnica che troneggia nel grafico è il **phishing su wallet multisig**, che rappresenta **oltre il 23%** dei volumi violati.
   - Sebbene questa categoria sia molto grande, è importante notare che si riferisce a **un singolo attacco su larga scala**, il che significa che una singola violazione possa aver avuto un impatto considerevole su questo dato. Tuttavia, il phishing rimane un metodo molto diffuso per compromettere i wallet, anche quando protetti da soluzioni multisig.

### Altri Attacchi
   - Le altre tecniche, come **Access Control Exploit (7.9%)**, **Claim Contract Flashloan Exploit (4.5%)**, e **Storage Slot Exploit (6.4%)**, pur essendo significative, rappresentano una porzione inferiore del totale. Questi attacchi, seppur rilevanti, non sono altrettanto diffusi o dannosi come quelli legati alla gestione delle chiavi private e al phishing.


<hr>



Le tecniche di attacco più frequenti
------------------------------------

![frequency of attack by technique](/pics/posts/2025-01-08-web3-security-2024-in-retrospective/frequency-by-technique.png)

Il grafico mostra la **frequenza relativa** degli attacchi per tecnica nel 2024, cioè la percentuale di attacchi per ciascun tipo di vulnerabilità o metodo utilizzato.

### Compromissione delle Chiavi Private (34.5%)
   - Come nel grafico precedente, **la compromissione delle chiavi private** emerge come il tipo di attacco più comune, rappresentando **oltre il 34%** di tutti gli attacchi nel 2024.


### 2. Access Control Exploit (14.5%)
   - Gli attacchi al **controllo degli accessi** sono il secondo tipo più frequente, con una percentuale del **14.5%**.
   
### 3. Altri Attacchi
   - **Price Oracle Attack (12.7%)**: Gli attacchi agli oracoli di prezzo sono relativamente comuni, spesso sfruttando la manipolazione dei dati di mercato per influenzare decisioni automatiche nei contratti intelligenti.
   - **Reentrancy (9.1%)**: Gli attacchi di **reentrancy**, una vulnerabilità ben nota dai tempi del DAO, continuano a essere sfruttati, sebbene in misura inferiore rispetto ad altri tipi di attacchi come la compromissione delle chiavi private o gli exploit di accesso.
   - Altri tipi di attacchi, come **Flashloan New Market Exploit** (3.6%) e **Oracle Misconfiguration Exploit** (3.6%), sono meno frequenti ma comunque rilevanti, evidenziando la varietà di vulnerabilità che possono essere sfruttate.



