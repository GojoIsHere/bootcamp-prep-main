function whosASpecial(arrayOfPet){
    let a =[];
    let b ='';
    for(let i = 0; i < arrayOfPet.length; i ++ ){
        a.push(arrayOfPet[i].name+" the "+arrayOfPet[i].species+" is very special!");
        b = a.join(" ");
    }
    ;
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
