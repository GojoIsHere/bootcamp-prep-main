debugger;
function lastFridayNight(transactions){
    let sum = 0;
    for(let i in transactions){
       
            sum = sum + transactions[i].amount;
        
    }
    return sum;
}
let a = [
    {
      name: "Tons of glitter",
      amount: 70
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {
      name: "Dinner at TGIF x6",
      amount: 350
    }
  ];
console.log(lastFridayNight(a));