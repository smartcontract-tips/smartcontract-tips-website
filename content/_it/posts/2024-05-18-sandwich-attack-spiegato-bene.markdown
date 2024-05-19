---
type: post

title: "Sandwich Attack: Un Esempio pratico, illustrato e spiegato passo per passo"
date: 2024-05-18
layout: post
category: Advanced
math: true
tags:
  - DeFi
  - Sandwich Attack
  - Attack
  - Frontrunning

#image: /pics/fmt-16-9/dora-2.png
---
Il "sandwich attack" è una tipologia di attacco utilizzato nel contesto delle blockchain, in particolare su Ethereum, per sfruttare le transazioni di trading degli utenti. Questo attacco prende di mira le operazioni su piattaforme di finanza decentralizzata (DeFi) come gli exchange decentralizzati (DEX), dove le transazioni vengono trasmesse pubblicamente prima di essere incluse in un blocco. Ecco una descrizione dettagliata di come funziona:
I sandwich attack ricadono nella categoria di azioni [rivolte al MEV](/articoli/mev-la-tassa-nascosta-web3-sue-implicazioni/). 

## Come Funziona un Sandwich Attack


1. **Monitoraggio delle Transazioni**: L'attaccante monitora la mempool (il pool delle transazioni in attesa di essere confermate) per identificare grandi ordini di scambio che potrebbero influenzare il prezzo di un asset.

2. **Transazione di Precedenza (Front-Running)**: Una volta identificata una transazione target, l'attaccante invia una transazione propria, con una commissione più alta, per essere inclusa prima della transazione target. Questa transazione solitamente compra l'asset che sta per essere acquistato dall'utente target.

3. **Transazione Target**: La transazione dell'utente target viene eseguita successivamente. A causa della transazione di front-running, il prezzo dell'asset è aumentato. L'utente target acquista l'asset a un prezzo più alto di quello originariamente previsto.

4. **Transazione di Chiusura (Back-Running)**: Infine, l'attaccante invia un'altra transazione per vendere l'asset acquistato in precedenza a un prezzo più alto, beneficiando dell'aumento di prezzo causato dalla transazione dell'utente target.

## Come funziona nella pratica

Supponiamo che un utente voglia acquistare un certo numero di token su un DEX. La sua transazione viene rilevata nella mempool.

1. **Front-Running**: L'attaccante invia una transazione per acquistare quei token con una commissione più alta, facendo sì che la sua transazione venga inclusa prima di quella dell'utente. Questo aumenta il prezzo dei token.

2. **Transazione dell'Utente**: La transazione dell'utente viene eseguita, acquistando i token a un prezzo maggiorato a causa della transazione dell'attaccante.

3. **Back-Running**: L'attaccante vende immediatamente i token acquistati a un prezzo più alto, realizzando un profitto.

### Impatti del Sandwich Attack

- **Perdite per gli Utenti**: Gli utenti finiscono per pagare di più per i loro acquisti di quanto avessero previsto, subendo perdite finanziarie.
- **Manipolazione del Mercato**: Questi attacchi possono causare manipolazioni dei prezzi nel mercato, rendendo i prezzi degli asset meno stabili e più volatili.
- **Degrado della Fiducia**: Gli utenti possono perdere fiducia nelle piattaforme DeFi se percepiscono che le loro transazioni sono soggette a tali attacchi.

## Mitigazione

Per mitigare i sandwich attack, alcune soluzioni includono:

- **Miglioramento della Privacy delle Transazioni**: Utilizzo di tecniche per nascondere le transazioni fino a quando non vengono confermate.
- **Priorità Basata sul Tempo**: Assegnare priorità alle transazioni in base al tempo di invio piuttosto che alle commissioni.
- **Prevenzione dei Front-Running**: Implementare meccanismi nei DEX che rendano più difficile il front-running delle transazioni.

Va bene, iniziamo con lo stato iniziale della pool con 10 ETH e 30,000 USDT.

## Esempio pratico con un AMM di tipo X*Y=K

Gli AMM di tipo XY=K sono caratterizzati da una gestione della liquidità basata appunto su un'equazione che tiene costante il prodotto delle riserve delle due asset e di conseguenza si aggiusta il rapporto che di fatto rappresenta il prezzo. [Uniswap V2 è un caso esemplare di questo tipo di protocolli](/it/post/uniswap-liquidity-pool-e-impermanent-loss)

### Scenario Iniziale

