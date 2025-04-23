const palindromes = function (string) {
   //   const newstring = string.toLowerCase().split("");
   //   const ans = newstring.map(value => {
   //      if(value === ' ' || value === ',' || value === '!' || value === '.') return value = '';
   //      else return value;
   //   })
   //   let compare1 = ans.join("");
   //   ans.reverse();
   //   let compare2 = ans.join("");
   //   return compare1 === compare2;
   /* Use number and anphabet only is the better way */
   const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
   const newstring = string
                     .toLowerCase()
                     .split("")
                     .filter(character => {
                        return alphanumerical.includes(character);
                     })
                     .join("");
   const reversedString = newstring.split('').reverse().join('');
   return newstring === reversedString;
};
console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
