// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {

    const newDrivers = [];

    for (let item of drivers) {

        if (item.toLowerCase() === name.toLowerCase()) {

            newDrivers.push(item);

        }

    }

    return newDrivers;

}

function fuzzyMatch(drivers, int) {

    const newDrivers = [];

    for (let item of drivers) {

        if (item.substring(0, 2) === int) {

            newDrivers.push(item);

        }


    }

    return newDrivers;

}



function matchName(drivers, match){

    const newDrivers = [];

    for (let item of drivers) {

        if (item.name === match) {

            newDrivers.push(item);

        }

    }
    
    return newDrivers;
}

