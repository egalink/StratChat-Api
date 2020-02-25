'use strict'

const HttpContextController = use('App/Controllers/HttpContextController')
const User = use('App/Models/User')

class UserManager extends HttpContextController {

    async signup ({ response, auth }) {

        const user = await this.newUser
        const data = Object.assign(await auth.generate(user), {
            username: user.username,
            id: user.id
        })

        response.ok(data)
    }

    async listUsers ({ response }) {

        response.ok(await this.allActiveUsers)
    }

    /**
     * Create a random userdata to store it into the database.
     * 
     * @return <Promise>
     */
    get newUser () {

        return User.create(User.faked)
    }

    /**
     * Return all current active users.
     * 
     * @return <Promise>
     */
    get allActiveUsers () {

        return User.query().active().fetch()
    }

    // end controller.
}

module.exports = UserManager
