'use strict'

const HttpContextController = use('App/Controllers/HttpContextController')
const ChatController = use('App/Controllers/Ws/ChatController')
const Message = use('App/Models/Message')

class MessageManagerController extends HttpContextController {

    async listMessages (ctx) {
        //
        this.ctx = ctx

        const list = (await this.getLastMessageList)

            .toJSON()
            .reverse()
            .map(message => (new ChatController).skeleton(message))

        this.response
            .ok(list)
    }

    /**
     * Get last 50 messages in chat.
     * 
     * @return <Promise>
     */
    get getLastMessageList () {
        //
        const limit = this
            .request
            .input('limit', null)

        return Message
            .query()
            .notDeleted()
            .with('user')
            .limit(limit || 50)
            .orderBy('id', 'desc')
            .fetch()
    }

    // end controller.
}

module.exports = MessageManagerController
