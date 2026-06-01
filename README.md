<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="data:image/png;base64,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" type="image/x-icon">
    <style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Arial, Helvetica, sans-serif;
}

body {
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
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vmin;
    margin-bottom: 5vmin;
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
    margin-right: 5vmin;
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

.BOTbtn {
    height: 5vmin;
    width: 40vmin;
    margin-bottom: 5vmin;
    margin-left: 5vmin;
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

.BOTbtn:hover {
    scale: 1.15;
    background-color: #90c0af;
    font-weight: 35vmin;
    box-shadow: 5px 5px 10px rgb(31, 31, 31);
}
.BOTbtn:active {
    scale: 1.16;
    background-color: #78caad;
}

.msg-container {
    height: 10vmin;
    opacity: 0;
    transition: all 1s ease-in-out 0.2s;
    pointer-events: none;
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
    pointer-events: none;
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
        <button class="BOTbtn">Switch</button>
    </main>
    <script src="app.js">
        let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let botBtn = document.querySelector(".BOTbtn");


let turn0 = true;//decides the turn
let gameOver = false;//decide that game is over or not
let moveCount = 0;//counts every move
let nextFirst = false;//makes chance toggle on every play
let botTimeout = null;//set Timeout
let botMode = false;
let playerSymbol = "O";
let botSymbol = "X";


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

//toggles the bot-human 
let toggleBot = () => {
    botMode = !botMode;
    botBtn.innerText = "Human";
    botBtn.innerText = botMode ? "Bot" : "Human";
    turn0 = true;
    nextFirst = false;
    gameOver = false;
    moveCount = 0;
    updateSymbols();
    enableBoxes();
    msgContainer.classList.add("hide");
}

//genrate bot choices
let genBotChoice = () => {
    let emptyIndexes = [];
    boxes.forEach((box, i) => {
        if (box.innerText === "") {
            emptyIndexes.push(i);
        };
    });
    let randomIdx = Math.floor(Math.random() * emptyIndexes.length);
    return emptyIndexes[randomIdx];
};

//reset function only activates when the game is ongoing
let resetGame = () => {
    if(gameOver) {
        return;
    }; 
    
    turn0 = nextFirst;
    nextFirst = !nextFirst;
    gameOver = false;
    moveCount = 0;
    updateSymbols();
    enableBoxes();
    msgContainer.classList.remove("show");
    msgContainer.classList.add("hide");

    if (botMode && !turn0) {
        botTimeout = setTimeout(botMove, 350);
    };

};

//newgame function only activates when game is complete
let newGame = () => {
    if (!gameOver) {
        return;
    };

    clearTimeout(botTimeout);
    turn0 = nextFirst;
    nextFirst = !nextFirst;
    gameOver = false;
    moveCount = 0;
    updateSymbols();
    enableBoxes();
    msgContainer.classList.remove("show");
    msgContainer.classList.add("hide");

    if (botMode && !turn0) {
        botTimeout = setTimeout(botMove, 350);
    };
};

//makes X and O apper in the boxes
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (botMode && !turn0) { return; };

        if (turn0) {
            box.innerText = playerSymbol;
            // box.style.color = "green";  <-- it makes o green
            turn0 = false;
        } else {
            box.innerText = botSymbol;
            // box.style.color = "red";  <-- it makes x red
            turn0 = true;
        };

        box.disabled = true;
        moveCount++;
        checkDraw();
        checkWinner();

        if (!gameOver && botMode && !turn0) {
            botTimeout = setTimeout(() => {
                if (!gameOver) {
                botMove();
                };
            },
            350);
        };
    });
});

//updates the turn
const updateSymbols = () => {
    if (turn0) {
        playerSymbol = "O";
    } else {
        playerSymbol = "X";
    };

    if (turn0) {
        botSymbol = "X";
    } else {
        botSymbol = "O";
    };
};

//shows the bot choice
const botMove = () => {
    if (gameOver) { return; };
    let idx = genBotChoice();

    if (!turn0) {
        boxes[idx].innerText = botSymbol;
        turn0 = true;
    } else {
        boxes[idx].innerText = playerSymbol;
        turn0 = false;
    };

    boxes[idx].disabled = true;
    moveCount++;
    checkDraw();
    checkWinner();
};

//it disables the boxes
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    };
};

//enables the boxes
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

//it show the game is draw
let showDraw = () => {
    clearTimeout(botTimeout);
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
    clearTimeout(botTimeout);
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

//make the bot-human button work
botBtn.addEventListener("click", toggleBot);


//:)
    </script>
</body>   
</html>