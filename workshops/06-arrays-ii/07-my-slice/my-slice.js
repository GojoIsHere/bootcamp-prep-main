function mySlice(oArray, strInd, endInd){
    if(strInd=== undefined && endInd === undefined){
        let a = oArray;
        return a;
    }
    else if(strInd !== undefined && endInd === undefined){
        if(strInd<0){
            let a = [];
            for(i=oArray.length+strInd; i<oArray.length;i++){
                
                a.push(oArray[i]);
                
            }
            return a;
        }else{
            let a = [];
            for(i=strInd; i<oArray.length;i++){
                
                a.push(oArray[i]);
                
            }
            return a;
        }
    }
    
    else{
        if(endInd<0){
            let a = [];
            for(i=strInd;i<oArray.length+endInd;i++){
                a.push(oArray[i]);
            }
            return a;
        }
        else{
            let a = [];
            for(i=strInd; i<endInd; i++){          
                a.push(oArray[i]);     
             }
        return a;
        }
    }
}

let b = mySlice([1, 2, 3], 1, 2) // => [2]
let c = mySlice([1, 2, 3], 1) // => [2, 3]
let d = mySlice([1, 2, 3]) // => [1, 2, 3]
let e = mySlice([1, 2, 3], -1) // => [3]
console.log(b);
console.log(c);
console.log(d);
console.log(e);