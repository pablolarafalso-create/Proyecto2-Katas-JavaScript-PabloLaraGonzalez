const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const collectionSection = document.querySelector('#music-collection');

const ulElements = document.createElement('ul');
ulElements.className = 'albums-list';

for (const albumTitle of albums) {
    const liElement = document.createElement('li');
    liElement.className = 'album-card';

    liElement.innerHTML = `
        <div class="album-cover-placeholder"></div>
        <span class="album-title">${albumTitle}</span>
    `;

    ulElements.appendChild(liElement);
}
collectionSection.appendChild(ulElements);