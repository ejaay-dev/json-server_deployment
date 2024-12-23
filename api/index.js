const jsonServer = require("json-server")
const path = require("path")

const server = jsonServer.create()

// Created a tmp folder and placed the db.json to solve EROFS issue
const router = jsonServer.router(path.join(__dirname, "tmp", "db.json"))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

module.exports = server
