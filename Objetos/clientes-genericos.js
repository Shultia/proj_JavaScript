function Cliente (nome,cpf,email,saldo){
    this.nome = nome 
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const thiago = new Cliente("Thiago","12830207879","thiago@gmail.com",40) 



console.log(thiago)