export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome,email,nascimento,role,ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'Estudante'
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome
    }
    
    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.ativo
    }

    exibirInfos(){
        const objUser = this.#montaObjetosUser()
        return `${objUser.nome}, ${objUser.email}`
    }
}



