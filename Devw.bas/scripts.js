
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
    } else if (horario >= 18 && horario < 0o0) {
        msg_bv.textContent = `Boa noite, agora são ${horario} horas !`
        img.src = '../Devw.bas/arts/Noite-Exerc-TimeStamp.png'
        time_div.style.backgroundColor = '#0F3B56'
    }
}

function tmp_real() {
    var dateString = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    var formattedString = dateString.replace(", ", " - ");
    tempo.innerHTML = formattedString;

}

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
        }

        else if (Vsex[1].checked) {
            genero = 'Feminino'
        }

        if (idade > 0 && idade < 8) {
            var img_retorno = document.createElement('img');
            img_retorno.setAttribute('id', 'foto_ret_usr');
            img_retorno.src = 'https://avatars.dzeninfra.ru/get-zen_doc/5283638/pub_62137b5dc8c5f1182b763a21_62137b9e62aacd5123633298/scale_1200';
            
            resp.style.textalign = 'center'
            resp.innerHTML = ` Detectamos um usuário menor de idade com aproximadamente ${idade} anos de idade e  do sexo ${genero}, olá seja bem vindo ao nosso identificador de usuário`
            
        }   if (idade >= 18 && idade <= 50) {
            var img_retorno = document.createElement('img');
            img_retorno.setAttribute('id', 'foto_ret_usr');
            resp.style.textalign = 'center'
            resp.innerHTML  = ` Detectamos homem adulto com ${idade} anos e do sexo ${genero}, seja bem vindo, e aprecie o serviço`
            
            img_retorno.src = 'https://i.imgur.com/I4piNxb.jpeg';
            resp.appendChild(img_retorno)
        }



    
    }

    resp.style.textAlign = 'center'
    resp.textContent = ` Olá, me parece que você é do gênero ${genero} e têm ${idade} anos...`







}