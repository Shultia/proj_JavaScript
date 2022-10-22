const listaLivros = require('./arrays');
const ListaLivros = require('./arrays')

function mergeSort(array){
    if(array.length > 1 ){
        const meio =  Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0,meio));
        const part2 = mergeSort(array.slice(meio, array.length));
        array = ordena(part1,part2);
    }

    return array;
}


function ordena(part1, part2) {
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;
    
    const resultado = []
    
    while(posicaoAtual1 < part1.length && posicaoAtual2 < part2.length){
        let produtoAtual1 = part1[posicaoAtual1];
        let produtoAtual2 = part2[posicaoAtual2];

        if(produtoAtual1.preco < produtoAtual2.preco){
            resultado.push(produtoAtual1);
            posicaoAtual1++
        } else {
            resultado.push(produtoAtual2);
            posicaoAtual2++
        }
    }

    return resultado.concat(posicaoAtual1 < part1.length 
        ?  part1.slice(posicaoAtual1) 
        : part2.slice(posicaoAtual2))
}
    

console.log(mergeSort(listaLivros));