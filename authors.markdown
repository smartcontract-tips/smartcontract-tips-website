---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /authors
---


{% for author in site['authors'] %}
<div style="background: lightgrey; margin-bottom: 1em; padding: 20px">
    <h2>{{ author.name }}</h2>
    <img 
        src="{{ author.picture }}" 
        style="width: 100px; border-radius: 50%; margin-bottom: 30px;">
    <p>{{ author.bio }}</p>

    <a href="{{ author.web }}">
        <i class="fa-solid fa-globe fa-lg"></i>
    </a>
    <a href="{{ author.linkedin }}">
        <i class="fa-brands fa-linkedin fa-lg"></i>
    </a>
</div>
{% endfor %}