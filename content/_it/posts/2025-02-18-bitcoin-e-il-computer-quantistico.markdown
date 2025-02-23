---
title: Bitcoin e il computer quantistico
date: 2025-02-15
image: /pics/posts/2025-02-18-bitcoin-e-il-computer-quantistico/cover.jpeg
tags: [ bitcoin, quantum, maiorana, topological-qubit]
layout: post
excerpt: I computer quantistici faranno a pezzi Bitcoin? La nuova architettura Maiorana-1 rappresenta la minaccia più recente, ma siamo veramente vicini al punto di non ritorno oppure è un allarme ingiustificato
---

Siamo tutti coscienti che il computer quantistico stravolgerà molte delle convinzioni che noi utenti e professionisti del settore ICT abbiamo faticosamente costruito in questi anni. Il problema principale per poterne discuterne è: **cosa diavolo è un computer quantistico**. 


Sfogliando wikipedia troviamo alcune pagine dedicate al tema:

1.  [No-cloning](https://href.li/?https://it.wikipedia.org/wiki/Teorema_di_no-cloning_quantistico "Teorema di no-cloning quantistico"): l'[informazione quantistica](https://href.li/?https://it.wikipedia.org/wiki/Informazione_quantistica "Informazione quantistica") non può essere **copiata** con fedeltà assoluta, e quindi neanche **letta** con fedeltà assoluta. ([William Wootters](https://href.li/?https://it.wikipedia.org/w/index.php?title=William_Wootters&action=edit&redlink=1 "William Wootters (la pagina non esiste)"), [1982](https://href.li/?https://it.wikipedia.org/wiki/1982 "1982")).
2.  L'[informazione quantistica](https://href.li/?https://it.wikipedia.org/wiki/Informazione_quantistica "Informazione quantistica") può invece essere **trasferita** con fedeltà assoluta, a patto che l'originale venga distrutto nel processo.
3.  **Ogni misura** compiuta su di un sistema quantistico **distrugge** la maggior parte dell'informazione, lasciandolo in uno [stato base](https://href.li/?https://it.wikipedia.org/wiki/Stato_quantico "Stato quantico"). L'informazione distrutta non può essere recuperata.


Il fatto che l'informazione possa essere trasferita in modo fedele solo se l'originale viene distrutto mi pare un principio sul quale nel futuro forse potremmo costruire il **Bitcoin quantistico**. Il double spending praticamente risolto senza avere nessuna blockchain in giro, l'universo fa la proof-of-work grazie alle leggi naturali del mondo atomico.

## Perchè appena si parla di computer quantistico tutti pensano a Bitcoin?

Oggi parliamo di perché Bitcoin e le altcoin sono potenzialmente vittime del computer quantistico. 

L'origine di tutti i mali è [l'algoritmo di fattorizzazione di Shor](https://it.wikipedia.org/wiki/Algoritmo_di_fattorizzazione_di_Shor)

Questo algoritmo serve a calcolare i fattori che compongono un numero, ed invece di usare i bit e byte, è basato sull'uso dei qubit, questi meravigliosi oggetti del pensiero che come i bit valgono 0 oppure 1, ma che finché non li vai a misurare con un qualche metodo fisico sono in teoria una combinazione lineare di 0 e 1, anzi di \|0>  e \|1> e quindi possono assumere tutti i valori possibili con precisione infinita. 

Ovvero un solo qubit potrebbe rappresentare un numero con infinite cifre decimale, e quindi di fatto tutto lo scibile umano. Peccato che appena cerchi di leggerlo questo qubit decide se vale 1 o vale 0. **Esattamente come il gatto di Schroedinger che è morto e vivo nello stesso tempo.**


La cosa simpatica di questo algoritmo è che riesce a fare in un tempo abbastanza breve quello che i computer classici fanno in un tempo **O(√n)**. 

Per la precisione dato un numero **n** bello lungo, per trovare i suoi fattori con il computer classico ci metto un numero di calcoli pari a radice di **n** mentre con il computer quantistico ci metto 

**log(n) * log(log(n))* log(log(log(n)))**

## Facciamo un esempio con dei veri numeri

Facciamo un esempio se voglio fattorizzare il numero RSA-768

<div style="width: 80%; word-break: break-all">
RSA-768 = 1230186684530117755130494958384962720772853569595334792197322452151726400507263657518745202199786469389956474942774063845925192557326303453731548268507917026122142913461670429214311602221240479274737794080665351419597459856902143413
</div>

---

Con il metodo classico servono circa **10^115** istruzioni elementari (1 con 115 zeri a seguire). Se ipotizziamo una CPU che esegue circa 10 miliardi di operazioni al secondo ci metteremo in brute force semplice circa **10^97** anni. 

In realtà questo numero è stato fattorizzato nel 2009 e ci sono voluti solo due anni, i cervelli di Thorsten Kleinjung, Kazumaro Aoki, Jens Franke, Arjen K. Lenstra, Emmanuel Thomé, Pierrick Gaudry, Alexander Kruppa, Peter Montgomery, Joppe W. Bos, Dag Arne Osvik, Herman te Riele, Andrey Timofeev e Paul Zimmermann e anche una rete di computer e di calcolo che equivalgono a 2000 anni di esecuzione su un AMD Opteron a 2.2GHz. 

Il risultato è:

<div style="width: 80%; word-break: break-all">
RSA-768 =
33478071698956898786044169848212690817704794983713768568912431388982883793878002287614711652531743087737814467999489
*
36746043666799590428244633799627952632279158164343087642676032283815739666511279233373417143396810270092798736308917
</div>

## Quanto ci avrebbe messo il computer quantistico a fattorizzare RSA-768?

Ci avrebbe messo circa log(n) * log(log(n))* log(log(log(n))) dove n è un numero a 230 cifre. Ovvero all'incirca 3 milioni di "istruzioni" qualunque cosa questo voglia dire nella complessità di calcolo di un computer quantistico. 

Se anche facesse SOLO 100 istruzioni al secondo **nel giro di pochi giorni avrebbe finito**.

Ma come stanno andando le cose?

Questa è la cronologia non aggiornatissima di come le implementazioni dell'algoritmo di Shor stanno andando avanti

> 1994 -- Shor's quantum factorization algorithm is invented
>
> 2001- IBM quantum computer factored 15 = 3 x 5
>
> 2012 -- 21 was factored into 3 x 7
>
> 2012 -- in April 143 was factored into 11 x 13
>
> 2014 -- 56153 was factored

In realtà solo 15 e 21 sono stati fattorizzati con l'algoritmo di Shor, e su 21 ci sarebbero comunque diverse contestazioni sul metodo non proprio Shor ortodosso. **I numeri più grossi sono stati fattorizzati con delle tecniche di minimizzazione che in realtà funzionerebbero anche sui computer classici** e quindi **non ci sarebbe nessun vantaggio ad eseguirle in computer quantistici.**

![quantum factorization](https://scx2.b-cdn.net/gfx/news/hires/2014/quantumfacto.jpg)

Da notare come per passare da 15 = 3 x 5 a 21 = 3 x 7 ci siano voluti 11 anni. Però si sa, questi processi non sono lineari. Basta una trovata geniale e qui ci troviamo RSA-2048 craccato in dieci minuti. 

Secondo alcune opinioni [qualificate](https://href.li/?https://www.youtube.com/watch?v=wWHAs--HA1c)

> "It is likely that a quantum computer will break RSA2048 in a matter of hours by 2030 and with an investment on $1B"

## Ma cosa c'entra tutto ciò con Bitcoin?

C'entra moltissimo perché Bitcoin è basato sulla crittografia a chiave pubblica, ovvero sul fatto che le transazioni siano firmate digitalmente usando un algoritmo di cifratura chiamato ECDSA. 

Ora, va precisato che ECDSA non è RSA e che se RSA è basato sul principio che posso usare due grossi numeri primi p e q, moltiplicarli fra loro n = p*q ed usare n come modulo per delle operazioni fra interi che permettono cifratura e decifratura di qualunque messaggio. 

La fattorizzazione non rompe immediatamente anche ECDSA ma questo è vulnerabile ad una **variante dell'algoritmo di Shor studiata per il "discrete logarithm problem on elliptic curves"**.

Quindi **il quantum computer potrebbe fare a pezzi la crifratura e dunque falsificare le firme digitali con le quali le transazioni Bitcoin vengono firmate e validate**.

La recente adozione delle **firme di Schnorr in Bitcoin non migliora la situazione**. Infatti queste sono vulnerabili esattamente come ECDSA.

Al contrario l'algoritmo di hashing SHA-256 non sembra essere vulnerabile. Magari sarà necessario passare da un output a 256 bit ad uno a 512, ma in sostanza non sarà disturbato dal quantum computer.


## Microsoft, Maiorana e i Topocomputer

Nel 1937, **Ettore Majorana** ipotizzò l'esistenza di una particella che fosse il proprio **antiparticolo**. Nel 2001, il fisico teorico russo **Alexei Kitaev** propose che i **fermioni di Majorana** potessero manifestarsi ai bordi di un **nanofilo superconduttore** (cioè un filo che trasporta corrente senza resistenza elettrica).

I fermioni di Majorana emergono solo in condizioni estremamente ristrette. Quando un **nanofilo semiconduttore** (ad esempio, realizzato in **antimoniuro di indio - InSb**) viene collegato a un **materiale superconduttore** (come il **niobio**), si osserva un cosiddetto **picco di conduttanza a zero bias** sotto particolari campi magnetici e condizioni di carica elettrica. Questo segnale è la principale indicazione della presenza dei Majorana.

I fermioni di Majorana hanno una proprietà fondamentale per la **computazione quantistica**: obbediscono a **statistiche non-abeliane**, il che significa che il loro stato quantistico può essere manipolato attraverso operazioni chiamate **"braiding"** (intreccio). Questa caratteristica permette di memorizzare informazioni quantistiche in modo **robusto e resistente agli errori**.

Il modello di **computazione quantistica topologica** basato sui Majorana potrebbe essere **molto più stabile e tollerante agli errori** rispetto ad altri approcci quantistici.

### **Il ruolo di Microsoft e la situazione attuale**
Microsoft, attraverso il suo gruppo di ricerca **Station Q**, ha investito molto nello sviluppo di un **computer quantistico topologico** basato sui Majorana. L'obiettivo era realizzare un **qubit stabile e resistente agli errori** grazie alla protezione topologica fornita da queste particelle.

Nel 2021, Microsoft ha subito una battuta d’arresto quando uno studio del 2018, che pretendeva di aver osservato nuove prove di Majorana, è stato **ritrattato a causa di errori nell'analisi dei dati**. 

## L'annuncio del 2025

Microsoft ha annunciato di aver creato i primi **"qubit topologici"**. I computer basati su principi **topologici** dovrebbero essere più facili da costruire su larga scala rispetto ad altre tecnologie concorrenti, poiché offrirebbero una **migliore protezione dalle interferenze e dal rumore quantistico**. Tuttavia, alcuni ricercatori **restano scettici** sulle affermazioni dell'azienda.  

L'annuncio è stato fatto il **19 febbraio**, tramite un **comunicato stampa** con pochi dettagli tecnici. Microsoft ha dichiarato di aver condiviso alcuni dati con specialisti selezionati durante un incontro nel suo centro di ricerca di **Santa Barbara, in California**. **Steven Simon**, fisico teorico dell’Università di Oxford, che ha avuto accesso ai risultati, ha commentato:  

> *"Scommetterei la mia vita sul fatto che stanno osservando davvero ciò che pensano di osservare? No, ma sembra promettente."*  

Nello stesso giorno, il 19 febbraio, Microsoft ha anche [pubblicato **risultati intermedi** sulla rivista scientifica **Nature**](https://www.nature.com/articles/s41586-024-08445-2). Tuttavia, lo studio **non dimostra ancora in modo definitivo l’esistenza dei qubit topologici**.  

La comunità scientifica attende ora ulteriori prove per verificare se l’approccio di Microsoft rappresenti davvero un **passo avanti significativo** nella computazione quantistica o se si tratti di un'altra affermazione prematura, come già accaduto in passato nel campo dei **Majorana qubits**.


## Una stima più attendibile per rompere ECDSA (e Bitcoin)

Secondo un [recente lavoro di ricerca](https://pubs.aip.org/avs/aqs/article/4/1/013801/2835275/The-impact-of-hardware-specifications-on-reaching) 

Mark Webber, Vincent Elfving, Sebastian Weidt, Winfried K. Hensinger; The impact of hardware specifications on reaching quantum advantage in the fault tolerant regime. AVS Quantum Sci. 1 March 2022; 4 (1): 013801. https://doi.org/10.1116/5.0073075


> ...the number of physical qubits required to break the 256-bit elliptic curve encryption of keys in the Bitcoin network within the small available time frame in which it would actually pose a threat to do so. It would require 317 × 10^6 physical qubits to break the encryption within one hour using the surface code, a code cycle time of 1 μs, a reaction time of 10 μs. To instead break the encryption within one day, it would require 13 × 10^6 physical qubits.

Quindi per rompere Bitcoin in un giorno servirebbero circa 13 milioni di Qubits.

## Quanti Qubit ha dimostrato di aver costruito Microsoft?

Microsoft [annuncia](https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/) che l'architettura Maiorana-1 consente la costruzione di 8 Qubits.

In verità la questione è controversa ed ancora richiede una validazione della comunità scientifica. Ma l'ambizione di Microsoft è quella di gettare le basi per un'architettura scalabile. Non resta che attendere che i risultati siano confermati.

Otto Qubits sembrano un innocuo prototipo, ma se fosse confermato sarebbe veramente interessante seguire come le architetture successive Maiorana-2 e Maiorana-3 potrebbero moltiplicare questa cifra.


## Post-Quantum Cryptography

Per fortuna non tutto è perduto. Infatti esistono già dei sistemi di cifratura che sembrano robusti alla computazione quantistica.

[Lattice systems](https://href.li/?https://en.wikipedia.org/wiki/Lattice-based_cryptography): basati su combinazioni lineari di vettori non sui vestitini al lattice ... qui mi fermo.

[McEliece cryptosystems](https://href.li/?https://en.wikipedia.org/wiki/McEliece_cryptosystem): basati su teoria dei codici, che richiederebbe di riesumare i nostri ricordi di Comunicazioni Elettriche del quarto anno di ingegneria elettronica

[Hash based cryptography](https://href.li/?https://en.wikipedia.org/wiki/Hash-based_cryptography): raccomandati dalla Commissione Europea come sistemi di protezione post-quantum


### **La standardizzazione del NIST e la crittografia post-quantistica**  

Nel **2016** il **NIST (National Institute of Standards and Technology)** ha avviato una **competizione** per trovare **sostituti** ai nostri attuali metodi di crittografia a chiave pubblica, con un’ampia revisione delle prestazioni e della sicurezza di vari metodi proposti.  

Il NIST ha stimato che c’è una probabilità di **1 su 7** che **RSA-2048** venga compromesso entro il **2026**, e una probabilità di **1 su 2** entro il **2031**. Per questo motivo, ha analizzato metodi basati su problemi noti per la loro **resistenza ai computer quantistici**, tra cui:  

- **Metodi basati su reticoli**  (lattice systems)
- **Isogenie**  
- **Sistemi multivariati**  
- **Metodi basati su hash**  

La competizione si è focalizzata su due principali aspetti:  
1. **Key Encapsulation (KEM)**, che sostituirà gli attuali protocolli di scambio di chiavi  
2. **Firme digitali**, per garantire autenticità e integrità  

Per **Key Encapsulation e crittografia a chiave pubblica**, il NIST ha selezionato il metodo **CRYSTALS-Kyber** (FIPS 203), basato sui reticoli.

Per **firme digitali**, ha scelto:  
- **CRYSTALS-Dilithium** (FIPS 204) – basato sui reticoli  
- **FALCON** – basato sui reticoli  
- **SPHINCS+** (FIPS 205) – basato su hash  

### **Dimensioni delle chiavi e prestazioni**  
I metodi basati su **reticoli** sono generalmente i più veloci tra quelli presentati, e hanno chiavi relativamente piccole rispetto ad altri approcci quantistici. Ad esempio:  

- **Kyber738** ha una chiave pubblica di **1.184 byte**, un cifrato di **1.088 byte** e una chiave privata di **2.400 byte**  
- **ECDH** (crittografia classica) ha una chiave pubblica di **64 byte** e una chiave privata di **32 byte**  

Conclusioni
----------

Oggi praticamente quasi tutti i crittografi stanno ricevendo fondi e lavorando allo sviluppo della crittografia post-quantum.

Visti i modesti risultati nella realizzazione di computer quantistici finora sembrerebbe uno sforzo non giustificato. Tuttavia i protocolli di firma digitale e di cifratura richiedono anni o perfino decenni di test e validazione pratica.

Quindi non è del tutto sbagliato, anzi è opportuno lavorare oggi per proteggere i nostri dati e le transazioni da computer che potrebbero nascere nei prossimi 10 o 20 anni.

Un caso emblematico è quello di un [algoritmo di crittografia quantum resistant che è stato rotto in pochi minuti](https://mathematical-research-institute.sydney.edu.au/news/quantum-encryption-algorithm-cracked-by-computer-running-magma) da un computer classico. 

Quindi la sfida è duplice, i nuovi algoritmi dovranno essere testati sia contro il computer quantistico che contro il computer classico. 

