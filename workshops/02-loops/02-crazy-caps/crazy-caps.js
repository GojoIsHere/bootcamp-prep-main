function crazyCaps(word){
    let newWord="";
    for(let i =0; i < word.length; i++){
        if(i%2===1){
            newWord+=word[i].toUpperCase();
        }else{
            newWord += word[i].toLowerCase();
        }
        
    }
    return newWord;
}
console.log(crazyCaps('sushil'));