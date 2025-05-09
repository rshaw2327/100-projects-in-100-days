// Basic Syntax and Data Types:

// Variable Declaration:
// Declare variables for your name, age, and favorite color.
// Print these values to the console.
// let name = "Richard",
//   age = 32,
//   favouriteColour = "Violet";
// console.log(name, age, favouriteColour);

// Data Types:
// Create variables of different data types (number, string, boolean, array, object) and print their types using typeof.
// let num = 12;
// let str = "Richard";
// let eligible = true;
// let array = [1, 3, 5, 45, 4, 4];
// let person = {
//   name: "Richard",
//   age: "32",
//   city: "London",
//   favourite_colour: "Violet",
// };

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof eligible);
// console.log(typeof array);
// console.log(typeof person);

// Control Flow
// Conditional Statements:

// Write a program that checks if a number is even or odd.

// function oddOrEven(num) {
//   if (num % 2 === 0) {
//     return num + " is an even number";
//   } else {
//     return num + " is an odd number";
//   }
// }
// console.log(oddOrEven(45));

// let result = oddOrEven(54);
// console.log(result);

// Write a program that determines if a person is eligible to vote based on their age.

// function voting_eligibility(age) {
//   if (age < 18) {
//     return "you cannot vote";
//   } else {
//     return "you can vote";
//   }
// }

// console.log(voting_eligibility(16));

// let voting = voting_eligibility(40);
// console.log(voting);

// Loops:
// Write a program to print the numbers from 1 to 10.
// let numbers = "";
// for (let x = 1; x <= 10; x++) {
//   numbers += x + " ";
// }
// console.log(numbers);

// // Write a program to calculate the factorial of a given number.
// function factorial(num) {
//   let f = 1;
//   for (let i = num; i >= 1; i--) {
//     f = f * i;
//   }
//   return f;
// }
// console.log(factorial(4));

// function factorial2(num) {
//   let fact = num;
//   if (num != 1) {
//     fact = num * factorial2(num - 1);
//   } else {
//     return fact;
//   }
// }

// console.log(factorial2(6))

// Write a function that takes two numbers as input and returns their sum.

// function Addition(Num1, Num2) {
//   return Num1 + Num2;
// }

// console.log(Addition(65, 45));

// Write a function that takes a string as input and returns its length.

// function lengthOfStr(text) {
//   return text.length
// }
// console.log(lengthOfStr("hello World"));

// Arrays and Objects
// Array Manipulation:

// Create an array of fruits and print the first and last elements.
// Add a new fruit to the array and print the updated array.

// let fruits = ["bannana", "orange", "mango", "watermelon", "pears", "custard apple"];
// console.log(fruits[0], fruits[fruits.length - 1]);

// let fruit = "guava";

// let Fruits = fruits.push(fruit);
// console.log(fruits);

// Object Creation:

// Create an object representing a person with properties like name, age, and city.
// Access and print the person's name.

// let person1 = {
//   name: "Richard",
//   age: "32",
//   city: "London",
//   favourite_colour: "Violet",
// };

// console.log(person1.name);

// DOM Manipulation
// Element Selection:
// Select an element from your HTML document and change its text content.
// Change the background color of an element.

// let hardEl = document.querySelector(".hard");
// hardEl.innerText = "Very Hard";

// const btnEl = document.querySelector(".btn")

//  btnEl.style.backgroundColor = "pink";

// Events
// Event Listeners:
// Add a click event listener to a button and display an alert when the button is clicked.

// btnEl("click", () => {
//   console.log("clicked");
// });

// Write a JavaScript program that displays the largest integer among two integers.

// Question 1: Extracting Property Names (Object.keys())

// Scenario: You have an object representing a student with their name and age. You need to get a list of all the property names (keys) in the object.
// Object:
// JavaScript

// const student = {
//   name: "Alice",
//   age: 20,
//   grade: "A",
// };

// let student_value = Object.values(student);
// console.log(student_value);

// let student_keys = Object.keys(student);
// console.log(student_keys);

// Question 2: Summing Object Values (Object.values())

// Scenario: You have an object representing the quantities of different fruits in a basket. You need to calculate the total number of fruits.
// Object:JavaScript

// Task: Write a function getTotalFruits(obj) that takes an object as input and returns the sum of all its values.
// Example Output: getTotalFruits(fruitBasket) should return 15.

// function getTotalFruits(obj) {
//   let obj_values = Object.values(obj);
//   let sum = 0;
//   for (let i = 0; i < obj_values.length; i++) {
//     sum = sum + obj_values[i];
//   }
//   return sum
// }
// const fruitBasket = {
//   apples: 5,
//   bananas: 3,
//   oranges: 7,
// };

