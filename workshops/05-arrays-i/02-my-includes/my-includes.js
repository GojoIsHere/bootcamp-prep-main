debugger;
function myIncludes(arra, searchValue){
    let x;
    for(i=0;i<arra.length;i++){
        if(arra[i]===searchValue){
            x = searchValue;
            return true;
        }
    }
    if(x === undefined){
        return false;
    }
}
console.log(myIncludes([1,2,3,4], 4));
console.log(myIncludes(['fun', 'happy things', 'kittens'], 'sad things'));