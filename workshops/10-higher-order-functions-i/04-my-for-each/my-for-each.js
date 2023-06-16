function myForEach(array, callFun){
    array.forEach(callFun);
}

let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum);
