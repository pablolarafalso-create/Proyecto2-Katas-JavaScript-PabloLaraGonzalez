const targetDivs = document.querySelectorAll('body > div:not(.fn-insert-here)');

const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);


const divWithP = document.createElement('div');
const internalP = document.createElement('p');
internalP.textContent = 'Texto dentro del div del apartado 2.2';
divWithP.appendChild(internalP);
document.body.appendChild(divWithP);

const divWithSixP = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const newP = document.createElement('p');
    newP.textContent = `Párrafo número ${i} (Apartado 2.3)`;
    divWithSixP.appendChild(newP);
}
document.body.appendChild(divWithSixP);


const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

const h2Element = document.querySelector('h2.fn-insert-here');
if (h2Element) {
    h2Element.textContent = 'Wubba Lubba dub dub';
}

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulList = document.createElement('ul');

for (const app of apps) {
    const liItem = document.createElement('li');
    liItem.textContent = app;
    ulList.appendChild(liItem);
}
document.body.appendChild(ulList);

const elementsToRemove = document.querySelectorAll('.fn-remove-me');
for (const element of elementsToRemove) {
    element.remove();
}

if (targetDivs.length >= 2) {
    const middleP = document.createElement('p');
    middleP.textContent = 'Voy en medio!';
    targetDivs[0].insertAdjacentElement('afterend', middleP);
}

const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
for (const containerDiv of insertHereDivs) {
    const insideP = document.createElement('p');
    insideP.textContent = 'Voy dentro!';
    containerDiv.appendChild(insideP);
}
