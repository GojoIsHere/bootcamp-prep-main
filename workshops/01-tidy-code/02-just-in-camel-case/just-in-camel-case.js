// YOUR CODE BELOW
function justInCamelCase(underName) {
  let camelCaseOutPut = "";
    let foundUnder = false;
    for(let i = 0; i<underName.length; i++) {
    if (underName[i] === "_") {
      foundUnder = true;
      } else {
        if (foundUnder) {
        camelCaseOutPut += underName[i].toUpperCase();
      foundUnder = false;
    } else {
      camelCaseOutPut += underName[i];
      }
  }
  }
      return camelCaseOutPut;
}