// console.log(getTotalFruits(fruitBasket))

// Question 3: Formatting Key-Value Pairs (Object.entries())

// Scenario: You have an object representing items and their prices. You need to create an array of strings where each string represents a key-value pair in the format "key: value".
// Object:
// JavaScript

// Task: Write a function formatKeyValuePairs(obj) that takes an object as input and returns an array of strings, where each string is in the format "key: value".
// Example Output: formatKeyValuePairs(itemPrices) should return ["pen: 2", "book: 10", "notebook: 5"].

// function formatKeyValuePairs(obj) {
//   let entries = Object.entries(itemPrices);
//   console.log(entries);
//   let array = [];
//   for (let i = 0; i < entries.length; i++) {
//     array.push(entries[i].join(": "));
//   }
//   return array;
// }

// const itemPrices = {
//   pen: 2,
//   book: 10,
//   notebook: 5,
// };
// console.log(formatKeyValuePairs(itemPrices));

// 1. Browser History (Push & Pop)

// Scenario: Imagine you're building a simplified browser history feature.
// Question:
// You have an array called browserHistory to track visited URLs.
// When a user navigates to a new page, use push() to add the URL to the browserHistory.
// When the user clicks the "Back" button, use pop() to remove the most recent URL from the browserHistory and then display the previously visited page (which is now the last element in the array).
// // Implement a function that when called, will push "google.com", "youtube.com", and "github.com" into the history. Then another function will simulate the back button being pressed twice, and log the remaining browser history.

// function push() {
//   let newPage = ["google.com", "youtube.com", "github.com"];
//   let browserHistory = [];

//   for (let i = 0; i < newPage.length; i++) {
//     browserHistory.push(newPage[i]);
//   }
//   console.log(browserHistory);
//   function pop() {
//     let backButton = browserHistory.pop();
//     console.log(backButton);

//   }
//   pop()
// }
// push();

// 2. Building a To-Do List (Push & Pop)
// Scenario: You're creating a simple to-do list application.
// Question:
// Use an array called todoList to store tasks.
// When a user adds a new task, use push() to append it to the todoList.
// When a user completes a task (assuming they complete the most recently added task), use pop() to remove it from the todoList.
// Create a function that will add "Buy Groceries", "Walk the dog", and "Do Laundry" to the todo list. Then create a function that will simulate completing the last two tasks, and then log the remaining todo list.

// function push() {
//   let tasks = ["Buy Groceries", "Walk the dog", "Do Laundry"];
//   let todoList = [];

//   for (let i = 0; i < tasks.length; i++) {
//     todoList.push(tasks[i]);
//   }
//   console.log(todoList);

//   function pop() {
//     let completedTask = todoList.pop();
//     console.log(completedTask)
//     console.log(todoList)
//   }
//   pop()
// }

// push();

// 3. Generating a Comma-Separated List (Join)

// Scenario: You're retrieving a list of user tags from a database and want to display them as a comma-separated string on a web page.
// Question:
// You have an array called userTags containing strings like ["programming", "javascript", "webdev", "frontend"].
// Use the join() method to convert the userTags array into a single string where each tag is separated by a comma and a space (", ").
// Log the resulting comma-separated string to the console.

// let userTags = ["programming", "javascript", "webdev", "frontend"]

// let string_tags=userTags.join(", ")

// console.log(string_tags)

// 4. Creating a formatted file path (join)

// Scenario: You need to create a file path from an array of directory names.
// Question:
// You have an array of directory names, directoryParts = ["home", "user", "documents", "reports"].
// Use the join() method to create a file path string, where the directory names are separated by forward slashes ("/").
// Log the resulting file path string to the console.

// const directoryParts = ["home", "user", "documents", "reports"]
// const filePath = directoryParts.join("/")

// console.log(filePath)

// 5. Building a sentence from words (join)

// Scenario: You have an array of words and you want to build a sentence from them.
// Question:
// You have an array of words, words = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"].
// Use the join() method to create a sentence string, where the words are separated by spaces.
// Log the resulting sentence string to the console.
// These examples illustrate how push, pop, and join are used in common programming tasks, making them essential tools for any JavaScript developer.

// let words=["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// let sentenceString=words.join(" ")

// console.log(sentenceString)

// Combining and Modifying Product Catalogs

// Scenario: You're managing product catalogs from different suppliers.
// Question:
// You have two arrays: catalog1 = ["laptop", "mouse"] and catalog2 = ["keyboard", "monitor"].
// Use concat() to combine these catalogs into a single fullCatalog array.
// Use splice() to insert "webcam" at index 2 of fullCatalog.
// Use shift() to remove the first item from fullCatalog and store it in a variable called removedItem.
// Log fullCatalog and removedItem to the console.

