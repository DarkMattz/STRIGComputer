class AddressHandler{
    #dbConnection
    #util

    constructor(){
        this.#dbConnection = require('./database/connect')
        this.#util = require('util')
    }

    addAddress(user, address){
        let query = `INSERT INTO address (userId, address) VALUES ('${user.id}', '${address}')`
        this.#dbConnection.query(query, (err, res) => {
            if(err != null){
                console.error('Database Query Error : ', err.message)
            } else {
                return 'Address added successfully'
            }
        })
    }

    async getAddress(user){
        let getQuery = `SELECT * FROM address WHERE userId = '${user.id}'`
        let query = this.#util.promisify(this.#dbConnection.query).bind(this.#dbConnection)
        let fetchedData = await query(getQuery)
        if(fetchedData.length === 0){
            throw new Error('No address found with userId: ' + user.id)
        } else {
            let addresses = new Array()
            fetchedData.forEach(element => {
                addresses.push(element.address)
            })
            user.address = addresses
            return user
        }
    }

}

module.exports = new AddressHandler()