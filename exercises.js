// 30-days-of-react: Day 18: Fetch and Axios

// Exercises: Level 1

// 1. What is HTTP request?
// The communication between client and server is done by request and response.
// HTTP request is a message sent by the client to the server to initiate an action on the server to get the required data then the server response by sending the required data to the client.

// 2. What are the most common HTTP requests?
// GET, POST, PUT, DELETE are the most common HTTP requests.

// 3. What is fetch?
// In JavaScript and React.js, a fetch is a built-in method to fetch data from other sources onto our server.
// It is a browser API that allows us to make HTTP requests.

// 4. What is axios?
// Axios is a JavaScript and React's library to fetch API to make HTTP requests. It is an alternative to Fetch method as its better than fetch() as it is easy to use and it has clean API and we don't have to parses the data into JSON as it automatically does it.
// Axios is a promise-based HTTP client for the browser and Node.js. It is used to make HTTP requests from node.js or XMLHttpRequests from the browser. It supports all modern browsers and provides features like interceptors, transformers, automatic JSON parsing, client-side protection.

// 5. What is the difference between axios and fetch?
// Fetch: The Fetch API provides a simple and powerful interface for making HTTP requests. It uses the fetch() function to initiate requests and returns Promises that resolve to Response objects.
// Fetch API is natively supported in modern browsers. However, for older browsers, you may need to use a polyfill to ensure compatibility.
// Fetch is lightweight, built-in, and suitable for basic use cases

// Axios: Axios is a popular HTTP client library that provides a more traditional and feature-rich API for making HTTP requests. It exposes methods like axios.get(), axios.post(), etc., to initiate requests and returns Promises that resolve to Response-like objects and it is designed to work in all major browsers.
// axios offers a more comprehensive feature set and a convenient API for complex scenarios.

// 6. Do you prefer fetch to axios for make HTTP requests?
// Fetch is a light-weight and built-in method in JavaScript and it is useful to fetch the data easily. It has a simple API and is suitable for basic use cases where you need to make simple GET and POST requests.
// Whereas if I require some advanced features or need to support older browsers, axios might be a more convenient option for me.



// Exercise: Level 2:
// 1. Find the average metric weight and life span of cats in the following API. There are 67 breeds of cats in the API.
// refer FetchCats.jsx
