import { getRandomCategories, getRandomCategory, getRandomValue } from "./letters.js";

let categories = null;
let categoryName = null;
let categoryValues = null;
let categoryLetters = null;
let value = null
let letter = null;
let remaining = 5;
let wins = 0
let games = 0

//
// Creation
//
function createDisplay(){
    createGuesses();
    createKeyboard();
}


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



//
// Reset
//
function resetDisplay(){
    resetCategories();
    resetGuesses();
    resetResult();
    resetKeyboard();
}


function resetCategories(){
    const cats = document.getElementById('categories');
    cats.innerText = '';
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



//
// Update Display
//
function displayResult(won){
    const result = document.getElementById('result');
    result.innerText = `You ${won ? 'Won!' : 'Lost.'} The category was ${categoryName}, and the letter was ${letter + (value!==letter ? '['+value.slice(1)+']' : '')}.`;
    result.style.color = won ? 'green' : 'red';
    result.style.visibility = 'visible';
    updateRecord(won);
}


function updateRecord(won){
    games++;
    wins += won ? 1 : 0;
    document.getElementById('record').innerText = `${wins}/${games}`;
}



//
// Pick Letter
//
function chooseLetter(){
    categories = getRandomCategories();
    [categoryName, categoryValues] = getRandomCategory(categories);
    categoryLetters = categoryValues.map(x=>x[0]);
    value = getRandomValue(categoryValues);
    letter = value[0];

    const cats = document.getElementById('categories');
    const list = document.createElement('ul');
    for(let x of categories){
        let element = document.createElement('li');
        element.innerText = x[0];
        element.classList.add('category', 'include');
        element.addEventListener('click', e => {
            let included = e.target.classList.contains('include');
            e.target.classList.add(included ? 'exclude' : 'include');
            e.target.classList.remove(included ? 'include' : 'exclude');
        });
        list.appendChild(element);
    }

    cats.appendChild(list);
}



//
// Logic Helpers
//
function checkGuess(){
    let guess = document.getElementsByClassName('guess')[5 - remaining];
    let key = findKey(guess.innerHTML);

    if(guess.innerHTML === letter){
        guess.classList.add('correct');
        key.classList.add('correct');
        displayResult(true);
        remaining = 0;
        return;
    }
    else if(categoryLetters.includes(guess.innerHTML)){
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
        if(keys[i].innerHTML === key){
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



//
// Initialize Game
//
function restartGame(){
    if(remaining>0){
        updateRecord();
    }
    resetDisplay();
    chooseLetter();
}

function firstGame(){
    createDisplay();
    chooseLetter();
}



//
// Event Listeners
//
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
    restartGame();
})



//
// Entry Point
//
firstGame();