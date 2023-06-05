function lastCharacter(word1, word2){
    if (word1[word1.length-1] === word2[word2.length-1]){
        return true;
    }
    else{
        return false;

    }
}
console.log(lastCharacter('laksdjfl','kajsdhfkl'));
console.log(lastCharacter('laksdjfl','kajfk'));