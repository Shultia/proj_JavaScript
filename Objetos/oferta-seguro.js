const cliente = {
    nome : "Thiago",
    idade: 36,
    cpf: "12232234",
    email: "cordeiro@gmail.com",
    fones: ["11964215535","119087432"],
    dependentes: [
        {
            nome: "Thiago Cordeiro",
            nascimento: "28/02/2004",
            parentesco: "filho" },
        {
            nome: "Sara silva",
            nascimento: "20/02/2000",
            parentesco: "filha"
        }
    ],
    saldo:100,  
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de Seguro de vida para ${obj.nome}`)
    } 
}

oferecerSeguro(cliente);
