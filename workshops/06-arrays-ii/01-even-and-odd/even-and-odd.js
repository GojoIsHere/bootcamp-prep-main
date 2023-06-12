debugger;
function evenAndOdd(array){
    let odd = [];
    let even = [];
    for(i=0; i<array.length; i++){
        if(array[i]%2===1){
            odd.push(array[i]);
        }
        else{
            even.push(array[i]);
        }
    }
    let newArray = [];
    newArray.push(even);
    newArray.push(odd);
    return newArray;
}

console.log(evenAndOdd([2,4,6,3,8,4,9,1,5]));
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]))