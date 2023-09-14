

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
    if (Is_Num(n_us.value) && !Ver_ls(n_us.value, Num_usr)) {
        Num_usr.push(Number(n_us.value))
        let item = document.createElement('option')
        item.text = `Valor ${n_us.value} adicionado`
        ls_Num.appendChild(item)
    } else {
        window, alert('Por favor digite um valor válido, o valor é invalido ou já foi adicionado. ( Números entre 0 e 100)')
    }
    n_us.value = ''
    n_us.focus()
}