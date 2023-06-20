debugger;
function billerBuilder(stateName){
    let newFun = function (priceOfItem){
        if(stateName === 'NY'){
            let shipping = 3 ;
            let saleTax = 4 ;
            let result = priceOfItem*shipping/100+ priceOfItem;
            let result1 = result*saleTax/100+result;
            return result1;
        }
        else if(stateName === 'NJ'){
            let shipping = 5 ;
            let saleTax = 6.625 ;
            let result = priceOfItem*shipping/100+ priceOfItem;
            let result1 = result*saleTax/100+result;
            return result1;
        }
    }
    return newFun;
}

let a = billerBuilder('NY');
let b = a(250);
console.log(b);

let returnedValue = billerBuilder('NJ');
let nyPrice = returnedValue(100);
console.log(nyPrice);