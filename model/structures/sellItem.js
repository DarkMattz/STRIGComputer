class SellItem{
    #id
    #userid
    #courierid
    #status
    #date

    constructor(id, userid, courierid, status, date){
        this.#id = id
        this.#userid = userid
        this.#courierid = courierid
        this.#status = status
        this.#date = date
    }

    get id(){
        return this.#id
    }

    get userid(){
        return this.#userid
    }

    get courierid(){
        return this.#courierid
    }

    get status(){
        return this.#status
    }

    get date(){
        return this.#date
    }

    set id(id){
        this.#id = id
    }

    set userid(userid){
        this.#userid = userid
    }

    set courierid(courierid){
        this.#courierid = courierid
    }

    set status(status){
        this.#status = status
    }

    set date(date){
        this.#date = date
    }
}

module.exports = (id, userid, courierid, status, date) => {
    return new SellItem(id, userid, courierid, status, date)
}