const sumAll = function(start, finish) {
    let sum = 0;

    if ((start < 0) || (finish < 0)) {
        return "ERROR";
    }

    if (start < finish) {
        for (i = start; i <= finish; i++) {
            sum += i;
        }
    } else {
        for (i = start; i >= finish; i--) {
            sum += i;
        }
    }

    return sum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
