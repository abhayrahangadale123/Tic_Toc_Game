let btns = document.querySelectorAll("#btn");
let start = document.querySelector("#start")
let RestarBtn = document.querySelector("#Restart")
let msg = document.querySelector(".winner")

let trueO = true;  


const winPatttens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

function resetGame() {
    trueO = true;
    enabledBtn();
    msg.style.visibility = "hidden";

}


function disabledBtn() {
    for (let box of btns) {
        box.disabled = true;
    }
}
function enabledBtn() {
    for (let box of btns) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winners) => {
    msg.innerText = `congratulations winner is ' ${winners} '`;
    msg.style.visibility = "visible";
    disabledBtn();
}


btns.forEach((box) => {   // btn click write a 'O' and 'X'
    box.addEventListener("click", () => {
        console.log("click box")
        if (trueO) {
            box.innerText = "O";
            trueO = false;
        }
        else {
            box.innerText = "X";
            trueO = true;
        }
        box.disabled = true;
        checkWinner();

    })
});

function checkWinner() {
    for (let pattern of winPatttens) {
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                // console.log("winner", pos1Val);
                showWinner(pos1Val)

            }
        }
    }
}


start.addEventListener("click", resetGame); // start button
RestarBtn.addEventListener("click", resetGame); // Restart button







