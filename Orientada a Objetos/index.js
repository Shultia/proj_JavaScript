import Docente from "./Docente.js";
import User from "./User.js";
import Admin from "./Admin.js";


// const novoUser = new User('THIAGO', 't@gmail.com','28/02/2004')
// console.log(novoUser.exibirInfos())


const novoAdmin = new Admin ('Thiagoo','tg@gmail.com','29/02/2004')

const novoDocente = new Docente('guilherme','j@gmail.com','20/2/2222')

console.log(novoDocente.exibirInfos())