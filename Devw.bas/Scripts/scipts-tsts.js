

const n_us = document.getElementById('num_do_us');
const ls_Num = document.getElementById('F_list');
const res_fin = document.getElementById('q_de_ins');


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
        res_fin.innerHTML = ''
    } else {
        window, alert('Por favor digite um valor válido, o valor é invalido ou já foi adicionado. ( Números entre 0 e 100)')
    }
    n_us.value = ''
    n_us.focus()
}

function Fin_ver() {
    if (Num_usr == 0){
        window.alert('Lista vazia, adicione elementos para começar.')
    } 
    else {
        let tot = Num_usr.length;
        let maior = Num_usr[0]
        let menor = Num_usr[0]
        let soma = 0
        
        for (let pos in Num_usr){
            soma += Num_usr[pos]
            if (Num_usr[pos] > maior) {
                maior = Num_usr[pos]
            }
            if (Num_usr[pos] < menor) {
                menor = Num_usr[pos]
            }

        }
        res_fin = ''
        res_fin.innerHTML += `<p> A lista contém ${tot} elementos</p>`
        res_fin.innerHTML += `<p> O elemnto ${maior} é o maior número da lista</p>`
        res_fin.innerHTML += `<p> O elemnto ${menor} é o menor número da lista</p>`
    }
}