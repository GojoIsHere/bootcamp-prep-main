// function frequencyAnalysis(word) {
//   let a = word.toLowerCase();
//   newArray = [];
//   let count = 0;
//   for (let i = 0; i < a.length; i++) {
//     newArray.push(a[i]);
//   }
//   // console.log(newArray);
// }
// a = frequencyAnalysis("Sushil");
// console.log(a);
function frequencyAnalysis(stringVal) {
  let finalObj = {};
  for (let k = 0; k < stringVal.length; k++) {
    if (stringVal[k] in finalObj) {
      finalObj[stringVal[k]] = finalObj[stringVal[k]] + 1;
    } else {
      finalObj[stringVal[k]] = 1;
    }
  }
  console.log(finalObj);
  return finalObj;
}
