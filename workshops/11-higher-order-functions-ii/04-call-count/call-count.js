function callCount(){
    let count = 0;
    let newFun = function(){
        count ++;
        return count;
    }
    return newFun;
}

a = callCount(); 
console.log(a());
console.log(a());
console.log(a());
console.log(a());