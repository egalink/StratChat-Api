'use strict'

/*
|--------------------------------------------------------------------------
| Cluster Support for Http server
|--------------------------------------------------------------------------
|
| A single instance of Node.js runs in a single thread.
| To take advantage of multi-core systems, the user will sometimes want to
| launch a cluster of Node.js processes to handle the load.
|
| see: https://nodejs.org/api/cluster.html
*/

const cluster = require('cluster')
const numCPUs = require('os').cpus().length/*
const numCPUs = 1//*/

if (cluster.isMaster) {

    console.log(`master ${process.pid} is running:`);

    for (let i = 0; i < numCPUs; i ++) {
        cluster.fork()
    }

    require('@adonisjs/websocket/clusterPubSub')()
    return
}

/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| This file bootstraps Adonisjs to start the HTTP server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTP server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass a relative path from the project root.
*/

const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
    .appRoot(__dirname)
    .wsServer() // boot the WebSocket server
    .fireHttpServer()
    .catch(console.error)
