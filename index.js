function callname(){  
var name1=prompt("Enter player1 name");
name1= name1.slice(0,1).toUpperCase()+name1.slice(1,name1.length).toLowerCase();
document.querySelector("#player1").innerHTML=name1;
return result;
}
function callname2(){
var name2=prompt("Enter player2 name");
name2= name2.slice(0,1).toUpperCase()+name2.slice(1,name2.length).toLowerCase();
document.querySelector("#player2").innerHTML=name2;
return result;
}

function game1(){
var randomNumber1 = Math.random()*6+1;
randomNumber1 = Math.floor(randomNumber1);
var randomDiceimage = "dice"+randomNumber1+".png";
var randomImagesource = "images/"+randomDiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);
}
function game2(){
var randomNumber2=Math.random()*6+1;
randomNumber2=Math.floor(randomNumber2);
var randomDiceimage2="dice"+randomNumber2+".png";
var randomDicesource="images/"+randomDiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDicesource);
return result;
}

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 won";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player2 won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}