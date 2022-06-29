class Address{
    #addresses

    constructor(addresses){
        if(addresses == null){
            this.#addresses = []
        } else {
            this.#addresses = addresses
        }
    }

    get addresses(){
        return this.#addresses
    }

    set addresses(addresses){
        if(Array.isArray(addresses)){
            this.#addresses = addresses
        } else {
            this.#addresses = addresses
        }
    }
}