const fibonacci = function(number) {

    if(typeof(number) !== 'number')
    {
        number = +number;
    }
    if(number < 0) return "OOPS";
    if(number === 0) return 0;
    let newarray = new Array(number).fill(0);
    newarray[0] = 1;
    newarray[1] = 1;
    if(number === 1 || number === 2) return 1;
    else {
        let pre;
        for(let i  = 2; i < number; i++)
        {
            newarray[i] = newarray[i-1] + newarray[i-2];
        }
    }
    return newarray[newarray.length-1];
};
console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
