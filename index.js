const intro_en="Explore the evolving landscape of Web3 security and uncover essential best practices to safeguard your decentralized applications, smart contracts, and digital assets in an increasingly interconnected world.";

const intro_it="Esplora l'evoluzione dell'ecosistema Web3 e scopri le best practice per progettare, implementare e rilasciare applicazioni decentralizzate, smart contract e digital assets garantendo il massimo della sicurezza.";

// Assumi che la variabile lang sia definita nella pagina
let lang = window.lang || 'lang-it'; // Default a 'lang-it' se lang non è definita

// Funzione per mostrare/nascondere gli elementi <li> in base alla lingua
function toggleLanguageElements() {

    if (lang === 'lang-it') 
        lang = 'lang-en';
    else lang = 'lang-it';
    // Seleziona tutti gli <li> con classi 'lang-it' o 'lang-en'



    const listItems = document.querySelectorAll('li.lang-it, li.lang-en');

    listItems.forEach(item => {
        if (item.classList.contains(lang)) {
            item.style.display = ''; // Mostra l'elemento
        } else {
            item.style.display = 'none'; // Nascondi l'elemento
        }
    });

    document.getElementById('lang').innerHTML=(lang === 'lang-en' ? '🇬🇧'   : '🇮🇹');
    document.getElementById('intro').innerHTML=(lang === 'lang-en' ? intro_en   : intro_it);
}


document.addEventListener('DOMContentLoaded', () => {
    toggleLanguageElements();
});