// InnerHTML is used to print inside an HTML element
document.getElementById("logo").innerHTML = "<i>Hello</i>";
document.getElementById("year").innerHTML = new Date().getFullYear();
// document.getElementById("logo").innerText = "<i>Hello</i>";

// console.log() is used to print in console
// console.log("Hello");
// console.error("Password wrong");
// console.warn("Spelling wrong");

// document.write() is used to write in the document
// not recommended. Try to avoid this
document.write("Hello");
// Avoid this below written line
// window.onload = () => document.write("Hi");

// alert() or window.alert() is used to print in alert box
// alert("Please enter your name");
// console.log(confirm("Are you sure?"));
// console.log(prompt("Please enter your age?"));

// Statements - One instruction
let x = 5;
let y = 8;

// Comments
// Single Line Comment
/* Multi Line
comment */

// Data Types
// 1. Number - 1, 2, 3, 0, -3, -34, 2.5, -3.2, 2e6 
// 2. String - "Richard", 'Gautam', "76", '67', "true", 'false'
// 3. Boolean -  true, false
// 4. Undefined - undefined
// 5. Null - null
// 6. Object - {firstName: "Richard", age: 32}, ["Volvo", "Toyota", "Audi"]

// VARIABLES
// Variables are containers to store data
// Variables are created using these 3 keywords
// var, let, const
let a = 5;

// var - very old, not recommended, avoid this, lots of problems
// let - new, use this instead, solves all the problems which var have

// You can recreate or redeclare a variable using var.
var m = 8;
var m = 0;
// m is declared 2 times and there is no error
// You cannot recreate or redeclare a variable using let.
let n = 9;
// let n= 8;
// n cannot be decalred more than 1 time as it is created using let

// Variables created using var do not have scopes.
var p = 2; // global scope
{
 var p = 4; // local scope
}
// p is 4 here

// Variables created using let have scopes.
let d = 2; // global scope
{
 let d = 4; // local scope
 // p is 4 here
}
// p is 2 here

// Variables created using let can be reassigned
let o = 9;
o = 10;
// Variables created using const cannot be reassigned.
const i = 23;
// i = 34;


// Operators
// 1. Arithmetic Operators
// Addition Operator +
console.log(3 + 4);
// Subtraction Operator -
console.log(3 - 4);
// Multiplication Operator *
console.log(3 * 4);
// Exponentiation Opertaor **
console.log(3 ** 4);
// Division Operator
console.log(3 / 4);
// Modulus Operator
console.log(9 % 4);
// Increment operator
let num = 23;
console.log(num);
num++; //same as num = num + 1;
console.log(num)
// Decrement Operator
num--;
console.log(num);

//assignment opereators 
let number =7; //7
console.log(number);
number =10; //10

//addition assignment operator
number+=5; // number=number+5;

// subtraction assignemnt operator
number-=3; //number= number -3; number is 12

//mutilplication assignment operator
number*=2 // number=number **2; number is 24

// exponentiation assignment operator 
number **=2 // number **2
console.log(number); // number is 576

//Division assignment operator 
number /=24 // number=number /24; // number is 24

// modulus assignment operator
number %=5 //number= number% 5, // number is 4

// 3. comparison operators
// Equal to operator (compares only value)
console.log(3==4); // false
console.log(6==6); //true
console.log(6=="5"); // false
console.log(6=="6"); //true
// strict equal to operator (compares value and type both)
console.log(6==="6"); //false
console.log(6===6); // true

// not equal to operator (not equal value)
console.log(3 !=3)// false
console.log(3!="3")// false
console.log(3 !=4) // true
console.log(3!="4")//true

//strict not equal to operator (not equal type or not equal value)
console.log(3!=="4")//true
console.log(3!=="3")//true
console.log(3!==3)//false

//Greater than
console.log(3 > 4); //false
console.log(5 > 4); // true

//less than 
console.log(3 < 4); //false
console.log(5 < 4); //false

// greater than or equal to
console.log(3 >= 4); // false
console.log(3 >=2); // true
console.log(3 >=3); // true

// less than or equal to 
console.log(3 <=4); // true
console.log(3 <=2); // false
console.log(3<=2); // true



// Concept of Objects
// Custom Object made by me
let person = {
    // Properties
    firstName: "Richard",
    lastName: "Shaw",
    category: "Human",
    heightInInches: 70,
    hairColor: "Black",
    age: 32,
    married: false,
    
    // Method
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// objectName.propertyName
// console.log(person.firstName)
// console.log(person.lastName)
// objectName.methodName()
// console.log(person.fullName())