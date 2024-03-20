const sumAll = function(start, finish) {
    let sum = 0;
    for (i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
