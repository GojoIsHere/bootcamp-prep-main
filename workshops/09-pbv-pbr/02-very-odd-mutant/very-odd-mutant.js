function veryOddMutant(arrayOfNum){
    for(i in arrayOfNum){
        if(arrayOfNum[i]%2 === 0){
            arrayOfNum[i]= 'normie';
        }
    }
    return arrayOfNum;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);