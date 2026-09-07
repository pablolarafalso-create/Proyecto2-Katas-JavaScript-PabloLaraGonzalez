document.addEventListener("DOMContentLoaded", function () {
    const randomPokemon = async (idPokemon) => {
        try {
            const img = document.querySelector(".random-image");
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`;
        } catch (error) {
            console.error(error);
        }
    };
    const randomNum = Math.floor(Math.random() * 151) + 1;
    randomPokemon(randomNum);
});