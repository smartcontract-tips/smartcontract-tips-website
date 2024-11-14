---
layout: post
title: Poly Network è stato attaccato di nuovo.
date: 2023-07-03 16:49:51.000000000 +02:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
category: Case Study
tags: []
permalink: "/articoli/poly-network-stato-attaccato-di-nuovo/"
excerpt: 'Il 2 luglio è avvenuto un attacco alla piattaforma di bridge cross-chain
  Poly Network, nel quale ulteriori dettagli stanno emergendo: un hacker è riuscito
  a emettere miliardi di token dal nulla per trarne profitto. In un tweet del 2 luglio,
  Poly Network ha confermato di essere diventata l''ultima vittima di un''operazione
  di sfruttamento finanziario decentralizzato (DeFi) dopo che gli attaccanti sono
  riusciti a manipolare una funzione di contratto intelligente nel protocollo di bridge
  cross-chain, aggiungendo che sospenderebbero temporaneamente i servizi.'
image: /featured_images/polynetwork.png
---
Il 2 luglio è avvenuto un attacco alla piattaforma di bridge cross-chain Poly Network, nel quale ulteriori dettagli stanno emergendo: un hacker è riuscito a emettere miliardi di token dal nulla per trarne profitto.

In un tweet del 2 luglio, Poly Network ha confermato di essere diventata l'ultima vittima di un'operazione di exploit finanziario decentralizzato (DeFi) dopo che gli attaccanti sono riusciti a manipolare una funzione di smart contract nel protocollo di bridge cross-chain, aggiungendo che sospenderebbero temporaneamente i servizi.

Nell'aggiornamento più recente, il team ha rivelato che l'operazione di sfruttamento ha coinvolto 57 cripto-asset su 10 blockchain, tra cui Ethereum, BNB Chain, Polygon, Avalanche, Heco, OKX e Metis.


