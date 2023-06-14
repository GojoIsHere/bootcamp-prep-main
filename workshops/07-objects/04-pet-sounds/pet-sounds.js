// let animalNoises = [
//   { 'dog': {
//     'America' : 'Woof! Woof!',
//     'Germany' : 'Wau Wau!',
//     'England' : 'Bow wow!',
//     'Uruguay' : 'Jua jua!',
//     'Afrikaans' : 'Blaf!',
//     'Korea' : 'Mong mong!',
//     'Iceland' : 'Voff voff!',
//     'Albania' : 'Ham!',
//     'Algeria' : 'Ouaf ouaf!'
//     }
//   },
//   { 'cat': {
//     'America' : 'Meow',
//     'Germany' : 'Miauw!',
//     'England' : 'mew mew',
//     'Uruguay' : 'Miau Miau!',
//     'Afrikaans' : 'Purr',
//     'Korea' : 'Nyaong!',
//     'Iceland' : 'Kurnau!',
//     'Albania' : 'Miau',
//     'Algeria' : 'Miaou!'
//     }
//   },
//   { 'chicken': {
//     'America' : 'Cluck cluck',
//     'Germany' : 'tock tock tock',
//     'England' : 'Cluck Cluck',
//     'Uruguay' : 'gut gut gdak',
//     'Afrikaans' : 'kukeleku',
//     'Korea' : 'ko-ko-ko',
//     'Iceland' : 'Chuck-chuck!',
//     'Albania' : 'Kotkot',
//     'Algeria' : 'Cotcotcodet'
//     }
//   }
// ];

// // YOUR CODE BELOW
// function petSound(animalName, countryName) {
//   for(i=0; i<animalNoises.length; i++){
//     for(i in animalNoises[i]){
//       debugger;
//       if(i = animalName){
//         for(i=0;i<i[key])
//       }
//     }
    
//   }
// }
// a = petSound('dog', 'America');



let a = {
  name : 'sushil',
  age : '23',
  b : {
      ball : 'football',
      bat : 'wood'
  }
}
for(i in a){
  console.log(a[i]);
  if(i == 'b'){
    for(j=0;j<i.length;j++){
      console.log(j);
    }
  }
}