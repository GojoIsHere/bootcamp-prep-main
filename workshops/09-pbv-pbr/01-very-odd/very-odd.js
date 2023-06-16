function veryOdd(arrayOfNum){
    let newArray = [];
    for(i in arrayOfNum){
        if(arrayOfNum[i]%2 === 1){
            newArray.push(arrayOfNum[i]);
        }
    }
    return newArray;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(veryOdd(allTheNums));