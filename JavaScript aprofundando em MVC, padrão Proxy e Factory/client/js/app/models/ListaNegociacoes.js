class ListaNegociacoes {
    constructor(contexto,update){
        this._negociacoes = [];
        this._update = update
        this._contexto = contexto;
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
       // this._update(this);
       Reflect.apply(this._update,this._contexto,[this]);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        //this._update(this);
        Reflect.apply(this._update,this._contexto,[this]);
    }
}