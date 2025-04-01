const reverseString = function(stringinput) {
    let ans = "";
    for(let i = stringinput.length - 1; i >= 0; i--)
    {
        ans += stringinput[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
