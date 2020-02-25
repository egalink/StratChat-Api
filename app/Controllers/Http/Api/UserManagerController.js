'use strict'

const HttpContextController = use('App/Controllers/HttpContextController')
const User = use('App/Models/User')
const Message = use('App/Models/Message')
const Ws = use('Ws')

class UserManagerController extends HttpContextController {

    async signup ({ response, auth }) {

        const user = await this.newUser
        const data = Object.assign(await auth.generate(user), {
            username: user.username,
            id: user.id
        })

        const socket = Ws
            .getChannel('strat/chat')
            .topic('strat/chat')
        
        if (! socket) {} else {
            const message = this.skeleton(`El usuario ${user.username} se ha unido al chat.`)
            socket.broadcastToAll('message', message)
        }

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

        return User
            .query()
            .active()
            .orderBy('id', 'desc')
            .fetch()
    }

    skeleton (text) {

        let message = {}
            message.message = text || '',
            message.sentat  = null,
            message.sender  = { username: null, id: 0 }

        return message
    }

    // end controller.
}

module.exports = UserManagerController
