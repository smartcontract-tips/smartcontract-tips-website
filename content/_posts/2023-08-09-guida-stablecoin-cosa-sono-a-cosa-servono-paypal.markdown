---
layout: post
title: Una (poi non così) piccola guida alle Stablecoin
date: 2023-08-09 11:06:04.000000000 +02:00
type: post

categories:
- In-Depth
tags: [stablecoin]
permalink: "/articoli/guida-stablecoin-cosa-sono-a-cosa-servono-paypal/"
excerpt: Le stablecoin sono probabilmente una killer application delle blockchain,
  sembra che la scena sia già sovraffollata, ora anche i governi stanno lavorando
  su valute digitali non basate su blockchain (#cbdc). Le stablecoin private hanno
  dimostrato che esiste una forte domanda di alternative per i pagamenti. USDT da solo
  genera volumi significativi, superiori a quelli di ether e bitcoin messi insieme
  almeno secondo il sito coinmarketcap.

featured_image: featured_images/copertinaguida.png
toc: false
---

<style>
    #markdown-toc {
        overflow: hidden;
        transition: max-height 0.5s ease-out;
        background-color: #f1f1f1;
        max-height: 0;
    }
</style>




<script>
    function toggleDiv() {
        var div = document.getElementById("markdown-toc");
        if (div.style.maxHeight){
            div.style.maxHeight = null;
        } else {
            div.style.maxHeight = div.scrollHeight + "px";
        } 
    }
</script>

<button onclick="toggleDiv()">Indice dei contenuti</button>

* TOC
{:toc}

La scena delle stablecoin nel 2023 è vibrante e affollata da molti progetti e tante menti brillanti stanno lavorando in questo campo. Cominciamo.

Numeri ed adozione delle stablecoin
===================================

Le stablecoin sono probabilmente una killer application delle blockchain e anche i governi stanno lavorando su valute digitali anche se **non basate su blockchain** (#cbdc)

Le stablecoin private hanno dimostrato che esite una forte domanda di alternative per i pagamenti. **USDT da solo genera volumi significativi, superiori a quelli di ether e bitcoin** messi insieme almeno secondo il sito coinmarketcap.

La tecnologia e i protocolli dietro le stablecoin private appaiono superiori a quelli utilizzati nei canali di pagamento tradizionali come SEPA, Swift o persino le carte di credito, tuttavia la stabilizzazione di una valuta in blockchain è al momento o inefficiente o rischiosa (nel caso di monete algoritmiche), ma nonostante ciò le stablecoin sono una parte essenziale del percorso di **adozione della massa verso il web3**.

Come il nome suggerisce le stablecoin sono, o dovrebbero essere, delle valute digitali che godono di una proprietà non trascurabile, **la stabilità del loro prezzo sui mercati di scambio**. 

Di fatto le stablecoin funzionano come delle rappresentazioni delle monete a corso legale ma dentro la blockchain. La frase **dentro la blockchain** è già di per sé ambigua dato che "non esiste la blockchain" ma ne esistono tante, ognuna con il suo protocollo di consenso per la validazione delle transazioni e le sue regole per codificare i dati e le transazioni.

Ed ecco che esistono stablecoin nelle varie blockchain: Bitcoin, Ethereum, Polygon e Tron per limitarci ai casi di maggior interesse, senza peraltro voler accomunare queste blockchain per solidità, decentralizazzione e sicurezza, visto che le tre sono molto diverse e lo sono in aspetti fondamentali. Ma senza entrare nel merito di blockchain buona e blockchain cattiva ritorniamo alle stablecoin.

**Vediamo alcuni numeri** perché cominciano ad essere interessanti:

> Nel 2020 la capitalizzazione delle stablecoin era di circa $10B oggi siamo arrivati a circa $140B (Gennaio 2023, fonte) con una distribuzione fortemente centrata sulle prime due: USDT e USDC che da sole fanno l'86% del mercato.

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.38.40.png)

(source: defillama)


Cosa sono le stablecoin? A cosa servono le stablecoin e perché ce ne sono tante?
================================================================================

Ci sono varie valide ragioni per lo sviluppo delle stablecoin. La prima è che ovviamente sono stabili nel prezzo e questo già le rende interessanti come monete transazionali. Ma possiamo approfondire ulteriormente.

**Store of value temporaneo**,  sembra forse paradossale ma i trader sono come sportivi sotto stress, non sempre in grado di tenere gli asset rischiosi in portafoglio. Hanno bisogno di tirare il fiato, ragionare e de-investire riportando il valore dentro un asset più facilmente liquidabile: la moneta fiat. Ma dato che non tutti gli exchange sono in grado per ragioni legali di tenere fondi in valuta statale senza opportuna licenza o semplicemente perché nessuna banca gli permette di aprire un conto vista la rischiosità del settore cripto, ecco che le stablecoin sono un perfetto proxy verso le fiat. Possono essere utilizzate come store of value temporaneo in momenti di volatilità e trasferite da un exchange all'altro senza mai uscire dai protocolli blockchain. Diventano una scorciatoia per scambio denominato in moneta statale senza passare dai rispettivi circuiti SEPA o SWIFT. Sembra poco? Non lo è.

**Programmabilità**. Un aspetto molto interessante è la programmabilità nativa che le criptovalute conferiscono alle stablecoin.

