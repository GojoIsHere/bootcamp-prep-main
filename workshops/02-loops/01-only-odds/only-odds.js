function onlyOdds(num){
    let sum=0;
    for(let i=num; i>0; i--){
        if(i%2===1){
            sum += i;
        }
    }
    return sum;
}

console.log(onlyOdds(-1));