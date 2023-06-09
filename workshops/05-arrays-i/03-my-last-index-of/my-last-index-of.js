function myLastIndexOf(arra, serachValue, startIdx){
   
    if(startIdx === undefined){
        let x;
        for(i=arra.length-1;i>=0;i--){
            
            if(arra[i]===serachValue){
                x = i;
                return x;
            }
            
        }
        
         return -1
        
    }else{
        if(startIdx<arra.length){
            let x;
            for(i=startIdx;i>=0;i--){
                if(arra[i]===serachValue){
                    x =i;
                    return x;
                }
            }
            return -1
            
        }else{
            return "start index is larger then array length";
        }
    }
}
console.log(myLastIndexOf([0, 10, 20, 10, 0], 10,2));