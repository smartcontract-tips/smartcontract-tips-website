---
title: "Hardware Wallet: Consigli Pratici per il Ripristino quando si rompono"
date: 2025-02-01
image: /pics/posts/2025-02-01-hardware-wallet-ripristino-consigli-pratici/cover.png

tags: ["wallet", "recovery", "hardware-wallet", "trezor", "ledger", "mnemonic", "bip44"]
layout: post

---

Contrariamente a quanto in molti sembrano ancora pensare, gli hardware wallet (e direi i wallet in senso ampio) non “contengono” i bitcoin o altri asset in sé, ma agiscono come dispositivi sicuri per la conservazione delle chiavi private, le quali sono necessarie per firmare e autorizzare le transazioni sulla blockchain. Ecco alcuni punti chiave:

1. **Custodia delle chiavi private**:  
   Gli hardware wallet memorizzano le chiavi private in un ambiente isolato e offline, proteggendole da possibili attacchi online. Questo isolamento è fondamentale per mantenere sicuri gli asset digitali.

2. **Le firme digitali**:  
   Quando effettui una transazione, l'hardware wallet utilizza la chiave privata per generare una firma digitale. Questa firma conferma l'autenticità della transazione senza esporre la chiave privata, mantenendo così la sicurezza del processo.

3. **Gli asset sulla blockchain**:  
   I bitcoin e altri asset esistono (sono contabilizzati) effettivamente sulla blockchain. Il wallet (sia esso hardware o software) serve da strumento per interagire con la blockchain, autorizzando movimenti e verificando il saldo. Il “controllo” effettivo degli asset è legato alla chiave privata, non al dispositivo fisico.


Il mio Trezor (o Ledger) si è rotto, come faccio?
-------------

Cosa succede quando il nostro hw wallet trezor o ledger nano non funziona più? Entriamo comprensibilmente in uno stato di ansia e quasi di panico.

Calma, La sicurezza e la proprietà dei tuoi asset sono garantite dalla tua **frase di recupero** (o seed phrase), che hai dovuto annotare al momento della configurazione iniziale. Ecco cosa succede e cosa puoi fare:

1. **Importanza della frase di recupero**:  
   La frase di recupero è la chiave per rigenerare le tue chiavi private. Se il dispositivo si guasta o viene perso, puoi utilizzare questa frase per ripristinare il portafoglio su un nuovo hardware wallet o su un software wallet compatibile.

2. **Processo di recupero**:  
   - **Acquisto di un nuovo dispositivo**: Puoi acquistare un nuovo hardware wallet (può essere dello stesso tipo o di un altro, purché supporti gli standard di recupero come BIP39/BIP44).  
   - **Ripristino del portafoglio**: Durante la configurazione del nuovo dispositivo, ti verrà chiesto di inserire la tua frase di recupero. Inserendola correttamente, il nuovo dispositivo rigenererà le tue chiavi private e, di conseguenza, potrai accedere ai tuoi asset.


Abbiamo capito che anche se il tuo hardware wallet dovesse smettere di funzionare, la cosa più importante è che tu abbia conservato correttamente la tua frase di recupero. Questa è la chiave per mantenere il controllo sui tuoi asset e per poterli ripristinare su un nuovo dispositivo senza perdere nulla.

Non hai più la frase di recupero, il tuo Ledger/Trezor o altro HW wallet è rotto o smarrito?
---------

Ecco questa è forse la tempesta perfetta in cui **NON** devi mai arrivare. Infatti in questi casi le cose si fanno veramente difficili e se avevi grosse quantità di coin gestite da quel wallet beh, le probabilità di rivederli sono vicine allo zero.

Procedura di recupero
-------------

> le istruzioni di recupero a partire dalle 12 o 24 parole sono sempre un po' tendenziosamente commerciali, ovvero sia Trezor che Ledger nella loro documentazione danno per scontato che, date le 24 parole della mnemonic, queste vengano usate per trasferire i fondi su un nuovo esemplare dei loro prodotti.

