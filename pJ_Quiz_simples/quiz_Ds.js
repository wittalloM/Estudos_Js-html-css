import Questions from "./questoes_Quiz.js"

const quant_perguntas = document.getElementById('quant_questoes');
const perguntas = document.getElementById('enun_perg');
const alternativas_resp = document.getElementById('alternativas');
const btn_Reset = document.getElementById('reset')
const btn_inicio = document.getElementById('inicio_quiz')
const pontuacao = document.getElementById("score")
const esp_do_jogo = document.getElementById("esp_do_jogo")
const avisos = document.getElementById("avisos")


const current = 0;
const quant_acertos = 0;



function carregarQuestao() {
    quant_perguntas.innerHTML = `${current + 1}/${Questions.length}`;
    const questao = Questions[current];
    perguntas.innerHTML = questao.question;

    questao.answers.forEach((answers) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="answer" data-correct="${answers.correct}">
        ${answers.option} </button>
        `;
        alternativas_resp.appendChild(div);
    });


    document.querySelectorAll('.answer').forEach((item) => {
        item.addEventListener('click', prox_questao);
    });
}


function prox_questao(e) {
    let resposta = e.currentTarget.getAttribute("data-correct");
    if (resposta === "true") {
        quant_acertos++;
        current++;
        carregarQuestao();
    }
    if (current < Questions.lenght - 1) {
        current++;
        carregarQuestao();
    } else {
        game_Over();
    }
}

function game_Over() {
    pontuacao.textContent = ` Parabés você acertou ${quant_acertos} de ${Questions.length}`;
    esp_do_jogo.style.display = "none";
    avisos.style.display = "flex";

}



btn_Reset.onclick = () => {
    esp_do_jogo.style.display = "flex";
    avisos.style.display = "none"

    current = 0;
    quant_acertos = 0;
    carregarQuestao();
};

btn_inicio.addEventListener('click', carregarQuestao())