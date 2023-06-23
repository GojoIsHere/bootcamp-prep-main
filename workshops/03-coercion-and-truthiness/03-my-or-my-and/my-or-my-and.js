function myOr (word1, word2, word3){
   if( word1){
      return true;
   }
   else if ( word2 === true){
       return true;
   }else if(word3 === true){
       return true;
   }
   else return false;
}
function myAnd(word1, word2, word3){
    if( word1 !== true){
        return false;
    }
    else if(word2 !== true){
        return false;
    }
    else if(wrod3 !== true){
        return false;
    }else{
        return true;
    }
}

console.log(myAnd(1, true, 'apple'));