// AI기반 서비스 트랙 spring특화 A 배수진

let span=document.getElementById("span")
let up=document.getElementById('up')
let down=document.getElementById('down')
let reset=document.getElementById('reset')

up.addEventListener('click',upNum)
down.addEventListener('click',downNum)
reset.addEventListener('click',resetNum)

function upNum(){
    span.innerHTML=Number(span.innerHTML)+1
}
function downNum(){
    if(span.innerHTML>0){
    span.innerHTML=Number(span.innerHTML)-1
    }else{
    span.innerHTML=0
    }
}
function resetNum(){
    span.innerHTML=0
}        

