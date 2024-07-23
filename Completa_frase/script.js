const sentences = [
    {
        sentence: "Espero que tu ______ (venir) a la festa.",
        correct: "vinguis"
    },
    {
        sentence: "És important que nosaltres ______ (estudiar) cada dia.",
        correct: "estudiem"
    },
    {
        sentence: "Si jo ______ (tenir) temps, ho faria.",
        correct: "tingués"
    },
    {
        sentence: "No crec que ell ______ (saber) la resposta.",
        correct: "sàpiga"
    },
    {
        sentence: "Quan nosaltres ______ (arribar), ja havies marxat.",
        correct: "arribàrem"
    },
    {
        sentence: "Si ell ______ (ser) aquí, ho sabria.",
        correct: "fos"
    },
    {
        sentence: "Quan tu ______ (poder), vine a veure'm.",
        correct: "puguis"
    },
    {
        sentence: "M'agrada que vosaltres ______ (ballar) junts.",
        correct: "balleu"
    },
    {
        sentence: "És necessari que nosaltres ______ (fer) això.",
        correct: "fem"
    },
    {
        sentence: "Ell vol que nosaltres ______ (tenir) èxit.",
        correct: "tinguem"
    },
    {
        sentence: "És bo que nosaltres ______ (menjar) fruita.",
        correct: "mengem"
    },
    {
        sentence: "Dubto que ell ______ (venir) a temps.",
        correct: "vingui"
    },
    {
        sentence: "Si tu ______ (saber) la veritat, què faries?",
        correct: "sabessis"
    },
    {
        sentence: "És possible que ella ______ (anar) a la festa.",
        correct: "vagi"
    },
    {
        sentence: "Quan jo ______ (acabar) la feina, sortiré.",
        correct: "acabi"
    },
    {
        sentence: "És improbable que ell ______ (poder) venir.",
        correct: "pugui"
    },
    {
        sentence: "Espero que ells ______ (arribar) aviat.",
        correct: "arribin"
    },
    {
        sentence: "Si nosaltres ______ (ser) rics, viatjaríem molt.",
        correct: "fóssim"
    },
    {
        sentence: "M'alegro que tu ______ (tenir) èxit.",
        correct: "tinguis"
    },
    {
        sentence: "És important que nosaltres ______ (comprendre) això.",
        correct: "comprenguem"
    },
    {
        sentence: "Quan ell ______ (saber) la notícia, es posarà content.",
        correct: "sàpiga"
    },
    {
        sentence: "És probable que nosaltres ______ (anar) al cinema.",
        correct: "anem"
    },
    {
        sentence: "Ell vol que jo ______ (fer) això.",
        correct: "faci"
    },
    {
        sentence: "Quan vosaltres ______ (arribar), trucarem.",
        correct: "arribeu"
    },
    {
        sentence: "Si ell ______ (conèixer) la veritat, estaria content.",
        correct: "conegués"
    },
    {
        sentence: "És necessari que tu ______ (veure) això.",
        correct: "vegis"
    },
    {
        sentence: "Quan nosaltres ______ (sortir), t'ho direm.",
        correct: "sortim"
    },
    {
        sentence: "Espero que vosaltres ______ (comprendre) la situació.",
        correct: "comprengueu"
    },
    {
        sentence: "És important que ell ______ (saber) això.",
        correct: "sàpiga"
    },
    {
        sentence: "Si nosaltres ______ (tenir) temps, ho faríem.",
        correct: "tinguéssim"
    },
    {
        sentence: "És bo que tu ______ (menjar) verdura.",
        correct: "mengis"
    },
    {
        sentence: "Quan tu ______ (arribar) a casa, truca'm.",
        correct: "arribis"
    },
    {
        sentence: "És improbable que nosaltres ______ (veure) això.",
        correct: "veiem"
    },
    {
        sentence: "Espero que vosaltres ______ (venir) demà.",
        correct: "vingueu"
    },
    {
        sentence: "Si ell ______ (tenir) diners, viatjaria més.",
        correct: "tingués"
    },
    {
        sentence: "És necessari que nosaltres ______ (fer) això.",
        correct: "fem"
    },
    {
        sentence: "Quan nosaltres ______ (saber) la resposta, t'ho direm.",
        correct: "sapiguem"
    },
    {
        sentence: "Ell vol que nosaltres ______ (venir) aviat.",
        correct: "vinguem"
    },
    {
        sentence: "És bo que nosaltres ______ (beure) aigua.",
        correct: "beguem"
    },
    {
        sentence: "Dubto que vosaltres ______ (poder) fer-ho.",
        correct: "pugueu"
    },
    {
        sentence: "Si nosaltres ______ (saber) la veritat, ho diríem.",
        correct: "sabéssim"
    },
    {
        sentence: "És probable que ell ______ (venir) demà.",
        correct: "vingui"
    },
    {
        sentence: "Quan jo ______ (veure) la pel·lícula, t'ho diré.",
        correct: "vegi"
    },
    {
        sentence: "És improbable que ell ______ (saber) això.",
        correct: "sàpiga"
    },
    {
        sentence: "Espero que nosaltres ______ (arribar) aviat.",
        correct: "arribem"
    },
    {
        sentence: "Si ell ______ (tenir) temps, ho faria.",
        correct: "tingués"
    },
    {
        sentence: "És important que nosaltres ______ (veure) això.",
        correct: "veiem"
    },
    {
        sentence: "Quan tu ______ (sortir) de casa, avisa'm.",
        correct: "sortis"
    },
    {
        sentence: "És bo que nosaltres ______ (comprendre) la situació.",
        correct: "comprenguem"
    },
    {
        sentence: "Ell vol que nosaltres ______ (tenir) cura.",
        correct: "tinguem cura"
    }
];

