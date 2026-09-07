// 1
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
const {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);

// 2
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// 3
const animalFunction = () => { return {name: 'Bengal Tiger', race: 'Tiger'} };
const {name, race} = animalFunction();
console.log(name);
console.log(race);

// 3
const car = {namee: 'Mazda 6', itv: [2015, 2011, 2020] }
const {namee, itv} = car;
const [año1, año2, año3] = itv;
console.log(namee, año1);
console.log(namee, año2);
console.log(namee, año3);