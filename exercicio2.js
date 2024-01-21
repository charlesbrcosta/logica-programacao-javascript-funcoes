// Atividade 2 - Fatorial de número qualquer.

function exibirNaTela( id, texto ) {
    let campo = document.getElementById( id );
    campo.textContent = texto;
}

exibirNaTela( 'atividade_2', 'Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.');

function calcularFatorial() {
   let num = document.getElementById( 'numero' ).value;

    if ( isNaN( Number( num )) || num === '') {
        exibirNaTela('resultadoFatorial', 'Error. Campo vazio ou não foi informado um número')
    } else {
        exibirNaTela( 'resultadoFatorial', formulaFatorial( num )); 
        limparCampo();
        console.log('entrou no if - calcularFatorial')
    }           
}

function formulaFatorial( num ) {
    let resultado = 1;
    if ( Number.isInteger(Number( num ))) {
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
        return 1;
    }
}

function limparCampo() {
    console.log('Limpeza chamada');
    let numeroElement = document.getElementById( 'numero' );

    if (numeroElement) {
        numeroElement.value = '';
        console.log('Entrou no if');
    } else {
        console.error('Elemento com ID "numero" não encontrado.');
    }
}
