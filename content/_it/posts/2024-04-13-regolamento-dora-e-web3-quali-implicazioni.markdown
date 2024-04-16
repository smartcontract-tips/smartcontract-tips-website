---
layout: post
title: "Regolamento DORA sulla Resilienza digitale ed implicazioni per gli sviluppatori Web3"
date: 2024-04-13 
last_modified: 2023-04-16
type: post

category: Basic

tags: 
    - DORA
    - MiCA

featured_image: /pics/fmt-16-9/dora.png
---
![cover](/pics/fmt-16-9/dora.png)

**TL;DR** Gli sviluppatori di smart contract devono preoccuparsi dell'imminente entrata in vigore del regolamento europeo DORA? La risposta breve è: **Probabilmente sì.**

*Leggi di seguito per approfondire* 

## Il Regolamento DORA e gli asset crittografici

La Digital Operational Resilience Act (DORA) si applica a una vasta gamma di entità finanziarie, incluse le piattaforme che offrono servizi relativi agli asset crittografici. In particolare, DORA specifica che i fornitori di servizi di asset crittografici autorizzati secondo il Regolamento sui mercati degli asset crittografici e gli emittenti di token riferiti ad asset rientrano nel suo ambito di applicazione, e la loro conformità con DORA è garantita dall'autorità competente designata in base alla disposizione pertinente di tale regolamento.

## Il campo di applicazione di DORA include le criptovalute

L'articolo che stabilisce il campo di applicazione di DORA ai fornitori di servizi di asset crittografici è l'articolo 1, paragrafo 2, del regolamento DORA. Questo articolo specifica che il regolamento si applica ai fornitori di servizi di asset crittografici autorizzati ai sensi del Regolamento sui mercati degli asset crittografici e agli emittenti di token riferiti ad asset, i quali sono tenuti a rispettare le disposizioni di DORA come qualsiasi altra entità finanziaria regolamentata.

Ecco il testo rilevante tratto dal documento:

> "This Regulation applies to crypto-asset service providers authorised under the Regulation on markets in crypto-assets and to issuers of asset-referenced tokens as referred to in Article 1(2).".

Questo articolo conferma che i fornitori di servizi di asset crittografici sono compresi nel campo di applicazione di DORA e devono quindi aderire ai suoi requisiti di resilienza operativa digitale.


Inoltre nell'Art. 2 Ambito di applicazione, lett. f

> fornitori di servizi per le cripto-attività autorizzati a norma del regolamento del Parlamento europeo e del Consiglio concernente i mercati delle cripto-attività e recante modifica dei regolamenti (UE) n. 1093/2010 e (UE) n. 1095/2010 e delle direttive 2013/36/UE e (UE) 2019/1937 (regolamento sui mercati delle cripto-attività) ed emittenti di token collegati ad attività


## I requisiti posti dal Regolamento DORA

Ciò include requisiti per significative capacità di gestione del rischio, segnalazione di incidenti ICT, test di resilienza operativa digitale e gestione del rischio relativo ai servizi ICT di terze parti.

I fornitori di servizi di asset crittografici devono anche aderire alle disposizioni di DORA relative agli accordi di condivisione delle informazioni sull'intelligence delle minacce informatiche. Questo permette alle entità finanziarie, incluse quelle che offrono servizi di asset crittografici, di scambiare informazioni su minacce informatiche, tattiche, tecniche e procedure all'interno di comunità fidate, migliorando la resilienza digitale collettiva.



## Chi controlla che DORA sia rispettato? DORA chiama MiCA

Secondo l'art. 46 il rispetto del regolamento è assicurato (Art. 46, lett. d)

> per i fornitori di servizi per le cripto-attività quali autorizzati ai sensi del regolamento sui mercati delle cripto-attività (MiCA) e gli emittenti di token collegati ad attività: l’autorità competente designata in conformità delle pertinenti disposizioni di tale regolamento

Ma se la norma del DORA richiama a sua volta il MiCA potremmo essere portati a pensare che le esclusioni dal campo di applicazione del MiCA automaticamente comportino l'esclusione dal campo di applicazione del DORA. Ad esempio Il MiCa non regolamenta gli NFT che sono soggetti alle linee guida dell’Autorità europea degli strumenti finanziari e dei mercati (ESMA) e i DeFi che sono soggetti alle linee guida dell’Autorità bancaria europea (EBA).

> Article 2 - Exclusions

> This Regulation does not apply to:
(5) Crypto-assets that are unique and not fungible with other crypto-assets, including digital art and collectibles. The value of such unique and non-fungible crypto-assets is attributable to each crypto-asset's unique characteristics and the utility it gives to the holder of the token. Nor should this Regulation apply to crypto-assets representing services or physical assets that are unique and non-fungible, such as product guarantees or real estate

## Il MiCA e dunque anche il DORA si applica alla DeFI?

Per quanto riguarda i protocolli DeFI le cose si complicano abbastanza

