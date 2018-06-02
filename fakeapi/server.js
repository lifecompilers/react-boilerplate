const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('fakeapi/db.json')
const middlewares = jsonServer.defaults()
const PORT = 7000
server.use(middlewares)
server.use('/api', router) // Rewrite routes to appear after /api
server.listen(PORT, function () {
  console.log('Fake API Server is running at PORT ' + PORT)
})
