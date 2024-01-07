---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /blog
---

# Articoli / Articles

![A library but futuristic](blog.png)

<script>
  function categoryClick(category) {
    // Ottieni l'URL di base senza query string
    var baseUrl = window.location.href.split('?')[0];
    
    // Define the parameter name and value you want to add
    var paramName = 'cat';
    var paramValue = category;
    
    // Construct the new URL with the parameter
    var newUrl = `${baseUrl}?${paramName}=${paramValue}`;
    
    // Change the location of the window to reload and add the parameter
    window.location.href = newUrl;
  }

  // Funzione che filtra gli elementi <li> basandosi sul parametro 'cat' della query string
  function filterListItemsByCategory() {
    // Ottieni il valore del parametro 'cat' dalla query string
    const urlSearchParams = new URLSearchParams(window.location.search);
    const category = urlSearchParams.get('cat');

    // Verifica se il parametro 'cat' è presente
    if (!category) {
      console.log("Il parametro 'cat' non è presente nella query string.");
      return;
    }

    // Trova tutti gli elementi <li> nel DOM che contengono un div con class="label"
    const listItems = document.querySelectorAll('li');

    // Itera sugli elementi <li> e mostra/nasconde basandosi sulla corrispondenza con 'cat'
    listItems.forEach(li => {
      const labelDiv = li.querySelector('.label');
      if (labelDiv && labelDiv.textContent.trim() === category) {
        li.style.display = ''; // Mostra l'elemento <li>
      } else {
        li.style.display = 'none'; // Nasconde l'elemento <li>
      }
    });
  }

  // Assicurati che lo script si esegua dopo il caricamento del DOM
  document.addEventListener('DOMContentLoaded', filterListItemsByCategory);  



</script>

<style>
    .post-date {
        font-size: 0.8em; /* Imposta il font più piccolo */
        color: #aaaaaa; /* Opzionale: Cambia il colore se desiderato */
    }

    .post-title {
        font-size: 1.6em; /* Imposta il font più piccolo */
    }

    .excerpt {
        font-size: 1.0em; /* Imposta il font più piccolo */
        color: #999; /* Opzionale: Cambia il colore se desiderato */
    }


    .label,button {
      --tw-text-opacity: 1;
      color: rgb(30 64 175/var(--tw-text-opacity));
      font-weight: 500;
      font-size: .875rem;
      line-height: 1.25rem;
      padding-bottom: .125rem;
      padding-top: .125rem;
      padding-left: .75rem;
      padding-right: .75rem;    
      border-radius: 9999px;
      align-items: center;
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254/var(--tw-bg-opacity));
    }

</style>


<button style="border: none; background-color: rgb(30,128,20); color: white;" onclick="categoryClick('In-Depth')">
  In-Depth
</button>
<button 
  style="border: none; background-color: rgb(20,20,128); color: white;" onclick="categoryClick('English')">
English
</button>
<button 
  style="border: none; background-color: rgb(128,20,20); color: white;" onclick="categoryClick('Incident Report')">Incident Report
</button>
<button 
  style="border: none; background-color: rgb(20,20,20); color: white;" onclick="categoryClick('Academy')">
Academy
</button>
<hr/>
<br/><br/>
<ul>
  
  {% for post in site.posts %}
    <li>
            <div>
              <a class="post-title" href="{{ post.url }}" >
                {{ post.title }}
              </a>
            </div>
            <div >{{ post.excerpt | strip_html | truncatewords:50 }}</div>
            {% for cat in post.categories %} 
              <a href="javascript:categoryClick('{{ cat }}')">
                <span class="label">{{ cat }}
                </span> 
              </a>
            {% endfor %}
           <div class="post-date">{{ post.date | date: "%d %B %Y" }}</div>
           
           <br/><br/>
    </li>
  {% endfor %}
</ul>

