
/**Páginas de scripts - Prof : Guanabara - cursoemvídeo */


//const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"]
//for (i = 0; i < meses.length; i++);

const btn = document.querySelector('#submit');

btn.addEventListener("click", function (e) {
    e.preventDefault();
    //const mdn = document .querySelector("#mesniveruser");
    const value = mesniveruser.value;
    console.log(value);
    }) ;


    /*Manipulando Eventos no JavaScript*/ 

var mod = window.document.querySelector('#teste_1')
mod.addEventListener('click', clique)
mod.addEventListener('mouseout', entrando)

function clique() {
    window.alert('Teste 1... concluído !');
    mod.style.border = 'yellow'
};
function entrando() {
    mod.innerText = 'Teste 2... concluído !'
}


//const btn2 = document.querySelector("calc")
function somar() {
    let nbr = document.getElementById("vlr1")
    let nbr2 = document.getElementById("vlr2") 
    let res = document.getElementById("res")
    let n1 = Number(nbr.value)
    let n2 = Number(nbr2.value)
    let r = n1 + n2 
    res.innerHTML = `A soma entre os valores ${nbr.value} e ${nbr2.value} é: ${r}`
}