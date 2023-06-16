let dolly;
let snuppy;
dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}
    
snuppy = {
  name: 'Snuppy',
  species: 'dog',
  offspring: []
}

    
function cloneMachine(obj){
  let clone = {
    name : obj.name+ 'Clone',
    species: obj.species,
    offspring : [],
  };
  obj.offspring.push(obj.name+'Clone');

return clone;
}
let dollyClone = cloneMachine(dolly);
console.log(dollyClone); // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly); // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}

