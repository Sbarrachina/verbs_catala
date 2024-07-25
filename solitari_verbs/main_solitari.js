document.addEventListener('DOMContentLoaded', () => {
    initGame();

    // Afegir event listener al botó de reinici
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetGame);
});

const verbs = {
    present: {
        'ser': ['sigui', 'siguis', 'sigui', 'siguem', 'sigueu', 'siguin'],
        'tenir': ['tingui', 'tinguis', 'tingui', 'tinguem', 'tingueu', 'tinguin'],
        'anar': ['vagi', 'vagis', 'vagi', 'vagim', 'vagueu', 'vagin'],
        'fer': ['faci', 'facis', 'faci', 'fem', 'feu', 'facin'],
        'dir': ['digui', 'diguin', 'diguin', 'digui', 'digui', 'diguin'],
        'veure': ['vegi', 'vegis', 'vegi', 'vegem', 'vegeu', 'vegin'],
        'saber': ['sàpiga', 'sàpigues', 'sàpiga', 'sàpiguen', 'sàpiguen', 'sàpiguen'],
        'voler': ['vulgui', 'vulguis', 'vulgui', 'vulguem', 'vulgueu', 'vulguin'],
        'poder': ['puga', 'puguis', 'puga', 'puguem', 'pugueu', 'puguin'],
        'prendre': ['prengui', 'prenguis', 'prengui', 'prenguem', 'prengueu', 'prenguin'],
        'escriure': ['escrigui', 'escriguis', 'escrigui', 'escrivim', 'escriviu', 'escriguin'],
        'trobar': ['trobi', 'trobis', 'trobi', 'trobem', 'trobeu', 'trobin'],
        'passar': ['passi', 'passis', 'passi', 'passem', 'passeu', 'passin'],
        'utilitzar': ['utilitzi', 'utilitzis', 'utilitzi', 'utilitzem', 'utilitzeu', 'utilitzin'],
        'jugar': ['jugi', 'juguis', 'jugi', 'juguem', 'jugueu', 'juguin'],
        'viure': ['visqui', 'visquis', 'visqui', 'visquem', 'visqueu', 'visquin'],
        'caminar': ['camini', 'caminis', 'camini', 'caminem', 'camineu', 'caminen'],
        'cantar': ['canti', 'canties', 'canti', 'cantem', 'canteu', 'cantin'],
        'cuinar': ['cuini', 'cuinis', 'cuini', 'cuinem', 'cuineu', 'cuinin'],
        'pintar': ['pinti', 'pintis', 'pinti', 'pintem', 'pinteu', 'pintin'],
        'banyar': ['banyi', 'banyis', 'banyi', 'banyem', 'banyeu', 'banyin'],
        'estudiar': ['estudiï', 'estudiïs', 'estudiï', 'estudiem', 'estudieu', 'estudiïn'],
        'beure': ['bevi', 'bevis', 'bevi', 'bevem', 'beveu', 'bevin'],
        'dormir': ['dormi', 'dormis', 'dormi', 'dormim', 'dormiu', 'dormin'],
        'arribar': ['arribi', 'arribis', 'arribi', 'arribem', 'arribeu', 'arribin'],
        'comprendre': ['comprengui', 'comprenguis', 'comprengui', 'comprenguem', 'comprengueu', 'comprenguin'],
        'entendre': ['entengui', 'entenguis', 'entengui', 'entenguem', 'entengueu', 'entenguin'],
        'negar': ['negi', 'negis', 'negi', 'negem', 'negeu', 'neguin'],
        'escollir': ['escolleixi', 'escolleixis', 'escolleixi', 'escolleixem', 'escolleixeu', 'escolleixin'],
        'dirigir': ['dirigeixi', 'dirigeixis', 'dirigeixi', 'dirigim', 'dirigiu', 'dirigeixin'],
        'viatjar': ['viatgi', 'viatgis', 'viatgi', 'viatgem', 'viatjeu', 'viatgin'],
        'conèixer': ['coneixi', 'coneixis', 'coneixi', 'coneixem', 'coneixeu', 'coneixin'],
        'treballar': ['treballi', 'treballis', 'treballi', 'treballem', 'treballeu', 'treballin'],
        'sortir': ['surt', 'sortis', 'surt', 'sortim', 'sortiu', 'sortin'],
        'pensar': ['pensi', 'penses', 'pensi', 'pensem', 'penseu', 'pensin'],
        'parlar': ['parli', 'parlis', 'parli', 'parlem', 'parleu', 'parlin'],
        'entrenar': ['entreni', 'entrenis', 'entreni', 'entrenem', 'entreneu', 'entrenin'],
        'deixar': ['deixi', 'deixis', 'deixi', 'deixem', 'deixeu', 'deixin']
    },
    imperfecte: {
        'ser': ['fos', 'fossis', 'fos', 'fossim', 'fossiu', 'fossin'],
        'tenir': ['tingués', 'tinguessis', 'tingués', 'tinguéssim', 'tinguéssiu', 'tinguessin'],
        'anar': ['anés', 'anessis', 'anés', 'anéssim', 'anéssiu', 'anessin'],
        'fer': ['fés', 'fessis', 'fés', 'féssim', 'féssiu', 'fessin'],
        'dir': ['digues', 'diguis', 'digues', 'diguéssim', 'diguéssiu', 'digues'],
        'veure': ['visqués', 'visquessis', 'visqués', 'visquéssim', 'visquéssiu', 'visquessin'],
        'saber': ['sagués', 'saguessis', 'sagués', 'saguéssim', 'saguéssiu', 'saguessin'],
        'voler': ['volgués', 'volguessis', 'volgués', 'volguéssim', 'volguéssiu', 'volguessin'],
        'poder': ['pogués', 'poguessis', 'pogués', 'poguéssim', 'poguéssiu', 'poguessin'],
        'prendre': ['prengués', 'prenguessis', 'prengués', 'prenguéssim', 'prenguéssiu', 'prenguessin'],
        'escriure': ['escrivís', 'escrivissis', 'escrivís', 'escrivíssim', 'escrivíssiu', 'escrivissin'],
        'trobar': ['trobés', 'trobessis', 'trobés', 'trobéssim', 'trobéssiu', 'trobessin'],
        'passar': ['passés', 'passessis', 'passés', 'passéssim', 'passéssiu', 'passessin'],
        'utilitzar': ['utilitzés', 'utilitzessis', 'utilitzés', 'utilitzéssim', 'utilitzéssiu', 'utilitzessin'],
        'jugar': ['jogués', 'joguessis', 'jogués', 'joguéssim', 'joguéssiu', 'joguessin'],
        'viure': ['visqués', 'visquessis', 'visqués', 'visquéssim', 'visquéssiu', 'visquessin'],
        'caminar': ['caminés', 'caminessis', 'caminés', 'caminéssim', 'caminéssiu', 'caminessin'],
        'cantar': ['cantés', 'cantessis', 'cantés', 'cantéssim', 'cantéssiu', 'cantessin'],
        'cuinar': ['cuinés', 'cuinessis', 'cuinés', 'cuinéssim', 'cuinéssiu', 'cuinessin'],
        'pintar': ['pintés', 'pintessis', 'pintés', 'pintéssim', 'pintéssiu', 'pintessin'],
        'banyar': ['banyés', 'banyessis', 'banyés', 'banyéssim', 'banyéssiu', 'banyessin'],
        'estudiar': ['estudiés', 'estudiessis', 'estudiés', 'estudiéssim', 'estudiéssiu', 'estudiessin'],
        'beure': ['beviés', 'beviessis', 'beviés', 'bevésim', 'bevésiu', 'beviessin'],
        'dormir': ['dormís', 'dormissis', 'dormís', 'dormíssim', 'dormíssiu', 'dormissin'],
        'arribar': ['arribés', 'arribessis', 'arribés', 'arribéssim', 'arribéssiu', 'arribessin'],
        'comprendre': ['comprengués', 'comprenguessis', 'comprengués', 'comprenguéssim', 'comprenguéssiu', 'comprenguessin'],
        'entendre': ['entengués', 'entenguessis', 'entengués', 'entenguéssim', 'entenguéssiu', 'entenguessin'],
        'negar': ['negés', 'negessis', 'negés', 'negéssim', 'negéssiu', 'negessin'],
        'escollir': ['escolleixés', 'escolleixessis', 'escolleixés', 'escolleixéssim', 'escolleixéssiu', 'escolleixin'],
        'dirigir': ['dirigís', 'dirigissis', 'dirigís', 'dirigíssim', 'dirigíssiu', 'dirigissin'],
        'viatjar': ['viatgés', 'viatgessis', 'viatgés', 'viatgéssim', 'viatgéssiu', 'viatgessin'],
        'conèixer': ['conegués', 'coneguessis', 'conegués', 'coneguéssim', 'coneguéssiu', 'coneguessin'],
        'treballar': ['treballés', 'treballessis', 'treballés', 'treballéssim', 'treballéssiu', 'treballessin'],
        'sortir': ['sortís', 'sortissis', 'sortís', 'sortíssim', 'sortíssiu', 'sortissin'],
        'pensar': ['pensés', 'pensessis', 'pensés', 'penséssim', 'penséssiu', 'pensessin'],
        'parlar': ['parlés', 'parlessis', 'parlés', 'parléssim', 'parléssiu', 'parlessin'],
        'entrenar': ['entrenés', 'entrenessis', 'entrenés', 'entrenéssim', 'entrenéssiu', 'entrenessin'],
        'deixar': ['deixés', 'deixessis', 'deixés', 'deixéssim', 'deixéssiu', 'deixessin']
    },
    futur: {
        'ser': ['hagi estat', 'hagis estat', 'hagi estat', 'hàgim estat', 'hàgiu estat', 'hagin estat'],
        'tenir': ['hagi tingut', 'hagis tingut', 'hagi tingut', 'hàgim tingut', 'hàgiu tingut', 'hagin tingut'],
        'anar': ['hagi anat', 'hagis anat', 'hagi anat', 'hàgim anat', 'hàgiu anat', 'hagin anat'],
        'fer': ['hagi fet', 'hagis fet', 'hagi fet', 'hàgim fet', 'hàgiu fet', 'hagin fet'],
        'dir': ['hagi dit', 'hagis dit', 'hagi dit', 'hàgim dit', 'hàgiu dit', 'hagin dit'],
        'veure': ['hagi vist', 'hagis vist', 'hagi vist', 'hàgim vist', 'hàgiu vist', 'hagin vist'],
        'saber': ['hagi sabut', 'hagis sabut', 'hagi sabut', 'hàgim sabut', 'hàgiu sabut', 'hagin sabut'],
        'voler': ['hagi volgut', 'hagis volgut', 'hagi volgut', 'hàgim volgut', 'hàgiu volgut', 'hagin volgut'],
        'poder': ['hagi pogut', 'hagis pogut', 'hagi pogut', 'hàgim pogut', 'hàgiu pogut', 'hagin pogut'],
        'prendre': ['hagi pres', 'hagis pres', 'hagi pres', 'hàgim pres', 'hàgiu pres', 'hagin pres'],
        'escriure': ['hagi escrit', 'hagis escrit', 'hagi escrit', 'hàgim escrit', 'hàgiu escrit', 'hagin escrit'],
        'trobar': ['hagi trobat', 'hagis trobat', 'hagi trobat', 'hàgim trobat', 'hàgiu trobat', 'hagin trobat'],
        'passar': ['hagi passat', 'hagis passat', 'hagi passat', 'hàgim passat', 'hàgiu passat', 'hagin passat'],
        'utilitzar': ['hagi utilitzat', 'hagis utilitzat', 'hagi utilitzat', 'hàgim utilitzat', 'hàgiu utilitzat', 'hagin utilitzat'],
        'jugar': ['hagi jugat', 'hagis jugat', 'hagi jugat', 'hàgim jugat', 'hàgiu jugat', 'hagin jugat'],
        'viure': ['hagi viscut', 'hagis viscut', 'hagi viscut', 'hàgim viscut', 'hàgiu viscut', 'hagin viscut'],
        'caminar': ['hagi caminat', 'hagis caminat', 'hagi caminat', 'hàgim caminat', 'hàgiu caminat', 'hagin caminat'],
        'cantar': ['hagi cantat', 'hagis cantat', 'hagi cantat', 'hàgim cantat', 'hàgiu cantat', 'hagin cantat'],
        'cuinar': ['hagi cuinat', 'hagis cuinat', 'hagi cuinat', 'hàgim cuinat', 'hàgiu cuinat', 'hagin cuinat'],
        'pintar': ['hagi pintat', 'hagis pintat', 'hagi pintat', 'hàgim pintat', 'hàgiu pintat', 'hagin pintat'],
        'banyar': ['hagi banyat', 'hagis banyat', 'hagi banyat', 'hàgim banyat', 'hàgiu banyat', 'hagin banyat'],
        'estudiar': ['hagi estudiat', 'hagis estudiat', 'hagi estudiat', 'hàgim estudiat', 'hàgiu estudiat', 'hagin estudiat'],
        'beure': ['hagi begut', 'hagis begut', 'hagi begut', 'hàgim begut', 'hàgiu begut', 'hagin begut'],
        'dormir': ['hagi dormit', 'hagis dormit', 'hagi dormit', 'hàgim dormit', 'hàgiu dormit', 'hagin dormit'],
        'arribar': ['hagi arribat', 'hagis arribat', 'hagi arribat', 'hàgim arribat', 'hàgiu arribat', 'hagin arribat'],
        'comprendre': ['hagi comprès', 'hagis comprès', 'hagi comprès', 'hàgim comprès', 'hàgiu comprès', 'hagin comprès'],
        'entendre': ['hagi entès', 'hagis entès', 'hagi entès', 'hàgim entès', 'hàgiu entès', 'hagin entès'],
        'negar': ['hagi negat', 'hagis negat', 'hagi negat', 'hàgim negat', 'hàgiu negat', 'hagin negat'],
        'escollir': ['hagi escollit', 'hagis escollit', 'hagi escollit', 'hàgim escollit', 'hàgiu escollit', 'hagin escollit'],
        'dirigir': ['hagi dirigit', 'hagis dirigit', 'hagi dirigit', 'hàgim dirigit', 'hàgiu dirigit', 'hagin dirigit'],
        'viatjar': ['hagi viatjat', 'hagis viatjat', 'hagi viatjat', 'hàgim viatjat', 'hàgiu viatjat', 'hagin viatjat'],
        'conèixer': ['hagi conegut', 'hagis conegut', 'hagi conegut', 'hàgim conegut', 'hàgiu conegut', 'hagin conegut'],
        'treballar': ['hagi treballat', 'hagis treballat', 'hagi treballat', 'hàgim treballat', 'hàgiu treballat', 'hagin treballat'],
        'sortir': ['hagi sortit', 'hagis sortit', 'hagi sortit', 'hàgim sortit', 'hàgiu sortit', 'hagin sortit'],
        'pensar': ['hagi pensat', 'hagis pensat', 'hagi pensat', 'hàgim pensat', 'hàgiu pensat', 'hagin pensat'],
        'parlar': ['hagi parlat', 'hagis parlat', 'hagi parlat', 'hàgim parlat', 'hàgiu parlat', 'hagin parlat'],
        'entrenar': ['hagi entrenat', 'hagis entrenat', 'hagi entrenat', 'hàgim entrenat', 'hàgiu entrenat', 'hagin entrenat'],
        'deixar': ['hagi deixat', 'hagis deixat', 'hagi deixat', 'hàgim deixat', 'hàgiu deixat', 'hagin deixat']
    }
};

