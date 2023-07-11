// Q.5 What are Callbacks &  Callback Hell ?
// Callbacks are functions that are passed as arguments to other functions and are executed at a later point in time or after a particular event occurs. In JavaScript, callbacks are commonly used to handle asynchronous operations and ensure that certain code executes only when a specific operation has completed.
// Here's a simple example of using a callback:
// function fetchData(callback) {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     const data = 'Some data';
//     callback(data);
//   }, 2000);
// }
// function handleData(data) {
//   console.log(data);
// }
// fetchData(handleData);
// In this example, the fetchData function simulates an asynchronous operation and takes a callback function as an argument. After the operation is complete, it calls the callback function with the resulting data.
// Callback Hell, also known as the Pyramid of Doom, is a term used to describe a situation where callbacks are nested within each other in complex and unreadable patterns. It often occurs when dealing with multiple asynchronous operations that depend on each other's results.
// Here's an example of callback hell:
// asyncOperation1(function (result1) {
//   asyncOperation2(result1, function (result2) {
//     asyncOperation3(result2, function (result3) {
//       // And so on...
//     });
//   });
// });
// Asynchronous operations are nested inside each other, making the code difficult to read, understand, and maintain. This structure can lead to code that is hard to debug, error-prone, and challenging to extend or modify.

// Callback hell can be mitigated using techniques like named functions, modularization, and control flow libraries. However, as JavaScript evolved, Promises and async/await were introduced as more elegant alternatives for handling asynchronous code, providing better readability and maintainability.

// Using Promises or async/await, the same code can be rewritten in a more structured and readable manner:

// javascript
// Copy code
// asyncOperation1()
//   .then(result1 => asyncOperation2(result1))
//   .then(result2 => asyncOperation3(result2))
//   .then(result3 => {
//     // Handle the final result
//   })
//   .catch(error => {
//     // Handle errors
//   });
// With Promises or async/await, the code flows in a more linear fashion, and error handling is consolidated in a single .catch block. This approach avoids excessive nesting and makes the code more manageable and understandable.




