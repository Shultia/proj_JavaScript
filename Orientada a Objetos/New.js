// function User(nome,email){
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function(){
//         return `${this.nome},${this.email}`
//     }
// }


// // const novoUser = new User('thiago','t@gmail.com')

// // console.log(novoUser.exibirInfos())

// function Admin(role){
//     User.call(this,'Thiago', 't@gmail.com')
//     this.role = role || 'estudante'
// }


// Admin.prototype = Object.create(User.prototype)    
// const novoUser = new Admin('admin')  
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    init: function(nome,email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome){
        return  this.nome
    }
}

const NovoUser = Object.create(user)
NovoUser.init('thiago','t@gmail.com')

// console.log(user.isPrototypeOf(NovoUser))