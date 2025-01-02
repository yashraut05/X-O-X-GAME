//have to uderstand user click on which cell (make array)
const cellElements = document.querySelectorAll(".game-board .cell");
//to target on player 1 &2
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");

const result = document.querySelector(".result");
const result_text = document.querySelector(".result h1");
const result_btn = document.querySelector(".result button");

const playerO = "O";
const playerX = "X";

//to check x or oare in same line 
const WINNING_CONDITIONS =[
    [0, 1, 2] ,
    [3, 4, 5] ,
    [6, 7, 8] ,
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// to make toggle
let toggleTurn = true;

//foreach loop
//make loop on array
//cellElements one by one array will add in cell
cellElements.forEach((cell) => {
  // console.log(cell);
  //use onclick on every cell
  cell.onclick = () => {
    //using conditional operator for toggle
    let currentPlayer = toggleTurn ? playerO : playerX;
    //show cell
    //console.log(cell.innerText);
    //cell can click only one time
    cell.classList.add("disabled");
    // cell.innerHTML = currentPlayer;
    addInCell(cell, currentPlayer);
    if(winnerCheck(currentPlayer)){
        // console.log(currentPlayer + "is"+"WINNER");
        // result.classList.remove("inactive");
        addInactive();
        result_text.innerText= currentPlayer + " Is Win The Game";


    }else if(isDraw()){
        // console.log("Draw the Game!!");
        // result.classList.remove("inactive");
        addInactive();
        result_text.innerText=  "Draw The Game!!";
    }else{
    swapPlayer();
    }
  };
});

function isDraw(){
   return [...cellElements].every(cell=>{
        return cell.classList.contains(playerX)|| cell.classList.contains(playerO)
    })
}


function winnerCheck(currentPlayer){
    return WINNING_CONDITIONS.some(condition=>{
        // console.log(condition);
       return condition.every(index=>{
        // console.log(index);
        // console.log(cellElements[index].classList.contains(currentPlayer));
        //contains will check o or x is in that cell or not
        //when it get o or x will return
            return cellElements[index].classList.contains(currentPlayer);
        })
    })
}

function swapPlayer() {
  // if toggle is true so it will show false and viso versa
  toggleTurn = !toggleTurn;
  if (toggleTurn) {
    player1.classList.add("active");
    player2.classList.remove("active");
  } else {
    player2.classList.add("active");
    player1.classList.remove("active");
  }
}
function addInCell(cell, currentPlayer) {
  cell.innerHTML = currentPlayer;
  //to add color to o and x 
  //both x and o are in currentplayer class
  cell.classList.add(currentPlayer);
}

function addInactive(){
 result.classList.remove("inactive");
}

result_btn.onclick=()=>{
    location.reload();
}
