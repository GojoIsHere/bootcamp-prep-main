debugger
function mostVowels(word){
    let defaultString = "";
    let defaultCount = 0;
    let newCount = 0;
    let newString = '';
    for(i=0; i<word.length; i++){
        newString += word[i];
       if(word[i]!==' '){
           if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U' )
        {
            newCount +=1;   
        }
        }
        if(word[i]=== ' '){
            newCount= 0;
            newString = '';
        }
        if(newCount>defaultCount){
            defaultString = newString;
           
        }

        
    }
   return defaultString; 
    
}
a = 'my name is Sushil'
console.log(mostVowels(a));