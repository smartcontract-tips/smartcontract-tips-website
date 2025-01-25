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
}


document.addEventListener('DOMContentLoaded', () => {
    toggleLanguageElements();
});