const repeatString = ((string, num) => {
    if (num < 0) {
        return 'ERROR';
    }

    let newString = '';

    while (num > 0) {
        newString += string;
        num--;
    }

    return newString;
});

// Do not edit below this line
module.exports = repeatString;
