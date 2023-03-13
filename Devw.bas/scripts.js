
/**Páginas de scripts - Prof : Guanabara - cursoemvídeo */



const btn = document.querySelector('#submit');

btn.addEventListener("click", function (e) {
    e.preventDefault();
    //const mdn = document .querySelector("#mesniveruser");
    const value = mesniveruser.value;
    console.log(value);
    }) ;


    /*Manipulando Eventos no JavaScript*/ 

var mod = window.document.getElementById('#sec_2')
mod.addEventListener('click', clique)


function clique() {
   
    window.alert('Teste 1... concluído !');
    }
    


//  Função simples Exerc -1;
function somar() {
    let nbr = document.getElementById("vlr1")
    let nbr2 = document.getElementById("vlr2") 
    let res = document.getElementById("res")
    let n1 = Number(nbr.value)
    let n2 = Number(nbr2.value)
    let r = n1 + n2 
    res.innerHTML = `A soma entre os valores <strong>${nbr.value} e ${nbr2.value} é: ${r}</strong>`
}



function f_tst_nac() {
     var nac_do_us = document.getElementById("nac_user")
     var nac = nac_do_us.value 
     var resp_tst = 'Brasil'
     if ( nac  =! resp_tst) {
        window.alert('No eres Brazuca manito, :( !')
        console.log("País de origem do usuário: " + nac)
     } else {
        window.alert('Eres Brazuca manito, muchos saludos !')
     }
}