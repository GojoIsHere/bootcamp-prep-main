let counter = 0;

function incrementalChange(num){
    counter +=num;
    return counter;
}
console.log(incrementalChange(2)); // => 2
console.log(incrementalChange(6)); // => 8
console.log(incrementalChange(-1)); // => 7

