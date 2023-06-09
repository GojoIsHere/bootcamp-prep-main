// zero dark thirty 
function zeroDarkThirty(num){
    let newNum='';
    if(num === 0){
        return NaN;
    }
    else{
        let convertNum = String(num);
        for(let i=0;i<convertNum.length;i++){
            if(convertNum[i] !== '0'){
                newNum += convertNum[i];
            }
       
        }
        
    return Number(newNum);
    }
    
}
console.log(zeroDarkThirty('asdfasd'));


