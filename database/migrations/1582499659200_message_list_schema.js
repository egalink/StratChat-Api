'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const MessageList = use('App/Models/MessageList')
const User = use('App/Models/User')

class MessageListSchema extends Schema {
    
    up () {
        
        this.create(MessageList.table, table => {

            table.engine('InnoDB')
            table.increments()

            table.integer('user_id')
                 .unsigned()
                 .references('id')
                 .inTable(User.table)
                 .onDelete('CASCADE')
                 .onUpdate('CASCADE')
            
            table.text('message')
            table.enum('deleted', ['Y', 'N'])
                 .default('N')

            table.timestamps()
        })
    }

    down () {

        this.drop(MessageList.table)
    }
}

module.exports = MessageListSchema
