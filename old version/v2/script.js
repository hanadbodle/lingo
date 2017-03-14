inputBox = document.getElementById("input");
guessBoxes = document.getElementsByClassName("guessBox");

currentWord = getRandomWord().split("");
words = [];
correctLetters = ["","","","",""];
attempts = 0;

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function getInput(){
    var chars = inputBox.value.split("").slice(0, 5);
    while(chars.length < 5){
        chars.push("");
    }
    inputBox.value = "";
    return chars;
}

function compareWords(){
    for(var i = 0; i < 5; i++){
        if(words[attempts][i] === currentWord[i]){
            correctLetters[i] = currentWord[i];

        }
    }
}

window.addEventListener("keydown", function(e){
    if (e.key ==="Enter"){
        words.push(getInput());
        compareWords();
        guessBoxes[attempts].innerHTML = "";
        for(var i = 0; i < 5; i++){
            if(words[attempts][i] === correctLetters[i]){
                guessBoxes[attempts].innerHTML += "<div style='background: green'>" + words[attempts][i] + "</div>";
            }
            else {
                guessBoxes[attempts].innerHTML += "<div>" + words[attempts][i] + "</div>";
            }
        };
        attempts = attempts + 1;
    }
}, false)