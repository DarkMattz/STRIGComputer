class Product{
    #id
    #name
    #category
    #price
    #condition //new or used
    #image


    constructor(id, name, category, price, condition, image){
        this.#id = id
        this.#name = name
        this.#category = category
        this.#price = price
        this.#condition = condition
        this.#image = image
    }
    
    get id(){
        return this.#id
    }
    
    get name(){
        return this.#name
    }

    get category(){
        return this.#category
    }

    get price(){
        return this.#price
    }

    get condition(){
        return this.#condition
    }

    get image(){
        return this.#image
    }

    set id(id){
        this.#id = id
    }
    
    set name(name){
        this.#name = name 
    }

    set category(category){
        this.#category = category
    }

    set price(price){
        this.#price = price 
    }

    set condition(condition){
        this.#condition = condition
    }
    
    set image(image){
        this.#image = image 
    }
}

module.exports = (id, name, category, price, condition, image) => {
    return new Product(id, name, category, price, condition, image)
}