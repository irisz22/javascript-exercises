const fibonacci = function(val) {
    const num = Number(val);

    if (num < 0 || isNaN(num) || !Number.isInteger(num)) {
        return "OOPS";
    }

    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;

    let prev1 = 1; // second ever value
    let prev2 = 1; // first ever value
    let cur = 0;

    for (let i = 3; i <= num; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;

};

// Do not edit below this line
module.exports = fibonacci;
