class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const thiago = new Cliente ("thiago","thiago@gmail.com","4833222232",400)


class ClienteP extends Cliente {
    constructor(nome,email,cpf,saldo,saldoP){
        super(nome,email,cpf,saldo)
        this.saldoP = saldoP
    }
    depositarP(valor){
        this.saldoP += valor
    }
}

const thiagoC = new ClienteP("Thiago","thiago@gmail.com","43433323",400,900)



thiagoC.depositar(60)
thiagoC.depositarP(323)

console.log(thiagoC)