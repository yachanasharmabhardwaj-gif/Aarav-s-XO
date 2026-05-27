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

//reset function only activates when the game is ongoing
let resetGame = () => {
    if(gameOver) return; {
    turn0 = nextFirst;
    nextFirst = !nextFirst;
    gameOver = false;
    moveCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    };
};

//newgame function only activates when game is complete
let newGame = () => {
    if (!gameOver) return; {
    turn0 = nextFirst;
    nextFirst = !nextFirst;
    gameOver = false;
    moveCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    };
};

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
        };
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


