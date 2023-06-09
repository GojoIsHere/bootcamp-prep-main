function myUnshift(arra, value){
    let x =[value];
    for(i=0;i<arra.length;i++){
        x.push(arra[i]);
    }
    return x;
}
console.log(myUnshift([1, 2, 3], 0));