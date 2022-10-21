function Cliente (nome,cpf,email,saldo){
    this.nome = nome 
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
    this.saldo += valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoP){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoP = saldoP
}



const thiago = new clientePoupanca("thiago","431072323","thiago@gmail.com",130,400)

clientePoupanca.prototype.depositarP = function(valor){
    this.saldoP += valor
}

thiago.depositarP(400)

console.log(thiago)