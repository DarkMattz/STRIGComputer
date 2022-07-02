const { query } = require('express')

class ProductGetter{
    #dbcon

    constructor(){
        this.#dbcon = require('./database/connect')
    }

    getProduct(index){
    }

    getProductBasedOn(kind, amount){
        
        // let products = new Array()
        // let query = `SELECT * FROM product WHERE ${kind} = ${amount}`
        // products.push()
        // this.#dbcon.query(query, (err, res) => {
        //     if(err != null){
        //         console.error('Database Query Error: ', err.message)
        //     } else {
        //         for(let i = 0; i < res.length; i++){
        //             console.log(res)
        //             products.push(res[i])
        //         }
        //     }
        // })
    }
}

module.exports = new ProductGetter()