---
title: "I Rischi alla Sicurezza con l'Infinite Approval negli Scambi di Token"
date: 2024-12-15
image: /pics/posts/2024-12-15-infinite-approval-token-pericoli-sicurezza/cover.webp
tags: ["erc20", "erc721", "smart-contract", "approval", "token", "flash-loan", "hack"]
layout: post
---

## Cosa sono le infinite token approvals?

Le **infinite token approvals** sono autorizzazioni che un utente concede a uno smart contract per gestire i propri token in modo illimitato. Quando interagisci con una dApp (decentralized application), spesso [ti viene richiesto di approvare che lo smart contract](/en/post/understanding-erc20-token-approvals) associato possa spendere o trasferire i tuoi token per eseguire determinate operazioni. Per semplificare l’esperienza utente, molte dApp richiedono un'autorizzazione "infinita", cioè che consente allo smart contract di gestire un numero illimitato dei tuoi token senza bisogno di approvazioni ripetute. Questo approccio è comune perché elimina la necessità di autorizzazioni successive, rendendo le interazioni più fluide. Tuttavia, una volta concessa, questa autorizzazione rimane valida finché non viene revocata manualmente. Sebbene sembri pratico, l'autorizzazione illimitata può comportare rischi significativi se lo smart contract approvato viene compromesso o utilizzato in modo malevolo. In sintesi, le infinite token approvals sono una funzionalità progettata per migliorare l'usabilità delle dApp, ma a scapito della sicurezza.



## Quali rischi comportano le autorizzazioni illimitate?

Concedere autorizzazioni illimitate ai token espone l'utente a rischi significativi. Se uno smart contract approvato viene compromesso o presenta vulnerabilità, un attaccante potrebbe utilizzare quell'autorizzazione per trasferire o sottrarre tutti i token approvati. Inoltre, in alcuni casi, gli sviluppatori possono inserire codice malevolo nel contratto, sfruttando queste autorizzazioni per eseguire operazioni non autorizzate. Un altro rischio deriva dall’impossibilità di monitorare continuamente lo stato degli smart contract. Un contratto che oggi è affidabile potrebbe diventare pericoloso in futuro se il suo controllo passa a un’entità malevola. Le autorizzazioni illimitate sono un obiettivo particolarmente appetibile per gli hacker, poiché non richiedono ulteriori conferme da parte dell’utente, rendendo le transazioni fraudolente praticamente automatiche. Infine, molti utenti concedono tali autorizzazioni senza comprenderne appieno le implicazioni, aumentando il rischio di attacchi o perdite accidentali.



## Come si possono revocare le autorizzazioni?

