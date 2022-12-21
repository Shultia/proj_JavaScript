class Negociacao  {
    constructor(data,quantidade,valor){
        this.quantidade = quantidade;
        this.data = data;
        this.valor = valor;
    }

    obtemVolume(){
        return this.quantidade * this.valor;
    }
}