È vero, le istruzioni di recupero fornite da Trezor, Ledger e altri hardware wallet spesso si concentrano sull’utilizzo del loro specifico dispositivo per il ripristino, e questo può apparire come un approccio "commerciale". Tuttavia, è importante tenere a mente alcuni aspetti fondamentali:

1. **Standard di settore**:  
   Le frasi seed (12 o 24 parole) seguono standard aperti come BIP39 e BIP44, il che significa che, in teoria, sono interoperabili tra diversi wallet compatibili. Questo implica che, sebbene le documentazioni ufficiali possano assumere che tu utilizzi il loro prodotto, la tua mnemonic può essere impiegata per recuperare i fondi anche su altri dispositivi o software wallet che supportino gli stessi standard.

2. **Flessibilità e opzioni alternative**:  
   Se preferisci non affidarti esclusivamente a un singolo fornitore, hai la possibilità di utilizzare soluzioni alternative. Ad esempio, puoi importare la tua seed phrase in un altro hardware wallet compatibile o in un software wallet sicuro, a condizione di seguire le migliori pratiche di sicurezza.  Tuttavia, va sottolineato che questa operazione deve essere eseguita con estrema cautela, poiché inserire la frase seed in un dispositivo o un’applicazione non completamente di fiducia può esporla a rischi.

3. **Motivazioni commerciali e semplificazione dell’utente**:  
   I produttori di hardware wallet cercano di semplificare il processo per gli utenti, assumendo che la maggior parte preferisca utilizzare il dispositivo per cui ha acquistato il servizio. Questo può portare a documentazioni che, pur essendo funzionali e orientate alla sicurezza, non esplorano a fondo tutte le possibilità di interoperabilità con altri sistemi.

4. **Consapevolezza e formazione**:  
   È importante essere informati su come funzionano gli standard dietro le mnemonic e conoscere le proprie opzioni. Se decidi di utilizzare la tua seed phrase su un dispositivo diverso, assicurati di comprendere bene le implicazioni in termini di sicurezza e di operare in un ambiente sicuro e affidabile. Ad esempio, evita di inserire la mnemonic in siti online solo per vedere quali address sono ad essa associati. Se proprio devi fare queste prove falle usando un PC non connesso alla rete e usa codice tuo o sotto il tuo controllo. Un ottimo esercizio se sei un programmatore è quello di usare le librerie bitcoin in python o altri linguaggi e generare gli address che poi potrai controllare su explorer per vedere il balance. Non fare copie della mnemonic, stai giocando con il fuoco!

Comunque, anche se le istruzioni ufficiali dei produttori tendono a guidarti verso l’utilizzo dei loro prodotti, la tua frase seed è un mezzo indipendente e standardizzato per recuperare l’accesso ai tuoi fondi. Con le dovute precauzioni, puoi optare per alternative che ritieni più adatte alle tue esigenze, mantenendo sempre al centro la sicurezza della tua mnemonic.


Attenzione però, si fa presto a dire standard. Il caso Electrum
--------------

Non tutti gli sviluppatori di wallet usano gli standard. Parliamo di un caso un po' limite che tralaltro non riguarda un hardware wallet. Electrum utilizza un proprio sistema per le mnemonic piuttosto che adottare uno standard come il BIP39, e le ragioni sono molteplici:

1. **Origini storiche**:  
   Quando Electrum è stato sviluppato, lo standard BIP39 non era ancora stato definito. Quindi, i creatori di Electrum hanno progettato il loro metodo per generare e gestire le mnemonic, basandosi sulle conoscenze e le esigenze dell’epoca.

2. **Progettazione e sicurezza**:  
   Utilizzando un algoritmo proprietario, Electrum ha potuto implementare meccanismi e logiche di sicurezza che riteneva più adatti alla sua architettura. Questo approccio ha permesso, ad esempio, di gestire in modo specifico la derivazione delle chiavi e di ottimizzare il processo di ripristino, sebbene possa risultare meno interoperabile con altri wallet che usano standard come il BIP39.

