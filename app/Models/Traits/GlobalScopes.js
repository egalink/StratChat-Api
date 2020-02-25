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

        this.deletedScope(Model, options)
        this.notDeletedScope(Model, options)
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

    /**
     * Query scope for only deleted model's.
     *
     * @method
     * @param  Model
     * @return query builder
     */
    deletedScope (Model) {
        Model.scopeDeleted = query => query.where('deleted', 'Y')
    }
    
    /**
     * Query scope for only not deleted model's.
     *
     * @method
     * @param  Model
     * @return query builder
     */
    notDeletedScope (Model) {
        Model.scopeNotDeleted = query => query.where('deleted', 'N')
    }

}

module.exports = GlobalScopes
