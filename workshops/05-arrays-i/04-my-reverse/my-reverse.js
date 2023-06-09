function myReverse(arra){
    let newArra = [];
    for(i=arra.length-1; i>=0;i--){
        newArra.push(arra[i]);
    }
    return newArra;
}
console.log(myReverse([1, 2, 3]));