let catalog1 = ["laptop", "mouse"];

let catalog2 = ["keyboard", "monitor"];

let fullCatalog = catalog1.concat(catalog2);

console.log(fullCatalog);

fullCatalog.splice(2, 0, "webcam");
console.log(fullCatalog);

let removedItem = fullCatalog.shift();
console.log(removedItem);

console.log(fullCatalog);

// 2. Managing a Task Queue with Priorities

// Scenario: You're building a task queue where new high-priority tasks are added to the beginning.
// Question:
// You have an array taskQueue = ["task1", "task2"].
// Use unshift() to add "highPriorityTask" to the beginning of the taskQueue.
// Use shift() to remove the next task to be processed and log it to the console.
// Log the remaining taskQueue to the console.

let taskQueue = ["task1", "task2"];

taskQueue.unshift("highPriorityTask");
console.log(taskQueue);
console.log(taskQueue.shift());
console.log(taskQueue);

// 3. Flattening and Rearranging Multidimensional Data

// Scenario: You receive data from an API that has nested arrays, and you need to flatten and rearrange it.
// Question:
// You have a nested array data = [1, 2, [3, 4, [5, 6]]].
// Use flat(2) to flatten the data array up to two levels.
// Use copyWithin(0,3,6) to copy the last three elements to the first three elements.
// Log the modified data array to the console.

let data = [1, 2, [3, 4, [5, 6]]];
// console.log(data[2][2][0])

let flatData = data.flat(2);
console.log(flatData);
let dataCopy = flatData.copyWithin(0, 3, 6);
console.log(dataCopy);

// 4. Deleting and Splicing User Profiles

// Scenario: You're managing user profiles and need to handle deletions and updates.
// Question:
// You have an array userProfiles = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }].
// Use delete userProfiles[1] to "delete" the user profile at index 1.
// Use splice(2,1,{id:4, name: "David"}) to replace the third element in the array with a new user profile.
// Log the userProfiles array to the console.
// Explain the difference between using delete and splice to remove an element from an array.

let userProfiles = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

delete userProfiles[1];
// console.log(userProfiles)
let updatedUserprofile = userProfiles.splice(2, 1, { id: 4, name: "David" });
console.log(updatedUserprofile);
console.log(userProfiles);

// 5. Combining Arrays and Modifying in Place

// Scenario: You have two arrays of numbers and want to combine them and then modify a section of the combined array.
// Question:
// You have two arrays array1 = [1, 2, 3] and array2 = [4, 5, 6].
// Use concat() to combine array1 and array2 into a new array called combinedArray.
// Use splice(2, 2, 7, 8) to remove two elements from combinedArray starting at index 2 and insert the numbers 7 and 8 in their place.
// Log the combinedArray to the console.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);

console.log(combinedArray);

combinedArray.splice(2, 2, 7, 8);
console.log(combinedArray);

// 1. indexOf()

// Question 1:
// You have a list of tasks: let tasks = ["Check emails", "Write report", "Meeting with team", "Check emails"];. Find the index of the first occurrence of "Meeting with team".

let tasks = [
  "Check emails",
  "Write report",
  "Meeting with team",
  "Check emails",
];
console.log(tasks.indexOf("Meeting with team"));

// Question 2:
// A store's inventory is represented by let productIDs = ["P123", "P456", "P789", "P001"];. Find the index of product ID "P789".
let productIDs = ["P123", "P456", "P789", "P001"];
console.log(productIDs.indexOf("P789"));

// Question 3:
// A user inputed a list of tags for a blog post: let tags = ['javascript','react','html'];. If the system searches for 'css', what will indexOf return?
let tags = ["javascript", "react", "html"];
console.log(productIDs.indexOf("CSS"));

// 2. lastIndexOf()

// Question 1:
// In a log file, events are recorded: let events = ["login", "logout", "login", "purchase"];. Find the last index of a "login" event.
let events = ["login", "logout", "login", "purchase"];
console.log(events.lastIndexOf("login"));

// Question 2:
// A playlist has repeated songs: let playlist = ["songA", "songB", "songA", "songC"];. Find the last index of "songA".
let playlist = ["songA", "songB", "songA", "songC"];
console.log(playlist.lastIndexOf("songA"));

// Question 3:
// A list of file extensions are recorded: let fileExtensions = ['.txt','.pdf','.jpg']; what will lastIndexOf return if searching for '.mp3'?
let fileExtensions = [".txt", ".pdf", ".jpg"];
console.log(fileExtensions.lastIndexOf(".mp3"));

// 3. find()

