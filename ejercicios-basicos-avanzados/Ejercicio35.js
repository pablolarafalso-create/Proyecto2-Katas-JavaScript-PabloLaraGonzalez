const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutantList, powerToSearch) {
    const foundMutants = [];


    for (const mutant of mutantList) {
        if (mutant.power.toLowerCase() === powerToSearch.toLowerCase()) {
            foundMutants.push(mutant.name);
        }
    }

    if (foundMutants.length > 0) {
        return `Mutantes encontrados con el poder "${powerToSearch}": ${foundMutants.join(', ')}.`;
    } else {
        return `No se encontró ningún mutante con el poder "${powerToSearch}".`;
    } 
}

console.log(findMutantByPower(mutants, 'telepathy')); 
console.log(findMutantByPower(mutants, 'fire manipulation')); 
