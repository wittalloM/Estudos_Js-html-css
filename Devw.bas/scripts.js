
/**Páginas de scripts - Prof : Guanabara - cursoemvídeo */


/* Exerçício com Arrays*/


function scrguimic() {
    let  retorno_usuario = document.getElementById('retorno_mesniver')
    document.getElementById('mesniveruser')
    var dtuser = Number(mesniveruser.value)
    var meses = [' ', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    for (var l = 1; l <= meses.length; l++)
        if (dtuser == l) {
            console.log(meses[l])
            retorno_usuario.textContent = `O seu mês de nascimento é ${meses[l]}`
        }

}



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
    res.textContent = `A soma entre os valores ${nbr.value} e ${nbr2.value} é : ${r}.`
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


