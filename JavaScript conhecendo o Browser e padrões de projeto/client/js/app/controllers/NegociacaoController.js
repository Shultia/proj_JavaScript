class NegociacaoController {
    constructor(){

        let $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');

    }
    adiciona(event){
        event.preventDefault();
        
        //string
        let data  = new Date(...this.inputData.value.split('-')
        .map(function(item,indice){
            return item - indice % 2 
        }));
        console.log(data)
    
      
    }
}