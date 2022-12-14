//classe Abstrata
export class Conta  {
    constructor(saldoInicial,cliente,agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
           throw new Error ("Voce nao deveria instanciar um objeto tipo conta,pois essa e uma classe abstrata")
        }
    }
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }
    
    //Metodo abstrato
    sacar(valor){
       throw Error ("Metodo Sacar da conta e Abstrato")
    }

    _sacar(valor,taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        
        return 0;
    }
    
    depositar(valor){
        this._saldo += valor;           
    }
    
    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}