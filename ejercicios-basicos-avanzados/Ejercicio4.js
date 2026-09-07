// 4.1 ejercicio 4
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log("Aldeano en la posición 3:", aldeanos[3]);


// 4.2 
aldeanos.push("Cervasio");
console.log("Tras añadir a Cervasio:", aldeanos);

// 4.3
aldeanos[0] = "Bambina";
console.log("Tras cambiar el primer elemento por Bambina:", aldeanos);

// 4.4
aldeanos.reverse();
console.log("Array invertido:", aldeanos);

// 4.5
const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
    aldeanos.splice(indiceNarciso, 1, "Canela");
}
console.log("Tras cambiar a Narciso por Canela:", aldeanos);

//4.6
const ultimoAldeano = aldeanos[aldeanos.length - 1];
console.log("El último elemento del array actual es:", ultimoAldeano);