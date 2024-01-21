let dolarReal;

function exibirNatela( id, texto) {
    let campo = document.getElementById( id );
    campo.textContent = texto;
}

exibirNatela( 'atividade_3', 'Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.' );

limparCampo()

function converterDolarEmReal() {
        dolarReal = document.getElementById( 'dinheiro' ).value;
    let conversao = calculoConversao( dolarReal );

    if ( dolarReal === '' || Number.isNaN(Number( dolarReal ))) {
        exibirNatela( 'resultadoConversao', 'Por favor, Informe o valor em dolar!');
        limparCampo()
    } else {
        exibirNatela( 'resultadoConversao', ` R$ ${ conversao }`);
        limparCampo()
    }
}

function calculoConversao( dolar ) {
    let conversao = 4.80 * dolar;
    if ( conversao < 1 ){
        return 0;
    } else {
        return conversao.toFixed( 2 );
    }
}

function limparCampo(){
    dolarReal = document.getElementById( 'dinheiro' );
    dinheiro.value = '';
}