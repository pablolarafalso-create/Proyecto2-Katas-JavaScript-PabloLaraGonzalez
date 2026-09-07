function rollDice(faces) {
  const result = Math.floor(Math.random() * faces) + 1;
  
  return result;
}


console.log("--- Tirando dados de 6 caras (Cubo tradicional) ---");
console.log("Tirada 1:", rollDice(6));
console.log("Tirada 2:", rollDice(6));
console.log("Tirada 3:", rollDice(6));

console.log("\n--- Tirando un dado de 20 caras (Muy usado en rol/D&D) ---");
console.log("Resultado D20:", rollDice(20));
console.log("Resultado D20:", rollDice(20));

console.log("\n--- Tirando una moneda (Dado de 2 caras: 1 = Cara, 2 = Cruz) ---");
console.log("Resultado moneda:", rollDice(2) === 1 ? "Cara" : "Cruz");