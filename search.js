async function searchFeed(keyword) {
    try {
        const response = await fetch('/feed.xml');
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const items = xmlDoc.getElementsByTagName('item');
        const results = [];

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const title = item.getElementsByTagName('title')[0].textContent;
            const description = item.getElementsByTagName('description')[0].textContent;
            const pubDate = item.getElementsByTagName('pubDate')[0].textContent;
            const tags = item.getElementsByTagName('tag');
            let tagMatch = false;

            for (let j = 0; j < tags.length; j++) {
                if (tags[j].textContent.toLowerCase().includes(keyword.toLowerCase())) {
                    tagMatch = true;
                    break;
                }
            }

            if (tagMatch || description.toLowerCase().includes(keyword.toLowerCase())) {
                results.push({
                    title: title,
                    description: description.replace(/<[^>]*>/g, ''), // Remove HTML tags
                    pubDate: pubDate,
                    link: item.getElementsByTagName('link')[0].textContent
                });
            }
        }

        return results;
    } catch (error) {
        console.error('Error fetching or parsing feed.xml:', error);
        return [];
    }
}
