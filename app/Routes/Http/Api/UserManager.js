'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Group = () => {

     Route.get('/signup', 'UserManager.signup')
          .as('api:user/signup')

     Route.get('/getTotalUsers', 'UserManager.listUsers')
          .as('api:user/all')

}

Route.group(Group)
     .namespace('Api')
     .formats(['json'], true)
     .prefix('api/users')
