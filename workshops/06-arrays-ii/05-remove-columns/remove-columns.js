function removeColumns(array, column){
    let newArray1 = [];
    let newArray2 = [];
    for(i=0;i<array.length;i++){
        for(j=0;j<array[i].length-column;j++){
            newArray1.push(array[i][j]);
        }
        newArray2.push(newArray1);
        newArray1 = [];
    }
    return newArray2;
}
let a =removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2);
console.log(a);