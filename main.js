let user_input = document.querySelector("type['text']") + " "  ; 
 
function repeatAlert(){

    let repeatNum = prompt("Enter your repeated number:_  ");
    document.querySelector(".texeArea").innerHTML = user_input.repeat(repeatNum);

}