function whosASpecial(arrayOfPet){
  let a =[];
  let b ='';
  arrayOfPet.forEach(function(arrayOfPet){
    a.push(arrayOfPet.name+" the "+arrayOfPet.species+" is very special!");
    b = a.join(" ");
    
  })
  return b;   
}


let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];
console.log(whosASpecial(specialPets));
