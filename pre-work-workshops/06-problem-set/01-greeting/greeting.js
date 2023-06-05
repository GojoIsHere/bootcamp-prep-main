
function greeting(name){
    if(typeof(name)=== "string"){
        return "Hello "+name+"!";
    }
    else{
        return "Hello!";
    }
}

console.log(greeting("sushil"));
console.log(greeting());