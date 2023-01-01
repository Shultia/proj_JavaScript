class DateHelper {

    constructor (){
        throw Error('Esta classe nao pode ser instaciado')
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
    }
    
   static textoParaData(texto){    

       if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw Error ('Deve estar no formato ano mes aaaa-mm-dd'); 
        return  new Date (...texto.split('-').map((item,indice) => item - indice % 2 ));
    }

   
} 