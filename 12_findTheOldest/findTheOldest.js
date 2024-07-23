function getAge(birth, death) {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge > currentAge ? oldest : currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
