let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
debugger;
// YOUR CODE BELOW
function leetTranslator(word){
    let a = word.toLowerCase();
    let newArray = [];
    let codedArray = [];
    for(i in a){
        newArray.push(a[i]);
    }
    console.log()
    for(i in newArray){
        for(j in letters){
            if(newArray[i]=== letters[j]){
                codedArray.push(leetChars[j]);
            }
        }
    }
    return codedArray.join('');
}
a = leetTranslator('Fullstack');
console.log(a); 