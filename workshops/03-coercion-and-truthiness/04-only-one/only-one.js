function onlyOne (word1, word2, word3){
    if(word1){
        if(word2){
            if(word3){
                return false;
            }else{
                return false;
            }
        }
        else if(word3){
            return false;
        }
        else{
            return true;
        }
    }
    else if(word2){
        if(word3){
            return false;
        }
        else{
            return true;
        }
    }else{
        if(word3){
            return true;
        }
        else{
            return false;
        }
    }
    
}
console.log(onlyOne(1,1,0));