const compoundSentencesComplex = [
    {
        sentence: "Quan ______ (arribar), t'ho diré.",
        correct: "hagis arribat"
    },
    {
        sentence: "Espero que ja ______ (veure) la pel·lícula.",
        correct: "hagis vist"
    },
    {
        sentence: "És possible que ells ja ______ (sortir).",
        correct: "hagin sortit"
    },
    {
        sentence: "Quan nosaltres ______ (acabar) la feina, podrem sortir.",
        correct: "haguem acabat"
    },
    {
        sentence: "Dubto que tu ______ (fer) els deures.",
        correct: "hagis fet"
    },
    {
        sentence: "Espero que nosaltres ______ (arribar) a temps.",
        correct: "hàgim arribat"
    },
    {
        sentence: "És probable que ell ______ (trucar) ja.",
        correct: "hagi trucat"
    },
    {
        sentence: "Quan tu ______ (llegir) el llibre, en parlarem.",
        correct: "hagis llegit"
    },
    {
        sentence: "No crec que nosaltres ______ (veure) això.",
        correct: "hàgim vist"
    },
    {
        sentence: "Espero que ells ______ (arribar) bé.",
        correct: "hagin arribat"
    },
    {
        sentence: "Quan nosaltres ______ (menjar), marxarem.",
        correct: "hàgim menjat"
    },
    {
        sentence: "Dubto que tu ______ (fer) la feina.",
        correct: "hagis fet"
    },
    {
        sentence: "És possible que ella ______ (escriure) la carta.",
        correct: "hagi escrit"
    },
    {
        sentence: "Espero que nosaltres ______ (veure) la pel·lícula.",
        correct: "hàgim vist"
    },
    {
        sentence: "Quan tu ______ (sortir) de casa, truca'm.",
        correct: "hagis sortit"
    },
    {
        sentence: "És probable que ell ______ (estudiar) molt.",
        correct: "hagi estudiat"
    },
    {
        sentence: "Espero que vosaltres ______ (començar) el projecte.",
        correct: "hàgiu començat"
    },
    {
        sentence: "Quan jo ______ (acabar) de llegir, et trucaré.",
        correct: "hagi acabat"
    },
    {
        sentence: "Dubto que ell ______ (dir) la veritat.",
        correct: "hagi dit"
    },
    {
        sentence: "És possible que nosaltres ja ______ (arribar).",
        correct: "hàgim arribat"
    },
    {
        sentence: "Espero que ells ______ (comprar) els tiquets.",
        correct: "hagin comprat"
    },
    {
        sentence: "Quan nosaltres ______ (escriure) l'informe, t'ho enviarem.",
        correct: "hàgim escrit"
    },
    {
        sentence: "Dubto que tu ______ (fer) tot sol.",
        correct: "hagis fet"
    },
    {
        sentence: "És possible que ell ja ______ (sortir).",
        correct: "hagi sortit"
    },
    {
        sentence: "Espero que nosaltres ______ (veure) aquest documental.",
        correct: "hàgim vist"
    },
    {
        sentence: "Quan tu ______ (arribar) a casa, avisa'm.",
        correct: "hagis arribat"
    },
    {
        sentence: "És probable que nosaltres ______ (escriure) la carta.",
        correct: "hàgim escrit"
    },
    {
        sentence: "Espero que ell ______ (poder) venir.",
        correct: "hagi pogut"
    },
    {
        sentence: "Quan jo ______ (veure) el missatge, et respondré.",
        correct: "hagi vist"
    },
    {
        sentence: "Dubto que nosaltres ______ (saber) la resposta.",
        correct: "hàgim sabut"
    },
    {
        sentence: "És possible que tu ______ (conèixer) algú nou.",
        correct: "hagis conegut"
    },
    {
        sentence: "Espero que nosaltres ______ (fer) una bona feina.",
        correct: "hàgim fet"
    },
    {
        sentence: "Quan tu ______ (llegir) el llibre, em diràs què tal.",
        correct: "hagis llegit"
    },
    {
        sentence: "És probable que ell ______ (viatjar) molt.",
        correct: "hagi viatjat"
    },
    {
        sentence: "Espero que nosaltres ______ (començar) el treball.",
        correct: "hàgim començat"
    },
    {
        sentence: "Quan jo ______ (acabar) el projecte, t'ho mostraré.",
        correct: "hagi acabat"
    },
    {
        sentence: "Dubto que ell ______ (parlar) amb ella.",
        correct: "hagi parlat"
    },
    {
        sentence: "És possible que nosaltres ja ______ (sortir).",
        correct: "hàgim sortit"
    },
    {
        sentence: "Espero que ells ______ (comprar) tot el necessari.",
        correct: "hagin comprat"
    },
    {
        sentence: "Quan nosaltres ______ (escriure) la carta, t'ho direm.",
        correct: "hàgim escrit"
    },
    {
        sentence: "Dubto que tu ______ (fer) tot el treball.",
        correct: "hagis fet"
    },
    {
        sentence: "És possible que ell ja ______ (sortir) de casa.",
        correct: "hagi sortit"
    },
    {
        sentence: "Espero que nosaltres ______ (veure) la pel·lícula.",
        correct: "hàgim vist"
    },
    {
        sentence: "Quan tu ______ (arribar), farem el sopar.",
        correct: "hagis arribat"
    },
    {
        sentence: "És probable que nosaltres ______ (acabar) la tasca.",
        correct: "hàgim acabat"
    },
    {
        sentence: "Espero que ell ______ (poder) arribar a temps.",
        correct: "hagi pogut"
    },
    {
        sentence: "Quan jo ______ (veure) la notificació, et trucaré.",
        correct: "hagi vist"
    },
    {
        sentence: "Dubto que nosaltres ______ (comprendre) tot.",
        correct: "hàgim comprès"
    },
    {
        sentence: "És possible que tu ______ (conèixer) algú interessant.",
        correct: "hagis conegut"
    },
    {
        sentence: "Espero que nosaltres ______ (fer) la presentació.",
        correct: "hàgim fet"
    }
];

