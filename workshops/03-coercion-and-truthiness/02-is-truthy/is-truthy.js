function isTruthy(argu){
    if (Boolean(argu)){
        return Boolean(argu);
    }else{
        if(argu === false){
            return 'The boolean value false is falsey';
        }
        if(argu === 0){
            return 'The number 0 is falsey (the only falsey number)';
        }
       if(argu === null){
            return 'The null value is falsey';
        }
        if(argu === undefined){
            return 'undefined is falsey';
        }
        if(argu === ''){
            return 'The empty string is falsey (the only falsey string)';
        }
       
    }
}