// Question 1:
// You have a list of user objects: let users = [{ name: "Alice", age: 28 }, { name: "Bob", age: 32 }, { name: "Charlie", age: 25 }];. Find the first user object where the age is less than 30.
let users = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 25 },
];
let youngUser = users.find(findUser);

function findUser(user) {
  return user.age < 30;
}

console.log(youngUser);
// Question 2:
// An e-commerce site has a list of products: let products = [{ id: "1", price: 50 }, { id: "2", price: 75 }, { id: "3", price: 30 }];. Find the first product with a price less than 40.

let products = [
  { id: "1", price: 50 },
  { id: "2", price: 75 },
  { id: "3", price: 30 },
];
let product = products.find(firstProduct);
function firstProduct(product) {
  return product.price < 40;
}

console.log(product);

// Question 3:
// A list of website URLs are stored in an array: let urls = ['www.google.com', 'about.me', 'myblog.com']; Find the first url that contains the substring 'blog'.
// let urls = ["www.google.com", "about.me", "myblog.com"];
// let substring = "blog";
// let website = urls.find(findBlog);

// function findBlog(url) {
//  return url.includes(substring);

// }
// console.log(website)

// 4. findIndex()

// Question 1:
// Given the same users array from the find() example, find the index of the first user with an age less than 30.
users = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 25 },
];

console.log(users.findIndex(Indexage));

function Indexage(age) {
  return age < 30;
}

// Question 2:
// Given the same products array, find the index of the first product with a price less than 40.
products = [
  { id: "1", price: 50 },
  { id: "2", price: 75 },
  { id: "3", price: 30 },
];

console.log(products.findIndex(findprice));
function findprice(price) {
  return price < 40;
}

// Question 3:
// Given the same urls array, find the index of the first url that contains the substring 'blog'.
// 5. findLastIndex()
let urls = ["www.google.com", "about.me", "myblog.com"];
let sub = "blog";
console.log(urls.findLastIndex(string));

function string(url) {
  return url.includes(sub);
}

// Question 1:
// In a series of stock prices, let stockPrices = [100, 105, 98, 110, 102];, find the last index where the price was above 100.
let stockPrices = [100, 105, 98, 110, 90];

console.log(stockPrices.findLastIndex(priceAbove))

function priceAbove(price){
    return price > 100;
}
// Question 2:
// Given an array of order objects: let orders = [{id:1, status:'pending'}, {id:2, status:'shipped'}, {id:3, status:'pending'}, {id:4, status:'delivered'}]; find the last index of an order that has a pending status.
let orders = [{id:1, status:'pending'}, {id:2, status:'shipped'}, {id:3, status:'pending'}, {id:4, status:'delivered'}]
console.log(orders.findLastIndex(pendingOrder));

function pendingOrder(order){
    return order.status == "pending"

}

// Question 3:
// Given an array of file paths: let files = ['/home/user/document.txt', '/var/log/server.log', '/home/user/image.jpg', '/tmp/temp.txt']; find the last index of a file that is a text file.

let files = ['/home/user/document.txt', '/var/log/server.log', '/home/user/image.jpg', '/tmp/temp.txt'];

console.log(files.findLastIndex(findTxt))

function findTxt(file){
    return file.includes("txt")

}


// 6. sort() 0

// Question 1:
// Sort a list of user scores in ascending order: let scores = [85, 92, 78, 95];.
let scores = [85, 92, 78, 95];
console.log(scores.sort());
// Question 2:
// Sort a list of city names alphabetically: let cities = ["Tokyo", "London", "Paris", "New York"];.
let cities = ["Tokyo", "London", "Paris", "New York"];
console.log(cities.sort());
// Question 3:
// Sort a list of product objects by price in descending order: let products = [{name: 'Laptop', price: 1200}, {name: 'Phone', price: 800}, {name: 'Tablet', price: 500}];
let productes = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 },
];
console.log(productes.sort());

// 7. reverse()

// Question 1:
// Reverse the order of a queue of tasks: let taskQueue = ["Task A", "Task B", "Task C"];.
let taskQueuee = ["Task A", "Task B", "Task C"];
console.log(taskQueuee.reverse());

// Question 2:
// Reverse the order of a chat message history: let chatHistory = ["Hello", "How are you?", "I'm good."];.
let chatHistory = ["Hello", "How are you?", "I'm good."];
console.log(chatHistory.reverse());
// Question 3:
// Reverse the order of a list of steps in a recipe: let recipeSteps = ['Mix ingredients', 'Bake', 'Cool', 'Serve'];
let recipeSteps = ["Mix ingredients", "Bake", "Cool", "Serve"];
console.log(recipeSteps.reverse());
