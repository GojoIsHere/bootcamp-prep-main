debugger;
function oddCouple(a){
    let newA =[];
    for(let i=0; i<a.length; i++){
        
        if(a[i]%2===1){
            newA.push(a[i]);
            continue;
        }
        else{
            continue;
        }
    }
    if(newA.length<2){
        if((newA[0]) === []){
            return [];
        }else{
            let x =newA.slice();
            return x;
        }
    }
    else{
        let x = newA.slice(0,2);
        return x;
    }
}
console.log(oddCouple([14, 21, 28]));
