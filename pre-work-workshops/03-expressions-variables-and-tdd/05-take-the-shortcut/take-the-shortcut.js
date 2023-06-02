let happyNum = 1000;

let newNum =2000;
let result = newNum/=happyNum;
result*=2;
result+=1;

console.log(result);
happyNum=result;

console.log(happyNum===result);