Revocare le autorizzazioni illimitate è essenziale per proteggere i tuoi token. Per farlo, puoi utilizzare strumenti dedicati come [Revoke.cash](https://revoke.cash), [Etherscan Token Approval Checker](https://etherscan.io/tokenapprovalchecker) o altre piattaforme simili. Questi strumenti ti consentono di connettere il tuo wallet, analizzare le autorizzazioni esistenti e revocare quelle non necessarie. Una volta connesso il tuo wallet, l'applicazione elencherà gli smart contract che hanno accesso ai tuoi token, indicando il tipo di autorizzazione concessa. Puoi quindi selezionare quelle indesiderate e revocarle, pagando una piccola commissione di gas sulla blockchain. È consigliabile controllare regolarmente il tuo wallet, specialmente dopo aver interagito con nuove dApp. Inoltre, una buona pratica è limitare le autorizzazioni ai token strettamente necessari per ogni operazione, evitando di concedere accessi illimitati. Questo approccio ti consente di mantenere un maggiore controllo sui tuoi asset e riduce il rischio di attacchi.



## **"Analisi dell'Exploit del Contratto di Bonding di Spectra Labs: Perdita di 250.000$"**

Non solo noi utenti siamo vulnerabili direttamente all'infinite approval, anche piattaforme e sistemi possono essere affette da questo problema.

Il 1° dicembre 2024, il contratto di bonding "Syntax V2" di Spectral è stato oggetto di un exploit che ha portato alla sottrazione di circa 250.000 dollari in token SPEC. L'attaccante ha sfruttato una vulnerabilità di approvazione infinita nel contratto `AgentToken.sol`, utilizzando un flash loan per manipolare le approvazioni dei token e trasferire quasi tutti i fondi da questo contratto, alterando le curve di bonding e ottenendo un numero sproporzionato di token SPEC.

**Dettagli dell'Exploit:**

1. **Flash Loan:** L'attaccante ha preso in prestito token SPEC per ottenere liquidità iniziale.

2. **Swap di Token:** Ha scambiato i token SPEC con token `AgentToken.sol` tramite il contratto `AutonomousAgentDeployer.sol` utilizzando la funzione `swapExactSPECForTokens`.

3. **Manipolazione delle Approvazioni:** Durante il calcolo delle tasse nel trasferimento dei token, una linea di codice errata ha concesso un'approvazione infinita al contratto `AgentBalances.sol`.

4. **Deposito e Manipolazione della Bonding Curve:** L'attaccante ha utilizzato questa approvazione per trasferire quasi tutti i token `AgentToken.sol` al contratto `AgentBalances.sol`, manipolando la curva di bonding che utilizzava una formula XYK (prodotto costante).

5. **Profitto:** Ha scambiato una piccola quantità di `AgentToken.sol` per una grande quantità di token SPEC, ripetendo il processo per drenare circa 14.793 token SPEC, equivalenti a circa 250.000 dollari.

**Causa Principale:**

L'exploit è stato reso possibile da un'approvazione infinita non intenzionale nel contratto `AgentToken.sol` durante il calcolo delle tasse, che ha permesso all'attaccante di manipolare i saldi dei token e sfruttare la curva di bonding.

Per una descrizione dettagliata dell'exploit, consulta l'articolo completo su [Medium](https://quillaudits.medium.com/decoding-spectra-labs-bonding-contract-250k-exploit-b88d249c3218). 


## Risorse utili per gestire e revocare autorizzazioni token

Ecco alcune risorse utili per approfondire il tema delle autorizzazioni illimitate e strumenti pratici per gestire la sicurezza dei tuoi token:

1. **[Revoke.cash](https://revoke.cash)**  
   Una piattaforma semplice e intuitiva che consente di analizzare e revocare autorizzazioni illimitate ai token direttamente dal tuo wallet. Supporta diverse blockchain, inclusa Ethereum.

2. **[Etherscan Token Approval Checker](https://etherscan.io/tokenapprovalchecker)**  
   Strumento integrato di Etherscan che ti permette di verificare gli smart contract con accesso ai tuoi token e revocare le autorizzazioni non necessarie.

3. **[DeBank](https://debank.com)**  
   Una piattaforma completa per monitorare asset e autorizzazioni sui tuoi wallet. Mostra in modo dettagliato quali smart contract hanno accesso ai tuoi token.

4. **[Metamask Security Guide](https://metamask.io/security/)**  
   Linee guida ufficiali di Metamask per proteggere il tuo wallet e gestire le autorizzazioni.

5. **[Coinbase Blog: Infinite Token Approvals](https://www.coinbase.com/en/blog/security-ps-infinite-token-approvals)**  
   L'articolo originale che spiega i rischi e le best practice legate alle infinite token approvals.

6. **[Blockchain Security Alliance](https://blockchainsecurityalliance.com)**  
   Un consorzio di esperti in sicurezza blockchain che fornisce risorse per proteggere i tuoi asset digitali.

Utilizza questi strumenti per monitorare regolarmente le autorizzazioni del tuo wallet e revocare gli accessi non necessari. In questo modo, puoi ridurre drasticamente il rischio di perdite causate da vulnerabilità o attività malevole.