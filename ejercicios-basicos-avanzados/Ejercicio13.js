const names = [ 'Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];

function nameFinder(nameList, targetName) {
    const index = nameList.indexOf(targetName);

    if (index !== -1) {
        return { found: true, position: index }; 

    } else {

        return false;
        
    }
}

console.log(nameFinder(names, 'Tony'));
console.log(nameFinder(names, 'Thanos'));
