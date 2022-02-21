

var randomNumber1 = Math.random()*6+1;
randomNumber1 = Math.floor(randomNumber1);
var randomDiceimage = "dice"+randomNumber1+".png";
var randomImagesource = "images/"+randomDiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);


var randomNumber2=Math.random()*6+1;
randomNumber2=Math.floor(randomNumber2);
var randomDiceimage2="dice"+randomNumber2+".png";
var randomDicesource="images/"+randomDiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDicesource);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 won";
}
if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player2 won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}