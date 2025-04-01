const sumAll = function(one, two) {
    let sum = 0;
    let datatype1 = typeof(one, two);
    if(datatype1 == typeof(1) && one > 0 && two > 0 && Number.isInteger(one, two))
    {    if(one < two)
        {
            for(let i = one; i <= two; i++)
            {
                sum += i;
            }
            return sum;
        }
        else if(one > two)
        {
            for(let i = two; i <= one; i++)
            {
                sum += i;
            }
            return sum;
        }
    }
    else return `ERROR`;
};

// Do not edit below this line
module.exports = sumAll;
