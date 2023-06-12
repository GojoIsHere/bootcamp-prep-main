
function rotateArray(originalArray, rotateNum){
    if(rotateNum<=originalArray.length){
        if(rotateNum > 0){
            let newArray = [];
            debugger;
            for(i=(originalArray.length-rotateNum);i<originalArray.length; i++){
                newArray.push(originalArray[i])
            }
            for(i=0;i<originalArray.length-rotateNum;i++){
                newArray.push(originalArray[i]);
            }
            return newArray;
        }
        else if (rotateNum< 0){
            let newArray =[];
            for(i=0-rotateNum;i<originalArray.length;i++){
                newArray.push(originalArray[i]);
            }
            for(i=0;i<0-rotateNum;i++){
                newArray.push(originalArray[i]);
            }
            return newArray;
        }
        else{
            return originalArray;
        }
    }
    else{
        return 'rotate num is more then the length of original array\'s length';
    }
}

let a = rotateArray([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
let b = rotateArray([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
let c = rotateArray([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
console.log(a);
console.log(b);
console.log(c);