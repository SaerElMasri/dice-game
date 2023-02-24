var dice1_random = Math.floor(Math.random() * 6) + 1;
var dice2_random = Math.floor(Math.random() * 6) + 1;

var player1 = document.getElementById("dice1").setAttribute("src", "assests/dice" + dice1_random + ".png");
var player2 = document.getElementById("dice2").setAttribute("src", "assests/dice" + dice2_random + ".png");

var textResult = document.getElementById("headerWinner");
if(dice1_random > dice2_random){
    textResult.innerHTML = "Player 1 wins!"
}else if(dice1_random < dice2_random){
    textResult.innerHTML = "Player 2 wins!"
}else{
    textResult.innerHTML = "It's a draw";
}