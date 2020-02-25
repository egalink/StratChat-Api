'use strict'

class GlobalScopes {

    /**
     * Method receiving the Model class and an
     * customOptions object as its parameters.
     * 
     * @method
     * @param Model
     * @param customOptions
     * @returns void
     */
    register (Model, customOptions = {})
    {
        const defaultOptions = {}
        const options = Object.assign(defaultOptions, customOptions)
        this.activeScope(Model, options)
        this.inactiveScope(Model, options)
    }

    /**
     * Query scope for only active model's.
     *
     * @method
     * @param  Model
     * @return query builder
     */
    activeScope (Model)
    {
        Model.scopeActive = query => query.where('active', 'Y')
    }
    
    /**
     * Query scope for only inactive model's.
     *
     * @method
     * @param  Model
     * @return query builder
     */
    inactiveScope (Model)
    {
        Model.scopeInactive = query => query.where('active', 'N')
    }
}

module.exports = GlobalScopes
