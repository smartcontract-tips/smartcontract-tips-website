document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('h2');
  const toc = document.getElementById('toc');

  // Funzione per controllare la larghezza della finestra e nascondere il div "toc" se la larghezza è inferiore a 1350px
  const handleResize = () => {
    if (window.innerWidth < 1350) {
      toc.style.display = 'none';
    } else {
      toc.style.display = 'block';
    }
  };

  // Aggiungi un listener per l'evento di ridimensionamento della finestra
  window.addEventListener('resize', handleResize);


  // Funzione per controllare se il TOC è in sovrapposizione con altri elementi
  const toggleTOCVisibility = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        toc.style.display = 'block'; // Se è visibile nella viewport, mostra il TOC
      } else {
        toc.style.display = 'none'; // Se è in sovrapposizione con altri elementi, nascondi il TOC
      }
    });
  };

  // Crea un observer per monitorare la visibilità del TOC
  const observer = new IntersectionObserver(toggleTOCVisibility);
  observer.observe(toc);

  headers.forEach(header => {
    const link = document.createElement('a');
    link.textContent = header.textContent;
    link.href = '#' + header.id;
    link.classList.add('toc-item');
    toc.appendChild(link);
    
    // Aggiungi un listener per l'evento click su ogni elemento della tabella dei contenuti
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Previeni il comportamento predefinito del link
      header.scrollIntoView({ behavior: 'smooth' }); // Scorri verso l'header corrispondente
    });
  });
  
  window.addEventListener('scroll', () => {
    headers.forEach(header => {
      const id = header.id;
      const link = document.querySelector(`a[href="#${id}"]`);
      
      // Verifica se l'header è visibile nella viewport
      const bounding = header.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});
