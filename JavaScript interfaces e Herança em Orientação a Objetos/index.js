import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new Conta(0,cliente1,1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const ContaPoupa = new Conta(50,cliente1,10001);


console.log(ContaPoupa);
console.log(contaCorrenteRicardo);

