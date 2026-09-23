const findTheOldest = function(people) {
    let curYear = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        let personAge = (person.yearOfDeath || curYear) - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || curYear) - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;

    })

};

// Do not edit below this line
module.exports = findTheOldest;
