---
title: Bitcoin e il computer quantistico
date: 2026-12-15
image: https://monetadigitale.wordpress.com/wp-content/uploads/2018/02/structure-light-led-movement-158826.jpeg?w=1024
tags: ["bitcoin","quantum"]
excerpt: ""
layout: post
---

Siamo tutti coscienti che il computer quantistico stravolgerà molte delle convinzioni che noi utenti e professionisti del settore ICT abbiamo faticosamente costruito in questi anni. Il problema iniziale è che molti di noi, almeno io di sicuro non hanno la minima idea di che cosa sia un computer quantistico. Il mio amico Mo Haghighi mi spedisce una foto dalla conferenza INDEX dove ecco un bel computer quantistico in bella esposizione. Un po' come i primi grossi calcolatori allo SMAU oltre trent'anni fa.

![dwmkwnix0aye55v](https://monetadigitale.wordpress.com/wp-content/uploads/2018/02/dwmkwnix0aye55v.jpg?w=342&h=342)

Ma intanto come funziona? Premetto che io ho pure studiato Fisica dello stato solido e sapevo pure risolvere l'equazione di Schroedinger nella buca di potenziale e in altri casi topici. Tuttavia il computer quantistico non è roba che si studiava in ingegneria ai miei tempi.

Sfogliando wikipedia mi sono imbattuto in alcune pagine dedicate al tema e sono finito su questi principi

1.  [No-cloning](https://href.li/?https://it.wikipedia.org/wiki/Teorema_di_no-cloning_quantistico "Teorema di no-cloning quantistico"): l'[informazione quantistica](https://href.li/?https://it.wikipedia.org/wiki/Informazione_quantistica "Informazione quantistica") non può essere **copiata** con fedeltà assoluta, e quindi neanche **letta** con fedeltà assoluta. ([William Wootters](https://href.li/?https://it.wikipedia.org/w/index.php?title=William_Wootters&action=edit&redlink=1 "William Wootters (la pagina non esiste)"), [1982](https://href.li/?https://it.wikipedia.org/wiki/1982 "1982")).
2.  L'[informazione quantistica](https://href.li/?https://it.wikipedia.org/wiki/Informazione_quantistica "Informazione quantistica") può invece essere **trasferita** con fedeltà assoluta, a patto che l'originale venga distrutto nel processo.
3.  **Ogni misura** compiuta su di un sistema quantistico **distrugge** la maggior parte dell'informazione, lasciandolo in uno [stato base](https://href.li/?https://it.wikipedia.org/wiki/Stato_quantico "Stato quantico"). L'informazione distrutta non può essere recuperata.

Mi viene subito in mente la scarsità digitale imposta dalle criptovalute. Il fatto che l'informazione possa essere trasferita in modo fedele solo se l'originale viene distrutto mi pare un principio sul quale nel futuro forse potremmo costruire il **Bitcoin quantistico**. Pensa che bello, double spending praticamente risolto senza avere nessuna blockchain in giro, l'universo fa la proof-of-work grazie alle leggi naturali del mondo atomico.

### **Ma non è di questo quello di cui parliamo oggi**

Oggi parliamo di perché Bitcoin e le altcoin sono potenzialmente vittime del computer quantistico. L'origine di tutti i mali è [l'algoritmo di fattorizzazione di Shor](https://href.li/?https://it.wikipedia.org/wiki/Algoritmo_di_fattorizzazione_di_Shor)

Questo algoritmo serve a calcolare i fattori che compongono un numero, ed invece di usare i bit e byte, è basato sull'uso dei qbit, questi meravigliosi oggetti del pensiero che come i bit valgono 0 oppure 1, ma che finché non li vai a misurare con un qualche metodo fisico sono in teoria una combinazione lineare di 0 e 1, anzi di |0>  e |1> e quindi possono assumere tutti i valori possibili con precisione infinita. Ovvero un solo qbit potrebbe rappresentare un numero con infinite cifre decimale, e quindi di fatto tutto lo scibile umano. Peccato che appena cerchi di leggerlo questo qbit decide se vale 1 o vale 0. Esattamente come il gatto di Schroedinger che è morto e vivo nello stesso tempo.

Tuttavia queste proprietà possono essere usate nei calcoli, non posso approfondire qui e non per mancanza di spazio ma perché semplicemente ancora non lo so nemmeno io 🙂

La cosa simpatica di questo algoritmo è che riesce a fare in un tempo abbastanza breve quello che i computer classici fanno in un tempo *O*(√*n*). Per la precisione dato un numero **n** bello lungo, per trovare i suoi fattori con il computer classico ci metto un numero di calcoli pari a radice di **n** mentre con il computer quantistico ci metto **log(n) * log(log(n))* log(log(log(n)))**

### ASPETTA!!! MI SONO PERSO!

Facciamo un esempio se voglio fattorizzare il numero RSA-768

RSA-768 = 1230186684530117755130494958384962720772853569595334792197322452151726400507263657518745202199786469389956474942774063845925192557326303453731548268507917026122142913461670429214311602221240479274737794080665351419597459856902143413

Con il metodo classico ci metto (sono 232 cifre) all'ingrosso 10^115 istruzioni elementari (1 con 115 zeri a seguire). Se ipotizziamo una CPU che esegue circa 10 miliardi di operazioni al secondo ci metteremo in brute force semplice circa **10^97** anni. In realtà questo numero è stato fattorizzato nel 2009 e ci sono voluti due anni, i cervelli di Thorsten Kleinjung, Kazumaro Aoki, Jens Franke, Arjen K. Lenstra, Emmanuel Thomé, Pierrick Gaudry, Alexander Kruppa, Peter Montgomery, Joppe W. Bos, Dag Arne Osvik, Herman te Riele, Andrey Timofeev e Paul Zimmermann e anche una rete di computer e di calcolo che equivalgono a 2000 anni di esecuzione su un AMD Opteron a 2.2GHz. Il risultato essenziale per l'umanità è:

RSA-768 =
33478071698956898786044169848212690817704794983713768568912431388982883793878002287614711652531743087737814467999489
*
36746043666799590428244633799627952632279158164343087642676032283815739666511279233373417143396810270092798736308917

### Quanto ci avrebbe messo il computer quantistico?

Ci avrebbe messo circa log(n) * log(log(n))* log(log(log(n))) dove n è un numero a 230 cifre. Ovvero all'incirca 3 milioni di "istruzioni" qualunque cosa questo voglia dire nella complessità di calcolo di un Quantum Computer. Se anche facesse SOLO 100 istruzioni al secondo **nel giro di pochi giorni avrebbe finito**.

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

In realtà solo 15 e 21 sono stati fattorizzati con l'algoritmo di Shor, e su 21 ci sarebbero comunque diverse contestazioni sul metodo non proprio Shor ortodosso. **I numeri più grossi sono stati fattorizzati con delle tecniche din minimizzazione che in realtà funzionerebbero anche sui computer classici** e quindi **non ci sarebbe nessun vantaggio ad eseguirle in computer quantistici.**

![quantum factorization](https://scx2.b-cdn.net/gfx/news/hires/2014/quantumfacto.jpg)

Da notare come per passare da 15 = 3 x 5 a 21 = 3 x 7 ci siano voluti 11 anni. Però si sa, questi processi non sono lineari. Basta una trovata geniale e qui ci troviamo RSA-2048 craccato in dieci minuti. In realtà secondo [qualcuno](https://href.li/?https://www.youtube.com/watch?v=wWHAs--HA1c) molto più esperto di me

> "It is likely that a quantum computer will break RSA2048 in a matter of hours by 2030 and with an investment on $1B"

### Ma cosa c'entra tutto ciò con Bitcoin?

C'entra moltissimo perché Bitcoin è basato sulla crittografia a chiave pubblica, ovvero sul fatto che le transazioni siano firmate digitalmente usando un algoritmo di cifratura chiamato ECDSA. Ora, va precisato che ECDSA non è RSA e che se RSA è basato sul principio che posso usare due grossi numeri primi p e q, moltiplicarli fra loro n = p*q ed usare n come modulo per delle operazioni fra interi che permettono cifratura e decifratura di qualunque messaggio. Quindi la fattorizzazione non rompe immediatamente anche ECDSA ma questo è vulnerabile ad una variante dell'algoritmo di Shor studiata per il "discrete logarithm problem on elliptic curves".

Quindi **il quantum computer potrebbe fare a pezzi la crifratura e dunque falsificare le firme digitali con le quali le transazioni Bitcoin vengono firmate e validate**.

Al contrario l'algoritmo di hashing SHA-256 non sembra essere vulnerabile. Magari sarà necessario passare da un output a 256 bit ad uno a 2048, ma in sostanza non sarà disturbato dal quantum computer.

### Post-Quantum Cryptography

Per fortuna non tutto è perduto. Infatti esistono già dei sistemi di cifratura che sembrano robusti alla computazione quantistica. Gogolando ne ho trovato almeno tre:

[Lattice systems](https://href.li/?https://en.wikipedia.org/wiki/Lattice-based_cryptography): basati su combinazioni lineari di vettori non sui vestitini al lattice ... qui mi fermo.

[McEliece cryptosystems](https://href.li/?https://en.wikipedia.org/wiki/McEliece_cryptosystem): basati su teoria dei codici, che richiederebbe di riesumare i nostri ricordi di Comunicazioni Elettriche del quarto anno di ingegneria elettronica

[Hash based cryptography](https://href.li/?https://en.wikipedia.org/wiki/Hash-based_cryptography): raccomandati dalla Commissione Europea come sistemi di protezione post-quantum

Post-Quantum Cryptocurrencies
-----------------------------

Naturalmente non potevano mancare nel novero delle migliaia di altcoin quelle che già si dichiarano quantum-resistant. Una è Iota che usa la hash-based cryptography e altre due che ho trovato in giro sono Mochimo e QRL.

---

Se ti è piaciuto l'articolo potresti scaricare il mio Kindle ebook [Dagli Smart Contract alle ICO.![Screenshot 2017-10-25 21.22.57](https://monetadigitale.wordpress.com/wp-content/uploads/2017/10/screenshot-2017-10-25-21-22-57.png?w=167&h=287)](https://href.li/?http://amzn.eu/j95TnCq)

Oppure in alternativa mettere un mi piace alla [Facebook page](https://href.li/?https://www.facebook.com/digitaldavide)

Ultima raccomandazione: **niente di quello che scrivo è un invito ad investire i tuoi soldi, è al massimo un invito a conoscere la tecnologia sottostante. **