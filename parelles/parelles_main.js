const cards = [
    { img: "/parelles/img/img-1.jpg", verb: "corro", tense: "present" },
    { img: "/parelles/img/img-3.jpg", verb: "corria", tense: "passat" },
    { img: "/parelles/img/img-4.jpg", verb: "correré", tense: "futur" },
    { img: "/parelles/img/img-2.jpg", verb: "menjo", tense: "present" },
    { img: "/parelles/img/img-6.jpg", verb: "menjava", tense: "passat" },
    { img: "/parelles/img/img-5.jpg", verb: "menjaré", tense: "futur" },

    { verb: "corro", tense: "present" },
    { verb: "corria", tense: "passat" },
    { verb: "correré", tense: "futur" },
    { verb: "menjo", tense: "present" },
    { verb: "menjava", tense: "passat" },
    { verb: "menjaré", tense: "futur" },



    { img: "/parelles/img/img-7.jpg", verb:"parli",tense: "present_subjunctive" },
    { img: "/parelles/img/img-8.jpg",verb:"parlés", tense: "imperfect_subjunctive" },
    { img: "/parelles/img/img-9.jpg", verb: "estigui", tense: "present_subjunctive" },
    { img: "/parelles/img/img-10.jpg", verb: "pensés", tense: "imperfect_subjunctive" },
    { img: "/parelles/img/img-11.jpg", verb: "escrigui", tense: "present_subjunctive" },
    { img: "/parelles/img/img-12.jpg", verb: "fes", tense: "imperfect_subjunctive" },





    { verb: "parli", tense: "present_subjunctive" },
    { verb: "parlés", tense: "imperfect_subjunctive" },
    { verb: "estigui", tense: "present_subjunctive" },
    { verb: "pensés", tense: "imperfect_subjunctive" },
    { verb: "escrigui", tense: "present_subjunctive" },
    { verb: "fes", tense: "imperfect_subjunctive" }
];

// Barrejar les cartes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Inicialitzar el joc
function initializeGame() {
    shuffle(cards);
    
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.verb = card.verb;
        cardElement.dataset.tense = card.tense;
        
        if (card.img) {
            cardElement.innerHTML = `<img src="${card.img}" alt="${card.verb}">`;
        } else {
            cardElement.textContent = card.verb;
        }
        
        cardElement.addEventListener('click', () => flipCard(cardElement));
        
        gameBoard.appendChild(cardElement);
    });
}

let firstCard = null;
let secondCard = null;

function flipCard(card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || secondCard) return;
    
    card.classList.add('flipped');
    
    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.verb === secondCard.dataset.verb) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        showCorrectMessage();
        resetCards();
    } else {
        setTimeout(() => {
            alert('Et vas equivocar, torna a intentar!');
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetCards();
        }, 1000);
    }
}

function showCorrectMessage() {
    const message = document.createElement('div');
    message.classList.add('correct-message');
    message.innerText = 'Correcte!';
    document.body.appendChild(message);

    setTimeout(() => {
        document.body.removeChild(message);
    }, 1500);
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}

window.onload = initializeGame;
