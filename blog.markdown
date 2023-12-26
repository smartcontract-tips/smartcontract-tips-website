---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /blog
---

<style>
    .post-date {
        font-size: 0.8em; /* Imposta il font più piccolo */
        color: #666; /* Opzionale: Cambia il colore se desiderato */
    }

    .excerpt {
        font-size: 0.8em; /* Imposta il font più piccolo */
        color: #999; /* Opzionale: Cambia il colore se desiderato */
    }
</style>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
      {{ post.title }}
      </a>
      <span class="post-date">{{ post.date | date: "%d %B %Y" }}</span>
      <br/>
      <span class="excerpt">{{ post.excerpt }}</span>
    </li>
  {% endfor %}
</ul>