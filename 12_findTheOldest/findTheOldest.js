const findTheOldest = function(array) {
    oldest = array.sort((a,b) => {
        if (!a.yearOfDeath) {
            ageA = (new Date().getFullYear()) - a.yearOfBirth
        } else {
            ageA = a.yearOfDeath - a.yearOfBirth
        }

        if (!b.yearOfDeath) {
            ageB = (new Date().getFullYear()) - b.yearOfBirth
        } else {
            ageB = b.yearOfDeath - b.yearOfBirth
        }
        
        if (ageA > ageB) {
            return -1
        } else {
            return 1
        }
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
