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

    #montaObjetosUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos(){
        const objUser = this.#montaObjetosUser()
        return `${objUser.nome}, ${objUser.email}`
    }
}



