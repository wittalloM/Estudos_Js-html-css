function Apl_num() {


    const n_us = document.getElementById('num_do_us');
    const par_de_ret = document.getElementById('par_de_imp');


    mst_de_numeros = [];
    dd_do_us = Number(n_us.value);

    if (dd_do_us == 0) {
        window.alert('Por favor digite um número para começarmos');
    }

    else if (dd_do_us > 0) {


        mst_de_numeros.add(dd_do_us.value);
        console.log(mst_de_numeros.length);


        for (let c = 0; c <= mst_de_numeros.length; c++) {

            par_de_ret.textContent = mst_de_numeros[i];
            window.alert(mst_de_numeros[i]);
        }
    }



}