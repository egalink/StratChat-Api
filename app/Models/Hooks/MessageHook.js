'use strict'

const MessageHook = exports = module.exports = {}
const moment = require('moment')

MessageHook.onCreate = async modelInstance => {
    //
    modelInstance.sent_at_utc = moment.utc()
}
