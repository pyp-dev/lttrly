import { getRandomCategory, getRandomLetter } from "./letters.js";

let categoryName = null;
let categoryValues = null;
let letter = null;
let remaining = 5;

function createGuesses(){
    const guesses = document.getElementById('guesses');

    for(let i = 0; i<5; i++){
        let guess = document.createElement('div');
        guess.className = 'guess';
        guesses.appendChild(guess);
    }
}

function createKeyboard(){
    const keyboard = document.getElementById('keyboard');
}

function checkGuess(){
    let guess = document.getElementsByClassName('guess')[5 - remaining];
    let key = findKey(guess.innerHTML);
    
    if(guess.innerHTML == letter){
        guess.classList.add('correct');
        key.classList.add('correct');
        displayResult(true);
        remaining = 0;
        return;
    }
    else if(categoryValues.includes(guess.innerHTML)){
        guess.classList.add('close');
        key.classList.add('close');
    }
    else{
        key.classList.add('wrong');
    }
    
    remaining -= 1;
    if(remaining <= 0){
        displayResult(false);
    }
}

function findKey(key){
    const keys = document.getElementsByClassName('key');
    
    for(let i = 0; i<keys.length; i++){
        if(keys[i].innerHTML == key){
            return keys[i];
        }
    }
}

function guessedAlready(letter){
    const guesses = document.getElementsByClassName('guess');
    
    for(let i = 0; i<guesses.length; i++){
        if(guesses[i].innerHTML === letter){
            return true;
        }
    }
    
    return false;
}

function displayResult(won){
    const result = document.getElementById('result');
    result.innerText = `You ${won ? 'Won!' : 'Lost.'} The category was ${categoryName}, and the letter was ${letter.toUpperCase()}.`;
    result.style.color = won ? 'green' : 'red';
    result.style.visibility = 'visible';
}

function resetGuesses(){
    const guess_list = document.getElementsByClassName('guess');

    for(let i = 0; i<guess_list.length; i++){
        let guess = guess_list[i];
        guess.innerText = '';
        guess.classList.remove('correct','close');
    }
    
    remaining = 5;
}

function resetResult(){
    const result = document.getElementById('result');
    result.style.visibility = 'hidden';
}

function resetKeyboard(){
    const key_list = document.getElementsByClassName('key');
    
    for(let i = 0; i<key_list.length; i++){
        let key = key_list[i];
        key.classList.remove('close','correct','wrong');
    }
}

function setupGame(){
    [categoryName, categoryValues] = getRandomCategory();
    letter = getRandomLetter(categoryValues);
    createGuesses();
    createKeyboard();
}

function newGame(){
    [categoryName, categoryValues] = getRandomCategory();
    letter = getRandomLetter(categoryValues);
    resetGuesses();
    resetResult();
    resetKeyboard();
}



document.addEventListener('keyup', (e) => {
    if(remaining>0 && !guessedAlready(e.key)){
        document.getElementsByClassName('guess')[5-remaining].textContent = e.key;
        checkGuess();
    }
})

document.getElementById('keyboard').addEventListener('click', e => {
    document.dispatchEvent(new KeyboardEvent('keyup', {'key': e.target.textContent}));
})

document.getElementById('newgame').addEventListener('click', e => {
    newGame();
})



setupGame();