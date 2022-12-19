import {Cliente} from "./Conta/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Thiago",5000,32023030230);

const gerente = new Gerente("Joaquim", 2500,30200320231);

gerente.cadastrarSenha("123")
diretor.cadastrarSenha("1234")
const logado = SistemaAutenticacao.login(gerente,"123");


console.log(logado);