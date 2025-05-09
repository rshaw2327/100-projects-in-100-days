// // // // 1. What can javascript do?
// // // //    a. can modify elements
// // // //    b. can create new elements

// // // // 2. Where can we write javascript?

// // // // 3. Output
// // // // console.log("Hi!");
// // // // alert("How are you?");
// // // document.write("Hello!");
// // // document.querySelector("h1").innerHTML += " Gautam";

// // // // 4. Methods for Selection of Elements
// // // // a. Individual Selection
// // // // i. document.querySelector() - is enough
// // // // ii. document.getElementById()

// // // let sectionEl = document.querySelector("section");
// // // console.log(sectionEl);
// // // sectionEl = document.getElementById("para");
// // // console.log(sectionEl);
// // // sectionEl = document.querySelector("section:last-child");
// // // console.log(sectionEl);

// // // let el = document.querySelector("input[name='fname']")
// // // console.log(el);
// // // let lnameEl = document.querySelector("input[name='lname']")
// // // console.log(lnameEl);

// // // // b. Multiple Selection
// // // // i. document.querySelectorAll("h1") - is enough
// // // // ii. document.getElementsByClassName()
// // // // iii. document.getElementsByName();
// // // // iv. document.getElementsByTagName();
// // // // v. document.getElementsByTagNameNS();

// // // let els = document.querySelectorAll("section");
// // // console.log(els[2]);
// // // els = els[2].querySelector(".para");
// // // console.log(els);
// // // els = document.getElementsByClassName("para");
// // // console.log(els);

// // // Data & Data Types
// // // String - "Gautam", 'Richard', "4", "-43", "true", 'false', "", '', " "
// // // Number - 1, 2, 3, -43, 0, 0.5
// // // Boolean - true, false
// // // undefined - undefined
// // // Object - [], [1, 2, 3], {}, {name: "Gautam"}

// // // Variables
// // // let, const, var
// // let carname;
// // carname = "Audi";
// // carname = "Merecedes";
// // let carname2 = "audi";

// // const pi = 3.14;
// // // pi = 2;

// // // Operators - Special symbols used to perform special operations.

// // // Types of Operators

// // // Arithmetic Operators
// // // Addition
// // console.log(2 + 2);
// // // Subtraction
// // console.log(2 - 2);
// // // Multiplication
// // console.log(2 * 3);
// // // Division - gives quotient
// // console.log(12 / 5);
// // // Modulus - gives remainder
// // console.log(12 % 5);
// // // Exponentiation - gives exponetiated value
// // console.log(3 ** 6);
// // // Increment Operator
// // let a = 5;
// // console.log(a);
// // // Postfix increment operator
// // a++;
// // console.log(a);
// // // Prefix increment operator
// // ++a;

// // // Decrement Operator
// // // Postfix decrement operator
// // a--;
// // console.log(a);
// // // prefix decrement operator
// // --a;

// // // Assignment Operators
// // // Normal assignment operator
// // let num1 = 6;
// // console.log(num1);
// // // Addition assignment operator
// // num1 += 4; // num1 = num1 + 4;
// // console.log(num1);
// // // Subtraction Assignment operator
// // num1 -= 4; // num1 = num1 - 4;
// // console.log(num1);
// // // Multiplication Assignment operator
// // num1 *= 4; // num1 = num1 * 4;
// // console.log(num1);
// // // Division Assignment operator
// // num1 /= 4; // num1 = num1 / 4;
// // console.log(num1);
// // // Modulus Assignment operator
// // num1 %= 4; // num1 = num1 % 4;
// // console.log(num1);
// // // Exponentiation Assignment operator
// // num1 **= 4; // num1 = num1 ** 4;
// // console.log(num1);

// // // Comparison Operators
// // Equal to Operator (==)
// console.log(2 == 3)
// console.log(3 == 3)
// console.log(3 == "3")
// console.log(4 == "3")

// // Not equal to (!=)
// console.log(2 != 3)
// console.log(3 != 3)

// // Strict equal to (===)
// console.log(3 === 3)
// console.log("3" === "3")

// // Strict not equal to (!==)
// console.log("3" !== "3")
// console.log(3 !== "3")
// console.log("3" !== "4")

// // Less than
// console.log(2 < 3)

// // Greater than
// console.log(2 > 3)

// // Less than or equal to
// console.log(2 <= 3)
// console.log(3 <= 3)
// console.log(4 <= 3)

// // Greater than or equal to
// console.log(2 >= 3)
// console.log(3 >= 3)
// console.log(4 >= 3)

// // Logical Operators
// // Logical AND operator (&&)
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(true && true);

// console.log(3 && -1);
// console.log(0 && 1);
// console.log(0 && 0);
// console.log(1 && 1);

// // Logical OR Operator (||)
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(true || true);

// console.log(3 || -1);
// console.log(0 || 1);
// console.log(0 || 0);
// console.log("a" || 2);

// let user = "Gautam";

// console.log(user || "Not logged in")

// // Logical not (!)
// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!"");

// // Functions
// function makeTea() {
//     console.log("Boil Water");
//     console.log("Put milk, chaipatti, chini");
//     console.log("Heat for 5 minutes");
//     console.log("Ready to Drink");
// }
// makeTea();
// makeTea();

// function add(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
// }
// add(3, 5);
// add(329, 2506);

// // function

// // let x=5
//     // y=10
//     // multiply(x,y)
//     // console.log(multiply)

// function multiply(x, y) {
//     let product = x * y;
//     return product
// }

// multiply(5, 10);
// console.log(multiply(5,10))

