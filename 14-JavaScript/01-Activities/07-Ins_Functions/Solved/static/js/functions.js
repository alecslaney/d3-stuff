// Simple log statement
function printHello() {
  console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a, b) {
  return a + b;
}

// This function accepts a parameter and iterates through an array
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

// Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;

  return total;
}

// Run the code in the `printHello` function
printHello();

// Log results of addition function
console.log(addition(44, 50));

// Create a list and pass through the loop function
var friends = ["Sarah", "Greg", "Cindy", "Jeff"];
listLoop(friends);

// Log results of doubleAddition function
console.log(doubleAddition(3, 4));

// Javascript built in functions
var longDecimal = 112.34534454;
var roundedDecimal = Math.floor(longDecimal);
console.log(roundedDecimal);
