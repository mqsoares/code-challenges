function calcIMC(peso, altura) {

    if(typeof peso !== 'number' || typeof altura !== 'number') {
        throw Error('Apenas Números');
    }
    
    return parseFloat(peso / (altura*altura)).toFixed(2);

}

let imc = calcIMC(72, 1.71)
console.log(imc)