class Order{
    #id
    #user
    #cart
    #delivery

    constructor(id, user, cart, delivery){
        this.#id = id
        this.#user = user
        this.#cart = cart
        this.#delivery = delivery
    }

    get id(){
        return this.#id
    }

    get user(){
        return this.#user
    }

    get cart(){
        return this.#cart
    }

    get delivery(){
        return this.#delivery
    }

    set id(id){
        this.#id = id
    }

    set user(user){
        this.#user = user
    }

    set cart(cart){
        this.#cart = cart
    }

    set delivery(delivery){
        this.#delivery = delivery
    }
}

module.exports = (id, user, cart, delivery) => {
    return new Order(id, user, cart, delivery)
}