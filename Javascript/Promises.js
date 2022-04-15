// Asyncronous operations are nothing but Promises 
// and a promise is nothing but an object that represents the 
// completion or failure of an operation

const myPromise = new Promise(function (resolve, reject) {
    let sampleData = [2, 4, 6, 8];
    let randomNumber = Math.floor(Math.random() * (sampleData.length + 1));
    if (sampleData[randomNumber]) {
      resolve(sampleData[randomNumber]);
    } else {
      reject('An error occured!');
    }
  });
  
  myPromise
    .then(function (e) {
      console.log(e);
    })
    .catch(function (error) {
      throw new Error(error);
    })
    .finally(function () {
      console.log('Promise completed');
    });

// The .then() method takes up to two arguments; 
// the first argument is a callback function for the resolved promise,
// the second argument is a callback function for the rejected case. 
// Each .then() returns a new promise object, 
// which can optionally be used for chaining

const promise1 = new Promise(function (resolve, reject) {
    resolve('Success!');
  });
  
  promise1.then(function (value) {
    console.log(value);
    // expected output: "Success!"
  });

// If you need to handle rejected promises then you can use catch
const promise2 = new Promise((resolve, reject) => {
    throw 'An error occured';
  });
  
  promise2.catch(function (error) {
    console.error(error);
  });
// expected output: An error occured

