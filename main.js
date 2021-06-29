  function repeatAlert(){
    
    let user_input = document.querySelector(".user_input").value + " "; 
    let repeatNum = prompt("Enter your repeated number:_  ");
    document.querySelector(".texeArea").value = user_input.repeat(repeatNum);

} 
