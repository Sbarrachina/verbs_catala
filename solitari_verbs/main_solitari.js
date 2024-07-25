document.addEventListener('DOMContentLoaded', () => {
    initGame();

    // Afegir event listener al botó de reinici
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetGame);
});

const verbs = {
    present: {
        'ser': ['sóc', 'ets', 'és', 'som', 'sou', 'són'],
        'tenir': ['tinc', 'tens', 'té', 'tenim', 'teniu', 'tenen'],
        'anar': ['vaig', 'vas', 'va', 'anem', 'aneu', 'van'],
        'fer': ['faig', 'fas', 'fa', 'fem', 'feu', 'fan'],
        'dir': ['dic', 'dius', 'diu', 'diem', 'dieu', 'diuen'],
        'veure': ['veig', 'veus', 'veu', 'veiem', 'veieu', 'veuen'],
        'saber': ['sé', 'saps', 'sap', 'sabem', 'sabeu', 'saben'],
        'voler': ['vull', 'vols', 'vol', 'volem', 'voleu', 'volen'],
        'poder': ['puc', 'pots', 'pot', 'podem', 'podeu', 'poden'],
        'prendre': ['prenc', 'prenies', 'pren', 'prenem', 'preneu', 'prenen'],
        'escriure': ['escric', 'escrius', 'escriu', 'escrivim', 'escriviu', 'escriuen'],
        'trobar': ['trobo', 'trobes', 'troba', 'trobem', 'trobeu', 'troben'],
        'passar': ['passo', 'passes', 'passa', 'passem', 'passeu', 'passen'],
        'utilitzar': ['utilitzo', 'utilitzes', 'utilitza', 'utilitzem', 'utilitzeu', 'utilitzen'],
        'jugar': ['jugo', 'jugues', 'juga', 'jugem', 'jugueu', 'juguen'],
        'viure': [' visc', 'vius', 'viu', 'vivim', 'viviu', 'viuen'],
        'caminar': ['camino', 'camines', 'camina', 'caminem', 'camineu', 'caminan'],
        'cantar': ['canto', 'cantes', 'canta', 'cantem', 'canteu', 'canten'],
        'cuinar': ['cuino', 'cuines', 'cuina', 'cuinem', 'cuineu', 'cuinen'],
        'pintar': ['pinto', 'pintes', 'pinta', 'pintem', 'pinteu', 'pinten'],
        'banyar': ['banyo', 'banyes', 'banya', 'banyem', 'banyeu', 'banyen'],
        'estudiar': ['estudio', 'estudies', 'estudia', 'estudiem', 'estudieu', 'estudien'],
        'beure': ['beu', 'beus', 'beu', 'bevem', 'beveu', 'beuen'],
        'dormir': ['dormo', 'dorms', 'dorm', 'dormim', 'dormiu', 'dormen'],
        'arribar': ['arribo', 'arribes', 'arriba', 'arribem', 'arribeu', 'arriben'],
        'comprendre': ['compren', 'comprens', 'compren', 'comprenem', 'compreneu', 'compren'],
        'entendre': ['entenc', 'entes', 'entén', 'entenem', 'enteneu', 'entenen'],
        'negar': ['nego', 'negues', 'nega', 'negem', 'negeu', 'neguen'],
        'escollir': ['escollisc', 'escollixes', 'escollix', 'escollim', 'escolliu', 'escollen'],
        'dirigir': ['dirigeixo', 'dirigeixes', 'dirigeix', 'dirigim', 'dirigiu', 'dirigeixen'],
        'viatjar': ['viatjo', 'viatges', 'viatja', 'viatgem', 'viatgeu', 'viatgen'],
        'conèixer': ['coneix', 'coneixes', 'coneix', 'coneixem', 'coneixeu', 'coneixen'],
        'treballar': ['treballo', 'treballes', 'treballa', 'treballem', 'treballeu', 'treballen'],
        'sortir': ['surto', 'surt', 'surt', 'sortim', 'sortiu', 'surten'],
        'pensar': ['penso', 'penses', 'pensa', 'pensem', 'penseu', 'pensen'],
        'parlar': ['parlo', 'parles', 'parla', 'parlem', 'parleu', 'parlen'],
        'entrenar': ['entreno', 'entrenes', 'entrena', 'entrenem', 'entreneu', 'entrenen'],
        'deixar': ['deixo', 'deixes', 'deixa', 'deixem', 'deixeu', 'deixen']
    },
    imperfecte: {
        'ser': ['era', 'eres', 'era', 'érem', 'éreu', 'eren'],
        'tenir': ['tenia', 'tenies', 'tenia', 'teníem', 'teníeu', 'tenien'],
        'anar': ['anava', 'anaves', 'anava', 'anàvem', 'anàveu', 'anaven'],
        'fer': ['feia', 'feies', 'feia', ' fèiem', 'feieu', 'feien'],
        'dir': ['deia', 'deies', 'deia', 'deiem', 'deieu', 'deien'],
        'veure': ['veia', 'veies', 'veia', 'véiem', 'vèieu', 'veien'],
        'saber': ['sabia', 'sabies', 'sabia', 'sabíem', 'sabíeu', 'sabien'],
        'voler': ['volia', 'volies', 'volia', 'volíem', 'volíeu', 'volien'],
        'poder': ['podia', 'podies', 'podia', 'podíem', 'podíeu', 'podien'],
        'prendre': ['prenía', 'prenies', 'prenía', 'preníem', 'preníeu', 'prenien'],
        'escriure': ['escriví', 'escrivies', 'escriví', 'escrivíem', 'escrivíeu', 'escrivien'],
        'trobar': ['trobaria', 'trobaries', 'trobaria', 'trobaríem', 'trobaríeu', 'trobarien'],
        'passar': ['passava', 'passaves', 'passava', 'passàvem', 'passàveu', 'passaven'],
        'utilitzar': ['utilitzava', 'utilitzaves', 'utilitzava', 'utilitzàvem', 'utilitzàveu', 'utilitzaven'],
        'jugar': ['jugava', 'jugaves', 'jugava', 'jugàvem', 'jugàveu', 'jugaven'],
        'viure': ['viví', 'vivies', 'viví', 'vivíem', 'vivíeu', 'vivien'],
        'caminar': ['caminava', 'caminaves', 'caminava', 'caminàvem', 'caminàveu', 'caminaven'],
        'cantar': ['cantava', 'cantaves', 'cantava', 'cantàvem', 'cantàveu', 'cantaven'],
        'cuinar': ['cuinava', 'cuinaves', 'cuinava', 'cuinàvem', 'cuinàveu', 'cuinaven'],
        'pintar': ['pintava', 'pintaves', 'pintava', 'pintàvem', 'pintàveu', 'pintaven'],
        'banyar': ['banyava', 'banyaves', 'banyava', 'banyàvem', 'banyàveu', 'banyaven'],
        'estudiar': ['estudiava', 'estudiaves', 'estudiava', 'estudiàvem', 'estudiàveu', 'estudiaven'],
        'beure': ['bevia', 'bevies', 'bevia', 'bevíem', 'bevieu', 'bevien'],
        'dormir': ['dormia', 'dormies', 'dormia', 'dormíem', 'dormíeu', 'dormien'],
        'arribar': ['arribava', 'arribaves', 'arribava', 'arribàvem', 'arribàveu', 'arribaven'],
        'comprendre': ['comprenia', 'comprenies', 'comprenia', 'compreníem', 'compreníeu', 'comprenien'],
        'entendre': ['entenia', 'entenies', 'entenia', 'enteníem', 'enteníeu', 'entenien'],
        'negar': ['negava', 'negaves', 'negava', 'negàvem', 'negàveu', 'negaven'],
        'escollir': ['escollia', 'escollies', 'escollia', 'escollíem', 'escollíeu', 'escollien'],
        'dirigir': ['dirigia', 'dirigies', 'dirigia', 'dirigíem', 'dirigíeu', 'dirigien'],
        'viatjar': ['viatjava', 'viatjaves', 'viatjava', 'viatjàvem', 'viatjàveu', 'viatjaven'],
        'conèixer': ['coneixia', 'coneixies', 'coneixia', 'coneixíem', 'coneixíeu', 'coneixien'],
        'treballar': ['treballava', 'treballaves', 'treballava', 'treballàvem', 'treballàveu', 'treballaven'],
        'sortir': ['sortia', 'sorties', 'sortia', 'sortíem', 'sortíeu', 'sortien'],
        'pensar': ['pensava', 'pensaves', 'pensava', 'pensàvem', 'pensàveu', 'pensaven'],
        'parlar': ['parlava', 'parlaves', 'parlava', 'parlàvem', 'parlàveu', 'parlaven'],
        'entrenar': ['entrenava', 'entrenaves', 'entrenava', 'entrenàvem', 'entrenàveu', 'entrenaven'],
        'deixar': ['deixava', 'deixaves', 'deixava', 'deixàvem', 'deixàveu', 'deixaven']
    },
    futur: {
        'ser': ['seré', 'seràs', 'serà', 'serem', 'sereu', 'seran'],
        'tenir': ['tindré', 'tindràs', 'tindrà', 'tindrem', 'tindreu', 'tindran'],
        'anar': ['anaré', 'anaràs', 'anarà', 'anirem', 'anireu', 'aniran'],
        'fer': ['faré', 'faràs', 'farà', 'farem', 'fareu', 'faran'],
        'dir': ['diré', 'diràs', 'dirà', 'direm', 'direu', 'diran'],
        'veure': ['veuré', 'veuràs', 'veurà', 'veurem', 'veureu', 'veuran'],
        'saber': ['sabré', 'sabràs', 'saberà', 'sabrem', 'sabreu', 'sabran'],
        'voler': ['vull', 'vols', 'vol', 'volem', 'voleu', 'volen'],
        'poder': ['podré', 'podràs', 'podrà', 'podrem', 'podreu', 'podran'],
        'prendre': ['prendré', 'prendràs', 'prendrà', 'prendrem', 'prendreu', 'prendran'],
        'escriure': ['escriuré', 'escriuràs', 'escriurà', 'escriurem', 'escriureu', 'escriuran'],
        'trobar': ['trobaré', 'trobaràs', 'trobarà', 'trobarem', 'trobareu', 'trobaran'],
        'passar': ['passaré', 'passaràs', 'passarà', 'passarem', 'passareu', 'passaran'],
        'utilitzar': ['utilitzaré', 'utilitzaràs', 'utilitzarà', 'utilitzarem', 'utilitzareu', 'utilitzaran'],
        'jugar': ['jugaré', 'jugaràs', 'jugarà', 'jugarem', 'jugareu', 'jugaran'],
        'viure': ['viuré', 'viuràs', 'viurà', 'viurem', 'viureu', 'viuran'],
        'caminar': ['caminaré', 'caminaràs', 'caminarà', 'camminarem', 'caminareu', 'caminaran'],
        'cantar': ['cantaré', 'cantaràs', 'cantarà', 'cantarem', 'cantareu', 'cantaràn'],
        'cuinar': ['cuinaré', 'cuinaràs', 'cuinarà', 'cuinarem', 'cuinareu', 'cuinaran'],
        'pintar': ['pintaré', 'pintaràs', 'pintarà', 'pintarem', 'pintareu', 'pintaran'],
        'banyar': ['banyaré', 'banyaràs', 'banyarà', 'banyarem', 'banyareu', 'banyaran'],
        'estudiar': ['estudiaré', 'estudiaràs', 'estudiarà', 'estudiarem', 'estudiareu', 'estudiaran'],
        'beure': ['beuré', 'beuràs', 'beurà', 'beurem', 'beureu', 'beuran'],
        'dormir': ['dormiré', 'dormiràs', 'dormirà', 'dormirem', 'dormireu', 'dormiran'],
        'arribar': ['arribaré', 'arribaràs', 'arribarà', 'arribarem', 'arribareu', 'arribaran'],
        'comprendre': ['comprendré', 'comprendràs', 'comprendrà', 'comprendrem', 'comprendreu', 'comprendran'],
        'entendre': ['entendré', 'entendràs', 'entendrà', 'entendrem', 'entendreu', 'entendran'],
        'negar': ['negaré', 'negaràs', 'negarà', 'negararem', 'negareu', 'negaran'],
        'escollir': ['escolliré', 'escolliràs', 'escollirà', 'escollirem', 'escollireu', 'escolliran'],
        'dirigir': ['dirigiré', 'dirigireu', 'dirigirem', 'dirigiré', 'dirigireu', 'dirigiran'],
        'viatjar': ['viatjaré', 'viatjaràs', 'viatjarà', 'viatjarem', 'viatjareu', 'viatjaran'],
        'conèixer': ['coneixeré', 'coneixeràs', 'coneixerà', 'coneixerem', 'coneixereu', 'coneixeran'],
        'treballar': ['treballaré', 'treballaràs', 'treballarà', 'treballarem', 'treballareu', 'treballaran'],
        'sortir': ['sortiré', 'sortiràs', 'sortirà', 'sortirem', 'sortireu', 'sortiran'],
        'pensar': ['pensaré', 'pensaràs', 'pensarà', 'pensarem', 'pensareu', 'pensaran'],
        'parlar': ['parlaré', 'parlaràs', 'parlarà', 'parlarem', 'parlareu', 'parlaran'],
        'entrenar': ['entrenaré', 'entrenaràs', 'entrenarà', 'entrenarem', 'entrenareu', 'entrenaran'],
        'deixar': ['deixaré', 'deixaràs', 'deixarà', 'deixarem', 'deixareu', 'deixaran']
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
