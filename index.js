// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, attribute){
    return drivers.filter( function (drivers) {return drivers.toLowerCase() === attribute.toLowerCase()} )
}

function fuzzyMatch(drivers, attribute){
    return drivers.filter(function (drivers) {return drivers.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase()})
}

function matchName(drivers, argument){
    return drivers.filter(function (drivers){ return drivers.name === argument})
}