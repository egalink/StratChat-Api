'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const UserHook = module.exports = {}

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} modelInstance
 *
 * @return {void}
 */
UserHook.hashPassword = async modelInstance => {
    if (modelInstance.dirty.password) {
        modelInstance.password = await Hash.make(modelInstance.password)
    }
}
