const user = {
    nome:"Thiago",
    email: "t@gmail.com",
    nascimento: "28/02/2004",
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.email,this.nome)
    }
}

//herança de prototipo