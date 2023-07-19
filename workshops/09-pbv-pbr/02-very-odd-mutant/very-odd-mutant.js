// function veryOddMutant(arrayOfNum){
//     for(i in arrayOfNum){
//         if(arrayOfNum[i]%2 === 0){
//             arrayOfNum[i]= 'normie';
//         }
//     }
//     return arrayOfNum;
// }
// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
function veryOddMutant(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
      arr[i] = "normie";
      count++;
    }
  }
  console.log(arr);
  return count;
}
