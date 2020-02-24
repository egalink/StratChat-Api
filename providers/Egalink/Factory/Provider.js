'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class Provider extends ServiceProvider {
    
    /**
     * Register namespaces to the IoC container
     *
     * @method register
     *
     * @return {void}
     */
    register () {
        //
        this.app.singleton('Egalink/Factory', () => {
            
            const FactoryProvider = new (
                require('.')
            ) (
                require('chance').Chance()
            )
            
            return FactoryProvider
        })
    }

    /**
     * Attach context getter when all providers have
     * been registered
     *
     * @method boot
     *
     * @return {void}
     */
    boot () {
        //
    }

}

module.exports = Provider
