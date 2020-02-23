'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const User = use('App/Models/User')

class UserSchema extends Schema {

    up () {

        this.create(User.table, table => {

            table.engine('InnoDB')
            table.increments()

            table.string('username', 32).notNullable().unique()
            table.string('email', 64).notNullable().unique()
            table.string('password', 128).notNullable()
            table.enum('active', ['Y', 'N']).default('Y')

            table.timestamps()
        })
    }

    down () {

        this.drop(User.table)
    }
}

module.exports = UserSchema
