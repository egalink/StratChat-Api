'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MessageList extends Model {
    
    static boot () {

        super.boot()
    }

    static get table () {
        
        return 'message_lists'
    }

}

module.exports = MessageList
