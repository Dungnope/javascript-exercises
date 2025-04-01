
const removeFromArray = function(array, ...numberdelete) {
    let found, times = 1;
    for(let numbers of numberdelete)
    {
        found = array.indexOf(numbers);
        for(let i = found; i < array.length; i++)
        {
            if(array[i] === array[i+1])
            {
                ++times;
            }
            else break;
        }
        if(found >= 0)
        {array.splice(found, times);}
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

