const wordElement = document.getElementById('word-element');
const keyboard = document.getElementById('keyboard');
const hangmanParts = document.querySelectorAll('.hangman__part')
const popUp = document.getElementById('pop-up');
const popUpText = document.getElementById('pop-up-text');
const popUpButton = document.getElementById('pop-up-button');

const words = ['ordenador', 'javascript'];
const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

const correctLetters = [];
const MaxAttempts = 6;
let attempts = 0;

const selectedWord = words[Math.floor(Math.random()*words.length)].toUpperCase();

//console.log(selectedWord);

const writeWord = () => {
    const wordToWrite = selectedWord.split('').map(letter => `
        <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </span>
    `
    ).join('');
    wordElement.innerHTML = wordToWrite;
};

const writeKeyboard = () => {
    const fragment = document.createDocumentFragment();
    letters.map(letter => {
        const span = document.createElement('SPAN');
        span.classList.add('keyboard__key');
        span.textContent = letter;
        fragment.appendChild(span);
    });

    keyboard.appendChild(fragment);
}

const updateWrongAttempts = () => {
    //console.log(hangmanParts)
    hangmanParts[attempts].classList.remove('hangman__part');
    if(attempts<MaxAttempts) {
        attempts += 1;
    }
}

const checkLetter = (letter) => {
    if(selectedWord.includes(letter)) {
        // Usando "!" podemos validar al contrario
        if(!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            writeWord();
            console.log(correctLetters)
        }
    } else {
        updateWrongAttempts()        
    }
}

window.addEventListener('keyup', e => {
    checkLetter(e.key);
})

writeWord();
writeKeyboard();



