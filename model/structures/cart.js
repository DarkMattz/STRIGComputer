class Cart{
    #id
    #orderedProducts
    constructor(id){
        this.#id = id
        this.#orderedProducts = new Array()
    }

    get id(){
        return this.#id
    }

    get orderedProducts(){
        return this.#orderedProducts
    }

    set id(id){
        this.#id = id
    }

    set orderedProducts(orderedProducts){
        if(Array.isArray(orderedProducts)){
            this.#orderedProducts = orderedProducts
        } else {
            this.#orderedProducts.push(orderedProducts)
        }
    }
}

module.exports = (id) => {
    return new Cart(id)
}