- Quantità iniziale degli asset nella pool: $ x = 30000 $ USDT e $ y = 10 $ ETH.
- Costante della pool: $ k = x \cdot y = 30000 \cdot 10 = 300000 $.

| Fase     | $ X $ (USDT) | $ Y $ (ETH) | $ \frac{Y}{X} $ (ETH/USDT) | $ \frac{X}{Y} $ (USDT/ETH) | $ k $ |
|----------|----------------|---------------|-----------------------------|-----------------------------|---------|
| Iniziale | 30000          | 10            | 0.000333                    | 3000                        | 300000  |


![xyk iniziale](/pics/posts/sandwich-attack/1.png)

Ecco il diagramma che traccia la curva $ x \cdot y = k $ con il punto iniziale:

- **Initial (Iniziale)**: $ (30000, 10) $

La curva rappresenta la relazione tra USDT (X) ed ETH (Y) mantenendo la costante $ k = 300000 $. Il punto rosso evidenzia lo stato iniziale della pool.

L'attaccante inserisce 1000 USDT nella pool. Dobbiamo ricalcolare i bilanci per mantenere la costante $ k = 300000 $.

### Calcolo

1. Quantità di USDT dopo l'inserimento: $ X = 30000 + 1000 = 31000 $.
2. Dobbiamo trovare la nuova quantità di ETH ($ Y' $) che mantiene $ k = 300000 $:

$$ Y' = \frac{k}{X} = \frac{300000}{31000} \approx 9.677 $$

### Aggiornamento della Tabella

| Fase                | $ X $ (USDT) | $ Y $ (ETH) | $ \frac{Y}{X} $ (ETH/USDT) | $ \frac{X}{Y} $ (USDT/ETH) | $ k $ |
|---------------------|----------------|---------------|-----------------------------|-----------------------------|---------|
| Iniziale            | 30000          | 10            | 0.000333                    | 3000                        | 300000  |
| Dopo front-running  | 31000          | 9.677         | 0.000312                    | 3204.92                     | 300000  |

Adesso aggiorniamo il grafico per includere questo nuovo punto.

![xyk front running](/pics/posts/sandwich-attack/2.png)
1
Ecco il diagramma aggiornato che traccia la curva $ x \cdot y = k $ con i due punti significativi:

1. **Initial (Iniziale)**: $ (30000, 10) $
2. **Post Front-Running (Dopo il Front-Running)**: $ (31000, 9.677) $

Il grafico mostra come i bilanci di USDT ed ETH nella pool cambiano dopo che l'attaccante ha inserito 1000 USDT.

Per calcolare quanti ETH ha acquistato l'attaccante, dobbiamo sottrarre la nuova quantità di ETH nella pool dalla quantità iniziale di ETH.

### Calcolo

- Quantità iniziale di ETH: 10 ETH
- Quantità di ETH dopo l'inserimento di 1000 USDT: 9.677 ETH

Quindi, l'attaccante ha acquistato:

$$ 10 \, \text{ETH} - 9.677 \, \text{ETH} = 0.323 \, \text{ETH} $$

L'attaccante ha acquistato 0.323 ETH inserendo 1000 USDT nella pool.


L'utente inserisce 1000 USDT nella pool. Dobbiamo ricalcolare i bilanci per mantenere la costante $ k = 300000 $.

### Calcolo

1. Quantità di USDT dopo l'inserimento: $ X = 31000 + 1000 = 32000 $.
2. Dobbiamo trovare la nuova quantità di ETH ($ Y'' $) che mantiene $ k = 300000 $:

$$ Y'' = \frac{k}{X} = \frac{300000}{32000} \approx 9.375 $$

### Aggiornamento della Tabella

| Fase                  | $ X $ (USDT) | $ Y $ (ETH) | $ \frac{Y}{X} $ (ETH/USDT) | $ \frac{X}{Y} $ (USDT/ETH) | $ k $  |
|-----------------------|----------------|---------------|-----------------------------|-----------------------------|----------|
| Iniziale              | 30000          | 10            | 0.000333                    | 3000                        | 300000   |
| Dopo front-running    | 31000          | 9.677         | 0.000312                    | 3204.92                     | 300000   |
| Dopo transazione utente| 32000          | 9.375         | 0.000293                    | 3413.33                     | 300000   |

Adesso aggiorniamo il grafico per includere questo nuovo punto.

![xyk user running](/pics/posts/sandwich-attack/3.png)

Ecco il diagramma aggiornato che traccia la curva $ x \cdot y = k $ con i tre punti significativi:

1. **Initial (Iniziale)**: $ (30000, 10) $
2. **Post Front-Running (Dopo il Front-Running)**: $ (31000, 9.677) $
3. **Post User Transaction (Dopo la Transazione dell'Utente)**: $ (32000, 9.375) $

Il grafico mostra come i bilanci di USDT ed ETH nella pool cambiano in corrispondenza delle varie fasi dell'attacco.

Per calcolare quanti ETH ha acquistato l'utente con 1000 USDT, dobbiamo sottrarre la quantità di ETH nella pool dopo la transazione dell'utente dalla quantità di ETH nella pool dopo la transazione dell'attaccante.

### Calcolo

- Quantità di ETH dopo la transazione dell'attaccante: 9.677 ETH
- Quantità di ETH dopo la transazione dell'utente: 9.375 ETH

Quindi, l'utente ha acquistato:

$$ 9.677 \, \text{ETH} - 9.375 \, \text{ETH} = 0.302 \, \text{ETH} $$

L'utente ha acquistato 0.302 ETH inserendo 1000 USDT nella pool.


Ora, l'attaccante rivende gli ETH che aveva comprato (0.323 ETH) nella pool. Dobbiamo ricalcolare i bilanci per mantenere la costante $ k = 300000 $.

### Calcolo

1. Quantità di ETH nella pool prima della vendita: 9.375 ETH.
2. Quantità di ETH venduti dall'attaccante: 0.323 ETH.
3. Nuova quantità di ETH nella pool dopo la vendita: $ Y = 9.375 + 0.323 = 9.698 $ ETH.
4. Dobbiamo trovare la nuova quantità di USDT ($ X' $) che mantiene $ k = 300000 $:

$$ X' = \frac{k}{Y} = \frac{300000}{9.698} \approx 30927.21 $$

L'attaccante riceve quindi:

$$ 32000 \, \text{USDT} - 30927.21 \, \text{USDT} = 1072.79 \, \text{USDT} $$

### Aggiornamento della Tabella

| Fase                   | $ X $ (USDT) | $ Y $ (ETH) | $ \frac{Y}{X} $ (ETH/USDT) | $ \frac{X}{Y} $ (USDT/ETH) | $ k $  |
|------------------------|----------------|---------------|-----------------------------|-----------------------------|----------|
| Iniziale               | 30000          | 10            | 0.000333                    | 3000                        | 300000   |
| Dopo front-running     | 31000          | 9.677         | 0.000312                    | 3204.92                     | 300000   |
| Dopo transazione utente| 32000          | 9.375         | 0.000293                    | 3413.33                     | 300000   |
| Dopo back-running      | 30927.21       | 9.698         | 0.000313                    | 3190.36                     | 300000   |

Adesso aggiorniamo il grafico per includere questo nuovo punto.
![xyk back running](/pics/posts/sandwich-attack/4.png)
Ecco il diagramma aggiornato che traccia la curva $ x \cdot y = k $ con i quattro punti significativi:

1. **Initial (Iniziale)**: $ (30000, 10) $
2. **Post Front-Running (Dopo il Front-Running)**: $ (31000, 9.677) $
3. **Post User Transaction (Dopo la Transazione dell'Utente)**: $ (32000, 9.375) $
4. **Post Back-Running (Dopo il Back-Running)**: $ (30927.21, 9.698) $

### Conclusioni

- **Costo per l'Utente**: L'utente ha speso 1000 USDT per acquistare 0.302 ETH.
- **Profitto per l'Attaccante**: L'attaccante ha speso 1000 USDT per acquistare 0.323 ETH e ha venduto 0.323 ETH per 1072.79 USDT. Profitto netto: $ 1072.79 - 1000 = 72.79 $ USDT.

Il grafico mostra chiaramente l'impatto delle azioni dell'attaccante e dell'utente sulla pool di liquidità.

## Referenze esterne

[https://mirror.xyz/totlsota.eth/9JaNkZ1XQfQD6Y79aLYHC_kb_dSBoJ2JYiag5BuGGM8](https://mirror.xyz/totlsota.eth/9JaNkZ1XQfQD6Y79aLYHC_kb_dSBoJ2JYiag5BuGGM8)

[https://flipsidecrypto.xyz/Madi/sandwich-attacks-on-uniswap-v-2-uniswap-v-3-WnKYt7](https://flipsidecrypto.xyz/Madi/sandwich-attacks-on-uniswap-v-2-uniswap-v-3-WnKYt7)



