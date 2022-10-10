/*
    ####### Calcular IMC ######
    IMC = peso / altura² (003 - Calcular IMC)
*/

function calcIMC(peso, altura) {

    if(typeof peso !== 'number' || typeof altura !== 'number') {
        throw Error('Apenas Números');
    }
    
    return parseFloat(peso / (altura*altura)).toFixed(2);

}

function classificaIMC(imc) {
    
    if(imc <= 16.9 ) {
        console.log('Muito abaixo do peso')
    } else if(imc <= 18.4) {
        console.log('Abaixo do peso')
    } else if(imc <= 24.9) {
        console.log('Peso normal') 
    } else if(imc <= 29.9) {
        console.log('Acima do peso')
    } else if(imc <= 34.9) {
        console.log('Obesidade Grau I')
    } else if(imc <= 40) {
        console.log('Obesidade Grau II')
    }else {
        console.log('Obesidade Grau III')
    }

}

let imc = calcIMC(72, 1.71)
console.log(imc)
classificaIMC(imc)