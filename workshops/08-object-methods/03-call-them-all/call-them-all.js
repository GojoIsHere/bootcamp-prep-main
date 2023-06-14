debugger;
function callThemAll (object, value){
    let array= [];
for(i in object){
    if( typeof object[i]=== 'function'){
        let val;
        num = value;
        val = object[i](num);
        
        array.push(val);
    }
}
return array;
}

let numFun = {
    addTwenty: function(num) {
      return num + 20;
    },

    subtractTen: function(num) {
      return num - 10;
    },

    stringify: function(num) {
      return String(num);
    }
  };
  console.log(callThemAll(numFun, 20))