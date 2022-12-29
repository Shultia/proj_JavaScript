const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaPython = [6,5,8,9,5,6]
const salaJava = [7,3.5,8,9.5]

function media(NotasDaSala){
        const somaDasNotas = NotasDaSala.reduce((acum,atual) => atual + acum, 0)
        return somaDasNotas/NotasDaSala.length
}


console.log(media(salaJS))
console.log(media(salaPython))
console.log(media(salaJava))


const notas = [10,6.5,8,7]

const mediaGeral = notas.reduce((acum,atual) => atual + acum,0) /notas.length


console.log(mediaGeral)