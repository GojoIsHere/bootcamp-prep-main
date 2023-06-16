debugger;
function chainReaction(starVal, arrayOfFun){
    for(let i = 0; i< arrayOfFun.length; i++){
        starVal = arrayOfFun[i](starVal);
        
    }
    return starVal;
}
function addTen(num) {
    return num + 10;
}
  
function subtractFive(num) {
    return num - 5;
}
  
function multiplyFive(num) {
    return num * 5;
}
  
let a = chainReaction(0, [addTen, subtractFive, multiplyFive]);
console.log(a);