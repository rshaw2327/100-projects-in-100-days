const btnEl = document.querySelector(".btn")

const diceImgeEl = document.querySelector(".dice-image")


function rollDice() {
    const rollResult = Math.floor(Math.random() * 6 + 1);
    console.log(rollResult)
 
    const diceFace = getDiceFace(rollResult)
    diceImgeEl.innerHTML = diceFace;

}

function getDiceFace(rollResult){
    switch (rollResult) {
        case 1:
            return "&#9856;";
        
        case 2:
            return "&#9857;";
            
        case 3:
            return "&#9858;";
            
        case 4:
            return "&#9859;";

        case 5:
            return "&#x2684;";
         
        case 6:
            return"&#9861;";    
                  
    }

}


btnEl.addEventListener("click", ()=>{
    diceImgeEl.classList.add("roll-animation")
    setTimeout(()=> {
        diceImgeEl.classList.remove("roll-animation");    
    },1000); 
    
    rollDice()

   
    
});
