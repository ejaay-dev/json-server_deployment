import { createServer } from "json-server"

const server = createServer()
const router = server.router("db.json")
const middlewares = server.defaults()

// Set up middlewares
server.use(middlewares)

// API routing
server.use(router)

export default function handler(req, res) {
  server(req, res)
}
