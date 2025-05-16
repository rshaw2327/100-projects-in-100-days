const result = document.querySelector(".characters");
const btnEl = document.querySelector(".btn");
const spanEL = document.querySelector("span");
const copyBtn = document.querySelector(".copy-btn");

const charactersLength = document.querySelector(".length-characters");
const upper = document.querySelector(".uppercase");
const lower = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const characters = document.querySelector(".symbols");

const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
const numbersStr = "0123456789";
const charactersStr = '!"£$%^&*';

btnEl.addEventListener("click", () => {
  let str = "";

  if (upper.checked) str += uppercaseStr;
  if (lower.checked) str += lowercaseStr;
  if (numbers.checked) str += numbersStr;
  if (characters.checked) str += charactersStr;

  const length = parseInt(charactersLength.value, 10);

  if (str.length === 0 || isNaN(length) || length <= 0) {
    result.innerText = "Please select at least one option and a valid length.";
    return;
  }

  const password = generatePassword(str, length);
  result.innerHTML=password;
  spanEL.innerText = password;
});

function generatePassword(charSet, length) {
  let pass = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charSet.length);
    pass += charSet[index];
  }
  return pass;
}

copyBtn.addEventListener("click", () => {
  if (result.value.trim() === "") {
    alert("Nothing to copy!");
    return;
  }

 result.select()
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});


// const result = document.querySelector(".characters");
// const charactersLength = document.querySelector(".length-characters");
// const length = charactersLength.value;
// const btnEl = document.querySelector(".btn");
// const spanEL = document.querySelector("span");

// const upper = document.querySelector(".uppercase");
// const lower = document.querySelector(".lowercase");
// const numbers = document.querySelector(".numbers");
// const characters = document.querySelector(".symbols");

// const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
// const numbersStr = "0123456789";
// const charactersStr = '!"£$%^&*';
// // const str =
// //   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"£$%^&*';

// btnEl.addEventListener("click", () => {
//   let str = "";
//   if (upper.checked) {
//     str += uppercaseStr;
//   } if (lower.checked) {
//     str += lowercaseStr;
//   } if (numbers.checked) {
//     str += numbersStr;
//   } if (characters.checked) {
//     str += charactersStr;
//   }
//     const length = parseInt(charactersLength.value, 10);

//     if (str.length === 0 || isNaN(length) || length <= 0) {
//       result.innerText = "Please select at least one option and a valid length.";
//       return;
//     }
//     const password = getPass(str,length);
//     result.innerText = password;
//     spanEL.innerText = `Length: ${length}`;

// });

//   function getPass(charSet,length){
//     let pass=''
//     for(let i =0; i <length;i++){
//       const index=Math.floor(Math.random()* charSet.length)
//       pass+= charSet[index];
//     }
//     return pass
 
//   }




// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"£$%^&*';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;

// }

// console.log(makeid(3));
