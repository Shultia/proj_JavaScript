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

const admin = {
    nome: "juliana",
    email: "j@gmail.com",
    role: "admin",
    ativo: "true",
    criarCurso(){
        console.log('curso criado')
    }
}




Object.setPrototypeOf(admin,user)
admin.criarCurso()
admin.exibirInfos()