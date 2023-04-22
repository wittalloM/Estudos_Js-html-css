// Página de Scripts Quiz_DarkSouls


let pontos = 0;
let placar = 0;

let numQuestao = document.querySelector('#num_questao')
let pergunta = document.querySelector('#pergunta')


// Alternativas

let a = document.querySelector('#alta')
let b = document.querySelector('#altb')
let c = document.querySelector('#altc')
let d = document.querySelector('#altd')
let e = document.querySelector('#alte')


let questoes_do_quiz = document.querySelector('espc_do_jogo')
let alternativas = document.querySelector('#alternativas')

const q_0 = {
    numquestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    alternativaD: "Alternativa D",
    alternativaE: "Alternativa E",
    resp_correta: "0",
}

const q_1 = {
    numquestao: 1,
    pergunta: " Qual o dia e o mês de lançamento de Dark Souls - Prepare to die edition ?",
    alternativaA: "11/8",
    alternativaB: "25/9",
    alternativaC: "20/12",
    alternativaD: "23/10",
    alternativaE: "11/11",
    resp_correta: "23/10",
}

const q_2 = {
    numquestao: 2,
    pergunta: "Segundo a opinião do próprio criador da série, Hidetaka Myazaki, qual o seu boss favorito da franquia souls-borne?",
    alternativaA: "Chaos Witch Queelag",
    alternativaB: "Nameles King",
    alternativaC: "Capra Demon",
    alternativaD: "Moonlight Butterfly",
    alternativaE: "Gapping Dragon",
    resp_correta: "Gapping Dragon",
}

const q_3 = {
    numquestao: 3,
    pergunta: "O Metacritic é um site agregador de análises e notas, que é utilizado não só pela crítica bem como pelos usuários também; Dito isso, qual game da franquia souls-borne está melhor avaliado na plataforma?",
    alternativaA: "Bloodborne",
    alternativaB: "Dark Souls",
    alternativaC: "Dark Souls 2",
    alternativaD: "Sekiro",
    alternativaE: "Elden Ring",
    resp_correta: "Dark Souls 2",
}


const q_4 = {
    numquestao: 4,
    pergunta: "Na franquia souls, há um eanster-egg, a aparição de um NPC que quase sempre vêm acompanhado de uma promessa de tesouros ao  player, qual o seu nome ?",
    alternativaA: "André",
    alternativaB: "Petrus",
    alternativaC: "Gwyndollin",
    alternativaD: "Melentia",
    alternativaE: "Solaire",
    resp_correta: "Solaire",
}



const questoes = [q_0, q_1, q_2, q_3, q_4]

let numero = document.querySelector("#numero")
let total = document.querySelector("#total ")

numero.textContent = ' 0 '

let totalDeQuestoes = (questoes.length) - 1
console.log("total de questoes" + totalDeQuestoes)

total.textContent = totalDeQuestoes

num_questao.textContent = q_1.numquestao
pergunta.textContent = q_1.pergunta
a.textContent = q_1.alternativaA
b.textContent = q_1.alternativaB
altC.textContent = q_1.alternativaC
altD.textContent = q_1.alternativaD
altE.textContent = q_1.alternativaE

altA.setAttribute('value', '1A')
altB.setAttribute('value', '1B')
altC.setAttribute('value', '1C')
altD.setAttribute('value', '1D')
altE.setAttribute('value', '1E')


function prox_questao(questao){
    numero.textContent = questao
    num_questao.textContent = questoes[questao].numquestao
    pergunta.textContent = questoes[questao].pergunta
    altA.textContent = questoes[questao].alternativaA
    altB.textContent = questoes[questao].alternativaB
    altC.textContent = questoes[questao].alternativaC
    altD.textContent = questoes[questao].alternativaD
    altE.textContent = questoes[questao].alternativaE

    altA.setAttribute('value', questao + 'A')
    altB.setAttribute('value', questao + 'B')
    altC.setAttribute('value', questao + 'C')
    altD.setAttribute('value', questao + 'D')
    altE.setAttribute('value', questao + 'E')


}