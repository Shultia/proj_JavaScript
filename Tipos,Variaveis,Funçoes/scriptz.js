let idade = 12;
let nome = "Jose"
let estado = "SP";
let CPF =  "483.020.778-79"
let sexo = "Feminino";


function portaria () {
    if (idade >= 18) {
        console.log("Voce é maior de Idade")
    } else {
        console.log("Voce nao é maior de idade")
    }
    
    if(nome.length > 2 ) {
        console.log(`Seu nome é  ${nome}`)
    } else {
        console.log("Coloque um nome valido")
    }

    if (estado.length == 2 ) {
        console.log(`Voce mora em ${estado}`)
    }   else  {
        console.log("Por favor Insira um estado valido")
    }
    
    if (CPF.length == 14 )  {
        console.log (`Este é seu CPF ${CPF}`)
    } else {
        console.log("Por favor insira um CPF valido")
    }

    if (sexo == "Masculino" || sexo == "Feminino") {
        console.log(`Voce pode entrar seu sexo é  ${sexo}`)
    } else {
        console.log("Insira um sexo valido")
    }
}




portaria();