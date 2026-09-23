const palindromes = function (myStr) {
    myStr = myStr.toLowerCase();
    const filterStr = (str) => str.replace(/[^a-zA-Z0-9]/g, "");

    let newStr = filterStr(myStr);
    let strArr = [...newStr];

    let start = 0;
    let end = strArr.length - 1;

    while(strArr[start] === strArr[end]) {
        start++;
        end--;
        if (start == end) {
            return true;
        } else if (start == end - 1) {
            return true;
        }
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
