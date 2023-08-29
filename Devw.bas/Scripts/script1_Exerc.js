
/**Páginas de scripts - Prof : Guanabara - cursoemvídeo */

const time = document.querySelector('sec_7')
const time_div = document.querySelector('.Exer-1')
const img = document.querySelector('#img_bv')
const tempo = document.getElementById('tst_func')



/* Exerçício com Arrays*/


function scrguimic() {
    let retorno_usuario = document.getElementById('retorno_mesniver')
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



/*Manipulando Eventos no JavaScript*/





//  Função simples Exerc 3; (usando inputs do user para realizar funções e retornar dados)
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

// Script do Exercício TimeStamp (curso em vídeo)

function time_stamp() {
    let data = new Date();
    let horario = data.getHours();
    let msg_bv = document.createElement('h2');
    msg_bv.textContent = `Agora são ${horario} horas.`;
    time_div.appendChild(msg_bv);

    if (horario >= 0 && horario < 12) {
        msg_bv.textContent = `Bom dia, agora são ${horario} horas !`
        img.src = '../Devw.bas/arts/Dia-Exerc-TimeStamp.png'
        time_div.style.backgroundColor = '#FDDA76'
    } else if (horario >= 12 && horario < 18) {
        msg_bv.textContent = `Boa tarde, agora são ${horario} horas !`
        img.src = '../Devw.bas/arts/Tarde-Exerc-TimeStamp.png'
        time_div.style.backgroundColor = '#9A7855'
    } else if (horario >= 18 && horario <= 24) {
        msg_bv.textContent = `Boa noite, agora são ${horario} horas !`
        img.src = '../Devw.bas/arts/Noite-Exerc-TimeStamp.png'
        time_div.style.backgroundColor = '#0F3B56'
    }
}

// Função usando os objeto Date, e seus vários métodos;

function tmp_real() {
    var dateString = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    var formattedString = dateString.replace(", ", " - ");
    tempo.innerHTML = formattedString;

}
// Exercício 3 curso de JavaScript - Curso em vídeo 

function retorno_usuario() {
    const resp = document.querySelector('.ret_usr')
    const data_de_nascimento = document.querySelector('#ano_nasc')
    const Vsex = document.getElementsByName('sexo')

    let data = new Date()
    let ano_atual = data.getFullYear()
    let idade = ano_atual - Number(data_de_nascimento.value)

    if (data_de_nascimento.value.length == 0 || data_de_nascimento > ano_atual) {
        window.alert('Digite a sua data de nascimento corretamente, ou tente novamente')
    } else {

        var genero = ' '
        if (Vsex[0].checked) {
            genero = 'Masculino'
            if (idade > 0 && idade <= 8) {
                var img_retorno = document.createElement('img')
                img_retorno.setAttribute('id', 'foto_ret_usr');
                img_retorno.setAttribute('src', 'https://avatars.dzeninfra.ru/get-zen_doc/5283638/pub_62137b5dc8c5f1182b763a21_62137b9e62aacd5123633298/scale_1200');


                resp.style.textalign = 'center'
                resp.innerHTML = ` Detectamos um usuário menor de idade com aproximadamente ${idade} anos de idade e  do sexo ${genero}, olá seja bem vindo ao nosso identificador de usuário.`
                resp.appendChild(img_retorno)
            }
            if (idade >= 12 && idade <= 21) {
                var img_retorno = document.createElement('img')
                img_retorno.setAttribute('id', 'foto_ret_usr');
                img_retorno.setAttribute('src', 'https://dsavenko.me/content/images/2018/06/shocked.jpg')

                resp.style.textalign = 'center'
                resp.appendChild(img_retorno)
                resp.innerHTML = ` Detectamos homem adulto com ${idade} anos e do sexo ${genero}, seja bem vindo, e aprecie o serviço.`

            }

            else if (idade >= 21 && idade <= 60) {
                var img_retorno = document.createElement('img')
                img_retorno.setAttribute('id', 'foto_ret_usr');
                img_retorno.setAttribute('src', 'https://dsavenko.me/content/images/2018/06/shocked.jpg');

                resp.style.textalign = 'center'
                resp.innerHTML = ` Detectamos homem adulto com ${idade} anos e do sexo ${genero}, seja bem vindo, e aprecie o serviço.`
                resp.appendChild(img_retorno)
            }
        }

        else if (Vsex[1].checked) {
            genero = 'Feminino'

            if (idade > 0 && idade <= 8) {
                var img_retorno = document.createElement('img')
                img_retorno.setAttribute('id', 'foto_ret_usr');
                img_retorno.setAttribute('src', 'https://www.reab.me/wp-content/uploads/2019/01/OH1S9W0-1.jpg');


                resp.style.textalign = 'center'
                resp.innerHTML = ` Detectamos um usuário menor de idade com aproximadamente ${idade} anos de idade e  do sexo ${genero}, olá seja bem vindo ao nosso identificador de usuário.`
                resp.appendChild(img_retorno)
            }
            if (idade >= 12 && idade <= 35) {
                var img_retorno = document.createElement('img')
                img_retorno.setAttribute('id', 'foto_ret_usr');
                img_retorno.setAttribute('src', ' https://w7.pngwing.com/pngs/980/166/png-transparent-woman-face-beauty-parlour-woman-fashion-hair-straightening-faces-face-cosmetics-people.png')

                resp.style.textalign = 'center'
                resp.innerHTML = ` Detectamos ${genero} com ${idade} anos, seja bem vindo, e aprecie o serviço.`
                resp.appendChild(img_retorno)

            }

            else if (idade >= 40 && idade <= 60) {
                var img_retorno = document.createElement('img')
                img_retorno.setAttribute('id', 'foto_ret_usr');
                img_retorno.setAttribute('src', 'https://i.pinimg.com/originals/42/5b/64/425b64ca1110fbaf471bdce1338fcefe.jpg');

                resp.style.textalign = 'center'
                resp.innerHTML = ` Detectamos homem adulto com ${idade} anos e do sexo ${genero}, seja bem vindo, e aprecie o serviço.`
                resp.appendChild(img_retorno)
            }
        }
    }
}


function ini_Contagem() {
    let inicializador = document.getElementById('cond_Ini');
    let cond_user = document.getElementById('cond');
    let finalizador = document.getElementById('cond_fin');
    let ret_cont = document.querySelector('.resp_req_us')



    if (inicializador.value == '' || cond_user.value == '' || finalizador.value == '') {
        ret_cont.innerHTML = `impossivel Iniciar a Caontagem \u{1F914}`;
        ret_cont.style.textAllign = 'center';
        window.alert('[-- Erro, por favor preencha todos os campos corretamente --]');
    }

    else {
        ret_cont.innerHTML = 'Iniciando a contagem: ';
        ret_cont.style.textAllign = 'center';
        let ini = Number(inicializador.value);
        let c_us = Number(cond_user.value);
        let fnl = Number(finalizador.value);
        // Contagem Crescente
        if (ini < fnl) {
            ret_cont.innerHTM = ''
            for (var c = ini; c <= fnl; c += c_us) {
                ret_cont.innerHTML += `${c} \u{1F449}`;

            }
            // Contagem Decrescente
        } else if (ini > fnl) {
            for (var c = ini; c <= fnl; c -= c_us) {
                ret_cont.innerHTML += `${c} \u{1F449}`;

            }
        }

    }



    ret_cont.innerHTML += `${c} \u{1F449} ... final da contagem`;
    ret_cont.style.textAllign = 'center';



}



