import User from "./User.js";

class Admin extends User {
    constructor( nome, email, nascimento, role ='Admin', ativo = true) {
        super(nome,email,nascimento,role,ativo)
    }
    criarCurso(nomeDoCurso,vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} Vagas`
    }
}

const novoAdmin = new Admin('thiagos','1@gmail.com','20-02-2000')
console.log(novoAdmin.criarCurso('js','20'))