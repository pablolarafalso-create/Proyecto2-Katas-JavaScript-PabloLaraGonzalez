const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const input = document.querySelector("input");
    
input.addEventListener("input", function(){
    const elementsToRemove = document.querySelectorAll("div");
    for (const element of elementsToRemove) {
        element.remove();
    }
    const streamersFilter = streamers.filter(streamer => streamer.name.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()));
    for (let i = 0; i < streamersFilter.length; i++) {

        const div = document.createElement("div");
        const nombre = document.createElement("h2");
        const edad = document.createElement("p");
        const juego = document.createElement("p");

        nombre.innerText = (`Nombre: ${streamersFilter[i].name}`);
        edad.innerText = (`Edad: ${streamersFilter[i].age}`);
        juego.innerText = (`Juego más jugado: ${streamersFilter[i].gameMorePlayed}`);

        div.appendChild(nombre);
        div.appendChild(edad);
        div.appendChild(juego);
        document.body.appendChild(div);
   }
});