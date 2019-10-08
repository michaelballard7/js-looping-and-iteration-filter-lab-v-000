// Code your solution in this file

function findMatching(collection, string){
    return collection.filter(item => item.toLowerCase() === string.toLowerCase());
};


function fuzzyMatch(collection, string){
    return collection.filter((item)=>{
        if(item.includes(string){
            return item
        }
    })
}