3. **Compatibilità retroattiva**:  
   Il sistema di mnemonic di Electrum è stato progettato sin dall’inizio per garantire la sicurezza e la facilità d’uso per gli utenti di Electrum. Cambiare lo standard in uso avrebbe potuto compromettere la retrocompatibilità con i wallet esistenti e confondere gli utenti abituati al metodo originale.

Dunque, Electrum non usa uno standard come il BIP39 per le mnemonic perché il suo sistema è nato prima dell’adozione di tali standard, ed è stato progettato per offrire specifiche garanzie di sicurezza e flessibilità, mantenendo il controllo completo sul processo di generazione e gestione delle chiavi. Tuttavia, questa scelta implica che le mnemonic di Electrum siano incompatibili con altri wallet che si basano sul BIP39, rendendo il trasferimento diretto tra piattaforme meno immediato.

**Non vogliamo giudicare se facciano bene oppure no, però bisogna saperlo!**

C'è da dire che Electrum usa il suo protocollo per la generazione delle mnemonic che non è importabile su altri wallet in generale, ma per fortuna non vale il contrario, ovvero le mnemonic standard bip39 sono importabili in Electrum.

La strada del recupero senza re-importare sullo stesso prodotto
------------

> Naturalmente se si sceglie la strada del recupero dalle 24 parole senza seguire la procedura per trasferire verso un nuovo esemplare dello stesso wallet ci si addentra in qualche tecnicismo e ci vuole un po' manico, oltre che calma e gesso. Fare il recupero e poi vedere il balance pari a zero è sicuramente motivo di ansia ma non cediamo al panico. **Se le 24 parole sono quelle giuste il modo c'è**

Quando si effettua il recupero della seed phrase (quelle 24 parole), la procedura può richiedere un po' di "manico" tecnico, soprattutto se non si utilizza lo stesso dispositivo o la stessa interfaccia con cui è stato originariamente creato il wallet. Ecco alcuni aspetti da tenere in considerazione:

1. **Derivazione delle chiavi (derivation paths)**:  
   Non tutti i wallet scelgono automaticamente lo stesso percorso di derivazione. Se dopo il ripristino il saldo appare pari a zero, potrebbe essere necessario verificare e, se possibile, modificare il derivation path per assicurarsi di visualizzare gli indirizzi corretti dove sono depositati i fondi.

2. **Differenze tra formati di indirizzo**:  
   A seconda che il wallet usi indirizzi legacy, SegWit o nativi (bech32), il recupero potrebbe non mostrare immediatamente il saldo se il software non sta esaminando il formato corretto. Alcuni wallet offrono opzioni per passare tra questi formati durante il ripristino.

3. **Calma e metodo**:  
   È comprensibile che vedere un saldo zero possa generare ansia, ma se la seed è corretta, i fondi sono sicuramente ancora sulla blockchain. È utile prendersi il tempo di:
   - Rivedere attentamente la procedura di ripristino.
   - Consultare le guide ufficiali o le risorse della community che spesso spiegano come selezionare il giusto derivation path.
   - Considerare l’uso di software wallet temporanei (sempre con la dovuta cautela) per verificare se i fondi compaiono con una diversa configurazione.

4. **Supporto e comunità**:  
   Non sei solo in questa situazione: molte persone hanno dovuto affrontare il problema del saldo non visibile immediatamente. Forum, gruppi di discussione e guide online possono offrire spunti e soluzioni pratiche. Anche contattare il supporto del wallet, sebbene talvolta possa essere un po' lento, può aiutare a chiarire eventuali dubbi.

Con un po' di pazienza, ricerca e magari l’aiuto della community, troverai sicuramente il modo per far comparire il saldo corretto. Mantieni la calma e procedi per gradi: il recupero può essere un processo tecnico, ma con il giusto approccio la soluzione c’è.


> Una delle cause principali nel vedere il balance pari a zero dopo tale recupero "manuale" è proprio il non ricordare quale tipo di address il nostro wallet utilizzava. Ricordiamoci che in fase di recupero generalmente dobbiamo decidere se recuperare indirizzi legacy, oppure p2pksh segwit oppure segwit nativo, se non lo ricordiamo potremmo dover provare le varie opzioni fino a vedere il balance comparire sul nostro wallet software.

