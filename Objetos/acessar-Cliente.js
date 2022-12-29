const cliente = {
    nome : "Thiago",
    idade: 36,
    cpf: "12232234",
    email: "cordeiro@gmail.com"
}

const chaves = ["nome","idade","cpf","email"]

//console.log(clientes[chaves[0]])

chaves.forEach(info => console.log(cliente))

console.log(cliente["cliente"])