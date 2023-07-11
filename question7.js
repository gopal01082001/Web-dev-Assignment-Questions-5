// Q.7 What’s async & await Keyword in JavaScript

// The async and await keywords in JavaScript are used together to handle asynchronous code in a more synchronous and readable manner. They were introduced in ECMAScript 2017 (ES8) and have become a popular choice for managing asynchronous operations.

// async:
// The async keyword is used to define an asynchronous function. It allows the function to implicitly return a Promise, even if no explicit Promise is returned within the function. An async function can contain one or more await expressions to pause the execution and wait for a Promise to resolve or reject. Here's an example:
// async function fetchData() {
//   // Asynchronous operation
//   const response = await fetch('https://api.example.com/data');
//   const data = await response.json();
//   return data;
// }
// In the example above, the fetchData function is declared as an async function. It uses the await keyword to pause the execution until the Promise returned by fetch resolves. The response is then parsed as JSON using another await expression, and the final data is returned. The returned value will be wrapped in a resolved Promise automatically.
// await:
// The await keyword can only be used inside an async function. It is used to pause the execution of an async function until a Promise is resolved or rejected. When encountering an await expression, the async function suspends execution and waits for the Promise to settle. If the Promise resolves, the value of the resolved Promise is returned. If the Promise rejects, an error is thrown, and the rejection can be caught using a try...catch block. Here's an example:
// async function doSomething() {
//   try {
//     const result = await someAsyncOperation();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// In this example, the await expression pauses the execution of the doSomething function until the Promise returned by someAsyncOperation resolves or rejects. If it resolves, the result is logged to the console. If it rejects, the error is caught and logged using the catch block.
// The combination of async and await allows developers to write asynchronous code in a more synchronous style, making it easier to read and maintain. It avoids callback chaining or nested callbacks, commonly referred to as "callback hell," and provides a more linear flow of control in asynchronous operations.




