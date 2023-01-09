var stores = ['negociacoes'];
var version = 4;
var dbName = 'negociacoes'

class ConnectionFactory {
    constructor(){
        throw new Error('Nao e possivel criar instancias de ConecctionFactory');
    }

    static getConnection(){
        return Promise((resolve,reject) => {
            let openRequest = window.indexedDB.open(dbName,version);

            openRequest.onupgradeneeded =  (e) => {
                
            };
            
            openRequest.onsuccess =  (e) => {

            };

            openRequest.onerror = (e) => {

            };
        });
    };
};



ConnectionFactory.getConnection();