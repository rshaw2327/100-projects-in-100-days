const cells = document.querySelectorAll(".game-board div");
const msg= document.querySelector(".msg");
const resetBtn=document.getElementById("reset")
let currentPlayer = "X";
const gameBoard=document.querySelector(".game-board")
const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML != "") return;
    // console.log(cell.getAttribute("class").slice(5));
    cell.innerHTML = currentPlayer;
    if (checkWin(currentPlayer)) {
        msg.innerHTML=`Player ${currentPlayer} wins`
    }else if(cells.every(cell=>cell.innerHTML=="")){
      ms
    }
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  });
});

function checkWin(player) {
  return winningCombinations.some((wc) =>{
    if(wc.every((index) => cells[index - 1].innerHTML == player)){
      let wcNum = wc.join("")
      console.log(wcNum)
      gameBoard.className="game-board";
      console.log(gameBoard.className)
      gameBoard.classList.add("w"+wcNum);
      console.log(gameBoard.className)

      
      
    }
    return wc.every((index) => cells[index - 1].innerHTML == player)


  }

  );
}

resetBtn.addEventListener("click",()=>{
  cells.forEach(cell =>{
    cell.innerHTML=""
    msg.innerHTML=""
  })
})

