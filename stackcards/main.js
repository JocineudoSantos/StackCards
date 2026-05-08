

function imcCalc(peso, altura) {
    return peso / (altura * altura);
}

function imcDiagnose(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else {
        return "Acima do peso";
    }
}

function searchFlashcards(e) {
    console.log(e.target.value);
}

function showResult() {
    const answer = document.querySelector('#result');
    section.innerHTML = ` 
        <article class="flashcard">
            <span class="flashcard-category">
                Arquitetura CSS
            </span>
            <h2 class="flashcard-question">
                Qual é a função do Flexbox no CSS?
            </h2>
            <button class="btn-primary" aria-label="Mostrar resposta">
                Mostrar Resposta
        </article>`
}