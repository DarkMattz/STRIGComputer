class delivery{
    #id
    #address
    #userId
    #isSell

    constructor(id, address, userId, isSell){
        this.#id = id
        this.#address = address
        this.#userId = userId
        this.#isSell = isSell
    }

    get id(){
        return this.#id
    }

    get address(){
        return this.#address
    }

    get userId(){
        return this.#userId
    }

    get isSell(){
        return this.#isSell
    }

    set id(id){
        this.#id = id
    }

    set address(address){
        this.#address = address
    }

    set userId(userId){
        this.#userId = userId
    }

    set isSell(isSell){
        this.#isSell = isSell
    }
}

module.exports = (id, address, userId, isSell) => {
    return new delivery(id, address, userId, isSell)
}