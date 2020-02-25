'use strict'

class WhenCreatingAmessage {

	register (Model, customOptions = {}) {
		const defaultOptions = {}
        const options = Object.assign(defaultOptions, customOptions)
        Model.addHook('beforeCreate', 'MessageHook.onCreate')
    }
    
}

module.exports = WhenCreatingAmessage