let currentVerb = '';
let allForms = [];

// Funció per inicialitzar el joc
function initGame() {
    setRandomVerb(); // Estableix un verb aleatori

    const piles = document.querySelectorAll('.pile');
    const allCards = [];

    // Recollir totes les formes verbals dels diferents temps
    Object.keys(verbs).forEach(tense => {
        const forms = verbs[tense][currentVerb];
        allForms.push(...forms.map(form => ({ form, tense })));
    });

    // Barallar les formes verbals globalment
    shuffleArray(allForms);

    // Distribuir cartes aleatòriament a les piles
    piles.forEach(pile => {
        pile.innerHTML = '<h2>' + pile.querySelector('h2').textContent + '</h2>'; // Mantén el h2 existent
        const tense = pile.dataset.tense;
        const relevantCards = allForms.filter(card => card.tense === tense).slice(0, 6); // Mostra 4 cartes per pila

        relevantCards.forEach(cardInfo => {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = cardInfo.form;
            card.draggable = true;
            card.dataset.tense = cardInfo.tense;
            card.dataset.form = cardInfo.form; // Atribut de dades únic
            card.addEventListener('dragstart', handleDragStart);
            card.addEventListener('dragend', handleDragEnd);
            pile.appendChild(card);
        });
    });

    // Afegir events a les piles
    addPileEvents();
}

