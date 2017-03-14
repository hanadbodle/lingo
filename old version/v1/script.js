inputBox = document.getElementById("input");
guessBoxes = document.getElementsByClassName("guessBox");

currentWord = getRandomWord();
input = "";
attempts = 0;

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function getInput(){
    input = inputBox.value.slice(0, 5);
    inputBox.value = "";
}

window.addEventListener("keydown", function(e){
    if (e.key ==="Enter") {
        getInput();
        console.log(input);
        guessBoxes[attempts].innerText = input;
        attempts = attempts + 1;
    }
}, false)