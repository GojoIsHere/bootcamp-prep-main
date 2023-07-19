debugger;
function mySplice(arrayName, startIndx, numOfElement, replaceElement) {
  if (
    arrayName !== undefined &&
    startIndx === undefined &&
    numOfElement === undefined &&
    replaceElement === undefined
  )
    return arrayName;
  else if (
    arrayName !== undefined &&
    startIndx !== undefined &&
    numOfElement !== undefined &&
    replaceElement === undefined
  ) {
    let newArray = [];
    for (let i = 0; i < startIndx; i++) {
      newArray.push(arrayName[i]);
    }
    if (arrayName.length > startIndx + numOfElement) {
      for (let i = startIndx + numOfElement; i < arrayName.length; i++) {
        newArray.push(arrayName[i]);
      }
      for (let i = arrayName.length - 1; i >= 0; i--) {
        arrayName.pop(arrayName[i]);
      }
      for (let i in newArray) {
        arrayName.push(newArray[i]);
      }
      return arrayName;
    }
    for (let i = arrayName.length - 1; i >= 0; i--) {
      arrayName.pop(arrayName[i]);
    }
    for (let i in newArray) {
      arrayName.push(newArray[i]);
    }
    return arrayName;
  } else if (
    arrayName !== undefined &&
    startIndx !== undefined &&
    numOfElement !== undefined &&
    replaceElement !== undefined
  ) {
    let newArray = [];
    for (let i = 0; i < startIndx; i++) {
      newArray.push(arrayName[i]);
    }
    newArray.push(replaceElement);
    if (arrayName.length > startIndx + numOfElement) {
      for (let i = startIndx + numOfElement; i < arrayName.length; i++) {
        newArray.push(arrayName[i]);
      }
      for (let i = arrayName.length - 1; i >= 0; i--) {
        arrayName.pop(arrayName[i]);
      }
      for (let i in newArray) {
        arrayName.push(newArray[i]);
      }
      return arrayName;
    }
    for (let i = arrayName.length - 1; i >= 0; i--) {
      arrayName.pop(arrayName[i]);
    }
    for (let i in newArray) {
      arrayName.push(newArray[i]);
    }
    return arrayName;
  } else {
    console.log("not applicable");
  }
}

// let myArray = [1, 2, 3];

// let a = mySplice(myArray, 1, 1, 'apples') // => [2]
// console.log(a);
// let funNums = [10, 20, 30, 40, 50, 60];

// b = mySplice(funNums, 2, 3);
// console.log(b);

// let ourStuff = ['food', 'trash', 'clothes'];

// c =  mySplice(ourStuff, 1, 1);
// console.log(c);
// console.log(ourStuff);

function mySplice(arr, startIdx, rmvNo, addElement) {
  let newArray = [];
  let deleteElements = [];
  for (let k = 0; k < startIdx; k++) {
    newArray.push(arr[k]);
  }
  if (addElement !== undefined) {
    newArray.push(addElement);
  }
  for (let i = startIdx; i < startIdx + rmvNo; i++) {
    deleteElements.push(arr[i]);
  }
  for (let j = startIdx + rmvNo; j < arr.length; j++) {
    newArray.push(arr[j]);
  }
  for (let k = 0; k < arr.length; k++) {
    arr.pop();
  }
  for (let i = 0; i < newArray.length; i++) {
    arr[i] = newArray[i];
  }
  // console.log(deleteElements)
  // console.log(newArray)
  return deleteElements;
}
