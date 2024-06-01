
// JavaScript Basic Problem Solving 

// 1. Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo " ; 


// 2. On one single line, declare three variables with the following names and values:
firstName = "John"
lastName = "Doe"
age = 35
let firstName = "John";  // write variable name
let lastName = "Doe" //write variable values 
let age = 35 ; // write variable name and values both 


// 3. Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
console.log( x = x * y ); // what will be the value of x ? 


// 4. Use comments to describe the correct data type of the following variables:

let length = 16; // number 
let lastName2 = "Johnson"; // string 

const x2 = {
  firstName: "John",  
  lastName: "Doe"
};    // object 


// 5. Execute the function named myFunction. 
 function myFunction() {
  alert("Hello World!");
}
myFunction();

// 6. 1. Create an object called person with name = John, age = 50, Then,
//   access the object to alert("John is 50").
const obg = {
    name : "John",
    age : 50
}
alert( obg.name + " is " + obg.age);


// 7. 1. The <button> element should do something when someone clicks on it. Try to fix it!
<button onclick="handleClick()">Click me.</button>
function handleClick() {    alert('Button was clicked!');}




// 8. Array Related Question 
const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length); // This will alert "3"
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand); // Output will be ["Ford", "Jeep", "Mercedes"]



// 9. Math Related Problems
let randomNumber = Math.random();
console.log(randomNumber);
let largestNumber = Math.max(10, 20);
console.log(largestNumber); // Output will be 20
let squareRoot = Math.sqrt(9);
console.log(squareRoot); // Output will be 3



//10 1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

if (x < y) {
    alert("Old enough");
}else if(x > y){
    alert("Too young");
}else('Condision no massing');




2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".






