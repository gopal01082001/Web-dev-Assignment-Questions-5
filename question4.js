// Q.4 how can you handle Async code in JavaScript ?
// Handling asynchronous code in JavaScript can be done using various techniques. Here are some common approaches:
// Callbacks:
// Callbacks are functions that are passed as arguments to asynchronous functions. The callback function is executed when the asynchronous operation completes. For example:
// javascript
// function fetchData(callback) {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     const data = 'Some data';
//     callback(data);
//   }, 2000);
// }
// // Using the callback
// fetchData((data) => {
//   console.log(data);
// });
// In this example, the fetchData function simulates an asynchronous operation using setTimeout. When the operation completes, it calls the provided callback function with the resulting data.
// Promises:
// Promises provide a more structured and readable way to handle asynchronous operations. A promise represents the eventual completion or failure of an asynchronous operation and allows you to attach callbacks to handle the resolved or rejected state. For example:
// javascript
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       const data = 'Some data';
//       resolve(data); // Operation succeeded
//       // or
//       // reject(new Error('Operation failed')); // Operation failed
//     }, 2000);
//   });
// }

// // Using promises
// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// The fetchData function returns a promise. You can use the then method to handle the resolved state and the catch method to handle any errors or rejections.
// Async/await:
// Async/await is a modern syntax introduced in ECMAScript 2017 (ES8) that allows writing asynchronous code in a more synchronous style. It is built on top of promises and provides a way to write asynchronous code that looks like synchronous code. For example:
// javascript
// async function fetchData() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       const data = 'Some data';
//       resolve(data); // Operation succeeded
//       // or
//       // reject(new Error('Operation failed')); // Operation failed
//     }, 2000);
//   });
// }

// // Using async/await
// async function handleData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// handleData();







