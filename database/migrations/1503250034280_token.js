'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Token = use('App/Models/Token')
const User = use('App/Models/User')

class TokensSchema extends Schema {

    up () {

        this.create(Token.table, table => {

            table.engine('InnoDB')
            table.increments()

            table.integer('user_id')
                 .unsigned()
                 .references('id')
                 .inTable(User.table)
                 .onDelete('CASCADE')
                 .onUpdate('CASCADE')

            table.string('token', 255).notNullable().unique().index()
            table.string('type', 96).notNullable()
            table.boolean('is_revoked').defaultTo(false)

            table.timestamps()
        })
    }

    down () {

        this.drop(Token.table)
    }
}

module.exports = TokensSchema
