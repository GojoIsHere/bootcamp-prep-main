// function adds10(num) {
//     let start = Date.now();
//     let end = Date.now();

//     // pause for 3 seconds, to make the function expensive!
//     while (end - start < 3000) {
//       end = Date.now();
//     }

//     return num + 10;
//   }

//   let cachedAdds10 = cacheSavings(adds10);

//   cachedAdds10(20); // => returns 30, takes 3 seconds!
//   cachedAdds10(0); // returns 10, takes 3 seconds!

//   cachedAdds10(20); // => returns 30, takes no time at all!

function cacheSavings(myCallback) {
  let cacheVal = 0;
  let cach;
  return function myReturnFunc(arg) {
    if (arg === cacheVal) {
      //check if already present in cache
      return cach;
    } else {
      cacheVal = arg;
      cach = myCallback(arg); //invoke if not present
      return cach;
    }
  };
}
