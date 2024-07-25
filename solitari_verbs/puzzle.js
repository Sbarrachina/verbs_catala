// script.js
document.getElementById('start-game').addEventListener('click', function() {
    const verb = document.getElementById('verbs').value;
    startGame(verb);
});

function startGame(verb) {
    const conjugations = {
        "cantar": {
            "present-indicatiu": "canto",
            "imperfect-indicatiu": "cantava",
            "futur-indicatiu": "cantaré",
            "present-subjuntiu": "canti",
            "imperfect-subjuntiu": "cantés",
            "imperatiu": "canta"
        },
        "córrer": {
            "present-indicatiu": "corro",
            "imperfect-indicatiu": "corria",
            "futur-indicatiu": "correré",
            "present-subjuntiu": "corri",
            "imperfect-subjuntiu": "corrés",
            "imperatiu": "corre"
        },
        "beure": {
            "present-indicatiu": "bec",
            "imperfect-indicatiu": "bevia",
            "futur-indicatiu": "beuré",
            "present-subjuntiu": "begui",
            "imperfect-subjuntiu": "begués",
            "imperatiu": "beu"
        },
        "tenir": {
            "present-indicatiu": "tinc",
            "imperfect-indicatiu": "tenia",
            "futur-indicatiu": "tindré",
            "present-subjuntiu": "tingui",
            "imperfect-subjuntiu": "tingués",
            "imperatiu": "tingues"
        },
        "fer": {
            "present-indicatiu": "faig",
            "imperfect-indicatiu": "feia",
            "futur-indicatiu": "faré",
            "present-subjuntiu": "faci",
            "imperfect-subjuntiu": "fes",
            "imperatiu": "fes"
        },
        "anar": {
            "present-indicatiu": "vaig",
            "imperfect-indicatiu": "anava",
            "futur-indicatiu": "aniré",
            "present-subjuntiu": "vagi",
            "imperfect-subjuntiu": "anés",
            "imperatiu": "ves"
        },
        "dir": {
            "present-indicatiu": "dic",
            "imperfect-indicatiu": "deia",
            "futur-indicatiu": "diré",
            "present-subjuntiu": "digui",
            "imperfect-subjuntiu": "digués",
            "imperatiu": "digues"
        },
        "venir": {
            "present-indicatiu": "vinc",
            "imperfect-indicatiu": "venia",
            "futur-indicatiu": "vindré",
            "present-subjuntiu": "vingui",
            "imperfect-subjuntiu": "vingués",
            "imperatiu": "vine"
        },
        "dormir": {
            "present-indicatiu": "dormo",
            "imperfect-indicatiu": "dormia",
            "futur-indicatiu": "dormiré",
            "present-subjuntiu": "dormi",
            "imperfect-subjuntiu": "dormís",
            "imperatiu": "dorm"
        },
        "escriure": {
            "present-indicatiu": "escric",
            "imperfect-indicatiu": "escrivia",
            "futur-indicatiu": "escriuré",
            "present-subjuntiu": "escrigui",
            "imperfect-subjuntiu": "escrivís",
            "imperatiu": "escriu"
        },
        "creure": {
            "present-indicatiu": "crec",
            "imperfect-indicatiu": "creia",
            "futur-indicatiu": "creuré",
            "present-subjuntiu": "cregui",
            "imperfect-subjuntiu": "cregués",
            "imperatiu": "creu"
        },
        "saber": {
            "present-indicatiu": "sé",
            "imperfect-indicatiu": "sabia",
            "futur-indicatiu": "sabré",
            "present-subjuntiu": "sàpiga",
            "imperfect-subjuntiu": "sabés",
            "imperatiu": "sabre"
        },
        "poder": {
            "present-indicatiu": "puc",
            "imperfect-indicatiu": "podía",
            "futur-indicatiu": "podré",
            "present-subjuntiu": "puga",
            "imperfect-subjuntiu": "pogués",
            "imperatiu": "podeu"
        },
        "fer": {
            "present-indicatiu": "faig",
            "imperfect-indicatiu": "feia",
            "futur-indicatiu": "faré",
            "present-subjuntiu": "faci",
            "imperfect-subjuntiu": "fes",
            "imperatiu": "fes"
        },
        "sortir": {
            "present-indicatiu": "surto",
            "imperfect-indicatiu": "sortia",
            "futur-indicatiu": "sortiré",
            "present-subjuntiu": "surt",
            "imperfect-subjuntiu": "sortissis",
            "imperatiu": "surt"
        },
        "conèixer": {
            "present-indicatiu": "conec",
            "imperfect-indicatiu": "coneixia",
            "futur-indicatiu": "coneixeré",
            "present-subjuntiu": "conegui",
            "imperfect-subjuntiu": "coneixés",
            "imperatiu": "coneix"
        },
        "pensar": {
            "present-indicatiu": "penso",
            "imperfect-indicatiu": "pensava",
            "futur-indicatiu": "pensaré",
            "present-subjuntiu": "pensi",
            "imperfect-subjuntiu": "pensés",
            "imperatiu": "pensa"
        },
        "trobar": {
            "present-indicatiu": "trobo",
            "imperfect-indicatiu": "troba",
            "futur-indicatiu": "trobaré",
            "present-subjuntiu": "trobi",
            "imperfect-subjuntiu": "trobés",
            "imperatiu": "troba"
        },
        "portar": {
            "present-indicatiu": "porto",
            "imperfect-indicatiu": "portava",
            "futur-indicatiu": "portaré",
            "present-subjuntiu": "porti",
            "imperfect-subjuntiu": "portés",
            "imperatiu": "porta"
        },
        "lluitar": {
            "present-indicatiu": "lluito",
            "imperfect-indicatiu": "lluitava",
            "futur-indicatiu": "lluitaré",
            "present-subjuntiu": "lluiti",
            "imperfect-subjuntiu": "lluités",
            "imperatiu": "lluita"
        },
        "viure": {
            "present-indicatiu": "vio",
            "imperfect-indicatiu": "vivía",
            "futur-indicatiu": "viuré",
            "present-subjuntiu": "visqui",
            "imperfect-subjuntiu": "visqués",
            "imperatiu": "viu"
        },
        "viatjar": {
            "present-indicatiu": "viatjo",
            "imperfect-indicatiu": "viatjava",
            "futur-indicatiu": "viatjaré",
            "present-subjuntiu": "viatgi",
            "imperfect-subjuntiu": "viatgés",
            "imperatiu": "viatja"
        },
        "tornar": {
            "present-indicatiu": "torno",
            "imperfect-indicatiu": "tornava",
            "futur-indicatiu": "tornaré",
            "present-subjuntiu": "torni",
            "imperfect-subjuntiu": "tornés",
            "imperatiu": "torna"
        },
        "explicar": {
            "present-indicatiu": "explico",
            "imperfect-indicatiu": "explicava",
            "futur-indicatiu": "explicaré",
            "present-subjuntiu": "expliqui",
            "imperfect-subjuntiu": "explicés",
            "imperatiu": "explica"
        },
        "enviar": {
            "present-indicatiu": "envio",
            "imperfect-indicatiu": "enviava",
            "futur-indicatiu": "enviaré",
            "present-subjuntiu": "enviï",
            "imperfect-subjuntiu": "enviés",
            "imperatiu": "envia"
        },
        "pintar": {
            "present-indicatiu": "pinto",
            "imperfect-indicatiu": "pintava",
            "futur-indicatiu": "pintaré",
            "present-subjuntiu": "pinti",
            "imperfect-subjuntiu": "pintés",
            "imperatiu": "pinta"
        },
        "col·locar": {
            "present-indicatiu": "col·loco",
            "imperfect-indicatiu": "col·locava",
            "futur-indicatiu": "col·locaré",
            "present-subjuntiu": "col·loqui",
            "imperfect-subjuntiu": "col·locués",
            "imperatiu": "col·loca"
        },
        "obrir": {
            "present-indicatiu": "obro",
            "imperfect-indicatiu": "obría",
            "futur-indicatiu": "obriré",
            "present-subjuntiu": "obri",
            "imperfect-subjuntiu": "obrís",
            "imperatiu": "obri"
        },
        "descobrir": {
            "present-indicatiu": "descobreixo",
            "imperfect-indicatiu": "descobria",
            "futur-indicatiu": "descobriré",
            "present-subjuntiu": "descobreixi",
            "imperfect-subjuntiu": "descobrís",
            "imperatiu": "descobreix"
        },
        "decidir": {
            "present-indicatiu": "decideixo",
            "imperfect-indicatiu": "decidía",
            "futur-indicatiu": "decidiré",
            "present-subjuntiu": "decideixi",
            "imperfect-subjuntiu": "decidís",
            "imperatiu": "decideix"
        },
        "comprar": {
            "present-indicatiu": "compro",
            "imperfect-indicatiu": "comprava",
            "futur-indicatiu": "compraré",
            "present-subjuntiu": "compri",
            "imperfect-subjuntiu": "comprés",
            "imperatiu": "compra"
        }
    };
    const tenses = conjugations[verb];

    const piecesContainer = document.getElementById('pieces-container');
    piecesContainer.innerHTML = '';

    Object.keys(tenses).forEach((tense, index) => {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.setAttribute('draggable', true);
        piece.setAttribute('id', `piece-${index}`);
        piece.setAttribute('data-tense', tense);
        piece.innerText = tenses[tense];
        piecesContainer.appendChild(piece);

        piece.addEventListener('dragstart', dragStart);
    });
}

document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const piece = document.getElementById(data);
    const dropZone = event.target;

    if (piece.getAttribute('data-tense') === dropZone.getAttribute('data-tense')) {
        dropZone.appendChild(piece);
        piece.classList.add('correct');
    } else {
        piece.classList.add('incorrect');
        setTimeout(() => {
            piece.classList.remove('incorrect');
        }, 1000);
    }

    checkCompletion();
}

function checkCompletion() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    const allCorrect = Array.from(pieces).every(piece => piece.classList.contains('correct'));
    
    if (allCorrect) {
        alert('Felicitats! Has completat el puzle correctament.');
    }
}
