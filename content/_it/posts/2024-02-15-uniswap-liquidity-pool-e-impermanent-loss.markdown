---
layout: post
title: "Uniswap Liquidity Pool e Impermanent Loss: Cosa c'è da Sapere"
date: 2024-02-15 
last_modified: 2024-04-26
type: post

math: true

category: Basic

tags: 
    - Uniswap
    - DeFi
---
Le liquidity pool permettono a chiunque di diventare una specie di azionista di un exchange e ricavare delle commissioni dagli scambi effettuati dagli utenti.
Questa possibilità potrebbe essere remunerativa, ma al tempo stesso comporta dei rischi. Non si tratta tanto del rischio di perdere il capitale, quanto piuttosto del rischio che parcheggiare dei fondi dentro una liquidity pool possa rendere meno di quanto renderebbe tenerli nel proprio wallet. Questo tipo di perdite si chiamano “impermanent loss” e sono in qualche modo specifiche per questa categoria di prodotti.


## Uniswap è un sistema Automated Market Maker

A differenza degli order book tradizionali, gli AMM non si affidano alla presenza fisica di ordini di acquisto e vendita inseriti dagli utenti per determinare il prezzo di un asset. Piuttosto, utilizzano un algoritmo predefinito che gestisce automaticamente il rapporto tra gli asset in uno scambio, solitamente due, ma potenzialmente anche più. Questo sistema permette di determinare il prezzo di un asset indipendentemente dalla presenza diretta di una controparte venditrice, semplificando notevolmente il processo di scambio.

Rispetto agli exchange centralizzati, gli scambi su liquidity pool aprono ad una serie di nuove possibilità. Ad esempio, ognuno di noi può diventare un liquidity provider inserendo nuova liquidità in una pool e guadagnare delle commissioni sugli scambi effettuati dai trader. Questo permette a chiunque di sentirsi in qualche modo “proprietario” di un pezzettino di un exchange.
Infatti, se aggiungendo un 10% alla liquidità complessiva della pool avrò diritto al 10% di tutte le commissioni.

## Uniswap v2 e la curva XYK

L'algoritmo di Uniswap è un brillante esempio di come la finanza decentralizzata (DeFi) utilizza concetti matematici per creare mercati liquidi e autoregolati senza necessità di intermediari. Per spiegare come funziona, partiamo dall'esempio citato e lo analizziamo passo dopo passo.

### Concetti Base

Uniswap si basa su un modello matematico semplice ma efficace, noto come "Constant Product Market Maker" (CPMM). L'idea è mantenere costante il prodotto delle quantità di due asset in una pool di liquidità. Questo è espresso dalla formula:
$$ x \times y = k $$


dove:
- $$x$$ è la quantità del primo asset (ad esempio, ether),
- $$y$$ è la quantità del secondo asset (ad esempio, dai),
- $$k$$ è una costante.

### Esempio Pratico

Nel nostro esempio, iniziamo con una pool che contiene $$ 10 $$ ether e  $$ 10000 $$ dai. La costante $$ k $$ viene calcolata moltiplicando queste due quantità:

$$ 10 \times 10000 = 100000 $$

Questo significa che il valore del prodotto delle quantità di ether e dai nella pool deve rimanere costante a $$ 100000 $$.

### Operazioni di Scambio

Supponiamo ora che un trader voglia estrarre $$ 2 $$ ether dalla pool. Per mantenere l'equilibrio (e quindi la costante $$ k $$), il trader deve aggiungere una quantità adeguata di dai alla pool. Dopo l'operazione, la quantità di ether nella pool diminuirà a $$ 8 $$ (da $$ 10 $$), quindi dobbiamo trovare il nuovo valore di $$ y $$ (dai) che mantiene la costante $$ k $$ inalterata.

Il trader vuole portare via $$ 2 $$ ether, quindi l'equazione diventa:

$$ 8 \times y = 100000 $$

Per risolvere per $$ y $$, dividiamo entrambi i lati per $$ 8 $$:

$$ y = \frac{100000}{8} = 12500 $$

Ciò significa che per mantenere la costante $$ k $$, la quantità di dai nella pool deve aumentare fino a $$ 12500 $$ dopo che il trader ha estratto $$ 2 $$ ether. Di conseguenza, il trader deve inserire $$ 2500 $$ dai per estrarre $$ 2 $$ ether, portando il prezzo medio dell'ether a $$ 1250 $$ dai per ether.

![curva xyk di Uniswap v2](/assets/images/xyk.png)


### Implicazioni

L'algoritmo di Uniswap regola automaticamente il prezzo degli asset in base alla loro disponibilità relativa nella pool, seguendo una curva iperbolica. Quando la quantità di un asset diminuisce (diventando più scarso), il suo prezzo aumenta. Al contrario, quando la quantità di un asset aumenta (diventando più abbondante), il suo prezzo diminuisce.

