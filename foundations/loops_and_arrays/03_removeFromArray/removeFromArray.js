const removeFromArray = function(arr, ...args) { // args w/ rest operator

    return arr.filter((cur) => !args.includes(cur));
    // if args includes cur, then it filters out cur!
};

// Do not edit below this line
module.exports = removeFromArray;
