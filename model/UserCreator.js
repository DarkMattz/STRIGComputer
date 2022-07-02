class UserCreator {
    #dbConnection
    #bcrypt

    constructor(){
        this.#dbConnection = require('./database/connect')
         this.#bcrypt = require('bcrypt')
    }

    createUser(name, phone, email, password){
        this.#bcrypt.genSalt(10, (err, salt) => {
            if(err != null){
                console.error('Error while generating salt: ' + err.message + '(probably should try to use MSG instead)')
            } else {
                this.#bcrypt.hash(password, salt, (err, hash) => {
                    if(err != null){
                        console.error('Error while hashing password: ', err.message)
                    } else {
                        return this.#pushUser(name, phone, email, hash)
                    }
                })
            }
        })
    }

    #pushUser(name, phone, email, passwordHashed){
        //send user to database
        let sendQuery = `INSERT INTO user (name, phone, email, password) VALUES ('${name}', '${phone}', '${email}', '${passwordHashed}')`
        this.#dbConnection.query(sendQuery, (err, res) => {
            if(err != null){
                console.error('Database Query Error : ', err.message)
            } else {
                return 'User creation successful'
            }
        })
    }
}

module.exports = new UserCreator()