Questo meccanismo incentiva gli utenti a contribuire alla liquidità della pool e a mantenere l'equilibrio del mercato, poiché le discrepanze di prezzo rispetto ad altri mercati creano opportunità di arbitraggio che tendono a riportare il sistema verso l'equilibrio.

Ecco la rappresentazione grafica della curva di Automated Market Maker (AMM) di Uniswap. Questo grafico mostra la relazione iperbolica tra la quantità di Ether e la quantità di DAI nella pool di liquidità, mantenendo costante il prodotto $$k$$. Come si può notare, quando la quantità di Ether aumenta, la quantità di DAI necessaria per mantenere la costante $$k$$ diminuisce, e viceversa, evidenziando come il prezzo di uno asset varia in maniera inversamente proporzionale alla sua disponibilità nella pool.

# Impermanent Loss: Esempio

Per illustrare meglio il concetto di funzionamento degli Automated Market Makers (AMM) e l'impatto dei cambiamenti di prezzo sull'equilibrio della pool, possiamo riassumere l'esempio fornito in una tabella riassuntiva:

| Stato               | Quantità di Ether | Quantità di DAI | Valore Totale in DAI | Note                                                    |
|---------------------|-------------------|-----------------|----------------------|---------------------------------------------------------|
| Inizio              | 1 Ether           | 1000 DAI        | 2000 DAI             | Prezzo iniziale di Ether = 1000 DAI                     |
| Dopo aumento prezzo | 0.5 Ether         | 2000 DAI        | 4000 DAI             | Prezzo di Ether aumenta a 4000 DAI                      |
| Senza creazione pool| 1 Ether           | 1000 DAI        | 5000 DAI             | Valore se tenuto senza creare la pool, con Ether a 4000 DAI|

**In questo esempio abbiamo perso $1000**

Questa tabella mostra chiaramente come la creazione di una pool AMM e le variazioni di prezzo influenzano il valore del capitale investito. Inizialmente, l'investimento totale vale 2000 DAI (considerando il prezzo di 1 Ether uguale a 1000 DAI). Tuttavia, se il prezzo di Ether aumenta a 4000 DAI, l'equilibrio della pool si modifica per mantenere la parità di valore, risultando in 0.5 Ether e 2000 DAI, il che porta il valore totale della partecipazione nella pool a 4000 DAI. Questo è inferiore al valore che si avrebbe mantenendo l'Ether fuori dalla pool, che sarebbe di 5000 DAI data la valorizzazione individuale dei componenti (1 Ether a 4000 DAI più 1000 DAI in contanti).

## Cosa cambia da Uniswap v2 a Uniswap v3? La 'concentrated liquidity'

La principale differenza introdotta da Uniswap v3 riguarda la curva di prezzo xy=k utilizzata per gli scambi.

Nella versione precedente di Uniswap (v2), la liquidità fornita dai liquidity provider (LP) doveva coprire l'intero range di prezzo da 0 a infinito, seguendo la formula xy=k.

Ciò significava che gran parte della liquidità rimaneva inutilizzata, in quanto gli scambi effettivi avvenivano solo in una porzione limitata del range di prezzo. 

Con Uniswap v3, i LP possono ora fornire liquidità su range di prezzo molto più ristretti, ad esempio tra $1.900 e $2.100.

Questa caratteristica si chiama **Concentrated Liquidity**

## Maggior efficienza di capitale per Uniswap v3

Questo permette di aumentare l'efficienza del capitale utilizzato, in quanto una porzione molto maggiore della liquidità fornita viene effettivamente impiegata per gli scambi.

In pratica, invece di avere un'unica curva xy=k su tutto il range di prezzo, in Uniswap v3 si hanno più "curve virtuali" all'interno di range di prezzo specifici definiti dai LP.

![uniswap v3 Vs v2](/pics/posts/uniswapv3-curve.png)

Questa maggiore flessibilità e granularità nella gestione della liquidità è uno dei principali miglioramenti introdotti dalla versione 3 di Uniswap.

## L'impermanent loss di Uniswap v3 è peggiorata rispetto alla v2

l'impermanent loss in Uniswap V3 è peggiorata rispetto alla versione precedente, Uniswap V2. 

Secondo [uno studio recente](https://it.cointelegraph.com/news/half-of-uniswap-v3-liquidity-providers-are-losing-money-new-research), il 49,5% dei fornitori di liquidità su Uniswap V3 ha subito rendimenti negativi a causa dell'impermanent loss.

Rispetto a Uniswap V2, Uniswap V3 consente una maggiore concentrazione della liquidità in specifici range di prezzo. **Questo aumenta il rischio di impermanent loss**, poiché i fornitori di liquidità sono più esposti alle fluttuazioni di prezzo al di fuori del loro range.



Link utili:

- [https://blog.uniswap.org/uniswap-v3-math-primer-2](https://blog.uniswap.org/uniswap-v3-math-primer-2)
- [https://blog.uniswap.org/uniswap-v3-math-primer](https://blog.uniswap.org/uniswap-v3-math-primer)

