class Courier{
    #id
    #name
    #phone

    constructor(id, name, phone){
        this.#id = id
        this.#name = name
        this.#phone = phone
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get phone(){
        return this.#phone
    }

    set id(id){
        this.#id = id
    }

    set name(name){
        this.#name = name
    }

    set phone(phone){
        this.#phone = phone
    }
}

module.exports = (id, name, phone) => {
    return new Courier(id, name, phone)
}