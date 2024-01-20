// Atividade 2 - Fatorial de número qualquer.

function exibirNaTela( id, texto ) {
    let campo = document.getElementById( id );
    campo.textContent = texto;
}

exibirNaTela( 'atividade_2', 'Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.');

limparCampo();

function calcularFatorial() {
    let num = parseInt( document.getElementById( 'numero' ).value );
    console.log(num);
    if ( isNaN( num )) {
        exibirNaTela('resultadoFatorial', 'Error. Campo vazio ou não foi informado um número')
        limparCampo();
    } else {
        exibirNaTela( 'resultadoFatorial', formulaFatorial( num )); 
        limparCampo();
    }           
}

function formulaFatorial( num ) {
    let resultado = 1;

    if ( Number.isInteger( num ) || num % 1 === 0 ) {
     
        if ( num === 1 || num === 0 ) { 
            return 1;
        } else {
            while( num > 1 ) {
                resultado *= num;
                num --;
            } 
        }
        return resultado;
    } else {
        console.log(num)
        return 1;
    }
}

function limparCampo() {
    num = document.getElementById( 'numero' );
    num.value = '';
}
