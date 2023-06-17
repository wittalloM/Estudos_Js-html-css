const startbutton = document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')
const questionContainer = document.getElementById('quiz-box')
const questionstring = document.getElementById('Question')
const answerbuttons = document.getElementById('choice-box')
const Qst = document.querySelector(".Question")

let shuffledQuestions, currentQuestionIndex

startbutton.addEventListener('click', startGame)
nextbutton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

const questions = [
    {
        question: 'O game, ambientado em um universo digno dos amantes de HP Lovecraft, foi lançado em 2015, e é aclamado, pela temática de terror vitoriano e o combate frenético.',
        answers: [
            { text: 'Dark Souls', correct: false },
            { text: 'ArmoredCore', correct: false },
            { text: 'Bloodborne', correct: true },
            { text: 'Dark Souls 3', correct: false }
        ]
    },

    {
        question: 'Qual o ano de lançamento do primeiro game da From Software ?',
        answers: [
            { text: '1999', correct: false },
            { text: '1990', correct: false },
            { text: '2001', correct: false },
            { text: '1994', correct: true }
        ]
    },

    {
        question: 'Segundo entrevista a Xbox Wire Japão, Miyazaki revelou seu boss favorito do último título lançado pela FromSoftware como sendo...',
        answers: [
            { text: 'Gwin, Lord of Cinder', correct: false },
            { text: 'Radahn, flagelo estelar', correct: true },
            { text: 'Demõnio Capra', correct: false },
            { text: 'Dark Souls 3', correct: false }
        ]
    },

    {
        question: 'Conhecido por popularizar a produtora From Sofware e ser considerado o sucessor de Demons Souls, esse game foi lançado em 2011 e até hoje, possui uma imensa base de fans.',
        answers: [
            { text: 'Dark Souls', correct: true },
            { text: 'ArmoredCore', correct: false },
            { text: 'Kings Field', correct: false },
            { text: 'Dark Souls 3', correct: false }
        ]
    }
]

function startGame() {
    startbutton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}


function showQuestion(question) {
    questionstring.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerbuttons.appendChild(button)
    })
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerbuttons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextbutton.classList.remove('hide')
    } else {
        startbutton.textContent = 'Restart Quiz'
        startbutton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState() {
    clearStatusClass(document.body)
    nextbutton.classList.add('hide')
    while (answerbuttons.firstChild) {
      answerbuttons.removeChild(answerbuttons.firstChild)
    }
  }
