const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1961 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(list) {

  if (list.length === 0) return null;

  let oldest = list[0];
  
  for (const member of list) {
    if (member.year < oldest.year) {
      oldest = member;
    }
  }

  return oldest;
}

const oldestMutant = findOldestXMen(xMen);
console.log(oldestMutant);