**Unbanked**, nel mondo ci sono quasi due miliardi di adulti "sbancati" o meglio unbanked, ovvero che non hanno accesso ad un conto bancario o di pagamento. Questo presuppone che gli stessi operino nell'economia del contante e quindi rinuncino alle opportunità dei pagamenti elettronici sia come consumatori di beni che come produttori. Le stablecoin hanno un'interessante caratteristica, esse vengono emesse o riscattate presso un'istituzione (ndr. non è sempre vero ma per semplicità evitiamo per ora di scendere nei dettagli) che quindi verifica e opera secondo tutti i dettami della normativa anti-riciclaggio. Tuttavia una volta trasformate in stablecoin queste possono essere trasmesse da un individuo all'altro in una modalità "al portatore" ma digitale, e quindi da remoto e senza identificazione.

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.40.55.png)

Location of stablecoin teams worldwide from [Blockchain's](http://blockchain.com/) excellent [stablecoin report](https://www.blockchain.com/static/pdf/StablecoinsPPTFinal.pdf)

In quanti modi si può rendere stabile una stable coin?
======================================================


Ci sono almeno tre diversi modi per stabilizzare una stablecoin, almeno in teoria:

-   **collaterale in fiat**: token emesso a fronte di un collaterale in moneta fiat custodito da un ente fidato che fornisce garanzia di liquidazione, ad esempio USDT Tether, USDT di Circle, Stasis Euro.

-   **collaterale in criptovaluta o assimiliabile**: token emesso da uno smart contract a fronte di un collaterale in criptomoneta che può essere liquidato programmaticamente, ad esempio DAI di MakerDAO.

-   **algoritmica pura**: senza collaterale e attraverso la creazione di un supply elastico basato sullo stesso principio delle banche centrali ma senza banche centrali, ad esempio le Seignorage Shares implementate nei defunti progetti Basis e Carbon.

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.42.19.png)

fonte https://hackernoon.com/stablecoins-designing-a-price-stable-cryptocurrency-6bf24e2689e5

Le stablecoin con collaterale in moneta fiat
============================================

**Le stablecoin con collaterale in moneta fiat,** o collaterale **offchain**, ovviamente richiedono un meccanismo di fiducia che garantisca che in qualsiasi momento un token possa essere riscattato e quindi liquidato. In pratica possiamo pensare che esistano due operazioni fondamentali, l'emissione (o **minting**) ed il riscatto o liquidazione (**redeem**). Se io deposito 1 euro dentro il fondo, che garantisce la stablecoin, ricevo in cambio 1 token che da quel momento può essere scambiato utilizzando la blockchain ed i suoi protocolli. 

**Tecnicamente non c'è niente di complicato, esiste un fondo salvadanaio che garantisce sempre di poter liquidare i token in euro o dollari all'occorrenza.** Q

uesto è di gran lunga il meccanismo più utilizzato. Resta poi da capire se l'ente che custodisce il salvadanaio sia o meno autorizzato ad utilizzare tali fondi di collaterale per scopi diversi oppure se si deve impegnare a tenerli bloccati senza altri utilizzi e fino alla richiesta di riscatto da parte dei portatori di token.

Questo meccanismo è considerato "efficiente" in quanto nel caso peggiore il salvadanaio deve contenere tanti euro (o dollari) quanti sono i token in circolazione. Quindi 1:1. In realtà una banca potrebbe perfino operare come ente garante del salvadanaio ed utilizzare il meccanismo della riserva frazionaria emettendo più token di quelli "bloccati" nel conto salvadanaio, aumentando quindi l'efficienza del sistema se per **efficienza intendiamo il rapporto tra fondi bloccati e token in circolazione**.

La stablecoin con collaterale in cripto
=======================================

**La stablecoin con collaterale in cripto è implementabile** con uno smart contract. Di fatto l'idea è quella di partire da una criptomoneta volatile e cederne il rischio dovuto alla volatilità a qualcuno disposto ad accollarselo. 
**Ma perché dovremmo trovare qualcuno disposto ad accollarsi questo rischio?** 
Perché la volatilità è bidirezionale, c'è un rischio di perdita ma anche un'opportunità di guadagno. 

Possiamo immaginare Alice e Bob dove la prima non vuole il rischio di volatilità e il secondo è disposto ad accettarlo. Alice e Bob creano uno smart contract ed entrambi mettono dentro 1 ether che supponiamo valga oggi $100. **Il contratto quindi dispone di 2 eth**, ovvero $200 di valore nozionale. In cambio Alice ottiene subito dal contratto 100 stable-token del valore di 1$ l'uno, mentre Bob ottiene 100 risky-token. La regola copre tre casi:

1.  se il giorno dopo eth è stabile (non ha cambiato prezzo) Alice potrà ottenere indietro esattamente il suo eth se vorrà liquidare tutti i 100 stable token, idem per Bob.

2.  se il giorno dopo eth si apprezza, ad esempio passa da $100 a $200, Alice potrà liquidare i suoi 100 stable-token e ottenere l'equivalente di $100, ovvero 0.5 eth, mentre Bob potrà prendere tutto il resto, ovvero 1.5 eth ($300), per la precisione 0.015 eth per ogni risky-token che possiede, realizzando dunque un profitto, la giusta ricompensa per essersi accollato il rischio.

