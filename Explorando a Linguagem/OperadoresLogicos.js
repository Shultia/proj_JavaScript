  class Usuario {
    constructor(nome,idade,acompanhante ) {
        this.nome = nome
        this.idade = idade 
        this.acompanhante = acompanhante == "acompanhado"
    }    
    exibirInfo(){
        return console.log(`Ola esses sao seus dados ${this.nome}, ${this.idade} Anos , voce esta ${this.acompanhante}`)
    }
}

const cidades = ['Barueri','Osasco','Carapicuiba','Jandira','Itapevi']

const NovoUsuario = new Usuario('Thiago','18','acompanhado')


function Verificador() {
    if(NovoUsuario == NovoUsuario){
        console.log("Voce Comprou uma passagem para " + cidades.splice(1,2))
    } else {
        console.log("Voce Nao e de maior")
    }
}

console.log(NovoUsuario.exibirInfo())

Verificador();


