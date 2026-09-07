const capitals = {Spain: 'Madrid', France: 'Paris', Italy: 'Rome', Germany: 'Berlin', Portugal: 'Lisbon', Poland: 'Warsaw', Greece: 'Athens', Austria: 'Vienna', Hungary: 'Budapest', Ireland: 'Dublin'};

function getCapital(country) {

  const capital = capitals[country];

  if (capital) {
    return `La capital de ${country} es ${capital}.`;
  } 

  else {
    return `Lo siento, no tenemos registrada la capital de ${country}.`;
  }
}

console.log(getCapital('Spain'));
console.log(getCapital('Germany'));
console.log(getCapital('Japan'));