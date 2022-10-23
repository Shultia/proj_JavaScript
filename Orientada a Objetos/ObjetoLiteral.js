const user = {
    nome:"Thiago",
    email: "t@gmail.com",
    nascimento: "28/02/2004",
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.email)
    }
}

// user.exibirInfos()
// const exibir = user.exibirInfos 
// exibir()

const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)

exibirNome()
exibir()