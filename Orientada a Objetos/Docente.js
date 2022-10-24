import User from "./User.js";

class Docente extends User {
    constructor( nome, email, nascimento, role ='docente', ativo = true) {
        super(nome,email,nascimento,role,ativo)
    }
    aprovaEstudante(Estudante,curso) {
        return `estudante ${Estudante} aprovado no curso ${curso}`
    }
}


const novoDocente = new Docente('thiago','1@gmail.com','20/2/2001')

console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('joaquim','JS'))