---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /in-depth
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


    .label {
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




<ul>
  
  {% assign filtered_posts = site.posts | where_exp:"post", "post.categories contains 'In-Depth'" %}

  {% for post in filtered_posts  %}
    <li>
            
            <img width="100%" src="{{ post.featured_image }}" alt="" />
            <div>
              <a class="post-title" href="{{ post.url }}" >
                {{ post.title }}
              </a>
            </div>
            <div >{{ post.excerpt | strip_html | truncatewords:50 }}</div>
            {% for cat in post.categories %} <span class="label">{{ cat }}</span> {% endfor %}
           <div class="post-date">{{ post.date | date: "%d %B %Y" }}</div>
           
           <br/><br/>
    </li>
  {% endfor %}
</ul>

