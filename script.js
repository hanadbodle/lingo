var inputBox = document.getElementById("input");
var guessBoxes = document.getElementsByClassName("guessBox");
document.getElementsByTagName("button")[0].onclick = function(){lingoInit()};

var currentWord = getRandomWord().split("");
var userWords = [];
var correctLetters = [currentWord[0],"","","",""];
var attempts;
var wordGuessed;


function getRandomWord(){
    return words[Math.floor(Math.random() * (words.length -1))].toUpperCase();
}

function getInput(){
    var chars = inputBox.value.toUpperCase().split("").slice(0, 5);
    while(chars.length < 5){
        chars.push("");
    }
    inputBox.value = "";
    return chars;
}

function compareWords(){
    for(var i = 0; i < 5; i++){
        if(userWords[attempts][i] === currentWord[i]){
            correctLetters[i] = currentWord[i];

        }
    }
}

function letterIsInWord(letter, word){
    for(var i = 0; i < 5; i++ ){
        //letter has to be string containing only 1 chars
        //word has to be an array with each index containing a single char string
        if(letter === word[i]){
            return true;
        }
    }
    return false;
}

window.addEventListener("keydown", function(e){
    if (e.key ==="Enter" && attempts < 5){
        userWords.push(getInput());
        compareWords();
        guessBoxes[attempts].innerHTML = "";
        for(var i = 0; i < 5; i++){
            // letter is on correct position
            if(userWords[attempts][i] === correctLetters[i] && userWords[attempts][i] !== ""){
                guessBoxes[attempts].innerHTML +=
                    "<div style='background: orange'>" +
                    userWords[attempts][i] + 
                    "</div>";
            }
            // letter is in word but wrong position
            else if(letterIsInWord(userWords[attempts][i], currentWord)){
                guessBoxes[attempts].innerHTML +=
                    "<div style='background: yellow'>" +
                    userWords[attempts][i] + 
                    "</div>";   
            }
            // letter is not in word
            else {
                guessBoxes[attempts].innerHTML += "<div>" + userWords[attempts][i] + "</div>";
            }
        }

        attempts = attempts + 1;
        if(attempts < 5){
            showCorrectLetters();
        }
    }
    else if(attempts >= 5){
        lingoInit();
    }
}, false);

function showCorrectLetters(){
    guessBoxes[attempts].innerHTML = "";
    for(var i = 0; i < 5; i++){
        if(correctLetters[i] === ""){
            guessBoxes[attempts].innerHTML += "<div>.</div>";
        }
        else {
            guessBoxes[attempts].innerHTML += "<div>" + correctLetters[i] + "</div>";
        }
    }
}

function clearInput(){
    inputBox.value="";
    inputBox.focus();
}

function lingoInit(){
    //init
    currentWord = getRandomWord().split("");
    userWords = [];
    correctLetters = [currentWord[0],"","","",""];
    attempts = 0;

    //empties+draws board
    for (var i = 0; i < 5; i++){
        guessBoxes[i].innerHTML = "";
        for(var j = 0; j < 5; j++){
            guessBoxes[i].innerHTML += "<div></div>";
        }
    } 
    showCorrectLetters();
    clearInput();

}

lingoInit();
