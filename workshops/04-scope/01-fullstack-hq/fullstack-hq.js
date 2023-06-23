// Edit the code below
let Planet = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(state) {
      city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        console.log(Planet);
        return 'Fullstack HQ is at ' + Planet + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}

let a = fullstackHQ(Planet)
console.log(a);