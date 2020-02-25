'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
    
    static boot () {

        super.boot()
        this.addTrait('WhenCreatingAmessage')
    }

    static get table () {
        
        return 'messages'
    }

    static get dates () {
        return super.dates.concat(['sent_at_utc'])
    }

    /**
     * Ths message belongs to user.
     *
     * @method tokens
     *
     * @return {Object}
     */
    user () {
        return this.belongsTo('App/Models/User')
    }
    
}

module.exports = Message
