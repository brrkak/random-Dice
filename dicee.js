
var randomNumber1 =  (Math.floor(Math.random() * 6) + 1); // 플레이어 1 변수
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png"); //이미지 랜덤으로 변환


var randomNumber2 = (Math.floor(Math.random() * 6) + 1);// 플레이어 2 변수
var dice2 = document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");//이미지 랜덤으로 변환



    if (randomNumber1 < randomNumber2) {
       document.querySelector("h1").innerHTML = "Player2 wins! 🚩"
    } 
        else if (randomNumber1 > randomNumber2) {
         document.querySelector("h1").innerHTML = "Player1 wins! 🚩"
    } else {
         document.querySelector("h1").innerHTML = "Draw! 🚩"
    }   

