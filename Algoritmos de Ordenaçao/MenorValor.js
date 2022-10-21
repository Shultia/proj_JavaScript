const arrProdutos = require('./listaLivros.js')

function ValorMenor(arrProdutos,PosicaoInicial){
    let maisBarato = PosicaoInicial;

for(let atual = 0; atual < arrProdutos.length; atual++){
    if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
        maisBarato = atual
    }
}
 return maisBarato;
}


module.exports = ValorMenor;