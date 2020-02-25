'use strict'

const HttpContextController = use('App/Controllers/HttpContextController')

class ChatController extends HttpContextController {

    async onMessage (text) {
        // same as: socket.on('text')
        try {
            await
            this.broadcastMessages(this.auth.user, text)
        } catch (error) {
            console.log(error)            
        }
    }

    onClose () {
        // same as: socket.on('close')
    }

    onError () {
        // same as: socket.on('error')
    }
    
    async broadcastMessages (user, text) {
        //
        const message = await user.messages().create({ text: text })
        await message.load('user')
        this.socket.broadcastToAll('message', this.skeleton(message.toJSON()) || {})
    }

    skeleton ({ text, user, sent_at_utc }) {

        // return {
        //     message: 'Hay algo en lo que te pueda ayudar? ...',
        //     sender: { username: 'Jakim Hernández', id: 1 },
        //     sentat: '22-02-2020 18:03:22',
        // }

        let message = {}
            message.message = text || '',
            message.sentat  = sent_at_utc,
            message.sender  = {
                username: user.username,
                id: user.id
            }

        return message
    }

    obj (obje = {}) {
        return obj
    }

    // end WS controller.
}

module.exports = ChatController
