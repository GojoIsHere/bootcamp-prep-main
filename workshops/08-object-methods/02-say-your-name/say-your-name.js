me2 = {
    name : "sushil",
    getGreeting : function(you){
        return "Hi "+you.name+", my name is "+me2.name+".";
    }
}
you = { 
    name : 'Akash'
}
console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
console.log(me2.getGreeting(you)); // => 'Hi Alyssa, my name is Tarana.'