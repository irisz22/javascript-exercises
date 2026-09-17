const sumAll = function(num1, num2) {
    // an option is to set min and max as parameter names
    //and choose it from the very beginning!
    
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    let arr = [];
    let smaller = Math.min (num1, num2);
    let larger = Math.max(num1, num2);

    num1 = smaller;
    num2 = larger;

    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }

    return arr.reduce(((cur, total) => cur + total), 0);

};

// Do not edit below this line
module.exports = sumAll;
