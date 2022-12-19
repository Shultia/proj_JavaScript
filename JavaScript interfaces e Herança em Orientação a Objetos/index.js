import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente("Thiago",500029088730);


const ContaCorrenteThiago = new ContaCorrente(0,cliente1,1001);
const contaPoupanca = new ContaPoupanca(50,cliente1,1001);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(50);

console.log(contaSalario);
