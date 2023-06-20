function stringify(callBackFun){
    let a = function(){
        let b = callBackFun();
        let c = String(b);
        return c; 
    }
    return a;
}

function returnsANumber() {
    return 100;
  }
  
  let newFunction = stringify(returnsANumber);
  console.log(newFunction());