---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /blog
---

# Articoli / Articles


<script>
  function categoryClick(category) {
    // Ottieni l'URL di base senza query string
    var baseUrl = window.location.href.split('?')[0];
    
    // Define the parameter name and value you want to add
    var paramName = 'cat';
    var paramValue = category;
    
    // Construct the new URL with the parameter
    var newUrl = category=="All" ? `${baseUrl}` : `${baseUrl}?${paramName}=${paramValue}`;
    
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

  .container {
    display: flex;
    margin-bottom: 25px;
  }
  
  .left-column {
    min-width: 300px;
    width: 50%;
  }
  
  .left-column img {
    width: 90%;
  }
  
  .right-column {
    flex-grow: 1;
  }
  
  .post-title {
    /* Stili per il titolo, ad esempio: */
    font-size: 24px;
    font-weight: bold;
  }

</style>


{% assign articles = site.posts | concat: site['it'] | concat: site['en'] | sort: 'date' | reverse %}

<!-- create categories array-->
{% assign categories_array = "" | split:"|" %}

{% for post in articles %}
        {% assign categories_array = categories_array | push: post.category | uniq %}
{% endfor %}

<!--Output the categories-->
{%- for category in categories_array -%}
  {%- if category -%}
  <button style="border: none; background-color: rgb(30,128,20); color: white;" onclick="categoryClick('{{ category }}')">
    {{ category }}</button> &nbsp;
  {%- endif -%}
{%- endfor -%}

<button 
  style="border: none; background-color: rgb(128,20,20); color: white;" onclick="categoryClick('All')">All
</button>

<hr/>
<br/><br/>

  <ul style="list-style-type: none">
    {% for post in articles %}
    <li>
      <div class="container">
        <div class="left-column">
          <!-- Sostituire 'image-src.jpg' con il percorso della tua immagine -->
          <a href="{{ post.url }}" >
            {% if post.featured_image %}
            <img src="{{ post.featured_image }}" alt="cover image">
            {% else %}
            <img src="/assets/images/awesome-post-placeholder.png" alt="cover image">
            {% endif %}
          </a>
        </div>
        <div class="right-column">
          <a class="post-title" href="{{ post.url }}" >
                {{ post.title }}
          </a>
          <div class="post-date"><i class="fa-regular fa-calendar"></i>
          {{ post.date | date: "%d %B %Y" }}</div>
          <p>{{ post.excerpt | strip_html | truncatewords:50 }}</p>
              <a href="javascript:categoryClick('{{ cat }}')">
                <span class="label">{{ post.category }}</span> 
              </a>
           
          <!-- Qui puoi aggiungere altro contenuto se necessario -->
        </div>     
      </div>
      
    </li>
    {% endfor %}  
  </ul>

