'use strict'

const HttpContextController = use('App/Controllers/HttpContextController')

class ChatController extends HttpContextController {

    onMessage (text) {
        // same as: socket.on('text')
        try {
            this.broadcastMessages(this.auth, text)
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
    
    async broadcastMessages ({ user }, text) {
        //
        user.messages().create({ text: text })

        const message = await user
            
            .messages()
            .with('user')
            .last()

        this.socket
            .broadcastToAll('message', this.skeleton(message.toJSON()) || {})
    }

    skeleton ({ text, user, sent_at_utc }) {

        /*return {
            message: 'Hay algo en lo que te pueda ayudar? ...',
            sender: { username: 'Egalink Hdz.', id: 'me' },
            sentat: '22-02-2020T18:03:22',
        }//*/

        let message = {}
            message.message = text || '',
            message.sentat  = sent_at_utc,
            message.sender  = {
                username: user.username,
                id: 'me'
            }

        return message
    }

    obj (obje = {}) {
        return obj
    }

    // end WS controller.
}

module.exports = ChatController
