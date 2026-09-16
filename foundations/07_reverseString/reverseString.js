const reverseString = function(string) {
    let arr = string.split("");
    arr.reverse()
    return arr.join("");

    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
