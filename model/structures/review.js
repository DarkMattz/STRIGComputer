class Review{
    #userID
    #productID
    #rating

    constructor(userID, productID, rating){
        this.#userID = userID
        this.#productID = productID
        this.#rating = rating
    }

    get userID(){
        return this.#userID
    }

    get productID(){
        return this.#productID
    }

    get rating(){
        return this.#rating
    }

    set userID(userID){
        this.#userID = userID
    }

    set productID(productID){
        this.#productID = productID
    }

    set rating(rating){
        this.#rating = rating
    }
}

module.exports = (userID, productID, rating) => {
    return new Review(userID, productID, rating)
}