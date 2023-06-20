function partial (func, num){
    let a = func(num, num);

    let b =function (a){
        return num + a;
    }
    return b; 
}


  function summer (a, b) {
    return a + b
  };
  
  let sumFive = partial(summer, 5);
 console.log( sumFive(10)) // => 15;




 