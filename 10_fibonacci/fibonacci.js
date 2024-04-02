const fibonacci = function(num) {
    if (num < 0) {return "OOPS"}

    num = Number(num)
    if (num === 0) {return 0}
    if (num === 1) {return 1}
    
    let sum = 0
    let arr = [0, 1]
    for (l = 0, r = 1; r < num; l++, r++) {
        sum = arr[l] + arr[r]
        arr.push(sum)
    }

    return sum
};

console.log(fibonacci("4"))

// Do not edit below this line
module.exports = fibonacci;
