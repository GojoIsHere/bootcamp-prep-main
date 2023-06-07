function mySlice(originalString, startIdx, endIdx){
    let resultValue = '';
    if(startIdx<=endIdx || typeof(endIdx)=== "undefined" || typeof(startIdx)=== "undefined"){
        if(typeof(originalString) === "string" && typeof(startIdx) === "number" && typeof(endIdx)=== "number")
        {
            for(i = startIdx; i<endIdx; i++)
            {
                resultValue += originalString[i];
            }
            return resultValue;
        }
        else if(typeof(originalString) === "string" && typeof(startIdx) === "number" && typeof(endIdx)=== "undefined")
        {
            for(i=startIdx; i<originalString.length; i++)
            {
                resultValue += originalString[i];
            }
            return resultValue;
        }
        else
        {
            resultValue = originalString;
            return resultValue;
        }
        
    }
    else{
        return 'start index cannot be greater then end index';
    }


}



if(typeof(endIdx)=== "undefined")

console.log(mySlice('Sushil',2,4));
console.log(mySlice('Sushil',4,3));
console.log(mySlice('Sushil',4));
console.log(mySlice('Sushil'));