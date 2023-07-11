// Q.9 Explain fetch
// fetch is a built-in JavaScript function used to make asynchronous network requests (HTTP requests) to retrieve resources from a specified URL. It is a modern replacement for older techniques like XMLHttpRequest (XHR) and offers a more flexible and powerful way to interact with APIs and fetch data.
// Here's how to use fetch:
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not OK');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the retrieved data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.error(error);
//   });
// Explanation of the code:
// The fetch function is called with the URL as its parameter. It returns a Promise that resolves to the Response object representing the network response.
// The first then block is used to handle the response. It checks if the response was successful (response.ok). If it is not, an error is thrown. This ensures that errors related to the network request itself, such as 404 Not Found or 500 Internal Server Error, are properly handled.
// If the response is successful, the second then block is executed. It extracts the response data by calling the json() method on the Response object, which returns a Promise that resolves to the parsed JSON data.
// Finally, the retrieved data is available within the second then block, where you can handle it as needed.
// If any errors occur during the network request or parsing the response, they are caught and handled in the catch block.
// The fetch function provides a lot of flexibility and options for making network requests. You can specify additional options, such as HTTP headers or request methods (GET, POST, etc.), by passing a second argument to the fetch function.
// fetch supports various types of responses, including JSON, plain text, and binary data. You can parse the response according to the expected data format (e.g., response.json(), response.te
// It's important to note that fetch follows the Promise-based pattern, making it compatible with Promises, async/await, and other asynchronous programming techniques in JavaScript.




