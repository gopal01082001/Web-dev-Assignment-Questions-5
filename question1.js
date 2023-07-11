
// Q.1 What’s difference between Synchronous and Asynchronous? in javasript
// // In JavaScript, the terms "synchronous" and "asynchronous" refer to different ways of handling code execution and managing tasks. Here's the difference between the two in the context of JavaScript:

// // Synchronous: In synchronous JavaScript code, tasks are executed sequentially in a blocking manner. This means that each task must complete before the next one can start. When a synchronous task is encountered, the execution of the program halts until that task is finished. Synchronous operations can potentially cause the program to become unresponsive or "freeze" if a task takes a long time to complete. Examples of synchronous operations in JavaScript include regular function calls, loops, and file reading using the synchronous API.
// // Example:

// // javascript
// // Copy code
// // console.log("Task 1");
// // console.log("Task 2");
// // console.log("Task 3");
// // In this example, the tasks are executed one after the other in a synchronous manner. Task 2 will only start once Task 1 completes, and Task 3 will only start once Task 2 completes.

// // Asynchronous: In asynchronous JavaScript code, tasks are executed non-sequentially and in a non-blocking manner. Asynchronous operations allow other code to run concurrently while waiting for the completion of a task. Instead of waiting for a task to finish, asynchronous code continues executing the next task without blocking the program's execution. JavaScript achieves asynchronicity through mechanisms like callbacks, promises, and async/await. Common asynchronous operations in JavaScript include AJAX requests, timers, and file reading using the asynchronous API.
// // Example:

// // javascript
// /console.log("Task 1");

// // setTimeout(() => {
// //   console.log("Task 2");
// // }, 2000);

// // console.log("Task 3");
// // In this example, Task 1 will be executed immediately, followed by Task 3. However, the setTimeout function sets a timer for 2000 milliseconds (2 seconds) and schedules Task 2 to be executed after that time. During the waiting period, other code can continue running. After the specified delay, Task 2 is executed asynchronously.

// // Asynchronous code allows for better responsiveness and scalability in applications since tasks that take longer to complete don't block the execution of other tasks. It enables handling of time-consuming operations, such as network requests or file reading, without freezing the program or causing delays