function taxCalculator(price, state){
    if(state === 'NY'){
        let tax = 4;
        let tPrice = price+price/100*tax;
        return tPrice;
        
    }else if(state === 'NJ'){
        let tax = 6.625;
        let tPrice = price+price/100*tax;
        return tPrice;
    }else{
        console.log("state not defined")
    }
   
}

console.log(taxCalculator(100 , 'NY'));
console.log(taxCalculator(100 , 'NJ'));