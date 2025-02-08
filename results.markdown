---
layout: default
permalink: /results
---

<!-- Search Results Container -->
<div id="search-results"></div>

<script src="search.js"></script>
<script>
document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q');
    const resultsContainer = document.getElementById('search-results');

    if (keyword) {
        const results = await searchFeed(keyword);
        resultsContainer.innerHTML = '';

        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                const pubDate = new Date(result.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                resultItem.innerHTML = `
                    <h3><a href="${result.link}">${result.title}</a></h3>
                    <p class="pub-date">${pubDate}</p>
                    <p>${result.description}</p>
                `;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        }
    } else {
        resultsContainer.innerHTML = '<p>No keyword provided.</p>';
    }
});
</script>

<style>
    .pub-date {
        font-size: 0.8em;
        color: #666;
    }
</style>