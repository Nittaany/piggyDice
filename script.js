'use strict';
// alert("Welcome to the PIG-GAME");

const diceimg = document.querySelector(".dice");
const player0Score = document.querySelector("#score--0");
const player1Score = document.getElementById("score--1");
const rollbtn = document.querySelector(".btn--roll");
const currentscore0 = document.getElementById("current--0");
const currentscore1 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const holdbtn = document.querySelector(".btn--hold");
const ply0img = document.getElementById("ply0img");
const ply1img = document.getElementById("ply1img");


let activeplayer = 0;
let totalscore = [0,0];
let currentscore = 0;
let playing = true;

function switchplayer (){
    currentscore = 0;
    document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    document.getElementById(`current--${activeplayer}`).textContent=currentscore ;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}



const new_game = function(){
    activeplayer = 0
    totalscore = [0,0];
    currentscore = 0;
    playing = true;

    diceimg.setAttribute("hidden"," ");
    // diceimg.hidden=false;
    
    player0Score.textContent = "__";
    player1Score.innerHTML = "--";
    currentscore0.textContent = "-";
    currentscore1.innerHTML = "-";
    rollbtn.hidden=false;
    holdbtn.hidden=false;
    player0.classList.add("player--active");
    ply0img.hidden=true;
    ply1img.hidden=true;
    
}


new_game();
rollbtn.addEventListener("click", ()=>{
    if (playing){
    var randomno = Number(Math.floor((Math.random() * 6)+1));
    console.log(randomno);
    diceimg.hidden=false;
    diceimg.src=`dice-${randomno}.png`;

    if (randomno !== 1){
        currentscore += randomno;
        document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    }else{
        switchplayer();
    }
    }
})

// hold btn 



holdbtn.addEventListener("click", function (){  
    if (playing) {
        totalscore[activeplayer] += currentscore;
        document.getElementById(`score--${activeplayer}`).innerHTML=totalscore[activeplayer];


        document.getElementById(`current--${activeplayer}`).textContent=0;
        console.log(Number(document.getElementById(`score--${activeplayer}`).innerHTML)+ Number(document.getElementById(`current--${activeplayer}`).innerHTML))
        
        if( totalscore[activeplayer]>=100){
            playing = false;
            diceimg.hidden=true;
            document.querySelector(`.player--${activeplayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activeplayer}`).classList.remove("player--active")
            document.getElementById(`ply${activeplayer}img`).hidden=false;
            rollbtn.hidden=true;
            holdbtn.hidden=true;
        }else{
            switchplayer();
        }
    }
})

//new game
document.querySelector(".btn--new").addEventListener("click", ()=>{
    document.querySelector(`.player--${activeplayer}`).classList.remove("player--winner");
    
    new_game();
    
    
})