![](https://smartcontract.tips/assets/2023/07/polynetwork.png)


Non hanno specificato l'ammontare rubato nell'attacco, ma PeckShield ha precedentemente riferito che l'autore dell'operazione ha trasferito almeno $5 milioni di crypto.

"**Nella nostra comunicazione del 3 luglio, abbiamo già avviato contatti con gli exchange centralizzati e le autorità di polizia, chiedendo il loro aiuto**", ha dichiarato il team.

Ha anche consigliato ai team dei progetti e ai detentori di token di ritirare la liquidità e sbloccare i loro token fornitori di liquidità.

Scomposizione del hack da "34 miliardi" di Poly Network
-------------------------------------------------------

L'analista di sicurezza DeFi Arhat ha affermato che lo sfruttamento è stato possibile grazie a una vulnerabilità dello smart contract che ha consentito all'hacker di "creare un parametro malevolo contenente una firma falsa del validatore e un'intestazione del blocco".

Lo smart contract ha accettato questo parametro, consentendo all'hacker di eludere il processo di verifica e di emettere token dal pool di Ethereum di Poly Network verso il proprio indirizzo su altre catene, come Metis, BNB Chain e Polygon.

Il processo è stato ripetuto per altre chain, consentendo l'accumulo di un gran numero di token.

In un certo momento, il portafoglio dell'hacker conteneva circa 42 miliardi di dollari in token, ma l'analista ha dichiarato che sono riusciti a convertire e rubare solo una frazione di essi.

"In questo modo, l'hacker è stato in grado di coniare miliardi di token su varie blockchain che non esistevano prima e di trasferirli ai propri indirizzi del portafoglio".

Il fornitore di soluzioni di sicurezza blockchain Dedaub ha definito l'ultimo sfruttamento di Poly Network il "hack da 34 miliardi di Poly Network".

![](https://smartcontract.tips/assets/2023/07/Screenshot+2023-07-03+alle+18.56.47.png)

Dedaub ha spiegato che l'attacco non è stato complesso, poiché non sono stati sfruttati bug logici. Ha inoltre aggiunto che Poly Network ha impiegato sette ore per rispondere, il che ha comportato una perdita di criptovaluta pari a 5,5 milioni di dollari per la piattaforma. Fortunatamente, la mancanza di liquidità in molti dei token ha impedito ulteriori perdite.

Informazioni sull'Attacco:
--------------------------

Poly Network ha subito una significativa violazione della sicurezza il 2 luglio 2023 alle 18:47:20 UTC, inizialmente segnalata come un potenziale attacco hacker da 34 miliardi di dollari. Tuttavia, l'importo effettivamente rubato è risultato considerevolmente inferiore a causa della maggior parte dei token che erano illiquidi.

L'azienda ha annunciato la sospensione dei suoi servizi a causa dell'attacco, spiegando che stava lavorando con i suoi partner per valutare cosa è stato rubato e chiedendo alle aziende di sicurezza delle blockchain di aiutarli a rispondere.

> Cari utenti, vorremmo informarvi che Poly Network sta sospendendo temporaneamente i suoi servizi a causa di un recente attacco. Stiamo collaborando attivamente con le parti interessate e valutando diligentemente l'estensione degli asset coinvolti. 【1/3】
>
> Poly Network (@PolyNetwork2) 2 luglio 2023

Domenica pomeriggio, l'azienda ha dichiarato che sono stati interessati 57 asset su 10 blockchain, condividendo un foglio di [calcolo di Google](https://docs.google.com/spreadsheets/d/1NK1v-hvaPKQviZqowtwwOm3swF0vNNN_vhFivbmRTqs/edit#gid=1847296343) che mostra quanti cripto-attività sono state rubate durante l'attacco informatico.

![](https://smartcontract.tips/assets/2023/07/poly+spreadsheet.png)

Per affrontare la situazione, il team di Poly ha temporaneamente messo in pausa i loro smart contract: [EthCrossChainManager](https://library.dedaub.com/ethereum/address/0x14413419452aaf089762a0c5e95ed2a13bbc488c/transactions/incoming?fromBlock=17603096&tx_index=0&vm_step_start=0), su diverse blockchain, tra cui Metis, BSC ed Ethereum.

![](https://smartcontract.tips/assets/2023/07/poly+3.png)

Attraverso un'approfondita indagine, è stato determinato che la causa principale della violazione non era una falla logica nello smart contract, ma piuttosto il probabile furto o uso improprio delle chiavi private appartenenti a tre dei quattro gestori controllati dal team di Poly Network.

Per comprendere la meccanica dell'attacco, è necessario comprendere l'architettura dei gestori cross-chain di Poly.

Ecco i dettagli dello smart contract:

**Smart Contract EthCrossChainManager:**

**Indirizzo**: 0x14413419452Aaf089762A0c5e95eD2A13bBC488C

[**Link**: https://etherscan.io/address/0x14413419452aaf089762a0c5e95ed2a13bbc488c#code](link: https://etherscan.io/address/0x14413419452aaf089762a0c5e95ed2a13bbc488c#code)

![](https://smartcontract.tips/assets/2023/07/poly+etherscan.png)

Spiegazione dell'Attacco a Poly Network:
----------------------------------------

#### Contratti di gestione cross-chain

Poly utilizza un sistema di contratti di gestione **cross-chain** che consentono il trasferimento di token da una blockchain all'altra. Questi contratti convalidano le prove di modifiche al trasferimento dei token sulla blockchain originale, insieme alle istruzioni codificate per una transazione che facilita il prelievo di questi token sulla blockchain attuale.

```
    /* @notice Verify Poly chain header and proof, execute the cross chain tx from Poly chain to Ethereum
    *  @param proof         Poly chain tx merkle proof
    *  @param rawHeader     The header containing crossStateRoot to verify the above tx merkle proof
    *  @param headerProof   The header merkle proof used to verify rawHeader
    *  @param curRawHeader  Any header in current epoch consensus of Poly chain
    *  @param headerSig     The converted signature variable for solidity derived from Poly chain consensus nodes' signature
    *                     used to verify the validity of curRawHeader
    *  @return              true or false
*/

 function verifyHeaderAndExecuteTx(bytes memory proof, bytes memory rawHeader, bytes memory headerProof, bytes memory curRawHeader, bytes memory headerSig) whenNotPaused public returns (bool) {
```


Punto di accesso principale che consente agli utenti di unlock token sulla "destinazione" blockchain che erano "bloccati" sull'originale blockchain.

In Poly, il processo di trasferimento dei token dall'originale blockchain è noto come lock, mentre la funzione di recupero dei token è chiamata `unlock`. Per abilitare l'evento di sblocco sulla blockchain di destinazione, Poly utilizza un sistema di `consensus nodes` che agiscono come account di proprietà esterna (EOA) e convalidano l'evento. Questi nodi di consenso includono l'entropia rilevante proveniente dalla blockchain di origine per confermare l'evento di blocco, che consiste in una radice di stato che riflette i token bloccati. Il seguente codice verifica la corretta firma della struttura `header`da parte dei nodi di consenso. L'intestazione contiene la radice di stato di un albero di Merkle. Poiché l'intera intestazione è firmata, la radice di stato, insieme all'intero stato osservato dall'albero di Merkle, viene considerata firmata.

```
/* @notice              Verify Poly chain consensus node signature
 *  @param _rawHeader    Poly chain block header raw bytes
 *  @param _sigList      consensus node signature list
 *  @param _keepers      addresses corresponding with Poly chain book keepers' public keys
 *  @param _m            minimum signature number
 *  @return              true or false
 */
function verifySig(bytes memory _rawHeader, bytes memory _sigList, address[] memory _keepers, uint _m) internal pure returns (bool) {
    bytes32 hash = getHeaderHash(_rawHeader);
    // (Additional comment for the article)
    //_rawHeader = 0x0000000000000000000000001e8bb7336ce3a75ea668e10854c6b6c9530dab7...
    //_sigList = // List of 3 signatures from 0x3dFcCB7b8A6972CDE3B695d3C0c032514B0f3825,0x4c46e1f946362547546677Bfa719598385ce56f2,0x51b7529137D34002c4ebd81A2244F0ee7e95B2C0
    //_keepers = ["0x3dFcCB7b8A6972CDE3B695d3C0c032514B0f3825","0x4c46e1f946362547546677Bfa719598385ce56f2","0xF81F676832F6dFEC4A5d0671BD27156425fCEF98","0x51b7529137D34002c4ebd81A2244F0ee7e95B2C0"]
    //_m = 3
    uint sigCount = _sigList.length.div(POLYCHAIN_SIGNATURE_LEN);
    address[] memory signers = new address[](sigCount);
// commento aggiuntivo per l'articolo
// signers = [
//     0x4c46e1f946362547546677Bfa719598385ce56f2,
//     0x3dFcCB7b8A6972CDE3B695d3C0c032514B0f3825,
//     0x51b7529137D34002c4ebd81A2244F0ee7e95B2C0
// ]
bytes32 r;
bytes32 s;
uint8 v;
for (uint j = 0; j < sigCount; j++) {
    r = Utils.bytesToBytes32(Utils.slice(_sigList, j * POLYCHAIN_SIGNATURE_LEN, 32));
    s = Utils.bytesToBytes32(Utils.slice(_sigList, j * POLYCHAIN_SIGNATURE_LEN + 32, 32));
    v = uint8(_sigList[j * POLYCHAIN_SIGNATURE_LEN + 64]) + 27;
    signers[j] = ecrecover(sha256(abi.encodePacked(hash)), v, r, s);
    if (signers[j] == address(0))
        return false;
}
return Utils.containMAddresses(_keepers, signers, _m);
}
```
Abbiamo verificato l'invocazione corretta del codice menzionato in precedenza e confermato che l'intestazione era stata firmata da tre dei gestori centralizzati. Ciò soddisfaceva lo schema di firma dei gestori (k-1) su k. Inoltre, ci siamo assicurati che l'elenco dei gestori non fosse stato modificato prima dell'attacco. Nel corso di un periodo di due anni, l'elenco dei gestori è rimasto invariato, composto da quattro account di proprietà esterna (EOA). È comune per i protocolli decentralizzati utilizzare "gestori" che sono sistemi esterni controllati dal team di sviluppo, per fornire informazioni essenziali agli smart contract. Questo è necessario perché gli smart contract non possono operare in modo indipendente e richiedono l'invocazione esterna. Tuttavia, affidarsi a tre gestori per la sicurezza end-to-end in un ponte cross-chain ad alto valore totale bloccato (TVL) è insolito.

Continuando la nostra indagine, assumendo che l'attaccante non avesse il controllo su tre degli account EOA, abbiamo preso in considerazione il provatore di Merkle come la possibile causa di un bug logico negli smart contract. Di conseguenza, abbiamo proseguito nell'esaminare ulteriormente questo aspetto.
```
/* @notice                  Verify Poly chain transaction whether exist or not
 *  @param _auditPath        Poly chain merkle proof
 *  @param _root             Poly chain root
 *  @return                  The verified value included in _auditPath
 */
function merkleProve(bytes memory _auditPath, bytes32 _root) internal pure returns (bytes memory) {
    uint256 off = 0;
    bytes memory value;
    (value, off) = ZeroCopySource.NextVarBytes(_auditPath, off);

    bytes32 hash = Utils.hashLeaf(value);
    uint size = _auditPath.length.sub(off).div(33);
    bytes32 nodeHash;
    byte pos;
    for (uint i = 0; i < size; i++) {
        (pos, off) = ZeroCopySource.NextByte(_auditPath, off);
        (nodeHash, off) = ZeroCopySource.NextHash(_auditPath, off);
        if (pos == 0x00) {
            hash = Utils.hashChildren(nodeHash, hash);
        } else if (pos ==
0x01) {
            hash = Utils.hashChildren(hash, nodeHash);
        } else {
            revert("merkleProve, NextByte for position info failed");
        }
    }
    require(hash == _root, "merkleProve, expect root is not equal actual root");
    return value;
}
```
Il sopracitato provatore di Merkle riceve una sequenza di byte (_auditPath) come input, che include il nodo foglia seguito da un percorso attraverso l'albero di Merkle che funge da prova dell'esistenza del nodo foglia. Questa prova si basa sulla radice di stato (_root), che è già stata firmata dai gestori. Se non sei familiare con il funzionamento degli alberi di Merkle, l'immagine sottostante illustra una struttura dati crittograficamente sicura nota come albero di Merkle. L'efficacia dell'algoritmo risiede nel fatto che la radice dell'albero di Merkle contiene l'entropia cumulativa di tutti i nodi foglia nell'albero. Di conseguenza, una prova (chiamata "witness") può essere generata e verificata facilmente a basso costo. Fidarsi della radice dell'albero è sufficiente, poiché tutto ciò che viene verificato da una testimonianza dell'albero di Merkle è implicitamente affidabile.

![](https://smartcontract.tips/assets/2023/07/poly+4.png)

L'aspetto cruciale qui è che l'attaccante ha approfittato della flessibilità implementativa del verificatore per semplificare lo scenario di sfruttamento. È interessante notare che il verificatore consente l'uso di testimonianze di lunghezza zero. In questo caso specifico, l'attaccante ha fornito il nodo foglia, che si è rivelato esattamente di 240 byte, insieme a un percorso vuoto come prova. Sorprendentemente, affinché questa prova sia riuscita, l'hash del nodo foglia deve corrispondere all'hash della radice di stato. Ciò rafforza l'ipotesi che i gestori della catena Poly siano stati probabilmente compromessi e abbiano approvato una radice di stato artificialmente costruita. In modo notevole, l'unica informazione incorporata nella radice di stato era un comando di sblocco che trasferiva i token all'attaccante.

È sfortunato notare che Poly Network era già stato attaccato da un hacker greyhat quasi due anni fa.

![](https://smartcontract.tips/assets/2023/07/poly+6.png)

Infine, a Poly Network ci sono volute 7 ore per reagire all'attacco odierno, nel frattempo l'attaccante ha orchestrato diverse transazioni su diverse blockchain per sfruttarlo.

Nonostante le informazioni fornite in precedenza, attualmente non ci sono prove conclusive a supporto dell'affermazione che le chiavi siano state rubate. È possibile che si sia trattato di un "rugpull" o che il software off-chain utilizzato da tre dei quattro gestori sia stato compromesso. Indipendentemente da ciò, l'esito sembra lo stesso basandoci sulle nostre osservazioni. Ciò che è certo in questo attacco è che non c'è stata l'exploit di bug logici negli smart contract responsabili dei trasferimenti di token e i gestori hanno firmato una prova che è stata intenzionalmente manipolata. Se gli sviluppatori di Poly Network confermano che l'attacco è effettivamente legato a chiavi di firma compromesse, come sembra probabile, solleva preoccupazioni sulla idoneità dei ponti centralizzati che controllano ingenti quantità di fondi. L'attacco implica anche che il team di Poly Network potrebbe non aver monitorato attentamente il ponte sottostante con la massima efficienza.