// Code your solution in this file

function findMatching(collection, string){
    return collection.filter(item => item.toLowerCase() === string.toLowerCase());
};
