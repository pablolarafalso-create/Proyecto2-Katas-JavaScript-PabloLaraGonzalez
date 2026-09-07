const fantasticFour = [ "La antorcha humana", "Mr. Fantástico", "La mujer invisible", "La cosa",];

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}


console.log("Array original:", fantasticFour);

console.log("\nIntercambiando índice 0 y índice 3...");
const resultado1 = swap(fantasticFour, 0, 3);
console.log(resultado1);

console.log("\nIntercambiando índice 1 y índice 2...");
const resultado2 = swap(fantasticFour, 1, 2);
console.log(resultado2);