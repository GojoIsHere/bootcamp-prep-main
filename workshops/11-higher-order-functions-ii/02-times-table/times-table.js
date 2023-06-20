function timesTable (anyNum){
    function table(tableNum){
        let result = anyNum* tableNum;
        return result;
    }
    return table;
}

let a = timesTable(8);
let b = a(8);
console.log(b);

