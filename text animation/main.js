const containerEl = document.querySelector(".container")

const careers = ["a youtuber", "a web Developer","a Data-scientist","an E-commerce expert"];

let careerIndex=0;

let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++
containerEl.innerHTML = `
<h1>I am ${careers[careerIndex].slice(0,characterIndex)}</h1>`
;
  characterIndex++;

  if (characterIndex=== careers
    [careerIndex].length){
        careerIndex++
        characterIndex = 3;
    }  
    if (careerIndex === careers.length) {
        careerIndex=0;
    }
      setTimeout(updateText,200);
}