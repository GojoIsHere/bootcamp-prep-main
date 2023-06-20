debugger;
function getDogBreeder(name, age){
    let dogBreeder = function(dogName, dogAge){ 
        console.log(dogName);
        console.log(dogAge);
        if(typeof dogName === "number" && typeof dogAge === "undefined"){
            dogAge= dogName;
            dogName = name;
            let a = {
                name : dogName,
                age : dogAge,
            }
            return a ;  
        }else if (typeof dogName === "undefined" && typeof dogAge === "undefined"){
            let a = {
                name : name,
                age : age,
            }
            return a ;  
        }else if(typeof dogName === "string" && typeof dogAge === "undefined"){
            let a = {
                name : dogName,
                age : age,
            }
            return a ;  
        }
        else{
            let a = {
                name : dogName,
                age : dogAge,
            }
            return a ; 
        }
        
    }
    return dogBreeder;
}

// let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

// let x = puppyFarm('Olaf', 3); // => {name: 'Olaf', age: 3};
// let y = puppyFarm(2); // => {name: 'Snoopy', age: 2}

let z = rescueShelter(); // => {'Odie', 3}

// console.log(x);
// console.log(y);
console.log(z);