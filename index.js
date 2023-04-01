console.log("Welcome to tic tac toe");

let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover = false;

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxText = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText == boxText[e[1]].innerText) && (boxText[e[0]].innerText == boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerHTML = boxText[e[0]].innerText + " Won";
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    isgameover = false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0";
})
