const findTheOldest = function(people) {
    const d = new Date();
    let year = d.getFullYear();
    let agelist = new Array(people.length);
    let ages = people.reduce((acc, curr, index) => {
        if(curr.yearOfDeath === undefined) curr.yearOfDeath = year;
        curr.age = curr.yearOfDeath - curr.yearOfBirth;
        acc[index] = curr;
        agelist.push(curr.age);
        return acc;
    }, [])
    let oldestage = ages.sort((a, b) => {
        return a.age - b.age;
    })
    return oldestage[oldestage.length - 1];
};


// Do not edit below this line
module.exports = findTheOldest;
