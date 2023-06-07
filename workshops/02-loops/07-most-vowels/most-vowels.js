function mostVowels(word){
    let defaultString = "";
    let defaultCount = 0;
    let newCount = 0;
    let newString = '';
    for(let i = 0; i<word.length ; i++){
        for(j=i; word[j]!== " "; j++){
            if(word[j] === 'a' || word[j] === 'e' || word[j] === 'i' || word[j] === 'o' || word[j] === 'u' || word[j] === 'A' || word[j] === 'E' || word[j] === 'I' || word[j] === 'O' || word[j] === 'U' )
            {
                newCount +=1;
                newString += word[j];
                break ;
            }
        }
        if(newCount>defaultCount){
            
        }
    }
}