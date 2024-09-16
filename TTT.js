/* access everything */
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winmsg = document.querySelector("#displayWinner");
let windiv = document.querySelector(".winmsg");
let newgame = document.querySelectorAll(".newgame");
let drawbox = document.querySelector(".drawbox");
let drawmsg = document.querySelector("#displayDraw");
let pX=true;
let count = 0;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(pX){
            box.innerText="X";
            pX=false;
        }
        else{
            box.innerText="O";
            pX=true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        console.log(count);
        if(count==9){
            areAllBoxesChecked(boxes);
            count = 0;
        }
    })
})
function areAllBoxesChecked(boxes){
    let flag = true;
    for(box of boxes){
        if(box.innerText===""){
            flag = false;
        }
    }
    console.log(flag);
    if(!isWinnerFound && flag){
        console.log("draw");
        drawbox.classList.remove("hide");
        drawmsg.innerText="THIS IS A DRAW!";
        flag = false;
    }
}
let isWinnerFound=false;
const checkWinner = () =>{
    for(pat of win){
        if(boxes[pat[0]].innerText!="" && boxes[pat[1]].innerText!="" && boxes[pat[2]].innerText!=""){
            if(boxes[pat[0]].innerText===boxes[pat[1]].innerText && boxes[pat[1]].innerText===boxes[pat[2]].innerText){
                declareWinner(boxes[pat[0]].innerText);
            }
        }
    }
};
function declareWinner(winner){
    console.log("win");
    winmsg.innerText=`Winner is ${winner} !!!!!`;
                windiv.classList.remove("hide");
                isWinnerFound=true;
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

reset.addEventListener("click",function(){
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    winmsg.innerText="";
    windiv.classList.add("hide");
    drawmsg.innerText="";
    drawbox.classList.add("hide");
    isWinnerFound=false;
    pX=true;
    count=0;
})
newgame[0].addEventListener("click",function(){
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    winmsg.innerText="";
    windiv.classList.add("hide");
    drawmsg.innerText="";
    drawbox.classList.add("hide");
    isWinnerFound=false;
    pX=true;
    count=0;
})
newgame[1].addEventListener("click",function(){
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    winmsg.innerText="";
    windiv.classList.add("hide");
    drawmsg.innerText="";
    drawbox.classList.add("hide");
    isWinnerFound=false;
    pX=true;
    count=0;
})