// console.log(5+10)

// function area_of_rectangle(length, breadth) {
//     let area = length * breadth;
//     return area;
// }

// let area = area_of_rectangle(20, 5);
// console.log(area)

// function area_of_circle(radius) {
//    let x= 3.14 * radius**2
//     return x;

// }

// let area_circ = area_of_circle(55)
// console.log(area_circ)

// function inr_to_dollars(rupees) {
//     let dollars=0.012*rupees
//     return dollars;
// }

// let currency = inr_to_dollars(500)
// console.log(currency)

// function dollars_to_inr(dollars) {
//     let inr=83.80*dollars
//     return inr;
// }

// let inr = dollars_to_inr(600)
// console.log(inr)

// function voting_eligibility(age) {
//     if (age>18) {
//         return "you can vote"
//     }
//     else {
//         return "you cannont vote"
//     }
// }

// let voting =voting_eligibility(20)
// console.log(voting)

// function currentTemp(temp) {
//     let currentTemp = temp;
//     console.log(currentTemp);
// }

// currentTemp(12);
// currentTemp(7);

// const laptop = {
//     ram: "8GB",
//     processor:"1.2ghz",
//     screen: "15.5 inches",
//     company: "Dell",

//     start: function() {
//         console.log("started")
//     }

// }

// laptop.start();

// console.log(laptop.screen)

// const restaurant = {
//     kitchen: "chefs",
//     sitting_area: "tables",
//     staff : "waiting staff",
// }

// console.log(restaurant.kitchen)

// // create profile

// let profileEl = {
//     name:"Richard",
//     age: "32",
//     city:"london",
//     favourite_colour:"Violet"
// }

// console.log(profileEl)

// // even or odd

//  for (let x = 0; x <= 15; ); {
//   if (x % 2 === 0) {
//     console.log("this is a even number");
//  }  else{
//   console.log("this is a odd number");

//  }
// }

// // voting

// function voting_eligibility(age) {
//     if (age<18) {
//     return "you cannot vote"
//     }
//     else {
//     return "you can vote"
//     }
// }

// let voteing = voting_eligibility(40)
// console.log(voteing)

// //if else
// let day = "friday";
// if(day =='monday') {
//   console.log(day);
// } else if (day =='Tuesday') {
//     console.log(day);
// } else if (day == 'Wednesday') {
//     console.log(day);
// }  else if (day == 'thursday') {
//     console.log(day);
// } else if (day == 'Friday') {
//     console.log(day);
// } else if (day == 'Saturday') {
//     console.log(day);
// } else if (day == 'sunday') {
//     console.log(day);
// } else {
//     console.log("day not valid")
// }

// 1. Conditionals (if-else, switch)

// Write a program that takes an integer input and checks if it is positive, negative, or zero.
function checkInt(x) {
  if (x > 0) {
    console.log("its a postive number");
  } else if (x < 0) {
    console.log("it is a negative number");
  } else {
    console.log("it is zero");
  }
}

checkInt(9);

// Create a program to determine whether a given year is a leap year.

function leapYear(y) {
  if (y % 4 == 0) {
    console.log("it is leap year");
  } else {
    console.log("it is not a leap year");
  }
}

leapYear(2000);

// Write a function that checks if a person is eligible to vote based on their age (>= 18).

function checkEligiblity(age) {
  if (age >= 18) {
    console.log("person eligible to vote");
  } else {
    console.log("person not eligible to vote");
  }
}
checkEligiblity(16);

// Create a switch statement that prints the day of the week based on a number (1 for Monday, 2 for Tuesday, etc.).

let day = 6;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log(invalid);
}

//  Loops (for, while, do-while)
//
// Write a program that prints numbers from 1 to 50.

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// Create a loop that prints all even numbers between 1 and 100.

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Write a program to calculate the factorial of a given number using a for loop.

function factorial(num) {
  for (let x = num - 1; x >= 1; x--) {
    num *= x;
  }
  return num;
}
console.log(factorial(5));

// Use a while loop to reverse a given number.
function reverseNum(num) {
  let revnum = "";
  while (num != 0) {
    let m = num % 10;
    revnum = revnum + m;
    num = parseInt(num / 10);
  }
  return revnum;
}
console.log(reverseNum(78984));

// 3. Functions

// Write a function that takes two numbers as parameters and returns their sum.
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(9, 88));

// Create a function to check whether a given string is a palindrome.
function isPalindrome(input) {
  let reverseInput = input.toString().split("").reverse().join("");
  if (input.toString().toLowerCase() == reverseInput.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madAm"));

// Write a function that finds the largest number in an array.

function largestNum(nums) {
  let max = nums[0];
  for (let x = 1; x <= nums.length - 1; x++) {
    if (max < nums[x]) {
      max = nums[x];
    }
  }
  return max;
}
console.log(largestNum([8, 22, 2, 11, 2, 4, 6, 8]));

function largestNum2(nums) {
  let sortedArray = nums.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray);
  return sortedArray[sortedArray.length - 1];
}
console.log(largestNum2([12, 18, 23, 1, 2, 3, 6, 8]));

// Create a recursive function to calculate the nth Fibonacci number.

// function fibonacci(n) {
//   let prev = 0;
//   let curr = 1;

//   for( let x = 1; x <= n - 2; x++ ) {
//     let temp = curr;
//     curr = prev + curr;
//     prev = temp;
//   }
//   return curr;
// }

// console.log(fibonacci(8))

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377.

// function fibonacci(n) {
//   n = n - 1;
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6))
