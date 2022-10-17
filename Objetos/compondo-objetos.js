const cliente = {
    nome : "Thiago",
    idade: 36,
    cpf: "12232234",
    email: "cordeiro@gmail.com",
    fones: ["11964215535","119087432"]
}


cliente.dependentes =  {
    nome:"Sara",
    parentesco:"filha",
    data_nascimento: "28/02/2004"
}


console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente.dependentes)
