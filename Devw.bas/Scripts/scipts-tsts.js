

const n_us = document.getElementById('num_do_us');
const ls_Num = document.getElementById('F_list');
const res_aplNUm = document.getElementById('q_de_ins');


var Num_usr = [];

function Is_Num(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function Ver_ls(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function Ad_Numero() {
    if (Is_Num(n_us.value) && Ver_ls(n_us.value, Num_usr)) {
        window.alert('Aguarde')
        console.log('Tudo Ok.')
    } else {
        window, alert('Por favor digite um valor válido. ( Números entre 0 e 100)')
    }
}