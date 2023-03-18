
/**Páginas de scripts - Prof : Guanabara - cursoemvídeo */


// Exercício 1;
const btn = document.querySelector('submit');

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const value = mesniveruser.value;
    console.log(value);
});


/*Manipulando Eventos no JavaScript*/


// Exercício 2 Usando classes de JavaScript para alterar o estado de elementos, por meio de identificadores;
var mod = window.document.getElementById('sec_2')
mod.addEventListener('click', clique)
mod.addEventListener('onmouseenter', entrando)


function clique() {

    window.alert('Teste 1... concluído !');
}
function entrando() {
    mod.innerHTML = "On mouse enter is on, baby"
}


//  Função simples Exerc 3;
function somar() {
    let nbr = document.getElementById("vlr1")
    let nbr2 = document.getElementById("vlr2")
    let res = document.getElementById("res")
    let n1 = Number(nbr.value)
    let n2 = Number(nbr2.value)
    let r = n1 + n2
    res.innerHTML = `A soma entre os valores  <strong>${nbr.value} e ${nbr2.value} é : ${r}</strong>`
}


// Exercíucio 3;
function f_tst_nac() {
    var nac_do_us = document.getElementById("nac_user")
    var nac = nac_do_us.value
    var resp_tst = 'Brasil'
    if (nac != resp_tst) {
        window.alert('No eres Brazuca manito, :( !')
        console.log("País de origem do usuário: " + nac)
    } else {
        window.alert('Eres Brazuca manito, muchos saludos !')
    }
}