3.  se invece il giorno dopo eth diminuisce di prezzo, ad esempio passa da $100 a $66, Alice potrà comunque liquidare i suoi 100 stable token e ottenere 1.5 eth (ancora $100). Per Bob purtroppo i suoi 100 risky token valgono 0.5 eth e il suo investimento si è dimezzato.

Nel caso estremo se eth passa da $100 a $50, Alice sarà ancora in grado di liquidare i suoi token ottenendo 2 eth ($100), mentre Bob vedrà i suoi risky token valere esattamente zero. **Si deduce che la protezione che il contratto ha prodotto nei confronti di Alice è inefficace per un crollo superiore al 50%,** questo perché il nostro contratto ha un collaterale pari al 200% della somma da stabilizzare. **Per questa ragione le stablecoin con collaterale in cripto sono inefficienti dal punto di vista del capitale**.

Questi meccanismi non sono nuovi e non sono altro che un modo di cedere il rischio, la cosa interessante è che non sono regolati da contratti scritti su un pezzo di carta e in forza di qualche legge, ma sono automaticamente eseguiti da uno smart contract la cui logica di esecuzione è trasparente alle parti e immodificabile.

Stablecoin senza collaterale
============================

Infine l'ultimo tipo di stablecoin è quello ideato nelle [Seignorage Shares.](https://github.com/rmsams/stablecoins) In questo modello lo smart contract si comporta come una banca centrale e di fatto non richiede nessun collaterale. Per la sua implementazione sono previsti almeno due tipi di coin: la stablecoin di cui si vuole stabilizzare il prezzo ed un bond coin. In generale la stablecoin ha un prezzo osservabile attraverso un meccanismo basato su oracoli decentralizzati e il suo obiettivo potrebbe essere il prezzo di un dollaro. La seconda coin invece è quella che "assorbe" la volatilità, essa può consistere in un titolo di credito o bond che può essere acquistato con la stablecoin e che alla scadenza dà diritto ad 1 stablecoin.

Quando il prezzo della stablecoin è in discesa ( ad esempio $0.9 ) questo indica un eccesso di circolante e per mitigare l'eccesso lo smart contract emette nuovi bond e li mette all'asta. Il fatto che il prezzo della stable sia inferiore a $1 e la promessa di un guadagno futuro spinge gli investitori a spendere gli stable per comprare i bond, gli stable verrebbero distrutti nella transazione diminuendo l'offerta di stable e riportando il prezzo vicino a $1. Nel caso contrario, se il prezzo della stable è in crescita (ad esempio $1.1) lo smart contract decide di creare extra stablecoin per acquisire bond dal mercato e distruggerli, aumentando l'offerta di stablecoin che dovrebbe dunque abbassare il prezzo.

