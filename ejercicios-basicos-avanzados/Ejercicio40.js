const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan",];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    console.log(`El elemento "${text}" no se encontró, no se borró nada.`);
  }
  return array;
}

console.log(" Pruebas de findArrayIndex ");
console.log("Posición de 'Han Solo':", findArrayIndex(mainCharacters, "Han Solo"));
console.log("Posición de 'Rey':", findArrayIndex(mainCharacters, "Rey"));
console.log("Posición de 'Yoda':", findArrayIndex(mainCharacters, "Yoda"));

console.log("\n Pruebas de removeItem");

console.log("Eliminando a Chewbacca...");
const listaSinChewie = removeItem(mainCharacters, "Chewbacca");
console.log(listaSinChewie); 

console.log("\nEliminando a Luke...");
const listaSinLuke = removeItem(mainCharacters, "Luke");
console.log(listaSinLuke);

console.log("\nIntentando eliminar a Vader...");
const intentoVader = removeItem(mainCharacters, "Vader");
console.log(intentoVader);