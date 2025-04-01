const repeatString = function(string, number) {
    let ans = "";
    for(let i = 0; i < number; i++)
    {
        ans += string;
    }
    if(number < 0) return "ERROR";
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
