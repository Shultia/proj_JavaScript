 class User {
    constructor(nome,idade,acompanhante ) {
        this.nome = nome
        this.idade = idade 
        this.acompanhante = acompanhante == "acompanhado"
    }    
    exibirInfo(){
        return console.log(`Ola esses sao seus dados ${this.nome}, ${this.idade} Anos , voce esta ${this.acompanhante}`)
    }
}

const cidades = []

const NovoUser = new User('Thiago','18','acompanhado')

const listaDeDestinos  = ["Salvador","Sao Paulo","Minas Gerais","Barueri","Osasco","Carapicuiba","Jandira","Itapevi"]
let contador = 0;
const destino = `Itapevi`;

function Verificador() {

    for(let contador = 0; contador < listaDeDestinos.length; contador++){
        if(listaDeDestinos[contador] == destino){
            console.log(`Destino Encontrado`)
         }  else {
            console.log("Nao é esse o Destino que voce Deseja")
         }
      }

    if(NovoUser == NovoUser){
        console.log("Voce Comprou uma passagem para " + listaDeDestinos.splice(1,2))
    } else {
        console.log("Voce Nao e de maior")
    }
}


Verificador();


