class Database {
    #mysql = require('mysql')
    #connection


    //for github user who see this.

    //yeah i will open this to my github, please no steal, im poor, i got this server for free from dewacloud, plz no steal, i will open this for presentation only
    //i worked on this project for more than 24 hours alone, plz no steal, like for real do not steal my database
    //yeah i know there is an env stuff and so on, but i am not using it, i am just using this database for my own project, its tiring man, come on

    //sorry for the gibberish
    constructor(){
        this.#connection = this.#mysql.createConnection({
            host: 'node14016-env-6296244.user.cloudsg01.com', 
            user: 'root',
            password: 'NDDbes60587', //yeah i know
            database: 'STRIG-main-database'
        })

        this.#connection.connect((err) =>{
            if(err != null){
                console.error('Database Connection Error : ', err.message)
            } else {
            }
        })
        
        
    }

    get connection(){
        return this.#connection;
    }
}

module.exports = new Database().connection