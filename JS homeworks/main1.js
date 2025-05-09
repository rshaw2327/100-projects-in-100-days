// Write a JavaScript program that displays the largest integer among two integers.
function largeInterger(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num1 < num2) {
    console.log(num2);
  } else {
    console.log("equal numbers");
  }
}

largeInterger(30, 30);

// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
function determineSign(num1, num2, num3) {
  let product = num1 * num2 * num3;
  if (product < 0) {
    alert("-");
  } else {
    alert("+");
  }
}

// determineSign(5, -9, -12);

// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results

function sortNums(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      console.log(num1 + ", " + num2 + ", " + num3);
    } else {
      console.log(num1 + ", " + num3 + ", " + num2);
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      console.log(num2 + ", " + num1 + ", " + num3);
    } else {
      console.log(num2 + ", " + num3 + ", " + num1);
    }
  } else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
      console.log(num3 + ", " + num1 + ", " + num2);
    } else {
      console.log(num3 + ", " + num2 + ", " + num1);
    }
  }
}

sortNums(17, 9, 5);

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
