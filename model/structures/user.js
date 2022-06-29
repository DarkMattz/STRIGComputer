class User{
    #id
    #name
    #address
    #phone
    #email
    #passwordHashed

    constructor(id, name, address, phone, email, passwordHashed){
        this.#id = id
        this.#name = name
        this.#address = address
        this.#phone = phone
        this.#email = email
        this.#passwordHashed = passwordHashed
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get address(){
        return this.#address
    }

    get phone(){
        return this.#phone
    }

    get email(){
        return this.#email
    }

    get passwordHashed(){
        return this.#passwordHashed
    }

    set id(id){
        this.#id = id
    }

    set name(name){
        this.#name = name
    }

    set address(address){
        this.#address = address
    }

    set phone(phone){
        this.#phone = phone
    }

    set email(email){
        this.#email = email
    }

    set passwordHashed(passwordHashed){
        this.#passwordHashed = passwordHashed
    }
}

module.exports = (id, name, address, phone, email, passwordHashed) => {
    return new User(id, name, address, phone, email, passwordHashed)
}