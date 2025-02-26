---
title: Bitcoin and the quantum computer
date: 2025-02-15
image: /pics/posts/2025-02-18-bitcoin-e-il-computer-quantistico/cover.jpeg
tags: [ bitcoin, quantum, maiorana, topological-qubit]
layout: post
author: davide
excerpt: The recent unveiling of Microsoft's Majorana-1 quantum chip has reignited discussions about the potential threat quantum computing poses to Bitcoin's security. While this advancement marks significant progress in quantum technology, experts suggest that the immediate risk to Bitcoin remains minimal 
---

We are all aware that the quantum computer will disrupt many of the beliefs that we users and professionals in the ICT sector have laboriously built over the years. The main problem to discuss it is: **what the hell is a quantum computer**.

Browsing through wikipedia we find some pages dedicated to the theme:

1.  [No-cloning](https://it.wikipedia.org/wiki/Teorema_di_no-cloning_quantistico "Quantum no-cloning theorem"): l '[quantum information](https://it.wikipedia.org/wiki/Informazione_quantistica) it can not be **copied** with absolute loyalty, and therefore not even **read** with absolute fidelity. , "1982 ".
2.  [quantum information](https://it.wikipedia.org/wiki/Informazione_quantistica "Quantum information") it can instead be **transferred** with absolute fidelity, provided that the original is destroyed in the process.
3.  **Each measure** accomplished on a quantum system **destroys** most of the information, leaving it in one [base state](https://it.wikipedia.org/wiki/Stato_quantico). The destroyed information cannot be recovered.

The fact that information can be transferred faithfully only if the original is destroyed seems to me to be a principle on which in the future perhaps we could build the **Quantum bitcoin**. Double spending practically solved without having any blockchain around, the universe does proof-of-work thanks to the natural laws of the atomic world.

Why does everyone think of Bitcoin as soon as we talk about quantum computers?
------------------------------------------------------------------------------

Today we talk about why Bitcoin and altcoins are potentially victims of the quantum computer.

The origin of all evils is [Shor's factorization algorithm](https://it.wikipedia.org/wiki/Algoritmo_di_fattorizzazione_di_Shor)

This algorithm is used to calculate the factors that make up a number, and instead of using bits and bytes, it is based on the use of qubit, these wonderful objects of thought that like bits are worth 0 or 1, but that until you go to measure with some physical method are theoretically a linear combination of 0 and 1, indeed of \|0 > and \|1 > and therefore they can assume all possible values with infinite precision.

That is, only one qubit could represent a number with infinite decimal places, and therefore in fact all human knowledge. Too bad that as soon as you try to read it this qubit decides if it is worth 1 or is worth 0. **Just like Schroedinger's cat who died and lives at the same time.**

The nice thing about this algorithm is that it manages to do in a fairly short time what classic computers do in a time **O (√ n)**.

To be precise given a number **n** nice long, to find its factors with the classic computer I put a number of calculations equal to root of **n** while with the quantum computer I put it 

**log (n) * log (log (n)) * log (log (log (n)))**

Let's take an example with real numbers
---------------------------------------

Let's take an example if I want to factor the RSA-768 number

RSA-768 = 1230186684530117755130494958384962720772853569595334792197322452151726400507263657518745202199786469389956474942774063845925192557326303453731548268507917026122142913461670429214311602221240479274737794080665351419597459856902143413

* * * * *

With the classic method they serve about **10 ^ 115** elementary instructions (1 with 115 zeros to follow). If we hypothesize a CPU that performs about 10 billion operations per second we will put ourselves in simple brute force about **10 ^ 97** years.

In reality this number was factored in 2009 and it took only two years, the brains of Thorsten Kleinjung, Kazumaro Aoki, Jens Franke, Arjen K. Lenstra, Emmanuel Thomé, Pierrick Gaudry, Alexander Kruppa, Peter Montgomery, Joppe W. Bos, Dag Arne Osvik, Herman te Riele, Andrey Timofeev and Paul Zimmermann and also a computer and computing network that equate to 2000 years of execution on a 2.2GHz AMD Opteron.

The result is:

RSA-768 = 33478071698956898786044169848212690817704794983713768568912431388982883793878002287614711652531743087737814467999489 * 36746043666799590428244633799627952632279158164343087642676032283815739666511279233373417143396810270092798736308917

How long would it take the quantum computer to factor RSA-768?
--------------------------------------------------------------

It would have put about log (n) * log (log (n)) * log (log (n))) where n is a 230-digit number. Or approximately 3 million "instructions " whatever this means in the complexity of calculating a quantum computer.

Even if he did ONLY 100 instructions per second **in a few days he would have finished**.

But how are things going?

This is the out-of-date history of how the implementations of the Shor algorithm are moving forward

> 1994 -- Shor's quantum factorization algorithm is invented
>
> 2001- IBM quantum computer factored 15 = 3 x 5
>
> 2012 -- 21 was factored into 3 x 7
>
> 2012 -- in April 143 was factored into 11 x 13
>
> 2014 -- 56153 was factored

In reality only 15 and 21 have been factored with Shor's algorithm, and out of 21 there would still be several disputes about the method not exactly Orthodox Shor. **The larger numbers have been factored with minimization techniques that would actually also work on classic computers** and therefore **there would be no advantage in running them on quantum computers.**

![quantum factorization](https://scx2.b-cdn.net/gfx/news/hires/2014/quantumfacto.jpg)

Note that it took 11 years to go from 15 = 3 x 5 to 21 = 3 x 7. But you know, these processes are not linear. Just a brilliant gimmick and here we find RSA-2048 cracked in ten minutes.

According to some opinions [qualified](https://www.youtube.com/watch?v=wWHAs--HA1c)

> "It is likely that a quantum computer will break RSA2048 in a matter of hours by 2030 and with an investment on $1B "

But what does this have to do with Bitcoin?
-------------------------------------------

It has a lot to do with it because Bitcoin is based on public key cryptography, i.e. the fact that transactions are digitally signed using an encryption algorithm called ECDSA.

Now, it should be noted that ECDSA is not RSA and that if RSA is based on the principle that I can use two large prime numbers p and q, multiply them together n = p * q and use n as a module for operations between integers that allow encryption and decryption of any message.

Factorization does not immediately break ECDSA too but this is vulnerable to one **variant of the Shor algorithm designed for the "discrete logarithm problem on elliptic curves "**.

Then **the quantum computer could tear the encryption to pieces and therefore falsify the digital signatures with which Bitcoin transactions are signed and validated**.

The recent adoption of the **Schnorr signatures in Bitcoin does not improve the situation**. In fact, these are vulnerable exactly like ECDSA.

On the contrary, the SHA-256 hashing algorithm does not seem to be vulnerable. Maybe it will be necessary to switch from a 256-bit output to a 512-bit output, but in essence it will not be disturbed by the quantum computer.

Microsoft, Maiorana and Topocomputers
-------------------------------------

In 1937, **Ettore Majorana** hypothesized the existence of a particle that was its own **antiparticle**. In 2001, the Russian theoretical physicist **Alexei Kitaev** proposed that i **Majorana fermions** could manifest themselves at the edges of a **superconducting nanophilic** (i.e. a wire that carries current without electrical resistance).

Majorana fermions emerge only in extremely restricted conditions. When a **semiconductor nanophilic** (for example, made in **indium antimonyuro - InSb**) is connected to a **superconducting material** (like the **niobium**), a so-called is observed **zero bias conductance peak** under particular magnetic fields and electric charge conditions. This signal is the main indication of the presence of the Majorana.

Majorana fermions have a fundamental property for the **quantum computation**: obey to **non-Abelian statistics**, which means that their quantum state can be manipulated through called operations **"braiding "** (intertwining). This feature allows you to store quantum information in a way **robust and error resistant**.

The model of **topological quantum computation** based on the Majorana could be **much more stable and error tolerant** compared to other quantum approaches.

### **Microsoft's role and current situation**

Microsoft, through its research team **Q station**, has invested heavily in developing a **topological quantum computer** based on the Majorana. The goal was to achieve a **stable and error resistant qubit** thanks to the topological protection provided by these particles.

In 2021, Microsoft suffered a setback when a 2018 study, which claimed to have observed new evidence of Majorana, was **retracted due to errors in data analysis**.

The 2025 announcement
---------------------

Microsoft has announced that it has created the first ones **"topological qubit "**. Principle-based computers **topological** they should be easier to build on a large scale than other competing technologies, as they would offer one **better protection from interference and quantum noise**. However, some researchers **remain skeptical** on the company's claims.

The announcement was made on **February 19**, through a **press release** with few technical details. Microsoft said it shared some data with selected specialists during a meeting in its research center **Santa Barbara, California**. **Steven Simon**, theoretical physicist from the University of Oxford, who had access to the results, commented:

> *"Would I bet my life on the fact that they are really observing what they think they are observing? No, but it looks promising. "*

On the same day, February 19th, Microsoft also has [published **intermediate results** on the scientific journal **Nature**](https://www.nature.com/articles/s41586-024-08445-2). However, the study **does not yet definitively demonstrate the existence of topological qubits**.

The scientific community is now awaiting further evidence to verify whether Microsoft's approach really represents a **significant step forward** in quantum computing or if it is another premature statement, as has happened in the past in the field of **Majorana qubits**.

A more reliable estimate to break ECDSA (and Bitcoin)
-----------------------------------------------------

According to a [recent research work](https://pubs.aip.org/avs/aqs/article/4/1/013801/2835275/The-impact-of-hardware-specifications-on-reaching)

Mark Webber, Vincent Elfving, Sebastian Weidt, Winfried K. Hensinger; The impact of hardware specifications on reaching quantum advantage in the fault tolerant regime. AVS Quantum Sci. March 1, 2022; 4 (1): 013801. https://doi.org/10.1116/5.0073075

> ... the number of physical qubits required to break the 256-bit elliptic curve encryption of keys in the Bitcoin network within the small available time frame in which it would actually pose a threat to do so. It would require 317 × 10 ^ 6 physical qubits to break the encryption within one hour using the surface code, a code cycle time of 1 μs, a reaction time of 10 μs. To instead break the encryption within one day, it would require 13 × 10 ^ 6 physical qubits.

So about 13 million Qubits would be needed to break Bitcoin in one day.

How many Qubits has it shown to have built Microsoft?
-----------------------------------------------------

Microsoft [announces](https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/) that the Maiorana-1 architecture allows the construction of 8 Qubits.

Indeed, the issue is controversial and still requires validation by the scientific community. But Microsoft's ambition is to lay the foundations for a scalable architecture. All that remains is to wait for the results to be confirmed.

Eight Qubits seem like a harmless prototype, but if confirmed it would be really interesting to follow how the subsequent architectures Maiorana-2 and Maiorana-3 could multiply this figure.

Post-Quantum Cryptography
-------------------------

Fortunately, all is not lost. In fact, there are already encryption systems that seem robust to quantum computing.

[Lattice systems](https://en.wikipedia.org/wiki/Lattice-based_cryptography) or lattices: based on linear combinations of vectors.

[McEliece cryptosystems](https://en.wikipedia.org/wiki/McEliece_cryptosystem): based on code theory, which would require us to resurrect our fourth year electronic engineering electrical communications memories

[Hash based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography): recommended by the European Commission as post-quantum protection systems

### **Standardization of NIST and post-quantistic encryption**

In **2016** the **NIST (National Institute of Standards and Technology)** started one **competition** to find **substitutes** to our current public key encryption methods, with a broad review of the performance and security of various proposed methods.

NIST has estimated that there is a probability of **1 out of 7** that **RSA-2048** be compromised by **2026**, and a probability of **1 out of 2** by the **2031**. For this reason, he analyzed methods based on problems known for theirs **resistance to quantum computers**, including:

-   **Grating-based methods** (lattice systems)
-   **isogenies**
-   **Multivariate systems**
-   **Hash-based methods**

The competition focused on two main aspects:

1.  **Key Encapsulation (KEM)**, which will replace the current key exchange protocols
2.  **Digital signatures**, to guarantee authenticity and integrity

For **Key Encapsulation and public key encryption**, NIST selected the method **CRYSTALS-Kyber** (FIPS 203), based on lattices.

For **digital signatures**, chose:

-   **CRYSTALS-Dilithium** (FIPS 204) -- based on lattices
-   **FALCON** -- based on lattices
-   **SPHINCS +** (FIPS 205) -- based on hash

### **Key size and performance**

The methods based on **lattices** they are generally the fastest of those presented, and have relatively small keys compared to other quantum approaches. Eg:

-   **Kyber738** has a public key of **1,184 bytes**, a cipher of **1,088 bytes** and a private key of **2,400 bytes**
-   **ECDH** (classic cryptography) has a public key of **64 bytes** and a private key of **32 bytes**

Conclusions
-----------

Today practically all cryptographers are receiving funds and working on the development of post-quantum encryption.

Given the modest results in the creation of quantum computers, it would seem an unjustified effort so far. However, digital signature and encryption protocols require years or even decades of testing and practical validation.

So it is not entirely wrong, indeed it is appropriate to work today to protect our data and computer transactions that could arise in the next 10 or 20 years.

An emblematic case is that of a [quantum resistant encryption algorithm that was broken in minutes](https://mathematical-research-institute.sydney.edu.au/news/quantum-encryption-algorithm-cracked-by-computer-running-magma) from a classic computer.

So the challenge is twofold, the new algorithms will have to be tested against both the quantum computer and the classic computer.