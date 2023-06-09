function myLastIndexOf(arra, serachValue, startIdx){
    if(startIdx === undefined){
        let x;
        for(i=0;i<arra.length;i++){
            
            if(arra[i]===serachValue){
                x = i;
                continue;
            }
            
        }
        if(x === undefined){
            return -1
        }else{
            return x;
        }
    }else{
        if(startIdx<arra.length){
            let x;
            let y = arra.slice(startIdx);
            for(i=0;i<y.length;i++){
                if(y[i]===serachValue){
                    x = i;
                    continue;
                }
            }
            if(x === undefined){
                return -1
            }else{
                return x;
            }
        }else{
            return "start index is larger then array length";
        }
    }
}
console.log(myLastIndexOf([0, 10, 20, 10, 0], 10,2));