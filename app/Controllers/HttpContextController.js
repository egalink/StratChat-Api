'use strict'

class HttpContextController {

    constructor (context = null) {
        this.context = context
    }

    set ctx (context) {
        this.context = context
    }

    get request () {
        return this.context.request
    }

    get response () {
        return this.context.response
    }
    
    get session () {
        return this.context.session
    }
    
    get socket () {
        return this.context.socket
    }

    get view () {
        return this.context.view
    }

    get antl () {
        return this.context.antl
    }

    get auth () {
        return this.context.auth
    }

}

module.exports = HttpContextController