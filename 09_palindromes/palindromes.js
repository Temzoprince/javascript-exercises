const palindromes = function (str) {

    newStr = str
                .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
                .toLowerCase()
                .split(" ")
                .join("")

    for (l = 0, r = newStr.length-1; l < newStr.length, r > 0; l++, r--) {
        if (newStr.charAt(l) !== newStr.charAt(r)) {
            return false;
        }
    }
    return true;
};

palindromes('racecar')

// Do not edit below this line
module.exports = palindromes;
