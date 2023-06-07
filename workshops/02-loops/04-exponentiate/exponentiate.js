function exponentiate(base, power){
    Number(base);
    Number(power);
    let result=1;
    if(power>=0){
        if(power===0){
            result = 1;
            return result;
        }
        else{
            
            for(i=1; i<=power; i++){
                result = result*base;
            } 
            return result;
        }     
    }
    else{
        return 'please put the positive integer';
    }
}

console.log(exponentiate(2,4));