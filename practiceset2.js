// Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console

let delayedGreeting = () => {
    setTimeout(() => console.log(`Hello, welcome to my portfolio!`), 2000)
}

delayedGreeting();
// Hello, welcome to my portfolio!

//Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

let delayedAddition = (a, b) => {
    let sum = a + b
    setTimeout(() => console.log(sum), 4000)
}

delayedAddition(2, 3); 
// 5

//Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.
let delayedAlert = (message, delayTime) => {
    setTimeout(() => {
        alert(message);
    }, delayTime);
};

//delayedAlert('Hello, world!', 2000);
// Should display an alert box with the message, Hello, world!

//Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve(`message from server: ${msg}`);
        }
        reject(`error from server: ${msg}`);
      }, 3000);
    });
  };
  
fakeFetch("Hello from server!", true)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

// Try a failed request
fakeFetch("Oops! Something went wrong.", false)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
