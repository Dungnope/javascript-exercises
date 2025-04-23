const getTheTitles = function(books) {
    return books.reduce((acc, curr, index) =>{
        acc[index] = curr.title;
        return acc;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
