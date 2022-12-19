import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";


const cliente1 = new Cliente("Thiago",500029088730);


const ContaCorrenteThiago = new ContaCorrente(0,cliente1,1001);
ContaCorrenteThiago.depositar(355);
ContaCorrenteThiago.sacar(55);

const contaPoupanca = new ContaPoupanca(50,cliente1,1001);

console.log(contaPoupanca);
console.log(ContaCorrenteThiago); 