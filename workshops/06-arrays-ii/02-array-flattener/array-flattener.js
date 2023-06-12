debugger;
function arrayFlattener(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            for(j=0; j<array[i].length; j++){
                newArray.push(array[i][j]);
            }
        }
        else{
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(arrayFlattener([1,[2, 3], 4]));