// Q.3 Explain SetTimeOut and setInterval ?
// setTimeout and setInterval are functions commonly used in JavaScript to schedule the execution of code at specific intervals or after a certain delay. Here's an explanation of each:
// setTimeout:
// The setTimeout function is used to execute a piece of code or a function after a specified delay (in milliseconds). It takes two parameters: a callback function and a delay value. The callback function is the code that will be executed after the delay. Here's an example:
// javascript
// setTimeout(() => {
//   // Code to be executed after the delay
//   console.log('Delayed code');
// }, 2000); // Delay of 2000 milliseconds (2 seconds)
// In the example above, the callback function (console.log) will be executed after a delay of 2000 milliseconds (2 seconds). This function is commonly used to introduce delays in executing code, perform animations, or schedule tasks to run after a certain period.
// setInterval:
// The setInterval function is used to repeatedly execute a piece of code or a function at a specified interval. It also takes a callback function as its first parameter and an interval value (in milliseconds) as the second parameter. Here's an example:
// javascript
// setInterval(() => {
//   // Code to be executed repeatedly at the specified interval
//   console.log('Repeating code');
// }, 1000); // Interval of 1000 milliseconds (1 second)
// In the example above, the callback function (console.log) will be executed repeatedly every 1000 milliseconds (1 second). The setInterval function is often used for tasks such as updating live data, creating animations, or implementing real-time features.
// Both setTimeout and setInterval return a numeric value known as a timer identifier. This identifier can be used to cancel the scheduled execution before it occurs, using the clearTimeout or clearInterval functions, respectively.
// For example, to cancel a setTimeout execution:
// javascript
// const timerId = setTimeout(() => {
//   console.log('Delayed code');
// }, 2000);
// // Cancel the execution before the delay
// clearTimeout(timerId);
// Similarly, to cancel a setInterval execution:
// javascript
// const intervalId = setInterval(() => {
//   console.log('Repeating code');
// }, 1000);
// // Cancel the execution after a certain number of iterations
// clearInterval(intervalId);
// By using setTimeout and setInterval, you can control the timing of code execution and create dynamic and interactive JavaScript applications.