// Afegir events a les piles
function addPileEvents() {
    const piles = document.querySelectorAll('.pile');
    piles.forEach(pile => {
        pile.addEventListener('dragover', handleDragOver);
        pile.addEventListener('drop', handleDrop);
    });
}

// Funció per manejar l'inici de l'arrossegament
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.textContent);
    e.target.classList.add('dragging');
}

// Funció per manejar la fi de l'arrossegament
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Funció per manejar l'arrossegament sobre una pila
function handleDragOver(e) {
    e.preventDefault();
}

// Funció per manejar la caiguda d'una carta sobre una pila
function handleDrop(e) {
    e.preventDefault();
    const pile = e.target.closest('.pile');
    if (!pile) return;

    const droppedData = e.dataTransfer.getData('text/plain');
    const card = Array.from(document.querySelectorAll('.card')).find(card => card.textContent === droppedData);

    if (card) {
        pile.appendChild(card);
        validatePiles();
    }
}

// Funció per validar les piles
function validatePiles() {
    const piles = document.querySelectorAll('.pile');
    piles.forEach(pile => {
        const cards = Array.from(pile.children).filter(child => child.classList.contains('card'));
        const correctOrder = getCorrectOrder(pile.dataset.tense);
        const currentOrder = cards.map(card => card.textContent.trim());

        if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) {
            cards.forEach(card => {
                card.classList.add('correct');
                // Feedback visual
                card.style.borderColor = '#28a745'; // Verd correcte
            });
        } else {
            cards.forEach(card => {
                card.classList.remove('correct');
                // Feedback visual
                card.style.borderColor = '#007bff'; // Color inicial
            });
        }
    });
}

// Funció per obtenir l'ordre correcte de les cartes segons el temps
function getCorrectOrder(tense) {
    switch (tense) {
        case 'present': return verbs.present[currentVerb];
        case 'imperfecte': return verbs.imperfecte[currentVerb];
        case 'futur': return verbs.futur[currentVerb];
        default: return [];
    }
}

// Funció per barallar les cartes
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Funció per establir un verb aleatori
function setRandomVerb() {
    const verbKeys = Object.keys(verbs.present);
    currentVerb = verbKeys[Math.floor(Math.random() * verbKeys.length)];
    allForms = [
        ...verbs.present[currentVerb],
        ...verbs.imperfecte[currentVerb],
        ...verbs.futur[currentVerb]
    ];

    document.getElementById('verb-to-order').textContent = `Ordena el verb: ${currentVerb}`;
}

// Funció per reiniciar el joc
function resetGame() {
    setRandomVerb();
    initGame(); // Re-inicialitza el joc amb el nou verb
}

// Inicialitzem el joc quan la pàgina es carrega
document.addEventListener('DOMContentLoaded', initGame);
