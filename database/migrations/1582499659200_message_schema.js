'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Message = use('App/Models/Message')
const User = use('App/Models/User')

class MessageSchema extends Schema {
    
    up () {
        
        this.create(Message.table, table => {

            table.engine('InnoDB')
            table.increments()

            table.integer('user_id')
                 .unsigned()
                 .references('id')
                 .inTable(User.table)
                 .onDelete('CASCADE')
                 .onUpdate('CASCADE')
            
            table.text('text')
                 .nullable()

            table.timestamp('sent_at_utc')
                 .nullable()

            table.enum('deleted', ['Y', 'N'])
                 .default('N')

            table.timestamps()
        })
    }

    down () {

        this.drop(Message.table)
    }
}

module.exports = MessageSchema
