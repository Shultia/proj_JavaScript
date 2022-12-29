import User from "./User.js";

 export default class Admin extends User {
    constructor( nome, email, nascimento, role ='Admin', ativo = true) {
        super(nome,email,nascimento,role,ativo)
    }

    nomeAdmim() {
        return `${this.nome}` 
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}`
    }

    criarCurso(nomeDoCurso,vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} Vagas`
    }
}

const novoAdmin = new Admin('thiagos','1@gmail.com','20-02-2000')
