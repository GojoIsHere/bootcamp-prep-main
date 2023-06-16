function finderFunction(array, callback){
    for(let i= 0; i<array.length; i++){
        let a = callback(array[i]);
        if(a === true){
            return i;
        }
        else{
            return -1;
        }
    }
}


let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
  return !(num % 2);
}

console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1