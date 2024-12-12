document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');


    fetch('https://jsonplaceholder.typicode.com/photos?_limit=20') 
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach(photo => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                    <div class="content">
                        <h3>${photo.title}</h3>
                        <p>Album ID: ${photo.albumId}</p>
                    </div>
                `;
                gallery.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            gallery.innerHTML = `<p>Failed to load content. Please try again later.</p>`;
        });
});