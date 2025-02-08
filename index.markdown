---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /
---

<p id="intro">

</p>


<script src="index.js"></script>
<script src="search.js"></script>


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

<style>
.left-column {
    display: none; /* Hide by default */
}
</style>

<style>
.search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.search-input {
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
    width: 300px;
}

.search-button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #5e42a6;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.search-button:hover {
    background-color:rgb(58, 10, 69);
}
</style>



{% assign articles = site.posts | concat: site['it'] | concat: site['en'] | sort: 'date' | reverse %}


<!-- Search Form -->
<form id="search-form" class="search-form">
    <input class="search-input" type="text" id="search-input" placeholder="Enter keyword" required>
    <button type="submit" class="search-button">Search</button>
</form>

<script>
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('search-input').value;
    window.location.href = `/results?q=${encodeURIComponent(keyword)}`;
});
</script>






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
                    <input type="hidden" name="post-tags" value="{{ post.tags | join: ', ' }}">
                </div>
            </div>
        </li>
      {% endif %}
    {% endfor %}  
  </ul>

