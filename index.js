// Code your solution in this file

let findMatching = drivers.filter((driver, string)=>{
    if(driver.name.toLowerCase() === string.toLowerCase()){
        return driver.name
    }
});
