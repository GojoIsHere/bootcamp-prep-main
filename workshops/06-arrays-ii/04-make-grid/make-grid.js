debugger;
function makeGrid(column, row){
    let array1 = [];
    let array2 = [];
    for(i=0;i<row;i++){
        for(j=0;j<column;j++){
            array1.push(j+1);
        }
        array2.push(array1);
        array1 = [];
    }
    return array2  ;
}
console.log(makeGrid(2,3));