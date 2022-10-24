import User from "./User.js";

class Admin extends User {
    constructor( nome, email, nascimento, role ='Admin', ativo = true) {
        super(nome,email,nascimento,role,ativo)
    }
}

const novoAdmin = new Admin('thiagos','1@gmail.com','20-02-2000')


console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())