const alunos = ["João", "Juliana", "Caio", "Ana"]
const mediasDosAlunos = [10, 7, 9,6]

//includes => boolean
//IndexOf => retorna um numero 


let listaDeNotasEAlunos = [alunos,mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno) ){
      let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + " Sua media é " + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno nao esta cadastrado"
    }   
}


console.log(exibeNomeNota("Ana"))