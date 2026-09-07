const nombres = async() => {
    try{
        const respuesta = await fetch("./response.json");
        const datos = await respuesta.json();
        const select = document.querySelector("#character-list");
        const firstOption = document.createElement("option");
        firstOption.value = "";
        firstOption.text = "Seleccione un nombre...";
        select.appendChild(firstOption);
        for (let i = 0; i < datos.length; i++) {

            const option = document.createElement("option");

            option.value = datos[i].fullName;
            option.text = datos[i].fullName;

             select.appendChild(option);
        }
        const img = document.querySelector(".character-image");
        select.addEventListener("change", function(){
            const personaje = datos.find(p => p.fullName === select.value);

            if (personaje) {
                img.src = personaje.imageUrl;
            }else{
                img.removeAttribute("src");
            }
        });
    } catch(error){
        console.error(error);
    }
};
nombres();
