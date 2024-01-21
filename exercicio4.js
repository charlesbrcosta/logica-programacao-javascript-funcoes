

function exibirNaTela( id, texto ) {
    let campo = document.getElementById( id );
    campo.textContent = texto;
}

exibirNaTela( 'atividade_4', 'Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.' )

function calcularAreaPerimetro() {
    let altura = Number( document.getElementById( 'altura_sala' ).value );
    let base = Number( document.getElementById( 'base_sala' ).value );

    let area_retangulo = formulaArea( base, altura );
    let perimetro_retangulo = formulaPerimetro( base, altura);

    if( area_retangulo > 0 && perimetro_retangulo > 0 ) {
        exibirNaTela( 'resultadAreaPerimetro', `O cálculo da área: ${ area_retangulo }. cálculo do perímetro: ${ perimetro_retangulo }`) 
        limparCampo();
    } else {
        exibirNaTela( 'resultadAreaPerimetro', 'Error' );   
        limparCampo();      
    }    
}

function formulaArea( base, altura ) {
    let area;

    if( area < 1 ) {
        return -1;
    } else {
        area = ( base * altura );
        return area;
    }    
}

function formulaPerimetro( base, altura ) {
    let perimetro;

    if ( !isNaN(Number( perimetro ))) {
        return -1;
    } else {
        perimetro =  (base + altura + base + altura );
        return perimetro;
    }
}

function limparCampo() {
    let limparAltura = document.getElementById( 'altura_sala' );
    let limparBase = document.getElementById( 'base_sala' );

    if ( limparAltura && limparBase ) {
        limparAltura.value = '';
        limparBase.value = '';
    } else {
        console.log( 'IDs inválidos. Verificá-los.' )
    }
}