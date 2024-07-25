---
title: "Emissione di Bond Digitale su Blockchain da parte di CDP: Un'Analisi Critica"
layout: post
date: 2024-07-19 
last_modified: 2024-07-24
type: post
category: News
tags: [bond, dlt, polygon, cdp, intesa-sanpaolo, banking]
toc: true
image: /pics/commons/robo-bank.webp

---
![cover image](/pics/commons/robo-bank.webp)
La Cassa Depositi e Prestiti (CDP) [ha recentemente annunciato](https://group.intesasanpaolo.com/en/newsroom/press-releases/2024/07/cdp-successfully-issues-its-first-digital-bond-on-blockchain-int) l'emissione del suo primo bond digitale sulla blockchain, con Intesa Sanpaolo come sottoscrittore principale. Questa notizia rappresenta un passo avanti nell'adozione delle tecnologie blockchain nel settore finanziario italiano, ma restano anche alcune domande riguardo all'esecuzione e alle motivazioni dietro questa operazione.

{% include infobox.html message="UPDATE: a seguito di alcuni chiarimenti ottenuti attraverso l'interazione con i nostri lettori abbiamo aggiornato il testo con alcune informazioni di cui non eravamo inizialmente al corrente " %}


## Dettagli dell'Operazione
L'emissione del bond digitale da parte di CDP presenta alcune caratteristiche chiave:

| **Caratteristica**        | **Dettaglio**                     |
|---------------------------|-----------------------------------|
| **Valore nominale**       | 25 milioni di euro                |
| **Pricing Date**          | 18 luglio 2024                    |
| **Data di Regolamento**   | 18 luglio 2024 (T+0)              |
| **Scadenza**              | 18 novembre 2024                  |
| **Unica Cedola**          | Cedola fissa del 3,633% annuo     |
| **Rating**                | A-2 (S&P), F-2 (Fitch), S-2 (Scope)|
| **Legge applicabile**     | Italiana                          |
| **Blockchain**            | Polygon                           |

## Registro CONSOB degli Operatori DLT


La struttura del registro è regolata dal cosiddetto decreto fintech recante: [«Disposizioni urgenti in materia di emissioni e circolazione di determinati strumenti finanziari in forma digitale e di semplificazione della sperimentazione FinTech.»](https://www.gazzettaufficiale.it/eli/id/2023/05/15/23A02825/sg). Talmente **Urgenti** che a distanza di un anno dall'entrata in vigore, secondo una veloce ispezione sul sito consob, CDP risulta attualmente l'unica entità registrata nel registro CONSOB degli operatori DLT. 

- **Sezione 1 e 2**: Riservate a banche o intermediari vigilati dalla Banca d'Italia.
- **Sezione 3**: Per soggetti che emettono bond e mantengono il proprio registro contabile.
- **Sezione 4**: Categoria residuale per soggetti non rientranti nelle sezioni precedenti.
- **Sezione 5**: Per operatori di mercati finanziari già autorizzati secondo altri regolamenti europei.



#### La Tecnologia Blockchain: Polygon vs Algorand
Un aspetto interessante riguarda la scelta della blockchain utilizzata. Il protocollo TIPS T2 della Banca d'Italia, è ben documentato da una [poderosa pubblicazione e viene descritto come sviluppato su Algorand](https://www.bancaditalia.it/pubblicazioni/mercati-infrastrutture-e-sistemi-di-pagamento/approfondimenti/2022-026/N.26-MISP.pdf), sembra essere stato sostituito da Polygon per questa emissione. A parte che sarebbe interessante comprendere le ragioni che hanno guidato la scelta di Algorand nella sperimentazione e quella di Polygon per la messa in produzione, ci sarebbe anche da capire:

- **Trasparenza**: A quale address possiamo visualizzare la transazione sulla blockchain di Polygon?




- **Sicurezza**: È stato utilizzato uno smart contract per questa emissione? Se sì, il codice è accessibile per la verifica?

- **Efficienza**: Quali sono i vantaggi dimostrati dall'utilizzo di Polygon rispetto ad Algorand o rispetto a qualunque altra soluzione di blockchain pubblica (ad esempio Ethereum direttamente)?

## Come Funziona la Soluzione “TIPS Hash Link” della Banca d'Italia

La Banca d'Italia ha sviluppato una soluzione  chiamata “TIPS Hash Link” per integrare la tecnologia blockchain nel sistema dei pagamenti. 

**Funzionamento di TIPS Hash Link**:
1. **Integrazione Leggera**: secondo la documentazione TIPS Hash Link è un protocollo leggero, basato su API e indipendente dalla DLT, che permette un'integrazione a basso accoppiamento tra le infrastrutture di mercato e la maggior parte delle piattaforme DLT.
2. **Ispirazione HTLC**: Ispirato ai contratti Hash-Time Locked (HTLC), è stato progettato per, riportiamo il testo "superare alcuni scenari di errore comunemente sperimentati con HTLC".
3. **Ruolo di TIPS**: TIPS funge da garante per i fondi, utilizzando uno smart contract per coordinare le operazioni del DvP (Delivery versus Payment) sulla DLT in modo sicuro e consistente.

La soluzione consente una sincronizzazione sicura delle transazioni di pagamento e consegna (DvP), garantendo trasparenza e tracciabilità attraverso l'utilizzo combinato di TIPS e blockchain.

#### Punti chiave (era: Domande Aperte)

Per riassumere:

- **Motivazioni**: Perché è stato emesso questo bond digitale? Quali sono i vantaggi concreti per gli investitori e per l'emittente?

{% include infobox.html message="A seguito delle successive informazioni raccolte possiamo concludere che le motivazioni per tale operazione siano comunque valide in quanto per la prima volta delle istituzioni bancarie italiane sperimentano non tanto l'aspetto tecnico, ma quello normativo. Di conseguenza auspichiamo che questo tipo di esperimenti possa portare all'attenzione del legislatore eventuali limiti o incongruenze della normativa per rendere l'accesso al mercato dei capitali più semplice anche per le PMI." %}

- **Accessibilità**: La transazione è visibile pubblicamente? Come possiamo verificare la sua esistenza e autenticità sulla blockchain?

L'indirizzo dello smart contract del bond è:

[https://polygonscan.com/token/0x12e6ba31684566d91347a33cb38dceb65977db2c
](https://polygonscan.com/token/0x12e6ba31684566d91347a33cb38dceb65977db2c)

- **Sicurezza**: Quali misure di sicurezza sono state implementate? Possiamo accedere e verificare il codice dello smart contract utilizzato?

{% include infobox.html message="A parte evincere che implementa alcune specifiche ERC-20, da cui possiamo ricavare il supply e le decimal digits, non è possibile visionare il codice sorgente. Riteniamo che sarebbe stato interessante poterlo ispezionare, a quanto pare tale disclosure pubblica non è stata prevista, mentre sono state previste una serie di misure di audit di sicurezza all'interno della piattaforma che implementa il sistema." %}


## Considerazioni Finali e Ringraziamenti
L'emissione del bond digitale da parte di CDP, con Intesa Sanpaolo come sottoscrittore, rappresenta un'innovazione interessanta nel panorama finanziario italiano. 
Restiamo in attesa di vederne gli sviluppi e ribadiamo la nostra raccomandazione, ovvero che le informazioni ed **il codice sorgente** siano sempre accessibili e verificabili per garantire fiducia e sicurezza nell'adozione delle tecnologie blockchain nel settore finanziario.

*Ringrazio [Marco Lodi](https://www.linkedin.com/in/mlodi/) per il link alla transazione.*


## Referenze
Per ulteriori dettagli, puoi consultare i seguenti link:

- [Comunicato Stampa di Intesa Sanpaolo](https://group.intesasanpaolo.com/en/newsroom/press-releases/2024/07/cdp-successfully-issues-its-first-digital-bond-on-blockchain-int)
- [Registro CONSOB degli Operatori DLT](https://www.consob.it/c/portal/layout?p_l_id=1455121&p_v_l_s_g_id=0)
- [Informazioni su TIPS T2](https://www.bancaditalia.it/compiti/sistema-pagamenti/target2/index.html)
- [Documento della Banca d'Italia su TIPS Hash Link](https://www.bancaditalia.it/pubblicazioni/mercati-infrastrutture-e-sistemi-di-pagamento/approfondimenti/2022-026/N.26-MISP.pdf)