Questo è uno degli aspetti più critici quando si esegue un recupero "manuale" della seed. Se non si ricorda quale tipo di address (legacy, p2pkh segwit, segwit nativo, ecc.) il wallet utilizzava originariamente, il saldo potrebbe non comparire immediatamente. Ecco alcuni punti chiave da considerare:

1. **Diversi Formati di Address**:  
   I wallet possono utilizzare vari formati di address. Ad esempio, un address legacy ha una struttura diversa rispetto a quelli SegWit (sia p2pkh segwit che nativo). Se durante il ripristino non viene selezionato il corretto derivation path o il formato di address utilizzato in origine, il wallet potrebbe non "vedere" i fondi depositati.

2. **Derivation Path**:  
   La scelta del derivation path giusto è fondamentale. Alcuni wallet utilizzano path standard, ma non è sempre garantito che il percorso di default sia quello corretto per il tuo caso. Potrebbe essere necessario esplorare diverse opzioni finché non trovi quella che mostra il saldo corretto.

3. **Procedura di Verifica**:  
   Se ti trovi di fronte a un saldo pari a zero, prova a:
   - Cambiare il formato degli indirizzi (passare da legacy a SegWit o viceversa).
   - Modificare il derivation path secondo le specifiche del wallet originale.
   - Consultare guide e documentazione specifica per il wallet che stai utilizzando, perché spesso ci sono indicazioni dettagliate su come recuperare correttamente i fondi.


Se non si è sicuri, la procedura migliore è quella di provare le diverse opzioni finché non si ottiene l'indicazione del saldo corretto. In questo modo, anche un recupero manuale diventa un'operazione fattibile, pur richiedendo un po' di "manico" tecnico e pazienza.


Derivation Path
---------------

Per indirizzi Bitcoin in formato legacy, ovvero quelli che iniziano con '1', lo standard BIP44 prevede generalmente il seguente derivation path:

```
m/44'/0'/0'/0
```

Ecco cosa significa ogni componente:

- **44'**: Indica il "purpose" (scopo) secondo lo standard BIP44.
- **0'**: Rappresenta il coin type per Bitcoin (0 per Bitcoin).
- **0'**: È l’account, tipicamente il primo account (account 0).
- **0**: Indica il tipo di indirizzo, dove 0 sta per gli indirizzi di ricezione (mentre 1 sarebbe per i resti).

A questo punto, i singoli indirizzi vengono derivati aggiungendo l’indice dell’indirizzo (ad esempio, 0, 1, 2, …), ottenendo percorsi come:

- Primo indirizzo di ricezione: `m/44'/0'/0'/0/0`
- Secondo indirizzo: `m/44'/0'/0'/0/1`
- E così via.

Se durante il ripristino manuale non vedi il saldo atteso, assicurati di aver selezionato il derivation path corretto. In caso di dubbi, puoi provare a variare l’ultimo indice o verificare che il wallet software stia esaminando il corretto "branch" (ricezione vs. resti). Questo è particolarmente importante se in passato hai usato percorsi personalizzati o se il wallet originale aveva impostazioni non standard.

Per gli indirizzi legacy, lo standard BIP44 definisce un percorso separato per gli indirizzi di **resto** (change addresses). Il derivation path tipico per gli indirizzi di cambio in un wallet legacy è:

```
m/44'/0'/0'/1
```

Vediamo il significato di ciascuna parte:

- **44'**: Indica lo standard BIP44.
- **0'**: Coin type per Bitcoin (0 per Bitcoin).
- **0'**: Primo account (account 0).
- **1**: Questo indice indica la "resto", in contrapposizione a **0** che viene usato per gli indirizzi di ricezione.

Per derivare i singoli indirizzi di resto, si aggiunge l'indice dell'indirizzo alla fine del percorso. Ad esempio:
- Primo indirizzo di resto: `m/44'/0'/0'/1/0`
- Secondo indirizzo di resto: `m/44'/0'/0'/1/1`
- E così via.

