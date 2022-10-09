function apresentar(nome){
    return `meu nome é ${nome}`;
}


// Arrow Function

const apresentarArrow = nome => `meu nome é ${nome}`;
const sominha =  (num1, num2) => num1 + num2;


console.log(apresentarArrow("Thiago"))

console.log(sominha(2,3))


//Arrow function com mais de uma linha de codigo


const somaArrow = (num1,num2) => {
    if (num1 > 10 || num2  > 10){
        return "somente numeros 1 a 9"
    } else {
        return num1 + num2
    }
    
}   

console.log(somaArrow(2,5))



//hoisting :  arrow function se comporta como expressao

//operador maior ou igual que
//>=