Tra le implementazioni di questi protocolli di seignorage shares vanno citati i progetti [Basis](https://www.basis.io/) e Carbon.

Interessante notare che il progetto Basis è stato sospeso dagli autori perché la SEC (autorità di vigilanza americana) ha posto la sua attenzione sul progetto e questo non è stato accolto come una normale procedura dagli autori ma come un'interferenza totalmente distruttiva convincendoli a chiudere completamente il progetto.

Caso studio di stablecoin con collaterale in criptovaluta: DAI.
===============================================================

Un caso esemplare di tipologia di stablecoin decentralizzata con collaterale in criptovaluta è la stablecoin DAI.

Ecco come funziona:

**Creazione di DAI**: Gli utenti depositano criptovalute come ETH in un Vault (un tipo di smart contract) su MakerDAO. In cambio, possono generare (o "emettere") DAI fino a un certo valore del loro deposito. Questo è chiamato sovra-collateralizzazione, perché il valore del deposito è sempre superiore al valore dei DAI emessi. Ad esempio, se un utente deposita $150 di ETH, potrebbe essere in grado di emettere solo $100 di DAI.

**Stabilità del valore**: Il valore di DAI è progettato per rimanere stabile rispetto al dollaro USA. Se il valore di DAI dovesse salire sopra $1, gli utenti sarebbero incentivati a generare più DAI (perché possono venderli a un prezzo più alto). Se il valore di DAI dovesse scendere sotto $1, gli utenti sarebbero incentivati a rimborsare i loro DAI (perché possono farlo a un costo inferiore). Questo meccanismo di incentivazione aiuta a mantenere il valore di DAI stabile.

**Liquidazione**: Se il valore del deposito in un Vault scende troppo (ad esempio, a causa di un calo del prezzo di ETH), il Vault può essere "liquidato". Ciò significa che le criptovalute depositate vengono vendute per ripagare il debito in DAI. Questo serve a garantire che ci sia sempre abbastanza collateralizzazione per sostenere il valore di tutti i DAI in circolazione.

**Tasso di stabilità**: MakerDAO utilizza anche un "tasso di stabilità", che è essenzialmente un tasso di interesse che gli utenti devono pagare quando rimborsano i loro DAI. Questo tasso può essere regolato per influenzare il costo della generazione di DAI, che a sua volta può aiutare a mantenere il valore di DAI stabile.

{% include infobox.html message="Per approfondire la stablecoin DAI segui il link di seguito" link="/articoli/meccanismo-anti-voltalitita-stablecoin-dai" %}


Caso studio: Terra/Luna ed il loro terrificante crollo
======================================================

TerraUSD (UST) è una stablecoin decentralizzata emessa sulla blockchain Terra. È progettata per mantenere un valore stabile di 1 dollaro USA. Terra utilizza un meccanismo unico per mantenere la stabilità del prezzo di UST, che coinvolge un'altra criptovaluta chiamata LUNA.

Funzionamento del sistema Terra Luna
------------------------------------

**Creazione di UST**: Gli utenti possono creare UST bruciando LUNA. Il prezzo di LUNA è determinato dal mercato e può variare, ma il valore di UST è progettato per rimanere stabile a 1 dollaro USA.

**Mantenimento della stabilità**: Se il prezzo di UST scende sotto 1 dollaro, gli utenti sono incentivati a comprare UST a basso costo, bruciare UST e creare LUNA, riducendo così l'offerta di UST e aumentando l'offerta di LUNA fino a quando il prezzo di UST non torna a 1 dollaro.

Se il prezzo di UST sale sopra 1 dollaro, gli utenti sono incentivati a comprare LUNA a basso costo, bruciare LUNA e creare UST, aumentando così l'offerta di UST e riducendo l'offerta di LUNA fino a quando il prezzo di UST non torna a 1 dollaro.

**Utilizzo di UST**: UST può essere utilizzato per una varietà di scopi all'interno dell'ecosistema Terra, tra cui pagamenti, prestiti, staking e trading. Terra ha anche stretto partnership con diverse aziende per permettere l'uso di UST per acquisti nel mondo reale.

**Sicurezza**: La sicurezza di UST è garantita dalla blockchain Terra, che utilizza un meccanismo di consenso proof-of-stake. Gli utenti che detengono LUNA possono partecipare alla validazione delle transazioni e alla governance del sistema.

Crollo del sistema Terra/Luna
-----------------------------

Il crollo del prezzo di TerraUSD (UST) è stato innescato da una serie di grandi vendite di UST sul protocollo di prestito di Terra, Anchor, e su altre piattaforme di stablecoin. Questo ha portato a una forte pressione di vendita che ha causato un calo netto dei prezzi sia di LUNA che di UST.

Il sistema di Terra è progettato per sfruttare l'offerta e la domanda; se la domanda di UST diminuisce e il suo prezzo perde l'aggancio al dollaro, gli utenti sono incentivati a comprare LUNA con UST. Questo ha portato a un massiccio acquisto di LUNA con UST, spingendo ulteriormente il prezzo di UST al ribasso.

Inoltre, la situazione è stata aggravata dal fatto che Binance, uno dei più grandi exchange di criptovalute, ha temporaneamente sospeso il prelievo di UST e LUNA, portando a un effetto a cascata sui prezzi di entrambe le criptovalute.

Il ruolo di BlackRock e Citadel nel crollo Terra Luna
-----------------------------------------------------

Citadel e BlackRock sono due importanti entità nel mondo della finanza.

Citadel LLC è una società di investimento globale fondata nel 1990, BlackRock, Inc. è una delle più grandi società di gestione degli investimenti al mondo. Fondata nel 1988, BlackRock gestisce miliardi di dollari in attività per conto di investitori istituzionali e individuali con un AUM superiore a quello di molti stati del G7.

E' a lungo circolata una teoria nella comunità delle criptovalute che l'attacco su TerraUSD (UST) potrebbe essere stato un attacco coordinato da Citadel.

Questa teoria sembra plausibile a molti data la posizione anti-Bitcoin di Citadel. Tuttavia, sia BlackRock che Citadel Securities hanno negato qualsiasi coinvolgimento nel crollo di TerraUSD (UST), respingendo le teorie del complotto prive di prove sul loro presunto coinvolgimento nel crollo di LUNA.

Secondo i diretti interessati queste teorie sono solo speculazioni e non ci sono prove concrete del coinvolgimento di Citadel nel crollo di Terra Luna.

Resta il fatto che Do Kwon, il fondatore di Terraform Labs, è stato arrestato in Montenegro.

Kwon è ricercato in Corea del Sud in relazione al crollo da 40 miliardi di dollari della criptovaluta della sua azienda che ha devastato gli investitori al dettaglio in tutto il mondo. L'arresto di Kwon è avvenuto dopo che Shin Hyun-seung, noto anche come Daniel Shin, co-fondatore di Terraform Labs, è stato convocato per un interrogatorio dalle autorità sudcoreane.

Libra, che fine ha fatto la criptovaluta di Facebook?
=====================================================

Libra è una criptovaluta proposta per la prima volta da Facebook nel giugno 2019. Il progetto è stato successivamente rinominato Diem nel dicembre 2020. L'obiettivo di Libra/Diem è quello di creare una valuta digitale globale stabile che possa essere utilizzata per le transazioni online, in particolare attraverso le piattaforme di Facebook come Messenger e WhatsApp.

Dettagli chiave del progetto Libra
----------------------------------

Ecco alcuni dettagli chiave sul progetto Libra:

**Stablecoin**: Libra è stata progettata per essere una stablecoin, il che significa che il suo valore è progettato per rimanere stabile rispetto a una valuta di riferimento o a un paniere di valute. Inizialmente, Libra avrebbe dovuto essere ancorata a un paniere di valute fiat (come il dollaro USA, l'euro, il yen giapponese, la sterlina britannica e il dollaro di Singapore), ma dopo una serie di revisioni regolamentari, il progetto è stato modificato per creare stablecoin separate ancorate a singole valute fiat.

**Associazione Libra**: Il progetto Libra è gestito dalla Libra Association (ora Diem Association), un consorzio senza scopo di lucro con sede in Svizzera. L'associazione comprende diverse aziende e organizzazioni non profit. Facebook è uno dei membri attraverso la sua sussidiaria Novi Financial.

**Blockchain di Libra**: Libra avrebbe dovuto utilizzare la sua propria blockchain, chiamata Libra Blockchain, una blockchain permissioned che avrebbe permesso solo a entità autorizzate di validare le transazioni. Questo è in contrasto con molte altre criptovalute come Bitcoin ed Ethereum, che utilizzano blockchain permissionless in cui chiunque può partecipare alla validazione delle transazioni.

**Regolamentazione e controversie**: Da quando è stato annunciato, il progetto Libra ha affrontato una forte opposizione da parte dei regolatori di tutto il mondo, che hanno espresso preoccupazioni riguardo alla privacy, alla sicurezza e al potenziale impatto sulla stabilità finanziaria globale. Queste preoccupazioni hanno portato a diverse revisioni del progetto e alla rinuncia di diversi membri iniziali dell'Associazione Libra.

Nel dicembre 2020, il progetto è stato rinominato Diem e ha annunciato piani per lanciare una stablecoin ancorata al dollaro USA.

La morte di Libra
-----------------

L'Associazione Diem, che gestiva il progetto, ha venduto il progetto a Silvergate Bank nel gennaio 2022. Silvergate ha poi cancellato il loro investimento in Diem nel gennaio 2023. [Questo segna la fine del tentativo di Facebook di creare una criptovaluta globale.](https://en.wikipedia.org/wiki/Diem_(digital_currency))

L'unico commento che vogliamo aggiungere è che Libra si basava su due ingredienti ad alto tasso di esplosione: l'enorme base di utenti potenzialmente pronti ad adottarla e la stabilizzazione basata su un paniere costituito da titoli di stato.

Avere da un lato qualche miliardo di utenti e dall'altro poter decidere quali titoli di stato sono "buoni" e quali no avrebbe dato a Libra e ai suoi artefici la capacità di governare e controllare l'economia ad un livello di cui forse oggi non dispongono neanche le banche centrali. I BOT italiani non ci piacciono? non li mettiamo nel paniere. I titoli americani ci piacciono? li mettiamo nel paniere. Essere un cliente così importante nel mercato dei titoli di stato ti permetterebbe di influenzare prezzi e condizioni e quindi le sorti delle politiche economiche e fiscali di interi paesi.

E questo non credo piaccia ai governi!!

Che quindi si sono inventati le criptovalute di stato dette anche CBDC.

CBDC: ha senso chiamare l'euro digitale una criptovaluta di stato?
==================================================================

Come diceva Nanni Moretti, "le parole sono importanti", e la criptovaluta di stato, anche a ripeterlo a voce alta, non suona così convincente.

Ricapitoliamo un attimo qual è il modello di attacco per cui Bitcoin ha senso e con lui le monete basate su blockchain.

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.48.46.png)

La blockchain e le criptovalute risolvono un problema semplice semplice: come trasferire un valore da una cella di registro A ad una cella di registro B rispettando delle regole condivise a priori e senza che ci sia qualcuno che decida arbitrariamente di cambiarle o di eluderle.

Si chiamano cripto non perché siano criptate ma perché grazie alla crittografia è possibile firmare digitalmente l'equivalente di "assegni" e trasferire il valore da A a B senza che A e B si conoscano e senza che A e B siano noti o autorizzati da qualcuno. Basta che rispettino le regole del protocollo informatico.

Non mi pare una cosa molto compatibile con l'idea di criptovaluta di Stato.

Ma infatti non bisogna neppure pensare che gli stati vogliano fare delle criptovalute, piuttosto vogliono fare delle **valute digitali totalmente centralizzate**. Ma che vantaggi porterebbero?

-   **inclusione**: invece di avere il conto presso una banca commerciale ognuno di noi potrebbe avere il conto direttamente presso la BCE. Utile? Beh, almeno sembra semplice e alla portata di tutti.

-   **efficienza**: Non avremmo più bisogno delle clearing house, i pagamenti sarebbero immediatamente addebitati e accreditati in un unico registro centrale. In un colpo solo si farebbe fuori un business ipermiliardario.

-   **legalità**: grazie al monitoraggio delle attività illecite. Ogni transazione potrebbe essere monitorata direttamente. Non ci sarebbe bisogno di "seguire il denaro", il denaro è lì a disposizione delle autorità in tutta la sua storia dalla culla alla tomba.

Per approfondire i vantaggi alcuni accademici americani hanno prodotto un [paper](https://greatdemocracyinitiative.org/wp-content/uploads/2018/06/FedAccountsGDI.pdf.) nel quale evidenziano tutti i vantaggi di un dollaro digitale di Stato.

Sembra uno scenario idilliaco. Perché non adottarlo immediatamente? A dispetto di quello che molti pensano l'attuale sistema non è così centralizzato. Le banche commerciali "creano" denaro, le transazioni sono sparse fra vari conti di tesoreria e poi riconciliate e compensate nelle clearing house.

Si potrebbe obiettare che i primi tentativi di valuta digitale di stato siano goffi e mal riusciti, pensiamo subito al [Petro](https://www.petro.gob.ve/) del Venezuela, di fatto un tentativo di aggirare le sanzioni internazionali grazie ad una ICO di stato.

In realtà sgombrando il campo dall'ipotesi di una realizzazione naif quali sarebbero i problemi di una valuta digitale di stato?

-   **Single point of failure**, il sistema è vulnerabile dove concentra la sua funzione vitale. Un bel data leak a livello centrale colpirebbe tutti in modo generalizzato ed in un colpo solo. Per non parlare di un malfunzionamento che bloccherebbe di fatto l'economia intera.

-   **Abuso della vigilanza**, nessuna transazione passerebbe inosservata. Vogliamo davvero questo?

-   **Corruzione del controllo**, eliminare gli intermediari sembra bello ma vogliamo veramente che "uno" decida su tutto, come evidenziato dall'avvocato [Massimo Simbula.](https://studiolegalesimbula.com/coronavirus-e-i-coriandoli-digitali-statunitensi-il-pericolo-del-leviatano-statunitense/)

Il primo dei tre punti dell'elenco di cui sopra sembra aver già preso concretezza, infatti un ricercatore di sicurezza [ha scoperto che il codice della valuta digitale della banca centrale (CBDC) del Brasile contiene una funzione che permette di congelare o ridurre i fondi](https://en.cryptonomist.ch/2023/07/11/brazil-code-cbdc-freeze-funds/). Questa scoperta ha sollevato preoccupazioni sulla possibilità che il governo possa esercitare un controllo eccessivo sui fondi digitali dei cittadini.

La Human Rights Foundation, un'organizzazione non profit, ha annunciato il lancio di un [tracker per le valute digitali delle banche centrali (CBDC)](https://cointelegraph.com/news/cbdc-human-rights-tracker-revealed-at-oslo-freedom-forum) durante l'Oslo Freedom Forum. Questo strumento si concentra sul monitoraggio dello sviluppo delle CBDC in tutto il mondo e sulla loro relazione con i diritti umani.

Il tracker è stato sviluppato durante un fellowship di otto mesi presso la Human Rights Foundation. Il progetto include la pubblicazione di materiali educativi e una linea diretta per le segnalazioni. Si prevede che diventerà pienamente funzionale entro la fine dell'anno.

L'obiettivo del tracker è di fornire un quadro chiaro di come le CBDC stanno influenzando i diritti umani in tutto il mondo, permettendo agli utenti di seguire l'evoluzione delle politiche e delle implementazioni delle CBDC

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.51.56.png)

A giudicare dalla mappa dell'Atlantic Council tutti i governi del mondo o quasi sono impegnati in un progetto CBDC.

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.52.29.png)

(source: Atlantic Council)

Quali protocolli sono usati per implementare le stablecoin?
===========================================================

In figura la distribuzione di USDT e USDC, le principali stablecoin sul mercato, sui vari protocolli blockchain.

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.53.17.png)

