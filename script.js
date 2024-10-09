// Seleziona gli elementi dal DOM
const choices = document.querySelectorAll('.choice');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const messageElement = document.getElementById('message');

// Possibili scelte
const options = ['rock', 'paper', 'scissors'];

// Aggiungi un evento di click per ciascun bottone
choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const playerChoice = this.id;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);

        // Aggiorna il DOM con le scelte e il risultato
        playerChoiceElement.textContent = getEmoji(playerChoice);
        computerChoiceElement.textContent = getEmoji(computerChoice);
        messageElement.textContent = result;
    });
});

// Funzione per ottenere la scelta del computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Funzione per determinare il risultato
function getResult(player, computer) {
    if (player === computer) {
        return "È un pareggio!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return "Hai vinto!";
    } else {
        return "Hai perso!";
    }
}

// Funzione per ottenere l'emoji della scelta
function getEmoji(choice) {
    switch (choice) {
        case 'rock':
            return '🪨';
        case 'paper':
            return '📄';
        case 'scissors':
            return '✂️';
        default:
            return '';
    }
}