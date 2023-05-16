import Questions from "./questoes_Quiz.js"

const quant_perguntas = document.getElementById('quant_questoes');
const perguntas = document.getElementById('enun_perg');
const alternativas_resp = document.getElementById('alternativas');
const btn_Reset = document.getElementById('reset')
const btn_inicio = document.getElementById('inicio_quiz')
const pontuacao = document.getElementById("score")
const esp_do_jogo = document.getElementById("esp_do_jogo")
const avisos = document.getElementById("avisos")


let current = 0;
let quant_acertos = 0;



function carregarQuestao() {
    quant_perguntas.innerHTML = `${current + 1}/${Questions.length}`;
    const questao = Questions[current];
    alternativas_resp.innerHTML = " ";
    perguntas.innerHTML = questao.question;

    questao.respostas.forEach((respostas) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button id="answer" data-correct= "${respostas.correct}">
        ${respostas.opcao} </button>
        `;
        alternativas_resp.appendChild(div);
    });


    document.querySelectorAll("#answer").forEach((item) => {
        item.addEventListener('click', prox_questao);
    });
}


function prox_questao(e) {
    let resp = e.target.getAttribute("data-correct");
    console.log("evento is on");
    if (resp === "true") {
        quant_acertos++;
        current++;
        prox_questao()
    }
    if (current < Questions.lenght - 1) {
        current++;
        carregarQuestao();
    } else {
        game_Over();
    }
}

function game_Over() {
    pontuacao.innerHTML = ` Parabés você acertou ${quant_acertos} de ${Questions.length}`;
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