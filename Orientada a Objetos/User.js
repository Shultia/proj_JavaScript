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

    set nome(NovoNome) {
        if (NovoNome === ''){
            throw new Error('Formato invalido')
        }
        this.#nome = NovoNome
    }
    


    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento},${this.role},${this.#ativo}`
    }
}



