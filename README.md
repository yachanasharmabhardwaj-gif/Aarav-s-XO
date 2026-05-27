<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
  <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    height: 100vmin;
    background-color: #118ab2;
    text-align: center;
}

.sun {
    height: 10vmin;
    width: 10vmin;
    background-color: whitesmoke;
    box-shadow: 0px 0px 50px yellow,
    inset 0px 0px 50px gold;
    border-radius: 50%;
    border: none;
    margin-left: 25px;
    margin-top: 25px;
    transition: all 2s ease-in-out 0.2s;
}

.sun:hover {
    scale: 1.25;
    box-shadow: 0px 0px 60px yellow,
    inset 0px 0px 40px gold;
}

h1 {
    font-size: 6vmin;
    font-weight: 700;
    margin-top: 2px;
    text-decoration: underline;
    color: #013125;
}

.fa-xmark {
    color: #d10f30;
}

.fa-o {
    color: #09c75f;
}

.container {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.game {
    height: 60vmin;
    width: 60vmin;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5vmin;
}

.box {
    height: 18vmin;
    width: 18vmin;
    border-radius: 2vmin;
    background-color: #a2bdb4;
    box-shadow: 2px 2px 5px rgb(44, 44, 44);
    transition: all 0.5s ease;
    border: none;
    font-size: 8vmin;
    font-weight: lighter;
    color: #00aa80;
}

.box:hover {
    scale: 1.05;
    background-color: #90c0af;
    box-shadow: 5px 5px 10px rgb(31, 31, 31);
    font-size: 8.5vmin;
    font-weight: normal;
}

.box:active {
    scale: 1.06;
    background-color: #78caad;
}

.reset {
    height: 5vmin;
    width: 50vmin;
    margin-bottom: 5vmin;
    background-color: #a2bdb4;
    border: none;
    border-radius: 2.5vmin;
    box-shadow: 2px 2px 5px rgb(44, 44, 44);
    padding:  0 0.5% 0 0.5%;
    transition: all 0.9s ease-in-out 0.1s;
    font-size: 2.5vmin;
    font-weight: 25vmin;
    color: #00533f;
}

.reset:hover {
    scale: 1.15;
    background-color: #90c0af;
    font-weight: 35vmin;
    box-shadow: 5px 5px 10px rgb(31, 31, 31);
}

.reset:active {
    scale: 1.16;
    background-color: #78caad;
}

.new {
    height: 5vmin;
    width: 40vmin;
    margin-bottom: 5vmin;
    background-color: #a2bdb4;
    border: none;
    border-radius: 2.5vmin;
    box-shadow: 2px 2px 5px rgb(44, 44, 44);
    padding:  0 0.5% 0 0.5%;
    transition: all 0.9s ease-in-out 0.1s;
    font-size: 2.5vmin;
    font-weight: 25vmin;
    color: #00533f;
}

.new:hover {
    scale: 1.15;
    background-color: #90c0af;
    font-weight: 35vmin;
    box-shadow: 5px 5px 10px rgb(31, 31, 31);
}
.new:active {
    scale: 1.16;
    background-color: #78caad;
}

.msg-container {
    height: 10vmin;
    opacity: 0;
    transition: all 1s ease-in-out 0.2s;
}

.msg-container.show {
    opacity: 1;
}

.msg {
    color: #00533f ;
    font-size: 5vmin;
    font-weight: 700;
    margin-bottom: 10vmin;
    transition: all 1s ease-in-out;
}

.hide {
    opacity: 0 !important;
    display: none;
}
  </style>
</head>
<body>
    <span><div class="sun"></div></span>
        <main>
            <div class="msg-container">
                <p class="msg hide">Winner</p>
            </div>
            <h1><span><i class="fa-solid fa-xmark"></i> 
                    Tic Tac Toe Game
                <i class="fa-solid fa-o"></i>
            </span></h1>
            <div class="container">
                <div class="game">
                    <button class="box"></button>
                    <button class="box"></button>
                    <button class="box"></button>
                    <button class="box"></button>
                    <button class="box"></button>
                    <button class="box"></button>
                    <button class="box"></button>
                    <button class="box"></button>
                    <button class="box"></button>
                </div>
            </div>
        <button class="reset">Reset Game</button> <br>
            <button class="new">New Game</button>
    </main>
    <script src="app.js">
      let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");


let turn0 = true;//decides the turn
let gameOver = false;//decide that game is over or not
let moveCount = 0;//counts every move
let nextFirst = false;//makes chance toggle on every play

//every winning pattern
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//reset function
let resetGame = () => {
    turn0 = nextFirst;
    nextFirst = !nextFirst;
    gameOver = false;
    moveCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//newgame function
let newGame = () => {
    if (!gameOver) return; {
        resetGame();
    }
}

//makes X and O apper in the boxes
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn0) {
            box.innerText = "O";
            // box.style.color = "green";  <-- it makes o green
            turn0 = false;
        } else {
            box.innerText = "X";
            // box.style.color = "red";  <-- it makes x red
            turn0 = true;
        }
        box.disabled = true;
        moveCount++;
        checkDraw();
        checkWinner();
    });
});

//it disables the boxes
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

//enables the boxes
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

//it show the game is draw
let showDraw = () => {
   msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    msg.classList.remove("hide");
    setTimeout(() => {
        msgContainer.classList.add("show");
    }, 10);
    
    disableBoxes();
    gameOver = true; 
};

//it shows the winner
let showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    msg.classList.remove("hide");
    setTimeout(() => {
        msgContainer.classList.add("show");
    }, 10);
    
    disableBoxes();
    gameOver = true;
};

//it checks draw
const checkDraw = () => {
    if (moveCount === 9 && !gameOver) {
        showDraw();
    };
};

//it check the winner
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            };
        };
    };
};

//make the newgame button work
newGameBtn.addEventListener("click", newGame);

//make the resetgame button work
resetBtn.addEventListener("click", resetGame);

    </script>
</body>   
</html>
