// Code your solution in this file

function findMatching(collection, string){
    collection.filter(item => item.toLowerCase() === string.toLowerCase());
}
