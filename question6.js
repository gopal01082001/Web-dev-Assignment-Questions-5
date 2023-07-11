// Q.6 What are Promises & Explain Some Three Methods of Promise
// Promises are a built-in JavaScript feature introduced as a way to handle asynchronous operations in a more structured and readable manner. A Promise represents the eventual completion (or failure) of an asynchronous operation and allows you to attach callbacks to handle the resolved or rejected state.
// Promises have three states:
// Pending: The initial state of a Promise. It represents that the operation is still in progress and hasn't been fulfilled or rejected yet.
// Fulfilled: The Promise transitions to the fulfilled state when the asynchronous operation is successful. It represents that the operation has completed successfully, and the promised value is available.
// Rejected: The Promise transitions to the rejected state if the asynchronous operation encounters an error or fails to complete. It represents that the operation has failed, and the reason for the failure is available.
// Promises provide three main methods to handle asynchronous operations:
// then(): The then() method is used to handle the resolved state of a Promise. It takes two optional callbacks as arguments: onFulfilled and onRejected. The onFulfilled callback is executed when the Promise is fulfilled, and it receives the resolved value as its argument. The onRejected callback is executed when the Promise is rejected, and it receives the reason for rejection as its argument. Here's an example:
// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   // ...
//   if (success) {
//     resolve(result);
//   } else {
//     reject(error);
//   }
// });
// promise.then(
//   (resolvedValue) => {
//     // Handle resolved state
//     console.log(resolvedValue);
//   },
//   (rejectionReason) => {
//     // Handle rejected state
//     console.error(rejectionReason);
//   }
// );
// catch(): The catch() method is used to handle the rejected state of a Promise. It is equivalent to calling then(null, onRejected), providing a callback function to handle the rejection reason. It is commonly used to consolidate error handling for one or more Promises. Here's an example:
// promise
//   .then((resolvedValue) => {
//     // Handle resolved state
//     console.log(resolvedValue);
//   })
//   .catch((rejectionReason) => {
//     // Handle rejected state
//     console.error(rejectionReason);
//   });
// finally(): The finally() method allows you to specify a callback function that will be executed regardless of whether the Promise is fulfilled or rejected. It is useful for performing cleanup tasks or finalizing operations. The finally() method does not receive any arguments. Here's an example:
// promise
//   .then((resolvedValue) => {
//     // Handle resolved state
//     console.log(resolvedValue);
//   })
//   .catch((rejectionReason) => {
//     // Handle rejected state
//     console.error(rejectionReason);
//   })
//   .finally(() => {
//     // Perform cleanup or finalization tasks
//     console.log('Promise completed');
//   });
// These Promise methods allow you to handle the different states of a Promise and provide flexibility in dealing with asynchronous operations in JavaScript.




