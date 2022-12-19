import {Cliente} from "./Conta/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Thiago",5000,32023030230);
const gerente = new Gerente("Joaquim", 2500,30200320231);
const cliente = new Cliente("Lais",323,230320230);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123456")



 const DiretorLogin = SistemaAutenticacao.login(diretor,"123456");
 const GerenteLogin = SistemaAutenticacao.login(gerente,"123456");
 const clienteLogin = SistemaAutenticacao.login(cliente,"123456")

console.log(DiretorLogin,GerenteLogin,clienteLogin);