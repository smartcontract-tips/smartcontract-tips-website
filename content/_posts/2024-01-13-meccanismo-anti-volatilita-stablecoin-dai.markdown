---
layout: post
title: Qual'è il meccanismo anti-volatilità usato dalla stablecoin DAI
date: 2024-01-13 10:59:49.000000000 +01:00

category: In-Depth
slug: dai

excerpt: Il meccanismo anti-volatilità usato dalla stablecoin DAI è basato sul principio di generazione del token a fronte di un deposito di altri asset volatili dentro uno smart contract. Il deposito deve essere sovra-collateralizzato per garantire la stabilità ed i liquidatori sono i soggetti con appetito di rischio tale da acquisire gli asset volatili posti a garanzia della stablecoin.
permalink: "/articoli/meccanismo-anti-voltalitita-stablecoin-dai"
image: /assets/images/dai.png
author: davide

---

![dai logo](/assets/images/dai.png)

La stablecoin DAI è stata creata dalla MakerDAO, un'organizzazione autonoma decentralizzata (DAO). Il protocollo alla base di DAI, noto come Maker Protocol, è stato sviluppato da Rune Christensen, co-fondatore della MakerDAO. Il protocollo Maker consente a chiunque di produrre la stablecoin DAI utilizzando una varietà di criptovalute come collaterale. Questo approccio decentralizzato e basato su Ethereum rende DAI unica tra le stablecoin, in quanto è sostenuta non da valuta fiat, ma da posizioni debitorie collaterali in criptovalute.

## Come funziona la stablecoin DAI

DAI è una stablecoin cripto-collateralizzata, il che significa che ogni token DAI è garantito da un collaterale in criptovaluta, principalmente Ethereum (ETH), bloccato in contratti intelligenti all'interno del Maker Protocol, conosciuti come Maker Vaults. 

MakerDAO, un'organizzazione autonoma decentralizzata (DAO), governa il Maker Protocol. I membri del MakerDAO votano per determinare i parametri come il tasso di stabilità, la penale di liquidazione, il DSR, il tetto del debito e altro ancora. Inoltre, i membri del MakerDAO approvano gli asset per i depositi nei Maker Vaults e il rapporto di liquidazione di nuovi asset

<style>
.info {
  background-color: lightcyan;
  padding: 25px;
}
</style>


{% include related.html message="Per approfondire la stablecoin DAI segui il link" slug="guida-stablecoin" %}


Per generare DAI, gli utenti depositano la loro criptovaluta in questi vault, ricevendo in cambio DAI​​​​​​. 

![maker dao valuation](/assets/images/maker-dao-valuation.webp)
*Make DAO Valuation [(source Messari)](https://messari.io/article/makerdao-valuation)*

## Rapporto di liquidazione

Ogni vault DAI ha un rapporto di liquidazione che dipende dalla volatilità dell'asset depositato come collaterale. Se il valore del collaterale scende al di sotto di una certa soglia (generalmente il 150% del valore del debito), il meccanismo di liquidazione si attiva e gli asset nel vault vengono messi all'asta per coprire il valore del DAI preso in prestito e una penale di liquidazione​.

La sovracollateralizzazione di DAI si riferisce al requisito che gli utenti depositino una quantità di criptovaluta, tipicamente Ethereum (ETH), come collaterale in un valore che supera il valore del DAI che desiderano generare. Questo processo è fondamentale per il funzionamento del sistema DAI e garantisce la stabilità della stablecoin. Il valore del collaterale depositato deve essere significativamente più alto del valore del DAI che l'utente desidera generare. Ad esempio, se il rapporto di collateralizzazione richiesto è del 150%, significa che per ogni $100 di DAI generati, l'utente deve depositare almeno $150 in valore di ETH

# Cos'è il tasso di stabilità di DAI

Per ritirare il collaterale da un Maker Vault, è necessario rimborsare il DAI "generato" dalla vault più un tasso di stabilità, che funziona come un tasso di interesse annuale. Queste fee, insieme alle penali di liquidazione, vengono depositate in un fondo di debito del protocollo chiamato Maker Buffer

# Il ruolo degli oracoli nella stabilizzazione di DAI

La Maker Vault determina il valore dei suoi collaterali attraverso l'uso di "oracoli". Gli oracoli sono meccanismi che forniscono informazioni esterne, come i prezzi di mercato, ai contratti intelligenti sulla blockchain. Nel contesto del Maker Protocol, gli oracoli giocano un ruolo fondamentale per garantire che il valore dei collaterali sia sempre aggiornato e accurato

Per garantire la sicurezza e ridurre il rischio di manipolazione dei prezzi, il Maker Protocol utilizza un insieme diversificato di oracoli e metodi di aggregazione dei dati. Questo aiuta a prevenire problemi come il single point of failure o l'esposizione a manipolazioni di mercato.

Il **Modulo di Sicurezza degli Oracoli** (Oracle Security Module, OSM) introduce un ritardo (ad esempio, un'ora) nell'applicazione dei nuovi prezzi al sistema. Questo ritardo consente alla comunità di reagire a eventuali anomalie o tentativi di manipolazione del prezzo prima che influenzino il sistema.


<style>
.reflink {
  background-color: lightgrey;
  padding: 25px;
}
.sponsored-button {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    background-color: darkorange;
    color: white;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
}

.sponsored-button:hover {
    background-color: #0056b3;
    color: white;
    text-decoration: none;
}
</style>
<div class="reflink">
<p><b>📚 Consigli di lettura</b></p>
<img src="https://m.media-amazon.com/images/I/71SniqxeWvL._SY466_.jpg" width="120px">
<a href="https://amzn.to/48PmbQ8" class="sponsored-button" target="_blank" rel="sponsored">Go to Amazon</a>
<p>Di Edoardo Porrato <i>...questo testo ha l'obiettivo di accompagnare il lettore in un percorso attraverso la consapevolezza finanziaria e l'illustrazione delle principali forme di investimento in ambito Decentralized Finance (DeFi)...</i></p>
</div>



## Opportunità di guadagno con DAI

Sì, è possibile guadagnare agendo come liquidatore nel sistema di criptovalute, in particolare in piattaforme come il Maker Protocol che gestisce la stablecoin DAI. I liquidatori svolgono un ruolo cruciale nel mantenimento della stabilità del sistema, ed ecco come possono guadagnare:

1. **Processo di Liquidazione**: Quando il valore del collaterale in un Maker Vault scende al di sotto del rapporto di liquidazione richiesto (ad esempio, a causa di un calo del prezzo della criptovaluta usata come collaterale), il sistema inizia automaticamente un processo di liquidazione. Questo processo prevede la vendita del collaterale per coprire il debito in DAI e le eventuali penali.

2. **Ruolo dei Liquidatori**: I liquidatori sono attori (solitamente automatizzati) che monitorano il sistema in cerca di vault che sono diventati sotto-collateralizzati e quindi soggetti a liquidazione. Quando identificano un vault che può essere liquidato, possono acquistare il collaterale in vendita a un prezzo inferiore al
suo valore di mercato.

3. **Opportunità di Profitto**: Il guadagno per i liquidatori deriva dalla differenza tra il prezzo di acquisto del collaterale durante la liquidazione e il suo valore di mercato. Idealmente, i liquidatori possono rivendere il collaterale acquistato a un prezzo più alto sul mercato, ottenendo così un profitto.

Naturalmente trovare le opportunità di guadagno in modo manuale non è praticamente possibile, a questo scopo bisogna implementare degli automatismi che monitorano le vault e agiscono tempestivamente. Come tutte le pratiche di Maximum Extractable Value (MEV) richiedono competenze tecniche elevate.