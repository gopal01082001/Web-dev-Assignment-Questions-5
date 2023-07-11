// Q.10 How do you define an asynchronous function in JavaScript using async/await?
// To define an asynchronous function using async/await in JavaScript, you need to prefix the function declaration with the async keyword. This signifies that the function will contain asynchronous operations and will return a Promise implicitly. Here's the syntax for defining an asynchronous function:
// async function functionName() {
//   // Asynchronous code here
// }
// Here's an example of an asynchronous function that fetches data from an API using fetch and async/await:
// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     if (!response.ok) {
//       throw new Error('Network response was not OK');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     // Handle error
//     throw error; // Re-throw the error or handle it in some way
//   }
// }
// In this example, the fetchData function is defined as an asynchronous function using the async keyword. It uses the await keyword to pause the execution and wait for Promises to resolve (fetch, response.json()). The function can handle both resolved and rejected Promises using try...catch for error handling.
// The fetchData function returns a Promise implicitly. When the function is called, it will return a Promise that resolves to the retrieved data or rejects with an error.
// You can call the asynchronous function using the regular function call syntax and handle the returned Promise accordingly, for example:
// fetchData()
//   .then(data => {
//     console.log(data);
//     // Handle the retrieved data
//   })
//   .catch(error => {
//     console.error(error);
//     // Handle any errors that occurred during the function execution
//   });
// By defining an asynchronous function with async and using await to handle Promises, you can write asynchronous code in a more sequential and readable manner, similar to synchronous code.




