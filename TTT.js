/* access everything */
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winmsg = document.querySelector("#displayWinner");
let windiv = document.querySelector(".winmsg");
let newgame = document.querySelector(".newgame");
let pX=true;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("clciked");
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
    })
})
const checkWinner = () =>{
    for(pat of win){
        if(boxes[pat[0]].innerText!="" && boxes[pat[1]].innerText!="" && boxes[pat[2]].innerText!=""){
            if(boxes[pat[0]].innerText===boxes[pat[1]].innerText && boxes[pat[1]].innerText===boxes[pat[2]].innerText){
                winmsg.innerText=`Winner is ${boxes[pat[0]].innerText} !!!!!`;
                windiv.classList.remove("hide");
            }
        }
    }
};
reset.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    winmsg.innerText="";
    windiv.classList.add("hide");
    pX=true;
})
newgame.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    winmsg.innerText="";
    windiv.classList.add("hide");
    pX=true;
})