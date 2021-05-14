var second = "00";
var tens = "00";
var appendTens = document.getElementById("tens");
var appendSecond = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonRest = document.getElementById("button-rest");
var interval;


function startTimer(){
    tens++

    if (tens<=9){
        document.getElementById("tens").innerHTML = "0" + tens;
    }
    if (tens>9){
        document.getElementById("tens").innerHTML = tens;
    }
    if (tens>11){
        second++;
        document.getElementById("seconds").innerHTML= "0" + second;
        tens=0;
        document.getElementById("tens").innerHTML = "0" + "0";
    }
    if(second>9){
        appendSecond.innerHTML= second;
    }
}

document.getElementById("button-start").onclick = function () {
    startTimer()
};





