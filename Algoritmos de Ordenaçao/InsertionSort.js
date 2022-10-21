const livros = require('./listaLivros');

function insertionSort(lista) {

  let index=1
  for (index; index < lista.length; index++) {
    if (index > 0 && lista[index].preco < lista[index - 1].preco) {
      let itemAtual = lista[index];
      let itemAnterior = lista[index - 1];

      lista[index] = itemAnterior
      lista[index - 1] = itemAtual

      index = index-2       
      //necessário subtrair dois do index para refazer a análise anterior, pois ao executar uma vez o laço, o for está incrementando +1.
    }
  }
  console.log(lista);
}

insertionSort(livros);