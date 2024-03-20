const removeFromArray = function(array, ...valueArgs) {
    // check if each value is in the array and remove it
    for (value of valueArgs) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    
    return array;
};

console.log(removeFromArray([1,2,2,3], 2))

// Do not edit below this line
module.exports = removeFromArray;