const conjugationSentences = [
    {
        sentence: "Ells ______ (parlar) amb el professor ahir.",
        correct: "van parlar",
        options: [
            "van parlar",
            "parlaven",
            "parlen"
        ]
    },
    {
        sentence: "Tu ______ (escriure) una carta fa uns dies.",
        correct: "vas escriure",
        options: [
            "vas escriure",
            "escrivies",
            "escrius"
        ]
    },
    

        {
            "sentence": "Ells ______ (prendre) la decisió abans de la reunió.",
            "correct": "havien pres",
            "options": [
                "havien pres",
                "prengueren",
                "prenen"
            ]
        },
        {
            "sentence": "Jo ______ (treballar) en aquest projecte des de fa mesos.",
            "correct": "he treballat",
            "options": [
                "he treballat",
                "treballava",
                "treballaré"
            ]
        },
        {
            "sentence": "Vostè ______ (fer) un gran esforç per completar el treball.",
            "correct": "va fer",
            "options": [
                "va fer",
                "fa",
                "faria"
            ]
        },
        {
            "sentence": "Nosaltres ______ (anunciar) els guanyadors demà.",
            "correct": "anunciarem",
            "options": [
                "anunciarem",
                "anunciàvem",
                "anuncià"
            ]
        },
        {
            "sentence": "Quan ______ (arribar) el tren?",
            "correct": "arribarà",
            "options": [
                "arribarà",
                "arribava",
                "arribava"
            ]
        },
        {
            "sentence": "Ells ______ (tenir) la reunió a les 3 de la tarda.",
            "correct": "tenen",
            "options": [
                "tenen",
                "tenien",
                "tindran"
            ]
        },
        {
            "sentence": "Tu ______ (saber) la resposta abans de començar el test.",
            "correct": "sabies",
            "options": [
                "sabies",
                "saps",
                "sabràs"
            ]
        },
        {
            "sentence": "Nosaltres ______ (cantar) al concert l'any passat.",
            "correct": "vàrem cantar",
            "options": [
                "vàrem cantar",
                "cantarem",
                "cantàvem"
            ]
        },
        {
            "sentence": "Ell ______ (fer) tot el possible per ajudar-nos.",
            "correct": "va fer",
            "options": [
                "va fer",
                "fa",
                "faria"
            ]
        },
        {
            "sentence": "Jo ______ (haver) llegit el llibre abans de la classe.",
            "correct": "havia",
            "options": [
                "havia",
                "he",
                "haveré"
            ]
        },
        {
            "sentence": "Quan ______ (obrir) el nou restaurant?",
            "correct": "obre",
            "options": [
                "obre",
                "obrien",
                "obrirà"
            ]
        },
        {
            "sentence": "Ells ______ (escriure) una carta a la seva família.",
            "correct": "van escriure",
            "options": [
                "van escriure",
                "escriuen",
                "escriu"
            ]
        },
        {
            "sentence": "Nosaltres ______ (sentir) les notícies aquest matí.",
            "correct": "hem sentit",
            "options": [
                "hem sentit",
                "sentíem",
                "sentirem"
            ]
        },
        {
            "sentence": "Tu ______ (deixar) el llibre a casa l'altre dia.",
            "correct": "vas deixar",
            "options": [
                "vas deixar",
                "deixes",
                "deixaràs"
            ]
        },
        {
            "sentence": "Ell ______ (arribar) a la ciutat ahir.",
            "correct": "va arribar",
            "options": [
                "va arribar",
                "arriba",
                "arribarà"
            ]
        },
        {
            "sentence": "Nosaltres ______ (rebre) una carta de confirmació.",
            "correct": "hem rebut",
            "options": [
                "hem rebut",
                "rebérem",
                "reben"
            ]
        },
        {
            "sentence": "Jo ______ (prendre) el cafè amb llet aquest matí.",
            "correct": "he pres",
            "options": [
                "he pres",
                "prenc",
                "prendré"
            ]
        },
        {
            "sentence": "Quan ______ (venir) el teu amic?",
            "correct": "vindrà",
            "options": [
                "vindrà",
                "venia",
                "veu"
            ]
        },
        {
            "sentence": "Ells ______ (tornar) a casa després de les vacances.",
            "correct": "van tornar",
            "options": [
                "van tornar",
                "tornen",
                "tornaran"
            ]
        },
        {
            "sentence": "Tu ______ (decidir) canviar la teva carrera.",
            "correct": "vas decidir",
            "options": [
                "vas decidir",
                "decidies",
                "decidiràs"
            ]
        },
        {
            "sentence": "Ell ______ (sentir) un soroll estrany anit.",
            "correct": "va sentir",
            "options": [
                "va sentir",
                "sentia",
                "sentirà"
            ]
        },
        {
            "sentence": "Nosaltres ______ (viatjar) a Barcelona la setmana passada.",
            "correct": "vam viatjar",
            "options": [
                "vam viatjar",
                "viatgem",
                "viatjarem"
            ]
        },
        {
            "sentence": "Jo ______ (fer) una trucada fa poc.",
            "correct": "he fet",
            "options": [
                "he fet",
                "feia",
                "faré"
            ]
        },
        {
            "sentence": "Ells ______ (donar) una sorpresa a la festa.",
            "correct": "van donar",
            "options": [
                "van donar",
                "donen",
                "donaran"
            ]
        },
        {
            "sentence": "Tu ______ (triar) el millor candidat per al lloc.",
            "correct": "vas triar",
            "options": [
                "vas triar",
                "tries",
                "triaràs"
            ]
        },
        {
            "sentence": "Nosaltres ______ (fer) un exercici molt difícil.",
            "correct": "hem fet",
            "options": [
                "hem fet",
                "fèiem",
                "farem"
            ]
        },
        {
            "sentence": "Ells ______ (caminar) fins al parc cada dia.",
            "correct": "caminaven",
            "options": [
                "caminaven",
                "caminen",
                "caminaran"
            ]
        },
        {
            "sentence": "Jo ______ (saber) la veritat abans que tu.",
            "correct": "sabia",
            "options": [
                "sabia",
                "sé",
                "sabré"
            ]
        },
        {
            "sentence": "Tu ______ (veure) la nova pel·lícula?",
            "correct": "has vist",
            "options": [
                "has vist",
                "veies",
                "veuràs"
            ]
        },
        {
            "sentence": "Nosaltres ______ (preparar) un sopar especial.",
            "correct": "hem preparat",
            "options": [
                "hem preparat",
                "preparàvem",
                "prepararem"
            ]
        },
        {
            "sentence": "Ell ______ (jugar) a futbol quan era petit.",
            "correct": "jugava",
            "options": [
                "jugava",
                "juga",
                "jugarà"
            ]
        },
        {
            "sentence": "Tu ______ (deixar) el teu telèfon a casa.",
            "correct": "vas deixar",
            "options": [
                "vas deixar",
                "deixes",
                "deixaràs"
            ]
        },
        {
            "sentence": "Ells ______ (buscar) una solució al problema.",
            "correct": "busquen",
            "options": [
                "busquen",
                "buscaven",
                "buscaran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (agafar) el tren de les 10.",
            "correct": "vam agafar",
            "options": [
                "vam agafar",
                "agafem",
                "agafarem"
            ]
        },
        {
            "sentence": "Jo ______ (començar) a estudiar per al final de curs.",
            "correct": "he començat",
            "options": [
                "he començat",
                "començava",
                "començaré"
            ]
        },
        {
            "sentence": "Ell ______ (explicar) el projecte amb detall.",
            "correct": "va explicar",
            "options": [
                "va explicar",
                "explica",
                "explicarà"
            ]
        },
        {
            "sentence": "Tu ______ (conèixer) a la nova companya de classe.",
            "correct": "coneixes",
            "options": [
                "coneixes",
                "conec",
                "coneixeràs"
            ]
        },
        {
            "sentence": "Ells ______ (decidir) marxar de vacances a l'estiu.",
            "correct": "van decidir",
            "options": [
                "van decidir",
                "decideixen",
                "decidiran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (tenir) una reunió amb el client demà.",
            "correct": "tenim",
            "options": [
                "tenim",
                "teníem",
                "tindrem"
            ]
        },
        {
            "sentence": "Jo ______ (provar) el nou restaurant divendres passat.",
            "correct": "vaig provar",
            "options": [
                "vaig provar",
                "provo",
                "provaré"
            ]
        },
        {
            "sentence": "Tu ______ (fer) una excursió el cap de setmana passat.",
            "correct": "vas fer",
            "options": [
                "vas fer",
                "fas",
                "faràs"
            ]
        },
        {
            "sentence": "Ells ______ (passar) la nit en una cabana.",
            "correct": "van passar",
            "options": [
                "van passar",
                "passen",
                "passaran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (fer) els deures abans de sopar.",
            "correct": "hem fet",
            "options": [
                "hem fet",
                "feien",
                "farem"
            ]
        },
        {
            "sentence": "Ell ______ (tenir) una entrevista amb el director.",
            "correct": "té",
            "options": [
                "té",
                "tenia",
                "tindrà"
            ]
        },
        {
            "sentence": "Jo ______ (preparar) el sopar ahir.",
            "correct": "vaig preparar",
            "options": [
                "vaig preparar",
                "preparo",
                "prepararé"
            ]
        },
        {
            "sentence": "Tu ______ (sentir) el soroll a la nit?",
            "correct": "vas sentir",
            "options": [
                "vas sentir",
                "sents",
                "sentiràs"
            ]
        },
        {
            "sentence": "Ells ______ (construir) una casa nova l'any passat.",
            "correct": "van construir",
            "options": [
                "van construir",
                "construeixen",
                "construiran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (començar) a treballar a les 9.",
            "correct": "comencem",
            "options": [
                "comencem",
                "començàvem",
                "començarem"
            ]
        },
        {
            "sentence": "Jo ______ (demanar) ajuda quan la vaig necessitar.",
            "correct": "vaig demanar",
            "options": [
                "vaig demanar",
                "demano",
                "demanaré"
            ]
        },
        {
            "sentence": "Ell ______ (voler) veure la pel·lícula.",
            "correct": "volia",
            "options": [
                "volia",
                "vol",
                "volerà"
            ]
        },
        {
            "sentence": "Tu ______ (anunciar) la notícia ahir.",
            "correct": "vas anunciar",
            "options": [
                "vas anunciar",
                "anuncies",
                "anunciaràs"
            ]
        },
        {
            "sentence": "Ells ______ (parlar) amb el client durant l'última reunió.",
            "correct": "van parlar",
            "options": [
                "van parlar",
                "parlen",
                "parlaran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (agafar) un taxi per arribar ràpidament.",
            "correct": "vam agafar",
            "options": [
                "vam agafar",
                "agafem",
                "agafarem"
            ]
        },
        {
            "sentence": "Jo ______ (jugar) a tennis quan era jove.",
            "correct": "jugava",
            "options": [
                "jugava",
                "jugo",
                "jugaré"
            ]
        },
        {
            "sentence": "Tu ______ (entendre) el que volia dir.",
            "correct": "vas entendre",
            "options": [
                "vas entendre",
                "entens",
                "entendràs"
            ]
        },
        {
            "sentence": "Ells ______ (dormir) fins a les 11 del matí.",
            "correct": "van dormir",
            "options": [
                "van dormir",
                "dormen",
                "dormiran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (buscar) una solució per al problema.",
            "correct": "hem buscat",
            "options": [
                "hem buscat",
                "buscàvem",
                "buscarem"
            ]
        },
        {
            "sentence": "Jo ______ (comprendre) la situació ara mateix.",
            "correct": "comprenc",
            "options": [
                "comprenc",
                "comprenia",
                "comprendré"
            ]
        },
        {
            "sentence": "Tu ______ (decidir) què fer al final.",
            "correct": "vas decidir",
            "options": [
                "vas decidir",
                "decideixes",
                "decidiràs"
            ]
        },
        {
            "sentence": "Ell ______ (arribar) a casa després de la feina.",
            "correct": "va arribar",
            "options": [
                "va arribar",
                "arriba",
                "arribarà"
            ]
        },
        {
            "sentence": "Nosaltres ______ (escriure) una carta formal.",
            "correct": "hem escrit",
            "options": [
                "hem escrit",
                "escrivíem",
                "escriurem"
            ]
        },
        {
            "sentence": "Jo ______ (parlar) amb el professor sobre el tema.",
            "correct": "he parlat",
            "options": [
                "he parlat",
                "parlava",
                "parlaré"
            ]
        },
        {
            "sentence": "Tu ______ (tenir) una reunió important demà.",
            "correct": "tindràs",
            "options": [
                "tindràs",
                "tenies",
                "tens"
            ]
        },
        {
            "sentence": "Ells ______ (entendre) les explicacions clarament.",
            "correct": "entengueren",
            "options": [
                "entengueren",
                "entenen",
                "entendran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (caminar) pel bosc durant hores.",
            "correct": "vam caminar",
            "options": [
                "vam caminar",
                "caminem",
                "caminaran"
            ]
        },
        {
            "sentence": "Jo ______ (fer) una gran feina en el projecte.",
            "correct": "he fet",
            "options": [
                "he fet",
                "feia",
                "faré"
            ]
        },
        {
            "sentence": "Tu ______ (poder) venir a la reunió?",
            "correct": "podies",
            "options": [
                "podies",
                "pots",
                "podràs"
            ]
        },
        {
            "sentence": "Ells ______ (trobar) una solució al problema.",
            "correct": "van trobar",
            "options": [
                "van trobar",
                "troben",
                "trobaran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (enviar) el paquet ahir.",
            "correct": "vam enviar",
            "options": [
                "vam enviar",
                "enviem",
                "enviarem"
            ]
        },
        {
            "sentence": "Jo ______ (viatjar) a París l'any passat.",
            "correct": "vaig viatjar",
            "options": [
                "vaig viatjar",
                "viatjo",
                "viatjaré"
            ]
        },
        {
            "sentence": "Tu ______ (fer) servir el mateix mètode abans?",
            "correct": "vas fer servir",
            "options": [
                "vas fer servir",
                "fas servir",
                "faràs servir"
            ]
        },
        {
            "sentence": "Ells ______ (perdre) el seu temps a la reunió.",
            "correct": "van perdre",
            "options": [
                "van perdre",
                "perden",
                "perdran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (jugar) a videojocs tot el dia.",
            "correct": "vam jugar",
            "options": [
                "vam jugar",
                "juguem",
                "jugaran"
            ]
        },
        {
            "sentence": "Jo ______ (parlar) amb la teva mare ahir.",
            "correct": "vaig parlar",
            "options": [
                "vaig parlar",
                "parlo",
                "parlaré"
            ]
        },
        {
            "sentence": "Tu ______ (començar) a treballar a la nova empresa.",
            "correct": "vas començar",
            "options": [
                "vas començar",
                "comences",
                "començaràs"
            ]
        },
        {
            "sentence": "Ells ______ (anunciar) els resultats avui.",
            "correct": "anunciaran",
            "options": [
                "anunciaran",
                "anunciaven",
                "anunciaren"
            ]
        },
        {
            "sentence": "Nosaltres ______ (fer) les tasques domèstiques ahir.",
            "correct": "vam fer",
            "options": [
                "vam fer",
                "fem",
                "farem"
            ]
        },
        {
            "sentence": "Jo ______ (tenir) una reunió amb el director.",
            "correct": "tinc",
            "options": [
                "tinc",
                "tenia",
                "tindré"
            ]
        },
        {
            "sentence": "Tu ______ (explicar) el concepte amb claredat.",
            "correct": "vas explicar",
            "options": [
                "vas explicar",
                "expliqueu",
                "explicareu"
            ]
        },
        {
            "sentence": "Ells ______ (sentir) la música des de lluny.",
            "correct": "van sentir",
            "options": [
                "van sentir",
                "senten",
                "sentiran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (començar) el curs a l'octubre.",
            "correct": "començarem",
            "options": [
                "començarem",
                "començàvem",
                "començarem"
            ]
        },
        {
            "sentence": "Jo ______ (agafar) una trucada mentre feia el dinar.",
            "correct": "vaig agafar",
            "options": [
                "vaig agafar",
                "agafo",
                "agafaré"
            ]
        },
        {
            "sentence": "Tu ______ (entendre) les instruccions correctament.",
            "correct": "vas entendre",
            "options": [
                "vas entendre",
                "entens",
                "entendràs"
            ]
        },
        {
            "sentence": "Ells ______ (fer) una festa de sorpresa.",
            "correct": "van fer",
            "options": [
                "van fer",
                "fan",
                "faran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (veure) la pel·lícula el mes passat.",
            "correct": "vam veure",
            "options": [
                "vam veure",
                "veiem",
                "veurem"
            ]
        },
        {
            "sentence": "Jo ______ (donar) el meu suport a la causa.",
            "correct": "he donat",
            "options": [
                "he donat",
                "donava",
                "donaré"
            ]
        },
        {
            "sentence": "Tu ______ (tornar) a casa després de l'escola.",
            "correct": "vas tornar",
            "options": [
                "vas tornar",
                "tornes",
                "tornaràs"
            ]
        },
        {
            "sentence": "Ells ______ (viatjar) a l'estranger per feina.",
            "correct": "van viatjar",
            "options": [
                "van viatjar",
                "viatgen",
                "viatjaran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (fer) una pausa al migdia.",
            "correct": "vam fer",
            "options": [
                "vam fer",
                "fem",
                "farem"
            ]
        },
        {
            "sentence": "Jo ______ (donar) una presentació a la conferència.",
            "correct": "vaig donar",
            "options": [
                "vaig donar",
                "dono",
                "donaré"
            ]
        },
        {
            "sentence": "Tu ______ (acabar) els estudis el mes passat.",
            "correct": "vas acabar",
            "options": [
                "vas acabar",
                "acabes",
                "acabaràs"
            ]
        },
        {
            "sentence": "Ells ______ (voler) fer més exercici.",
            "correct": "volen",
            "options": [
                "volen",
                "volien",
                "volerà"
            ]
        },
        {
            "sentence": "Nosaltres ______ (crear) un nou projecte.",
            "correct": "hem creat",
            "options": [
                "hem creat",
                "creàvem",
                "crearem"
            ]
        },
        {
            "sentence": "Jo ______ (començar) a llegir el llibre ahir.",
            "correct": "vaig començar",
            "options": [
                "vaig començar",
                "començo",
                "començaré"
            ]
        },
        {
            "sentence": "Tu ______ (veure) la notícia a la televisió?",
            "correct": "vas veure",
            "options": [
                "vas veure",
                "veus",
                "veuràs"
            ]
        },
        {
            "sentence": "Ells ______ (tornar) de vacances al setembre.",
            "correct": "van tornar",
            "options": [
                "van tornar",
                "tornen",
                "tornaran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (fer) les compres ahir.",
            "correct": "vam fer",
            "options": [
                "vam fer",
                "fem",
                "farem"
            ]
        },
        {
            "sentence": "Jo ______ (viatjar) a Madrid la setmana passada.",
            "correct": "vaig viatjar",
            "options": [
                "vaig viatjar",
                "viatjo",
                "viatjaré"
            ]
        },
        {
            "sentence": "Tu ______ (tenir) una reunió amb el teu cap.",
            "correct": "tens",
            "options": [
                "tens",
                "tenies",
                "tindràs"
            ]
        },
        {
            "sentence": "Ells ______ (escriure) una carta formal.",
            "correct": "van escriure",
            "options": [
                "van escriure",
                "escriuen",
                "escriuran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (viatjar) a la costa l'estiu passat.",
            "correct": "vam viatjar",
            "options": [
                "vam viatjar",
                "viatgem",
                "viatjarem"
            ]
        },
        {
            "sentence": "Jo ______ (fer) una revisió al meu informe.",
            "correct": "he fet",
            "options": [
                "he fet",
                "feia",
                "faré"
            ]
        },
        {
            "sentence": "Tu ______ (comprendre) el missatge que vaig enviar.",
            "correct": "vas comprendre",
            "options": [
                "vas comprendre",
                "comprens",
                "comprendràs"
            ]
        },
        {
            "sentence": "Ells ______ (prendre) un cafè al matí.",
            "correct": "prenen",
            "options": [
                "prenen",
                "prengueren",
                "prendran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (parlar) amb l'expert sobre el tema.",
            "correct": "hem parlat",
            "options": [
                "hem parlat",
                "parlàvem",
                "parlarem"
            ]
        },
        {
            "sentence": "Jo ______ (donar) una conferència a la universitat.",
            "correct": "vaig donar",
            "options": [
                "vaig donar",
                "dono",
                "donaré"
            ]
        },
        {
            "sentence": "Tu ______ (viatjar) a Itàlia el juny passat.",
            "correct": "vas viatjar",
            "options": [
                "vas viatjar",
                "viatges",
                "viatjaràs"
            ]
        },
        {
            "sentence": "Ells ______ (practicar) esport regularment.",
            "correct": "practiquen",
            "options": [
                "practiquen",
                "practiquen",
                "practiquen"
            ]
        },
        {
            "sentence": "Nosaltres ______ (començar) a fer exercici fa un mes.",
            "correct": "vam començar",
            "options": [
                "vam començar",
                "comencem",
                "començarem"
            ]
        },
        {
            "sentence": "Jo ______ (escriure) un informe sobre el projecte.",
            "correct": "he escrit",
            "options": [
                "he escrit",
                "escrivíem",
                "escriuré"
            ]
        },
        {
            "sentence": "Tu ______ (fer) servir el teu temps eficientment.",
            "correct": "has fet servir",
            "options": [
                "has fet servir",
                "fas servir",
                "faràs servir"
            ]
        },
        {
            "sentence": "Ells ______ (parlar) amb el client l'última setmana.",
            "correct": "van parlar",
            "options": [
                "van parlar",
                "parlen",
                "parlaven"
            ]
        },
        {
            "sentence": "Nosaltres ______ (passar) temps junts en família.",
            "correct": "vam passar",
            "options": [
                "vam passar",
                "passem",
                "passarem"
            ]
        },
        {
            "sentence": "Jo ______ (viatjar) a Nova York fa dos anys.",
            "correct": "vaig viatjar",
            "options": [
                "vaig viatjar",
                "viatjo",
                "viatjaré"
            ]
        },
        {
            "sentence": "Tu ______ (fer) la teva feina amb diligència.",
            "correct": "vas fer",
            "options": [
                "vas fer",
                "fas",
                "faràs"
            ]
        },
        {
            "sentence": "Ells ______ (fer) exercici al gimnàs cada dia.",
            "correct": "fan",
            "options": [
                "fan",
                "feien",
                "faran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (decidir) avançar amb el projecte.",
            "correct": "vam decidir",
            "options": [
                "vam decidir",
                "decidim",
                "decidirem"
            ]
        },
        {
            "sentence": "Jo ______ (passar) temps a la platja cada estiu.",
            "correct": "passo",
            "options": [
                "passo",
                "passava",
                "passaré"
            ]
        },
        {
            "sentence": "Tu ______ (enviar) el correu electrònic a temps?",
            "correct": "vas enviar",
            "options": [
                "vas enviar",
                "enviaves",
                "enviaràs"
            ]
        },
        {
            "sentence": "Ells ______ (visitar) llocs d'interès durant les vacances.",
            "correct": "van visitar",
            "options": [
                "van visitar",
                "visiten",
                "visitaran"
            ]
        },
        {
            "sentence": "Nosaltres ______ (assistir) a una reunió important.",
            "correct": "vam assistir",
            "options": [
                "vam assistir",
                "assisteixen",
                "assistirem"
            ]
        },
        {
            "sentence": "Jo ______ (fer) una nova recepta per al sopar.",
            "correct": "vaig fer",
            "options": [
                "vaig fer",
                "faig",
                "faré"
            ]
        },
        {
            "sentence": "Tu ______ (arribar) tard a la reunió.",
            "correct": "vas arribar",
            "options": [
                "vas arribar",
                "arribes",
                "arribaràs"
            ]
        },
        {
            "sentence": "Ell ______ (fer) una compra important ahir.",
            "correct": "va fer",
            "options": [
                "va fer",
                "fa",
                "farà"
            ]
        },
        {
            "sentence": "Nosaltres ______ (rebre) la notificació la setmana passada.",
            "correct": "vam rebre",
            "options": [
                "vam rebre",
                "rebem",
                "rebreem"
            ]
        },
        {
            sentence: "Nosaltres ______ (viatjar) a París aquest estiu.",
            correct: "viatgem",
            options: [
                "viatgem",
                "viatjarem",
                "viatjàvem"
            ]
        },
        {
            sentence: "Ells ______ (decidir) si accepten l'oferta.",
            correct: "decidiran",
            options: [
                "decidiran",
                "decideixen",
                "decidien"
            ]
        },
        {
            sentence: "Vosaltres ______ (fer) el treball a temps.",
            correct: "fareu",
            options: [
                "fareu",
                "feu",
                "feíeu"
            ]
        },
        {
            sentence: "Jo ______ (parlar) amb el director sobre el projecte.",
            correct: "parlo",
            options: [
                "parlo",
                "parlava",
                "parlaré"
            ]
        },
        {
            sentence: "Ell ______ (poder) ajudar-te amb el teu problema.",
            correct: "pot",
            options: [
                "pot",
                "podia",
                "podrà"
            ]
        },
        {
            sentence: "Tu ______ (ser) amable amb tothom.",
            correct: "sigues",
            options: [
                "sigues",
                "eres",
                "seràs"
            ]
        },
        {
            sentence: "Nosaltres ______ (entendre) la situació millor ara.",
            correct: "entendrem",
            options: [
                "entendrem",
                "entenem",
                "enteníem"
            ]
        },
        {
            sentence: "Ells ______ (assistir) a la reunió si són convidats.",
            correct: "assistiran",
            options: [
                "assistiran",
                "assisteixen",
                "assistien"
            ]
        },
        {
            sentence: "Vosaltres ______ (tenir) temps per acabar el projecte.",
            correct: "tindreu",
            options: [
                "tindreu",
                "teniu",
                "teníeu"
            ]
        },
        {
            sentence: "Jo ______ (escriure) una carta a la meva amiga.",
            correct: "escric",
            options: [
                "escric",
                "escrivia",
                "escriuré"
            ]
        },
        {
            sentence: "Ell ______ (voler) saber com va anar la reunió.",
            correct: "vol",
            options: [
                "vol",
                "volia",
                "volerà"
            ]
        },
        {
            sentence: "Tu ______ (comprar) els regals per a la festa?",
            correct: "has comprat",
            options: [
                "has comprat",
                "compraves",
                "compraràs"
            ]
        },
        {
            sentence: "Nosaltres ______ (fer) les reserves amb antelació.",
            correct: "fem",
            options: [
                "fem",
                "feíem",
                "farem"
            ]
        },
        {
            sentence: "Ells ______ (practicar) l'idioma cada dia.",
            correct: "practiquen",
            options: [
                "practiquen",
                "practicaven",
                "practicaran"
            ]
        },
        {
            sentence: "Vosaltres ______ (rebre) una carta de confirmació aviat.",
            correct: "rebreu",
            options: [
                "rebreu",
                "rebeu",
                "rebíeu"
            ]
        },
        {
            sentence: "Jo ______ (decidir) estudiar a l'estranger l'any vinent.",
            correct: "decidiré",
            options: [
                "decidiré",
                "decideixo",
                "decidí"
            ]
        },
        {
            sentence: "Ell ______ (enviar) els documents a temps.",
            correct: "enviarà",
            options: [
                "enviarà",
                "envia",
                "enviava"
            ]
        },
        {
            sentence: "Tu ______ (visitar) el museu si t'interessa l'art.",
            correct: "visitaràs",
            options: [
                "visitaràs",
                "visites",
                "visitaves"
            ]
        },
        {
            sentence: "Nosaltres ______ (comprar) els bitllets aviat.",
            correct: "comprarem",
            options: [
                "comprarem",
                "comprem",
                "compràvem"
            ]
        },
        {
            sentence: "Ells ______ (llegir) el llibre abans de la reunió.",
            correct: "llegiran",
            options: [
                "llegiran",
                "llegeixen",
                "llegien"
            ]
        },
        {
            sentence: "Vosaltres ______ (canviar) el disseny si és necessari.",
            correct: "canviareu",
            options: [
                "canviareu",
                "canvieu",
                "canviàveu"
            ]
        },
        {
            sentence: "Jo ______ (recollir) la documentació després de la reunió.",
            correct: "recolliré",
            options: [
                "recolliré",
                "recullo",
                "recollia"
            ]
        },
        {
            sentence: "Ell ______ (explicar) el projecte amb detall.",
            correct: "explicarà",
            options: [
                "explicarà",
                "explica",
                "explicava"
            ]
        },
        {
            sentence: "Tu ______ (treballar) amb l'equip a partir de dilluns.",
            correct: "treballaràs",
            options: [
                "treballaràs",
                "treballes",
                "treballaves"
            ]
        },
        {
            sentence: "Nosaltres ______ (parlar) amb els clients a la tarda.",
            correct: "parlarem",
            options: [
                "parlarem",
                "parlem",
                "parlàvem"
            ]
        },
        {
            sentence: "Ells ______ (fer) un esforç extra per completar la feina.",
            correct: "faran",
            options: [
                "faran",
                "fan",
                "feien"
            ]
        },
        {
            sentence: "Vosaltres ______ (veure) els resultats la setmana que ve.",
            correct: "veureu",
            options: [
                "veureu",
                "veieu",
                "vèieu"
            ]
        },
        {
            sentence: "Jo ______ (demanar) una explicació si no entenc alguna cosa.",
            correct: "demanaré",
            options: [
                "demanaré",
                "demano",
                "demanava"
            ]
        },
        {
            sentence: "Ell ______ (organitzar) una festa per al seu aniversari.",
            correct: "organitzarà",
            options: [
                "organitzarà",
                "organitza",
                "organitzava"
            ]
        },
        {
            sentence: "Tu ______ (cuidar) millor del teu temps.",
            correct: "cuida",
            options: [
                "cuida",
                "cuidaves",
                "cuidaràs"
            ]
        },
        {
            sentence: "Nosaltres ______ (deixar) la feina a temps.",
            correct: "deixarem",
            options: [
                "deixarem",
                "deixem",
                "deixàvem"
            ]
        },
        {
            sentence: "Ells ______ (seguir) el pla establert.",
            correct: "seguiran",
            options: [
                "seguiran",
                "segueixen",
                "seguien"
            ]
        },
        {
            sentence: "Vosaltres ______ (poder) solucionar el problema aviat.",
            correct: "podreu",
            options: [
                "podreu",
                "podeu",
                "poderíeu"
            ]
        },
        {
            sentence: "Jo ______ (arribar) a temps per a la reunió.",
            correct: "arribaré",
            options: [
                "arribaré",
                "arribo",
                "arribava"
            ]
        },
        {
            sentence: "Ell ______ (mostrar) el seu treball amb orgull.",
            correct: "mostrarà",
            options: [
                "mostrarà",
                "mostra",
                "mostrava"
            ]
        },
        {
            sentence: "Tu ______ (conèixer) noves persones a l'esdeveniment.",
            correct: "conèixer",
            options: [
                "conèixer",
                "coneixes",
                "coneixies"
            ]
        },
        {
            sentence: "Nosaltres ______ (assolir) els nostres objectius en poc temps.",
            correct: "assolirem",
            options: [
                "assolirem",
                "assolim",
                "assolíem"
            ]
        },
        {
            sentence: "Ells ______ (demanar) una ampliació del termini.",
            correct: "demanaran",
            options: [
                "demanaran",
                "demanden",
                "demanaven"
            ]
        },
        {
            sentence: "Vosaltres ______ (entendre) la importància del projecte.",
            correct: "entendreu",
            options: [
                "entendreu",
                "enteneu",
                "enteníeu"
            ]
        },
        {
            sentence: "Jo ______ (tenir) una reunió amb el client demà.",
            correct: "tindré",
            options: [
                "tindré",
                "tinc",
                "tenia"
            ]
        },
        {
            sentence: "Ell ______ (arribar) abans de l'hora prevista.",
            correct: "arribarà",
            options: [
                "arribarà",
                "arriba",
                "arribava"
            ]
        },
        {
            sentence: "Tu ______ (dir) el que penses amb sinceritat.",
            correct: "digues",
            options: [
                "digues",
                "dius",
                "diràs"
            ]
        },
        {
            sentence: "Nosaltres ______ (buscar) una solució immediata.",
            correct: "buscarem",
            options: [
                "buscarem",
                "busquem",
                "buscàvem"
            ]
        },
        {
            sentence: "Ells ______ (fer) el possible per ajudar.",
            correct: "faran",
            options: [
                "faran",
                "fan",
                "feien"
            ]
        },
        {
            sentence: "Vosaltres ______ (escriure) el vostre informe abans de la data límit.",
            correct: "escriureu",
            options: [
                "escriureu",
                "escriviu",
                "escrivíeu"
            ]
        },
        {
            sentence: "Jo ______ (explicar) el procés detalladament.",
            correct: "explicaré",
            options: [
                "explicaré",
                "explico",
                "explicava"
            ]
        },
        {
            sentence: "Ell ______ (parlar) amb els membres de l'equip.",
            correct: "parlarà",
            options: [
                "parlarà",
                "parla",
                "parlava"
            ]
        },
        {
            sentence: "Tu ______ (tenir) temps per revisar els documents.",
            correct: "tindràs",
            options: [
                "tindràs",
                "tens",
                "tenies"
            ]
        },
        {
            sentence: "Nosaltres ______ (aconseguir) el que volem.",
            correct: "aconseguirem",
            options: [
                "aconseguirem",
                "aconseguim",
                "aconseguíem"
            ]
        },
        {
            sentence: "Ells ______ (dissenyar) una nova estratègia.",
            correct: "dissenyaran",
            options: [
                "dissenyaran",
                "dissenyen",
                "dissenyaven"
            ]
        },
        {
            sentence: "Vosaltres ______ (treballar) en el projecte fins tard.",
            correct: "treballareu",
            options: [
                "treballareu",
                "treballeu",
                "treballàveu"
            ]
        },
        {
            sentence: "Jo ______ (cuidar) del meu benestar cada dia.",
            correct: "cuido",
            options: [
                "cuido",
                "cuidava",
                "cuidaré"
            ]
        },
        {
            sentence: "Ell ______ (comprendre) la importància de la situació.",
            correct: "comprèn",
            options: [
                "comprèn",
                "comprenia",
                "comprendrà"
            ]
        },
        {
            sentence: "Tu ______ (practicar) l'esport que t'agrada.",
            correct: "practiques",
            options: [
                "practiques",
                "practicaves",
                "practicaràs"
            ]
        },
        {
            sentence: "Nosaltres ______ (informar) els clients sobre els canvis.",
            correct: "informarem",
            options: [
                "informarem",
                "informem",
                "informàvem"
            ]
        },
        {
            sentence: "Ells ______ (fer) una gran feina en el projecte.",
            correct: "faran",
            options: [
                "faran",
                "fan",
                "feien"
            ]
        },
        {
            sentence: "Vosaltres ______ (comprendre) la necessitat de l'adaptació.",
            correct: "comprendràs",
            options: [
                "comprendràs",
                "compreneu",
                "compreníeu"
            ]
        },
        {
            sentence: "Jo ______ (mantenir) el compromís amb el projecte.",
            correct: "mantinc",
            options: [
                "mantinc",
                "mantenia",
                "mantindré"
            ]
        },
        {
            sentence: "Ell ______ (visitar) el museu amb els amics.",
            correct: "visitarà",
            options: [
                "visitarà",
                "visita",
                "visitava"
            ]
        },
        {
            sentence: "Tu ______ (compartir) les teves idees amb el grup.",
            correct: "compartiràs",
            options: [
                "compartiràs",
                "comparties",
                "compartiràs"
            ]
        },
        {
            sentence: "Nosaltres ______ (jugar) a futbol cada diumenge.",
            correct: "juguem",
            options: [
                "juguem",
                "jugàvem",
                "jugaríem"
            ]
        },
        {
            sentence: "Ells ______ (demanar) una reunió amb el director.",
            correct: "demanaran",
            options: [
                "demanaran",
                "demanden",
                "demanaven"
            ]
        },
        {
            sentence: "Vosaltres ______ (organitzar) l'esdeveniment per al proper mes.",
            correct: "organitzareu",
            options: [
                "organitzareu",
                "organitzeu",
                "organitzàveu"
            ]
        },
        {
            sentence: "Jo ______ (resoldre) els problemes que apareguin.",
            correct: "resoldré",
            options: [
                "resoldré",
                "resolc",
                "resoldria"
            ]
        },
        {
            sentence: "Ell ______ (fer) tot el possible per ajudar.",
            correct: "farà",
            options: [
                "farà",
                "fa",
                "feia"
            ]
        },
        {
            sentence: "Tu ______ (conèixer) la nova política de l'empresa.",
            correct: "coneixeràs",
            options: [
                "coneixeràs",
                "coneixes",
                "coneixies"
            ]
        },
        {
            sentence: "Nosaltres ______ (treballar) en el projecte junts.",
            correct: "treballarem",
            options: [
                "treballarem",
                "treballem",
                "treballàvem"
            ]
        },
        {
            sentence: "Ells ______ (llegir) els informes amb atenció.",
            correct: "llegiran",
            options: [
                "llegiran",
                "llegeixen",
                "llegien"
            ]
        },
        {
            sentence: "Vosaltres ______ (assolir) els vostres objectius.",
            correct: "assolireu",
            options: [
                "assolireu",
                "assoleu",
                "assolíeu"
            ]
        },
        {
            sentence: "Jo ______ (exposar) la meva idea davant del grup.",
            correct: "exposaré",
            options: [
                "exposaré",
                "exposo",
                "exposava"
            ]
        },
        {
            sentence: "Ell ______ (crear) un pla per al projecte.",
            correct: "crearà",
            options: [
                "crearà",
                "crea",
                "creava"
            ]
        },
        {
            sentence: "Tu ______ (explicar) els detalls quan sigui necessari.",
            correct: "explica",
            options: [
                "explica",
                "explicaves",
                "explicaries"
            ]
        },
        {
            sentence: "Nosaltres ______ (practicar) cada dia per millorar.",
            correct: "practiquem",
            options: [
                "practiquem",
                "practicàvem",
                "practiquem"
            ]
        },
        {
            sentence: "Ells ______ (deixar) el treball a temps.",
            correct: "deixaran",
            options: [
                "deixaran",
                "deixen",
                "deixaven"
            ]
        },
        {
            sentence: "Vosaltres ______ (mantenir) el contacte amb els clients.",
            correct: "mantindreu",
            options: [
                "mantindreu",
                "manteniu",
                "manteníeu"
            ]
        },
        {
            sentence: "Jo ______ (demanar) una ampliació del termini.",
            correct: "demanaré",
            options: [
                "demanaré",
                "demano",
                "demanava"
            ]
        },
        {
            sentence: "Ell ______ (seguir) les instruccions amb precisió.",
            correct: "seguirà",
            options: [
                "seguirà",
                "segueix",
                "seguia"
            ]
        },
        {
            sentence: "Tu ______ (anunciar) la notícia a la reunió.",
            correct: "anunciaràs",
            options: [
                "anunciaràs",
                "anuncies",
                "anunciaves"
            ]
        },
        {
            sentence: "Nosaltres ______ (realitzar) el projecte en dos mesos.",
            correct: "realitzarem",
            options: [
                "realitzarem",
                "realitzem",
                "realitzàvem"
            ]
        },
        {
            sentence: "Ells ______ (entendre) la complexitat del problema.",
            correct: "entendran",
            options: [
                "entendran",
                "entenent",
                "enteníen"
            ]
        },
        {
            sentence: "Vosaltres ______ (comprendre) les noves polítiques.",
            correct: "comprendrà",
            options: [
                "comprendrà",
                "compreneu",
                "compreníeu"
            ]
        },
        {
            sentence: "Jo ______ (revisar) el document abans de la reunió.",
            correct: "revisaré",
            options: [
                "revisaré",
                "reviso",
                "revisava"
            ]
        },
        {
            sentence: "Ell ______ (realitzar) un anàlisi exhaustiu.",
            correct: "realitzarà",
            options: [
                "realitzarà",
                "realitza",
                "realitzava"
            ]
        },
        {
            sentence: "Tu ______ (afer) la teva part de la feina.",
            correct: "faràs",
            options: [
                "faràs",
                "fas",
                "feies"
            ]
        },
        {
            sentence: "Nosaltres ______ (consultar) amb un expert.",
            correct: "consultarem",
            options: [
                "consultarem",
                "consultem",
                "consultàvem"
            ]
        },
        {
            sentence: "Ells ______ (millorar) les seves habilitats.",
            correct: "milloraran",
            options: [
                "milloraran",
                "milloren",
                "milloraven"
            ]
        },
        {
            sentence: "Vosaltres ______ (escoltar) les opinions dels altres.",
            correct: "escoltareu",
            options: [
                "escoltareu",
                "escolteu",
                "escoltàveu"
            ]
        },
        {
            sentence: "Jo ______ (planificar) els pròxims passos.",
            correct: "planificaré",
            options: [
                "planificaré",
                "planifico",
                "planificava"
            ]
        },
        {
            sentence: "Ell ______ (entregar) els documents abans de la data límit.",
            correct: "entregarà",
            options: [
                "entregarà",
                "entrega",
                "entregava"
            ]
        },
        {
            sentence: "Tu ______ (ajudar) als companys amb les seves tasques.",
            correct: "ajudaràs",
            options: [
                "ajudaràs",
                "ajudes",
                "ajudaves"
            ]
        },
        {
            sentence: "Nosaltres ______ (revisar) el treball en equip.",
            correct: "revisarem",
            options: [
                "revisarem",
                "revisem",
                "revisàvem"
            ]
        },
        {
            sentence: "Ells ______ (discutir) els detalls de l'acord.",
            correct: "discutiran",
            options: [
                "discutiran",
                "discussen",
                "discutien"
            ]
        },
        {
            sentence: "Vosaltres ______ (mantenir) una actitud positiva.",
            correct: "mantindreu",
            options: [
                "mantindreu",
                "manteniu",
                "manteníeu"
            ]
        },
        {
            sentence: "Jo ______ (trobar) una solució al problema.",
            correct: "trobaré",
            options: [
                "trobaré",
                "trobo",
                "troballava"
            ]
        },
        {
            sentence: "Ell ______ (parlar) amb els clients directament.",
            correct: "parlarà",
            options: [
                "parlarà",
                "parla",
                "parlava"
            ]
        },
        {
            sentence: "Tu ______ (explicar) el que va passar.",
            correct: "explica",
            options: [
                "explica",
                "explicaves",
                "explicaries"
            ]
        },
        {
            sentence: "Nosaltres ______ (fins) les metodes en el projecte.",
            correct: "farem",
            options: [
                "farem",
                "fem",
                "feiem"
            ]
        },
        {
            sentence: "Ells ______ (millorar) els seus coneixements.",
            correct: "milloraran",
            options: [
                "milloraran",
                "milloren",
                "milloraven"
            ]
        },
        {
            sentence: "Vosaltres ______ (consultar) amb els experts.",
            correct: "consultareu",
            options: [
                "consultareu",
                "consultem",
                "consultàveu"
            ]
        },
        {
            sentence: "Jo ______ (comprendre) la situació millor ara.",
            correct: "comprenc",
            options: [
                "comprenc",
                "comprenia",
                "comprendré"
            ]
        },
        {
            sentence: "Ell ______ (revisar) els documents a la tarda.",
            correct: "revisarà",
            options: [
                "revisarà",
                "revisa",
                "revisava"
            ]
        },
        {
            sentence: "Tu ______ (fer) el que puguis per ajudar.",
            correct: "faràs",
            options: [
                "faràs",
                "fas",
                "feies"
            ]
        },
        {
            sentence: "Nosaltres ______ (organitzar) la conferència per la setmana que ve.",
            correct: "organitzarem",
            options: [
                "organitzarem",
                "organitzem",
                "organitzàvem"
            ]
        },
        {
            sentence: "Ells ______ (assolir) els seus objectius amb esforç.",
            correct: "assoliran",
            options: [
                "assoliran",
                "assoleixen",
                "assolien"
            ]
        },
        {
            sentence: "Vosaltres ______ (conèixer) el nou pla aviat.",
            correct: "coneixereu",
            options: [
                "coneixereu",
                "coneixeu",
                "coneixíeu"
            ]
        },
        {
            sentence: "Jo ______ (realitzar) la tasca assignada.",
            correct: "realitzaré",
            options: [
                "realitzaré",
                "realitzo",
                "realitzava"
            ]
        },
        {
            sentence: "Ell ______ (explicar) els detalls en la reunió.",
            correct: "explicarà",
            options: [
                "explicarà",
                "explica",
                "explicava"
            ]
        },
        {
            sentence: "Tu ______ (demanar) ajuda si la necessites.",
            correct: "demanaràs",
            options: [
                "demanaràs",
                "demanes",
                "demanaves"
            ]
        },
        {
            sentence: "Nosaltres ______ (escoltar) les opinions de tothom.",
            correct: "escoltarem",
            options: [
                "escoltarem",
                "escoltem",
                "escoltàvem"
            ]
        },
        {
            sentence: "Ells ______ (fer) un esforç per millorar el rendiment.",
            correct: "faràn",
            options: [
                "faràn",
                "fan",
                "feien"
            ]
        },
        {
            sentence: "Vosaltres ______ (anunciar) el nou producte aviat.",
            correct: "anunciarà",
            options: [
                "anunciarà",
                "anuncieu",
                "anunciàveu"
            ]
        },
        {
            sentence: "Jo ______ (entendre) el teu punt de vista.",
            correct: "entenc",
            options: [
                "entenc",
                "entenia",
                "entendré"
            ]
        },
        {
            sentence: "Ell ______ (poder) ajudar-te amb la teva consulta.",
            correct: "pot",
            options: [
                "pot",
                "podrà",
                "podia"
            ]
        },
        {
            sentence: "Tu ______ (parlar) amb la professora demà.",
            correct: "parlaràs",
            options: [
                "parlaràs",
                "parles",
                "parlaves"
            ]
        },
        {
            sentence: "Nosaltres ______ (assolir) el que volem amb esforç.",
            correct: "assolirem",
            options: [
                "assolirem",
                "assolim",
                "assolíem"
            ]
        },
        {
            sentence: "Ells ______ (mantenir) els estàndards alts.",
            correct: "mantindran",
            options: [
                "mantindran",
                "mantenen",
                "mantenien"
            ]
        },
        {
            sentence: "Vosaltres ______ (continuar) amb el treball demà.",
            correct: "continuareu",
            options: [
                "continuareu",
                "continueu",
                "continuàveu"
            ]
        },
        {
            sentence: "Jo ______ (assolir) el millor resultat possible.",
            correct: "assoliré",
            options: [
                "assoliré",
                "assolim",
                "assolia"
            ]
        },
        {
            sentence: "Ell ______ (treballar) en el nou projecte.",
            correct: "treballarà",
            options: [
                "treballarà",
                "treballa",
                "treballava"
            ]
        },
        {
            sentence: "Tu ______ (entendre) la importància de la tasca.",
            correct: "entendràs",
            options: [
                "entendràs",
                "entes",
                "entens"
            ]
        },
        {
            sentence: "Nosaltres ______ (demanar) una pròrroga.",
            correct: "demanarem",
            options: [
                "demanarem",
                "demanem",
                "demanàvem"
            ]
        },
        {
            sentence: "Ells ______ (revisar) els documents abans de signar.",
            correct: "revisaran",
            options: [
                "revisaran",
                "revisen",
                "revisaven"
            ]
        },
        {
            sentence: "Vosaltres ______ (seguir) les instruccions per completar la tasca.",
            correct: "seguireu",
            options: [
                "seguireu",
                "segueixen",
                "seguíeu"
            ]
        },
        {
            sentence: "Jo ______ (visitar) el lloc aviat.",
            correct: "visitaré",
            options: [
                "visitaré",
                "visito",
                "visitava"
            ]
        }
        
    
    

];

let currentSentenceIndex = 0;
let currentConjugationIndex = 0;

function startFillInTheBlankGame() {
    hideAllSections();
    document.getElementById('fill-in-the-blank-game').classList.remove('hidden');
    showSentence();
}

function startConjugationGame() {
    hideAllSections();
    document.getElementById('conjugation-game').classList.remove('hidden');
    showConjugationSentence();
}

function hideAllSections() {
    document.getElementById('games').classList.add('hidden');
    document.getElementById('fill-in-the-blank-game').classList.add('hidden');
    document.getElementById('conjugation-game').classList.add('hidden');
}

function showSentence() {
    const sentence = sentences[currentSentenceIndex];
    document.getElementById('sentence').innerText = sentence.sentence;
    document.getElementById('user-input').value = '';
    document.getElementById('result').innerText = '';
}

function showConjugationSentence() {
    const sentence = conjugationSentences[currentConjugationIndex];
    document.getElementById('conjugation-sentence').innerText = sentence.sentence;
    document.getElementById('conjugation-options').innerHTML = '';

    sentence.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(optionElement, option);
        document.getElementById('conjugation-options').appendChild(optionElement);
    });

    document.getElementById('conjugation-result').innerText = '';
}

function selectOption(selectedElement, selectedOption) {
    // Desmarcar totes les opcions
    const options = document.querySelectorAll('#conjugation-options .option');
    options.forEach(option => option.classList.remove('selected'));

    // Marcar l'opció seleccionada
    selectedElement.classList.add('selected');

    // Comprovar si l'opció és correcta
    const correctAnswer = conjugationSentences[currentConjugationIndex].correct;
    if (selectedOption === correctAnswer) {
        document.getElementById('conjugation-result').innerText = 'Correcte!';
        document.getElementById('conjugation-result').style.color = 'green';
    } else {
        document.getElementById('conjugation-result').innerText = `Incorrecte. La resposta correcta és "${correctAnswer}".`;
        document.getElementById('conjugation-result').style.color = 'red';
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-input').value.trim();
    const correctAnswer = sentences[currentSentenceIndex].correct;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').innerText = 'Correcte!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').innerText = `Incorrecte. La resposta correcta és "${correctAnswer}".`;
        document.getElementById('result').style.color = 'red';
    }
}

function nextSentence() {
    currentSentenceIndex++;
    if (currentSentenceIndex >= sentences.length) {
        currentSentenceIndex = 0;
        alert('Has completat totes les frases! Tornant a la primera.');
    }
    showSentence();
}

function nextConjugation() {
    currentConjugationIndex++;
    if (currentConjugationIndex >= conjugationSentences.length) {
        currentConjugationIndex = 0;
        alert('Has completat totes les frases de conjugació! Tornant a la primera.');
    }
    showConjugationSentence();
}

// Funció per ocultar la secció de joc i mostrar el menú principal
function closeGameSection() {
    document.getElementById('fill-in-the-blank-game').classList.add('hidden');
    document.getElementById('conjugation-game').classList.add('hidden');
    document.getElementById('games').classList.remove('hidden');
}

// Assignar l'esdeveniment als botons de tancament
document.getElementById('close-fill-in-the-blank-game').addEventListener('click', closeGameSection);
document.getElementById('close-conjugation-game').addEventListener('click', closeGameSection);