![](https://smartcontract.tips/assets/2023/08/Screenshot+2023-08-09+alle+11.53.49.png)

Stablecoin implementate su ERC20 e i suoi cloni
===============================================

Le stablecoin come USDC e USDT sono spesso implementate come token ERC20 sulla blockchain Ethereum per una serie di motivi:

**Standardizzazione**: ERC20 è uno standard ampiamente accettato che definisce un insieme comune di regole per i token Ethereum. Questo significa che i token ERC20 possono interagire in modo fluido con altri token e contratti intelligenti sulla rete Ethereum.

**Compatibilità**: Poiché ERC20 è uno standard così comune, la maggior parte delle applicazioni decentralizzate (dApps) sulla rete Ethereum sono progettate per lavorare con token ERC20. Questo rende facile per le stablecoin essere integrate in queste applicazioni.

**Sicurezza**: L'implementazione di un token come un token ERC20 significa che si può sfruttare la sicurezza della rete Ethereum, che è una delle più sicure al mondo.

**Comunità e supporto**: Ethereum ha una grande comunità di sviluppatori e un'ampia gamma di risorse di sviluppo, il che può facilitare lo sviluppo e la manutenzione di token ERC20.

Supporto alle gasless transaction con EIP2612
=============================================

Per quanto riguarda le transazioni gasless, USDC ha implementato il supporto per EIP-2612, che è una proposta di miglioramento di Ethereum che permette agli utenti di pagare le commissioni di gas in token ERC20 invece che in ETH. Questo è particolarmente utile per le stablecoin, poiché permette agli utenti di fare transazioni utilizzando solo la stablecoin, senza dover detenere ETH per le commissioni di gas.

USDT, al contrario, non supporta attualmente EIP-2612, il che significa che gli utenti devono detenere ETH per pagare le commissioni di gas quando fanno transazioni con USDT. Questo può essere meno conveniente per gli utenti che preferiscono fare transazioni esclusivamente in stablecoin.

Gli altri protocolli per le stablecoin: Algorand ASA e Omni
===========================================================

Oltre a ERC20, ci sono vari altri protocolli che possono essere utilizzati per creare stablecoin. Due di questi sono ASA (Algorand Standard Assets) e Omni.

ASA (Algorand Standard Assets): ASA è un framework per la tokenizzazione sulla blockchain Algorand. ASA permette di creare diversi tipi di asset sulla blockchain Algorand, comprese le stablecoin. Algorand è una blockchain di proof-of-stake che è progettata per essere scalabile e sicura, con bassi costi di transazione e tempi di blocco rapidi. Queste caratteristiche la rendono una scelta attraente per le stablecoin. USDC, ad esempio, è disponibile come un ASA sulla blockchain Algorand.

Omni: Omni è una piattaforma sulla blockchain Bitcoin che permette la creazione di asset personalizzati, comprese le stablecoin. Omni è noto per essere il protocollo su cui è stato originariamente emesso USDT (Tether). Una delle principali caratteristiche di Omni è che permette di sfruttare la sicurezza della rete Bitcoin, che è la più grande e più sicura rete blockchain al mondo. Tuttavia, a causa delle limitazioni della rete Bitcoin in termini di velocità di transazione e costi di transazione, le stablecoin su Omni possono essere meno convenienti da utilizzare rispetto a quelle su altre blockchain come Ethereum o Algorand.

Problematiche di sicurezza sulle stablecoin
===========================================

Criticità sulle stablecoin con collaterale centralizzato
--------------------------------------------------------

Le stablecoin a collaterale centralizzato, come USDT (Tether) e USDC (USD Coin), sono token digitali che mantengono il loro valore stabile rispetto a una valuta fiat, come il dollaro statunitense, attraverso la detenzione di riserve di quella valuta in un deposito centralizzato. Mentre queste stablecoin offrono molti vantaggi, come la stabilità del valore e l'interoperabilità con l'ecosistema delle criptovalute, presentano anche alcuni potenziali problemi di sicurezza:

Rischio di custodia:
--------------------

Poiché le riserve che sostengono le stablecoin sono detenute da un'entità centrale, esiste il rischio che queste riserve possano essere perdute, rubate o altrimenti compromesse. Questo potrebbe avvenire a causa di frodi, errori, attacchi informatici o altre minacce alla sicurezza.

Rischio di regolamentazione:
----------------------------

Le entità che emettono stablecoin a collaterale centralizzato sono soggette alla regolamentazione finanziaria. Se l'emittente non rispetta le normative applicabili, potrebbe essere soggetto a sanzioni o azioni legali che potrebbero compromettere la sua capacità di mantenere le riserve necessarie.

Rischio di liquidità:
---------------------

Se un gran numero di detentori di stablecoin cercasse di riscattare i loro token per la valuta fiat di riserva in un breve periodo di tempo, l'emittente potrebbe non essere in grado di soddisfare tutte le richieste di riscatto, portando a problemi di liquidità.

Rischio di trasparenza:
-----------------------

C'è il rischio che l'emittente della stablecoin non sia completamente trasparente riguardo alla quantità di riserve che detiene o alla sua gestione delle riserve. Questo potrebbe portare a dubbi sulla capacità dell'emittente di mantenere il valore stabile del token.

Rischio di centralizzazione:
----------------------------

Infine, il modello di collaterale centralizzato è inerentemente centralizzato, il che è in contrasto con l'ideale di decentralizzazione che è al centro di molte criptovalute. Questa centralizzazione può portare a problemi di fiducia e controllo.

Per mitigare questi rischi, gli emittenti di stablecoin a collaterale centralizzato spesso adottano misure come audit regolari delle loro riserve da parte di terze parti indipendenti, l'adozione di robuste misure di sicurezza informatica e la conformità alle normative finanziarie applicabili.

Chi fa l'audit finanziario di Tether USDT
=========================================

Dal sito web di Tether, si può vedere che l'azienda si impegna a mantenere la trasparenza fornendo rapporti regolari sulle sue riserve. Questi rapporti sono condotti da BDO Italia, un'azienda di revisione contabile indipendente. Secondo Tether, questi rapporti dimostrano chiaramente che tutti i token Tether sono completamente supportati da riserve.

BDO Italia è la filiale italiana di BDO International, una rete globale di società di servizi professionali che forniscono servizi di revisione contabile, consulenza fiscale e consulenza aziendale.

Chi fa l'audit finanziario di Circle USDC?
==========================================

Circle, l'azienda che emette USDC (USD Coin), ha dichiarato che le sue riserve di dollari USA sono soggette a audit mensili da parte di Grant Thornton LLP, una delle più grandi società di revisione contabile e consulenza al mondo.

Questi audit sono progettati per verificare che Circle detenga effettivamente un dollaro USA per ogni USDC in circolazione, fornendo così una garanzia di trasparenza e sicurezza per gli utenti di USDC.

I rapporti di Grant Thornton LLP sono resi pubblici sul sito web di Circle, permettendo a chiunque di verificare che le riserve di USDC siano completamente collaterizzate. Questo è un elemento chiave della strategia di Circle per mantenere la fiducia e la trasparenza con i suoi utenti.

Criticità di sicurezza su stablecoin con collaterale decentralizzato
====================================================================

Le stablecoin come DAI, che utilizzano collaterali in criptovaluta, presentano diverse potenziali vulnerabilità.

Vulnerabilità sugli smart contract e sugli oracoli
--------------------------------------------------

Essendo basate su logiche più complesse del mero mint e redeem di una stablecoin centralizzata, in questo caso le vulnerabilità sugli smart contract sono più rilevanti e gli errori nel codice più probabili: gli smart contract sono codici che eseguono automaticamente le funzioni della stablecoin. Se ci sono bug o errori nel codice, potrebbero essere sfruttati da malintenzionati.

Altro aspetto critico è il legame tra questi smart contract e gli oracoli che istruiscono gli stessi sui prezzi. Un oracolo compromesso potrebbe causare il panico nell'ecosistema della stablecoin.

Volatilità del collaterale e panico
-----------------------------------

Ma in realtà il grosso guaio delle stablecoin con collaterale decentralizzato sta proprio nella volatilità del collaterale stesso.

Se il valore del collaterale (ad es. ETH per DAI) scende drasticamente, potrebbe non essere sufficiente a mantenere la stabilità della stablecoin.

Caso di studio: Giovedì nero per MakerDAO e mercato cripto
==========================================================

Il "Black Thursday" si riferisce a un evento critico che ha avuto luogo il 12 marzo 2020 nel mondo delle criptovalute, e in particolare ha colpito il protocollo MakerDAO e la sua stablecoin, DAI.

Ecco una panoramica dettagliata di ciò che è accaduto:

Caduta del Mercato Cripto:
--------------------------

Il 12 marzo 2020, il mercato delle criptovalute ha subito una rapida e drastica caduta. Ethereum (ETH), che è uno dei principali collaterali utilizzati nel sistema MakerDAO, ha perso oltre il 30% del suo valore in poche ore.

Congestione della Rete Ethereum:
--------------------------------

A causa della volatilità estrema, c'è stata una corsa per effettuare transazioni sulla rete Ethereum. Questo ha portato a una grave congestione, con commissioni di gas (le tariffe per le transazioni) che sono schizzate alle stelle. Di conseguenza, molte transazioni sono state ritardate o non sono state eseguite affatto.

Liquidazioni Massive:
---------------------

La caduta del prezzo dell'ETH ha portato molte posizioni nel sistema MakerDAO a diventare sotto-collateralizzate. Questo ha innescato una serie di liquidazioni automatiche. Tuttavia, a causa della congestione della rete e delle elevate commissioni di gas, molti detentori di DAI non sono riusciti a aggiungere collaterale in tempo per evitare la liquidazione.

Aste con Poco o Nessun Partecipante:
------------------------------------

Le liquidazioni in MakerDAO avvengono attraverso un sistema di aste. A causa della congestione della rete e di altre anomalie, alcune di queste aste sono state vinte con offerte molto basse, in alcuni casi con offerte di 0 ETH, permettendo agli attori di ottenere collaterale praticamente gratis.

Deficit nel Sistema:
--------------------

Questa combinazione di fattori ha portato a un deficit nel sistema MakerDAO di milioni di dollari. Per coprire il deficit, MakerDAO ha dovuto condurre un'asta di token MKR. Questo ha diluito alcuni detentori di MKR, ma ha fornito le risorse necessarie per stabilizzare il sistema.

Risposta della Comunità e Misure Correttive:
--------------------------------------------

Dopo l'evento, la comunità di MakerDAO e i suoi sviluppatori hanno lavorato insieme per analizzare ciò che era accaduto, risarcire gli utenti colpiti e implementare misure per prevenire incidenti simili in futuro. Ciò includeva l'aggiustamento dei parametri del sistema, l'ottimizzazione delle aste e la ricerca di soluzioni per ridurre la dipendenza dalla rete Ethereum durante periodi di alta congestione.

Conclusioni
===========

Le stablecoin sono utili. Quelle di cui abbiamo discusso qui sono prevalentemente legate alla crittografia e alla possibilità di "viaggiare" sui binari e sui protocolli delle criptovalute. ma esistono anche le valute digitali di Stato e Libra (anche se ormai questo è un progetto defunto). Oggi (data 8 Agosto 2023) è stato annunciato il progetto di stablecoin di Paypal che sicuramente merita un approfondimento in un articolo successivo.

Le varie stablecoin sono fra loro totalmente diverse e dobbiamo stare attenti a non confonderle come se fossero tutte uguali, la validità del credito che vantiamo quando possediamo una stablecoin dipende dall'emittente e dal protocollo ed inoltre può rispondere o meno a meccanismi di censura governativa o di regolamentazione che possono rendere il sistema privo di utilità.

Tornando alle stablecoin in blockchain abbiamo visto tre modi per realizzarle, con collaterale in moneta a corso legale, con collaterale in cripto e senza collaterale. Sfortunatamente se si vanno a vedere i numeri:

-   Collaterale in moneta a corso legale

-   Collaterale in cripto

-   Senza collaterale

DAI sembra essere l'unica decentralizzata che ha acquisito significative quote del mercato. Tuttavia la decentralizzazione è ahimè apparente, infatti i meccanismi di stabilizzazione degli smart contract sono puntualmente falliti durante le fasi di mercato più ribassista costringendo la community di MakerDAO a [votare per introdurre USDC come ulteriore tipo di collaterale](https://it.cointelegraph.com/news/makerdao-governance-approves-usdc-stablecoin-as-collateral) cercando dunque un'ancora di salvezza nella stabilità fornita in modo indiretto da un'altra stablecoin (di quelle garantite da collaterale in fiat).

Oltre le stablecoin ancorate al prezzo del dollaro o dell'euro (presto dello yuan) ci sono poi quelle ancorate al valore di metalli preziosi, tra cui Tether Au e Paxos Gold, ma questo argomento merita un articolo a parte.
