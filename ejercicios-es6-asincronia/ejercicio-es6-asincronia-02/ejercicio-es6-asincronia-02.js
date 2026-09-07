// 1
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList1];
console.log(pointsListCopy);


// 2
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy1};
console.log(toyCopy);


// 3 
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const pointsLists = [...pointsList2, ...pointsLis2];
console.log(pointsLists);


// 4
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toys = {...toy2, ...toyUpdate};
console.log(toys);


// 5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsRemove2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsRemove2);
