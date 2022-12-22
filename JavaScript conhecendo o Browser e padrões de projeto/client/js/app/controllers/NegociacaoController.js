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
        let data  = new Date(this.inputData.value.replace(/-/g, ','));

        console.log(data)
    
      
    }
}