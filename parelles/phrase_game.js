document.addEventListener('DOMContentLoaded', () => {
    const blanks = document.querySelectorAll('.blank');
    const verbs = document.querySelectorAll('.verb-button');
    const feedback = document.getElementById('feedback');


    let selectedVerb = null;

    verbs.forEach(button => {
        button.addEventListener('click', () => {
            selectedVerb = button.getAttribute('data-verb');
            feedback.textContent = `Has seleccionat  "${selectedVerb}". Ara selecciona la frase que calgui    .`;
        });
    });

    blanks.forEach(blank => {
        blank.addEventListener('click', () => {
            if (selectedVerb) {
                const correctVerb = blank.getAttribute('data-verb');
                if (selectedVerb === correctVerb) {
                    blank.textContent = selectedVerb;
                    blank.classList.remove('blank');
                    feedback.textContent = 'Correcte!';
                } else {
                    feedback.textContent = 'Incorrecte, intenta-ho de nou.';
                }
                selectedVerb = null; // Reset the selected verb
            } else {
                feedback.textContent = 'Selecciona primer un verb.';
            }
        });
    });
});
