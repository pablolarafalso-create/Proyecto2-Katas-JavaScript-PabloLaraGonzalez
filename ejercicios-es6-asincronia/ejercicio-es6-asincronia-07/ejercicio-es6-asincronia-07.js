const videogames = [{name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5}, {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5}, {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8}, {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5}, {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5}, {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},];

const RPGs = videogames.filter(videogame => videogame.genders.find(videogame => videogame === "RPG"));
const sumRPGs = RPGs.reduce((acc, curr) => acc + curr.score, 0);
console.log(sumRPGs / RPGs.length);