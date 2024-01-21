//atividade 1 - calcular o IMC
function exibirNaTela( id, texto ){
    let campo = document.getElementById( id );
    campo.textContent = texto;
}

function limparCampos() {
    for (let i = 0; i < arguments.length; i++) {
        let campo = document.getElementById(arguments[i]);
        if (campo) {
            campo.value = '';
        }
    }
}

exibirNaTela( 'atividade_1', 'Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.' );

function calcularImc() {
    let peso = document.getElementById( 'peso' ).value ;
    let altura = document.getElementById( 'altura' ).value ;
    
    let resultImc = classificaoImc( peso, altura );

    if( resultImc !== -1) {
        exibirNaTela( 'resultadoImc', resultImc );
        limparCampos( 'peso', 'altura' );
    } else {
        exibirNaTela( 'resultadoImc', 'R.: Verifique se os valores de peso e altura estão corretos.' );
        console.error( 'Erro no cálculo do IMC. Verifique os valores de peso e altura.' );   
    }      
}

function classificaoImc( peso, altura ) {
    if ( isNaN( peso ) ||  isNaN( altura ) || peso < 1 || altura < 1 ){
        console.error( 'Valores inválidos para peso ou altura' );
        return -1;
    } 

    let resultado = peso / Math.pow( altura, 2 );

    // Classificando o resultado
    let classificacao = '';
    if (resultado < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (resultado < 24.9) {
        classificacao = 'Peso normal';
    } else if (resultado < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (resultado < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (resultado < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    return `R.: Seu IMC é ${resultado.toFixed(2)}. Classificação: ${classificacao}`; 
 }

 /* ---------- fim da atividad 1 ------------ */


 // Atividade 2 - Fatorial de número qualquer.

exibirNaTela( 'atividade_2', 'Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.');

function calcularFatorial() {
    let fatorial = document.getElementById( 'numero' ).value;
    let resultado =  formulaFatorial( fatorial );

    if ( resultado !== -1 ) {
        exibirNaTela( 'resultadoFatorial', resultado );
        limparCampos( 'numero' );  
    } else {
        exibirNaTela( 'resultadoFatorial', 'R.: Verifique se o valor do número informado está correto.' );
        console.error( 'Erro no cálculo do fatorial. Verifique o valor do número.' ); 
    }     
}

function formulaFatorial( numero ) {
    let numFatorial = Number( numero );
    
    if( numFatorial < 0 || isNaN( numFatorial )) {
        console.error( 'Valor inválido para o argumento num' );
        return -1;
    }   
    
    let resultado = 1;
    let expressao = `${ numFatorial }! =`;

    while( numFatorial > 1 ) {
        resultado *= numFatorial; 
        expressao += ` ${ numFatorial } *`;
        numFatorial --;
    }
    
    expressao += ' 1';
    return `R.: O fatorial de ${ expressao } = ${ resultado }`;    
}

// /* ---------- fim da atividad 2 ------------ */

// Atividade 3 - converter Dolar em Real

exibirNaTela( 'atividade_3', 'Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.' );

function converterDolarEmReal() {
    let valorDolar = document.getElementById( 'valor' ).value;
    let resultado = calculoConversao( valorDolar, 4.80 );

    if( resultado !== -1 ) {
        exibirNaTela( 'resultadoConversao', resultado );
        limparCampos( 'valor' );
    } else {
        exibirNaTela( 'resultadoConversao', 'R.: Por favor, verifique o valor informado!' );
        console.error( 'Erro na conversao de Dólar / Real. Verifique o valor do número.' );         
    }          
}

function calculoConversao( valorUsuario, dolar ) {
    let conversao = parseFloat( valorUsuario );
    let cotacaoDolar = parseFloat( dolar );

    if ( conversao < 0 ){
        console.error( 'Valor inválido para o argumento valor' );
        return -1;
    } 

    let resultado = conversao * cotacaoDolar;

    return `R.: Cotação: $ ${ cotacaoDolar.toFixed( 2 ) } Dólar Americando. Conversão: R$ ${ resultado.toFixed( 2 ) } Real Brasileiro`;    
}

// /* ---------- fim da atividad 3 ------------ */

// Atividade 4 - Cálcular area e o perímetro de uma sala retangular.

exibirNaTela( 'atividade_4', 'Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.' );

function calcularAreaPerimetro() {
    let base = document.getElementById( 'baseRet' ).value;
    let altura = document.getElementById( 'alturaRet' ).value;

    let areaRetangulo = formulaArea( base, altura );
    let perimetroRetangulo = formulaPerimetro( base, altura);

    let resultado = areaRetangulo + perimetroRetangulo;

    if( areaRetangulo !== -1 || perimetroRetangulo !== -1 ) {
        exibirNaTela( 'resultadAreaPerimetro', resultado ); 
        limparCampos( 'baseRet', 'alturaRet' );
      //  exibirNaTela( 'resultadAreaPerimetro', perimetroRetangulo ); 
    } else {
        exibirNaTela( 'resultadAreaPerimetro', 'R.: Por favor, verifique o valor informado!' );
        console.error( 'Erro ao calcular área ou perímetro. Verifique os valores.' );  
    }
} 
    
function formulaArea( base, altura ) {
    let baseArea = parseFloat( base );
    let alturaArea = parseFloat( altura );

    if( isNaN( baseArea ) || isNaN( alturaArea )) {
        return `R.: O valor da base e da altura não pode ser uma letra!`;
    }

    if( baseArea < 0 || alturaArea <  0 ) {
        console.error( 'Valor inválido para o argumento base ou altura' );
        return -1;   
    }

    let resultado = baseArea * alturaArea;
    
    return `R.: Fórmula da Área: A = b*h | A = ${ baseArea.toFixed( 2 )}*${ alturaArea.toFixed( 2 )} | medida da Área é = ${ resultado.toFixed( 2 )}cm².`; 
}

function formulaPerimetro( base, altura ) {
    let basePerimetro = parseFloat( base );
    let alturaPerimetro = parseFloat( altura );

    if ( isNaN( basePerimetro ) || isNaN( alturaPerimetro )){
        return `R.: O valor da base e da altura não pode ser uma letra!`;
    }

    if( basePerimetro < 0 || alturaPerimetro < 0 ) {
        console.error( 'Valor inválido para o argumento base ou altura.' );
        return -1;
    }

    let resultado = 2 * ( basePerimetro + alturaPerimetro );

    return `R.: Fórmula do Perímetro: P = 2*(b+h) | P = 2*(${ basePerimetro.toFixed( 2 )}+${ alturaPerimetro.toFixed( 2 )}) | medida do Período P = ${ resultado.toFixed( 2 )}cm².`; 
}

// /* ---------- fim da atividad 4 ------------ */


// // Atividade 5 - calcular area e o perímetro de um Círculo.

exibirNaTela( 'atividade_5', 'Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.' )

function calcularAreaPerimetroCirculo() {
    let raio = document.getElementById( 'raioCirculo' ).value ;

    let pi = 3.14;

    let resultado = areaPerimetroCirculo( raio, pi );

    if( resultado !== -1 || resultado !== -1 ) {
        exibirNaTela( 'resultadAreaPerimetroCirculo', resultado); 
        limparCampos( 'raioCirculo' );  
    } else {
        exibirNaTela( 'resultadAreaPerimetroCirculo', 'R.: Por favor, verifique o valor informado!' );
        console.error( 'Erro ao calcular área ou perímetro do círculo. Verifique os valores.' );  
    }

}

function areaPerimetroCirculo( raioValue, piValue ) {
    let raio = parseFloat( raioValue );
    let pi = parseFloat( piValue );

    if( isNaN( raio ) || isNaN( pi )) {
        return `R.: O valor do Raio eo Pi não pode ser uma letra!`;
    }

    if( raio < 0 || pi < 0 ) {
        console.error( 'Valor inválido para o argumento raio ou pi.' );
        return -1;
    }
   
    let area = pi * Math.pow( raio, 2);
    let perimetro = 2 * pi * raio;

    return `R.: Fórmula da Área do círculo: A = πr2 | A = ${ pi.toFixed( 2 )}*${ raio.toFixed( 2 )}² | medida da área A = ${ area.toFixed( 2 )}cm². Fórmula do Perímetro do círculo: P = 2πr | P = 2*${ raio.toFixed( 2 )}*${ pi.toFixed( 2 )}. Medida do perímetro P = ${ perimetro.toFixed( 2 )}cm².`;
     
}   

// /* ---------- fim da atividad 5 ------------ */


exibirNaTela('atividade_6', 'Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.')

function gerarTabuada() {

}

function adicao( a, b ) {
   return a + b;
}

function subtracao( a, b ) {
    return a - b;
}

function divisao( a, b ) {
    if( b === 0 ) {
        return undefined;    
    }

    return a / b;
}

function multiplicacao( a, b ) {
    return a * b;
}

// /* ---------- fim da atividad 6 ------------ */


// // Atividade 6 - calcular area e o perímetro de um Círculo.