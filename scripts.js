const wordElement = document.getElementById('word-element');
const hangmanParts = document.querySelectorAll('.hangman__part')
const popUp = document.getElementById('pop-up');
const popUpText = document.getElementById('pop-up-text');
const popUpButton = document.getElementById('pop-up-button');

const words = ['ordenador', 'javascript'];

const correctLetters = [];
const MaxAttempts = 6;
let attempts = 0;

const selectedWord = words[Math.floor(Math.random()*words.length)];

//console.log(selectedWord);

const writeWord = () => {
    const wordToWrite = selectedWord.split('').map(letter => `
        <span class="letter">
            ${letter}
        </span>
    `
    ).join('');
    wordElement.innerHTML = wordToWrite;
};

const checkLetter = (letter) => {
    if(selectedWord.includes(letter)) {
        if(!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            console.log(correctLetters)
        }
    } else {
        
    }
}

window.addEventListener('keyup', e => {
    checkLetter(e.key);
})

writeWord();




