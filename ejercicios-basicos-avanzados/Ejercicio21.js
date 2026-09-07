const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];


    const kids = [];
    const adults = [];


    for (const user of users) {
        if (user.years < 18) {
            kids.push(user.name);
        } else {
            adults.push(user.name);
        }
    }

    console.log("Usuarios menores de edad:");
        for (const kid of kids) {
        console.log(kid);
    }

    console.log("Usuarios mayores de edad:");
        for (const adult of adults) {
        console.log(adult);
    }