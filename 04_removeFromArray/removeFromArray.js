const removeFromArray = function(array, ...valueArgs) {
    // check if each value is in the array and remove it
    outer:
    for (value of valueArgs) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                array.splice(i, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