Utilizzando questo percorso durante il processo di ripristino manuale, il wallet software dovrebbe essere in grado di scansionare e riconoscere correttamente gli indirizzi di resto associati al tuo wallet legacy.

Indirizzi Segwit
---------------

Per gli indirizzi SegWit la derivazione dipende dallo standard adottato. Le due varianti più comuni sono:

1. **P2SH-SegWit (BIP49)**:  
   - **Indirizzi di ricezione**:  
     `m/49'/0'/0'/0`  
     Gli indirizzi derivati in questo ramo avranno formato P2SH (generalmente iniziano con il numero "3" per Bitcoin).  
   - **Indirizzi di cambio**:  
     `m/49'/0'/0'/1`  
     In questo ramo vengono generati gli indirizzi di cambio.

2. **Native SegWit (Bech32, BIP84)**:  
   - **Indirizzi di ricezione**:  
     `m/84'/0'/0'/0`  
     Gli indirizzi derivati in questo ramo saranno in formato Bech32 (generalmente iniziano con "bc1" per Bitcoin).  
   - **Indirizzi di cambio**:  
     `m/84'/0'/0'/1`  

**Note importanti**:
- Il prefisso `0'` dopo il coin type indica Bitcoin (coin type 0).  
- L'uso di `44'`, `49'` o `84'` nel percorso serve a identificare lo standard adottato (BIP44 per legacy, BIP49 per P2SH-SegWit, BIP84 per Native SegWit).  
- È fondamentale selezionare il corretto derivation path in fase di ripristino, altrimenti potresti non vedere il saldo associato agli indirizzi se il wallet non sta esaminando la catena corretta.

Scegliendo il percorso adeguato a seconda dello standard usato originariamente dal tuo wallet, potrai visualizzare correttamente i fondi presenti sulla blockchain.


Per concludere
--------------

> Le chiavi private non dovrebbero mai lasciare il dispositivo in cui sono nate, stessa cosa vale per il mnemonic, che dovrebbe essere scritto a mano su un supporto che non diventa mai accessibile online. I software wallet sono in generale meno sicuri di quelli hardware che per loro natura non sono attaccabili da virus e malware che invece possono colpire i pc.

**Se vuoi trasferire i fondi da un hw wallet ad un software wallet, devi sapere cosa stai facendo, e non dovrebbe essere una soluzione definitiva.**

Le chiavi private e il mnemonic sono elementi estremamente sensibili e devono rimanere sempre protetti. Ecco alcuni punti chiave per chiarire il concetto:

1. **Isolamento delle chiavi private**:  
   Le chiavi private non dovrebbero mai lasciare il dispositivo in cui sono state generate. Gli hardware wallet sono progettati appositamente per mantenere le chiavi in un ambiente isolato, rendendole inaccessibili a virus, malware o attacchi informatici che possono colpire dispositivi connessi a internet.

2. **Protezione del mnemonic**:  
   Il mnemonic (frase seed) deve essere scritto a mano e conservato in modo sicuro, preferibilmente offline, su supporti resistenti e protetti da accessi non autorizzati. La sua esposizione o memorizzazione in formato digitale (soprattutto online) aumenta il rischio di compromissione.

3. **Rischi dei software wallet**:  
   I software wallet, pur offrendo maggiore comodità e accessibilità, sono generalmente meno sicuri perché operano in ambienti (PC, smartphone) esposti a possibili attacchi da virus e malware. Trasferire i fondi da un hardware wallet a un software wallet implica abbassare il livello di sicurezza, e quindi va fatto solo se si è assolutamente certi delle proprie capacità tecniche e del contesto in cui si opera.

4. **Trasferimenti e soluzioni temporanee**:  
   Se si decide di trasferire i fondi da un hardware wallet a un software wallet, è fondamentale essere consapevoli delle implicazioni in termini di sicurezza. Questa operazione dovrebbe essere considerata una soluzione temporanea o per specifiche esigenze, e non come metodo definitivo di conservazione a lungo termine dei fondi.

