class Database {
    #mysql = require('mysql')
    #connection
    
    constructor(){
        this.#connection = this.#mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'STRIG-main-database'
        })
        this.#connection.connect((err) =>{
            if(err != null){
                console.error('Database Connection Error : ', err.message)
            }
        })
        console.info('Database connection successful')
    }

    get connection(){
        return this.#connection;
    }
}

module.exports = new Database().connection