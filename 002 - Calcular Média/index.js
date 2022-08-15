function calcMedia() {
    
    let total = 0;
    let qtde = arguments.length;
    
    for(let i = 0; i < qtde ; i++) {
        if(typeof arguments[i] !== 'number') {
            throw Error(' Error - somente números');
        } 
        total += arguments[i];
    } 

    return (total / qtde) || 0
}

let media = calcMedia()
// let media = calcMedia(2,6)
// let media = calcMedia(2,"6")
console.log(media)