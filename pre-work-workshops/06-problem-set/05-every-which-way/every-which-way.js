function everyWhichWay(num1, num2, num3){
    if(num1+num2 === num3){
        return 'sum';
    }
    else if( num1-num2 === num3){
        return 'difference';
    }
    else if(num1*num2 === num3){
        return 'product';
    }
    else if(num1/num2 === num3){
        return 'fraction';
    }
    else {
        return null;
    }
}

console.log(everyWhichWay(2,3,5));
console.log(everyWhichWay(2,3,6));

