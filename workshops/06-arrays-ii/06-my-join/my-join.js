// debugger; 
// function myJoin (array, separator){
//     let var1;
//     let var2 = "";
//     if(separator === undefined)
//         {
//          separator = ",";
//         }
//     for(i=0;i<array.length-1;i++){
//         if(array[i]===undefined || array[i]=== null ){
//             separator = '-';
//         }
//         var1 = array[i];
//         var2 = var2 + var1 + separator;
//         var1 = null;

//     }

//     var1 = array[array.length-1]
//     var2 = var2+var1;
//     return var2;
// }
// let a = myJoin(['Beyonce', 'Kelly', 'Michelle'], ' and ');
// console.log(a);
// console.log(typeof myJoin);
function myJoin(array, separator){
    let var1;
    let var2 = "";
    if(separator === undefined)
        {
         separator = ",";
        }
    for(i=0;i<array.length-1;i++){
        if(array[i]===undefined || array[i]=== null ){
            array[i]= "";        
        }
        var1 = array[i];
        var2 = var2 + var1 + separator;
        var1 = null;

    }

    var1 = array[array.length-1]
    var2 = var2+var1;
    return String(var2);
}
let a = myJoin([null, 'came, ', 'saw, ', 'conquered.'], 'I ');
console.log(a);