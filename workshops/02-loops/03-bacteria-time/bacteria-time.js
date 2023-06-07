function bacteriaTime(currentNum, targetNum){
    let totalTimes = 0;
    if (currentNum<targetNum){
        for(let i=1; currentNum<targetNum;){
            currentNum+=currentNum;
            totalTimes +=1;
        }
        return totalTimes*20;
    }
    else{
        return 'targetNum must be larger than currentNum';
    }
}

console.log(bacteriaTime(1,8));
console.log(bacteriaTime(8,1));