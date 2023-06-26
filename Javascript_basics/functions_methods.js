//function declaration 

function greet(){
    console.log('Hello there');
}

//function expression 
const speak = function(){
    console.log('Good Day!');
};
speak();

// exmaples 
const greeet = () => greeet();
let resultgreeet = 'Hello!!! ';
console.log(resultgreeet);
// -------

// Define a callback function using arrow function syntax, which takes a name and a callback as parameters
const greeta = (name1, callback) => {
    // Create a message by concatenating the name with a static greeting string
    const message = "Hello, " + name1 + "!";
    // Invoke the callback function and pass the message as an argument
    callback(message);
  };
  
  // Define a callback function using arrow function syntax, which takes a message as a parameter
  const displayMessage = (message) => {
    // Log the message to the console
    console.log(message);
  };
  
  // Call the greet function with the name "John" and the displayMessage function as the callback
  greeta("John", displayMessage);
  