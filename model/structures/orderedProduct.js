class orderedProduct{
    #id
    #qty

    constructor(id, qty){
        this.#id = id
        this.#qty = qty
    }

    get id(){
        return this.#id
    }

    get qty(){
        return this.#qty
    }

    set id(id){
        this.#id = id
    }

    set qty(qty){
        this.#qty = qty
    }
}

module.exports = (id, qty) => {
    return new orderedProduct(id, qty)
}