function functionLogger(fun1, num){
    return fun1(num);
}
function squareNum(x) {
    return x * x;
  }
  
  let squareOfFour = functionLogger(squareNum, 4);
  console.log(squareOfFour)  ;