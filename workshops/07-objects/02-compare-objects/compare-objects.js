
function compareObjects(obj1, obj2){
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    let value1 =[];
    let value2 =[];
    for(i in obj1){
        value1.push(obj1[i]);
    }
    for(i in obj2){
        value2.push(obj2[i]);
    }
    for(i in key1){
        if(key1.length === key2.length && value1.length == value2.length){
            if (key1[i] === key2[i] && value1[i] === value2[i]){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    
}
console.log(typeof compareObjects);


let a = compareObjects({ name: 'nick' }, { name: 'nick' }); // -> true
let b = compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false

console.log(a);
console.log(b);