const avengers = [  "Hulk",  "Thor",  "Iron Man",  "Captain A.",  "Spiderman",  "Captain M.",];

function findmaslarga(stringList) {
  let maslarga = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > maslarga.length) {
      maslarga = stringList[i];
    }
  }
  
  return maslarga;
}

console.log(findmaslarga(avengers));