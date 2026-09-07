const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');
for (const country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);


const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
    elementToRemove.remove();
}


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHereDiv = document.querySelector('[data-function="printHere"]');
if (printHereDiv) {
    const ulCars = document.createElement('ul');
    for (const car of cars) {
        const li = document.createElement('li');
        li.textContent = car;
        ulCars.appendChild(li);
    }
    printHereDiv.appendChild(ulCars);
}


const countryObjects = [
	{title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards-container';

for (const item of countryObjects) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'country-card';

    const h4 = document.createElement('h4');
    h4.textContent = item.title;

    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.title;

    cardDiv.appendChild(h4);
    cardDiv.appendChild(img);
    
    const deleteThisBtn = document.createElement('button');
    deleteThisBtn.textContent = 'Eliminar este div';
    deleteThisBtn.addEventListener('click', function() {
        cardDiv.remove();
    });
    cardDiv.appendChild(deleteThisBtn);

    cardsContainer.appendChild(cardDiv);
}
document.body.appendChild(cardsContainer);


const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar el ÚLTIMO div';
deleteLastBtn.style.display = 'block';
deleteLastBtn.style.margin = '20px 0';

deleteLastBtn.addEventListener('click', function() {
    const allCards = document.querySelectorAll('.country-card');
    if (allCards.length > 0) {
        allCards[allCards.length - 1].remove();
    }
});
document.body.insertBefore(deleteLastBtn, cardsContainer);