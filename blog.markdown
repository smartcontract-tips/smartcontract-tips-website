---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
pagination:
  enabled: true
permalink: /blog
---

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
</style>

<ul>
  
  {% for post in site.posts %}
    <li>
            <div>
              <img width="100px" src="/sct-logo-dark.png" alt="" />
              <a class="post-title" href="{{ post.url }}" >
            
            {{ post.title }}
            </a>
            </div>
           <div >{{ post.excerpt | strip_html | truncatewords:50 }}</div>
           <div class="post-date">{{ post.date | date: "%d %B %Y" }}</div>
           <br/><br/>
    </li>
  {% endfor %}
</ul>

