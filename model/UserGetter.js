class UserGetter{
    #util
    #dbConnection
    #bcrypt
    #user

    constructor(){
        this.#dbConnection = require('./database/connect')
        this.#bcrypt = require('bcrypt')
        this.#util = require('util')
    }

    async signInWithEmailAndPassword(email, password){
        let queryString = `SELECT * FROM user WHERE email = '${email}'`
        let query = this.#util.promisify(this.#dbConnection.query).bind(this.#dbConnection)
        let fetchedData = await query(queryString)
        if(fetchedData.length === 0){
            throw new Error('User not found')
        } else {
            let isPasswordCorrect = await this.#bcrypt.compare(password, fetchedData[0].password)
            if(isPasswordCorrect){
                this.#user = require('./structures/user')(fetchedData[0].id, fetchedData[0].name, null, fetchedData[0].phone, fetchedData[0].email, fetchedData[0].password)
                return this.#user
            } else {
                throw new Error('Password is incorrect')
            }
        }
    }
}

module.exports = new UserGetter()