Secondo alcuni autori no, [The EU Markets in Crypto-Assets (MiCA) Regulation Explained](https://legalnodes.com/article/mica-regulation-explained)

Ma le cose non sono così semplici perché a differenza di quanto avviene nel caso degli NFT non esiste una clausola d'esclusione specifica, e la stessa definizione tecnica di DeFi potrebbe cambiare da un protocollo ad un altro. 

Ad esempio come possiamo considrare un protocollo il cui unico accesso è consentito tramite il sito di una specifica società? Oppure come considerare il caso in cui gli smart contract forniscono delle backdoor o accessi privilegiati alle società che li hanno sviluppati.

## Dipende da quanto siamo decentralizzati

Allora poi nasce la questione di quanto e come misurare il livello di decentralizzazione

Probabilmente la DORA e il MiCA vorrebbero fare chiarezza su una realtà che ancora si muove fuori dagli schemi che i regolamenti vogliono imporre.

Quindi se è vero che 

> crypto-asset services as defined in this Regulation are provided in a fully decentralised manner without any intermediary they do not fall within the scope of this Regulation


L'applicazione della Digital Operational Resilience Act (DORA) agli sviluppatori di smart contract dipende dal modo in cui questi smart contract sono utilizzati all'interno del settore finanziario. 

## Come DORA potrebbe applicarsi agli sviluppatori di smart contract

DORA si concentra sulla resilienza operativa digitale delle entità finanziarie e dei loro servizi critici, inclusi quelli che dipendono fortemente dalle tecnologie informatiche come gli smart contract. Ecco come DORA potrebbe applicarsi agli sviluppatori di smart contract nel contesto finanziario:

### 1. **Inclusione nel Campo di Applicazione come Fornitori di Servizi ICT di Terze Parti**

Gli sviluppatori di smart contract possono essere considerati fornitori di servizi ICT di terze parti se i contratti intelligenti che sviluppano sono utilizzati da entità finanziarie regolamentate. Questo è particolarmente rilevante se gli smart contract sono essenziali per le operazioni finanziarie, come nel caso di piattaforme di trading basate su blockchain o prodotti finanziari decentralizzati (DeFi).

### 2. **Obblighi di Gestione del Rischio ICT**

Se rientrano nell'ambito di applicazione di DORA come terze parti critiche, gli sviluppatori di smart contract devono adottare misure robuste di gestione del rischio ICT. Questo include:

   - **Identificazione dei rischi**: Analizzare e identificare rischi specifici associati allo sviluppo e all'implementazione degli smart contract.
   - **Protezione e prevenzione**: Implementare misure di sicurezza per proteggere gli smart contract da attacchi informatici e altre vulnerabilità ICT.
   - **Rilevazione e risposta**: Avere capacità per rilevare tempestivamente qualsiasi incidente di sicurezza e rispondere efficacemente per mitigarne l'impatto.

### 3. **Testing della Resilienza Operativa Digitale**

DORA richiede che le entità finanziarie effettuino test di resilienza operativa digitale, che includono la verifica della sicurezza e l'affidabilità degli smart contract utilizzati. Gli sviluppatori di smart contract potrebbero dover supportare queste entità nei test, ad esempio fornendo accesso ai codici sorgente o partecipando a simulazioni di attacco.

### 4. **Reporting degli Incidenti ICT**

Nel caso in cui gli smart contract siano coinvolti in incidenti di sicurezza che hanno un impatto significativo sulle operazioni finanziarie, tali incidenti dovrebbero essere segnalati alle autorità competenti, come prescritto da DORA. Questo assicura che tutte le parti rilevanti siano informate e possano agire per prevenire ulteriori danni.

### 5. **Cooperazione con le Autorità di Supervisione**

Gli sviluppatori di smart contract devono essere pronti a cooperare con le autorità di supervisione finanziaria, fornendo tutte le informazioni necessarie per valutare la conformità con i requisiti di resilienza operativa digitale.

### Implicazioni Pratiche

La categorizzazione degli sviluppatori di smart contract come fornitori di servizi ICT critici dipenderà dalle specifiche delle loro operazioni e dalla rilevanza dei loro prodotti per il sistema finanziario. Essi dovranno valutare la loro conformità con DORA in collaborazione con le entità finanziarie che utilizzano i loro smart contract, assicurando che tutte le misure di resilienza operativa siano in atto e siano adeguatamente documentate.

### Casi particolari

Come deve comportarsi lo sviluppatore che realizza uno smart contract per un cliente che opera un'attività che prevederebbe autorizzazione ai sensi della MiCA **ma il committente ignora di proposito o involontariamente quest'obbligo?**

In questa circostanza potremmo essere portati a pensare che non è un problema dello sviluppatore occuparsi di questa mancanza e di conseguenza potrebbe rilasciare il suo codice senza preoccuparsi dei dettami del DORA.

In realtà, sarebbe meglio fare un'adeguata due diligence e adottare le necessarie misure di sicurezza previste dalla norma e comunque farsi manlevare per ogni potenziale inandepimento del committente.

Ma la considerazione più importante è che non si devono adottare le misure previste dalla DORA solo perché sono obbligatorie per legge, **fornire le adeguate garanzie di continuità operativa digitale dovrebbe essere sempre una priorità del professionista del web3**. Dovrebbe essere un obbligo etico e professionale prima ancora che un regolamento calato dall'alto.


## Conclusioni

Mentre DORA non menziona esplicitamente gli sviluppatori di smart contract, le sue disposizioni si applicano a loro se fornitori di smart contract che agiscono come servizi ICT cruciali per le entità finanziarie vigilate. 
La conformità con DORA sarà quindi essenziale per integrare la sicurezza e la resilienza nell'uso degli smart contract nel settore finanziario.

