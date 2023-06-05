
function myMnemonic(word1 , word2, word3, word4){
    if(typeof(word1)=== "string" && typeof(word2) === "string" && typeof(word3) === "string" && typeof(word4) === "string"){
        newWord = word1[0]+word2[0]+word3[0]+word4[0];
        return String(newWord);
    }
    else if(typeof(word1)=== "string" && typeof(word2) === "string" && typeof(word3) === "string" && typeof(word4) === "undefined"){
        newWord = word1[0]+word2[0]+word3[0];
        return String(newWord);
    }
    else if(typeof(word1)=== "string" && typeof(word2) === "string" && typeof(word3) === "undefined" && typeof(word4) === "undefined"){
        newWord = word1[0]+word2[0];
        return String(newWord);
    }
    else if(typeof(word1)=== "string" && typeof(word2) === "undefined" && typeof(word3) === "undefined" && typeof(word4) === "undefined"){
        newWord = word1[0];
        return String(newWord);
    }
    else{
        console.log("please put the string values");
    }
}
console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'));
console.log(myMnemonic('Must', 'Accept'));