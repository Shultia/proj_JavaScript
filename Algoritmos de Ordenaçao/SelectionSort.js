const livros = require("./listaLivros.js")
const menorValor = require("./MenorValor.js")

                //1
for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros,atual);

    let livroAtual = livros[atual];
    console.log(livros[atual])
    let livroMenorPreco = livros[menor];
    console.log(livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)