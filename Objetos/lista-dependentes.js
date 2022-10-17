const cliente = {
    nome : "Thiago",
    idade: 36,
    cpf: "12232234",
    email: "cordeiro@gmail.com",
    fones: ["11964215535","119087432"],
    dependentes: [{
        nome:"Sara",
        parentesco:"filha",
        data_nascimento: "28/02/2004"
    }] 
}

cliente.dependentes.push({
    nome:"Sania Marilia",
    parentesco:"mae",
    data_nascimento: "10/02/1990"
})


const filhaNova = cliente.dependentes.filter(dependente => dependente.data_nascimento === "28/02/2004")


console.log(filhaNova)