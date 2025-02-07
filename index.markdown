---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /
---

<p id="intro">

</p>


<script src="index.js"></script>
<a id='lang'></a>
<a href="#" onclick="toggleLanguageElements()">Toggle</a>



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
  

  
  .left-column img {
    display: none;
  }
  
  .right-column {
    flex-grow: 1;
  }
  
  .post-title {
    /* Stili per il titolo, ad esempio: */
    font-size: 24px;
    font-weight: bold;
  }

  .left-column {
    display: none; /* Hide by default */
  }

  }

</style>


{% assign articles = site.posts | concat: site['it'] | concat: site['en'] | sort: 'date' | reverse %}

<!-- create categories array-->
{% assign categories_array = "" | split:"|" %}

{% for post in articles %}
        {% assign categories_array = categories_array | push: post.category | uniq %}
{% endfor %}

<!-- CATEGORIES SECTION -->


{% if site.enable_categories == true %}
  {%- for category in categories_array -%}
    {%- if category -%}
    <button style="border: none; background-color: rgb(30,128,20); color: white;" onclick="categoryClick('{{ category }}')">
      {{ category }}</button> &nbsp;
    {%- endif -%}
  {%- endfor -%}

  <button 
    style="border: none; background-color: rgb(128,20,20); color: white;" onclick="categoryClick('All')">All
  </button>
{% endif %}
<!-- END OF CATEGORIES SECTION -->

<hr/>
<br/><br/>

  
  <ul class="preview-container">
    {% for post in articles %}
      <!-- Let's limit to a subset of all -->
      {% if forloop.index <= 30 %} 
        <li class="lang-{{ post.url | slice: 1, 2 }}">
            <div class="preview">
                <img src="{{ post.image }}_preview.png" alt="preview Image" class="preview-image">
                <div class="preview-content">
                    <a class="post-title" href="{{ post.url }}">
                        <h2 class="preview-title">
                            {{ post.title }}
                        </h2>
                    </a>
                    <div class="preview-meta">
                        <i class="fa-regular fa-calendar"></i>
                        {{ post.date | date: "%d %B %Y" }}
                    </div>
                    <p class="preview-excerpt">{{ post.excerpt | strip_html | truncatewords:50 }}</p>
                </div>
            </div>
        </li>
      {% endif %}
    {% endfor %}  
  </ul>

<div>
  <h2>Search more ...</h2>
  <form id="searchForm">
    <input type="text" id="searchInput" placeholder="Enter search terms" required>
    <button type="submit">Search</button>
  </form>

  <script>
    // Domain for site-specific search
    const domain = 'smartcontract.tips';

    // Attach event listener to the form
    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the search terms
      const searchTerms = document.getElementById('searchInput').value;

      // Redirect to Google search with site filter
      const googleSearchUrl = `https://www.google.com/search?q=site:${domain}+${encodeURIComponent(searchTerms)}`;
      window.open(googleSearchUrl, '_blank');
    });
  </script>
</div>