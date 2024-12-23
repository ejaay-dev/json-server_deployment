const fs = require("fs")
const path = require("path")
const jsonServer = require("json-server")

// Should create a tmp folder and place the db.json file inside it to resolve EROFS issue
// Check if the tmp directory exists
const tmpDir = path.join(__dirname, "tmp")
if (!fs.existsSync(tmpDir)) {
  fs.mkdir(tmpDir, { recursive: true })
}

const dbPath = path.join(tmpDir, "db.json")
// Check if the db.json file exists. If not, create the db.json file (or handle as needed)
if (!fs.existsSync(dbPath)) {
  fs.writeFile(dbPath, JSON.stringify({ tasks: [] }), "utf8")
}
const server = jsonServer.create()
const router = jsonServer.router(dbPath)
// const router = jsonServer.router(path.join(__dirname, "tmp", "db.json"))

server.use(router)
server.listen(3000, () => {
  console.log("JSON Server is running!")
})

module.exports = server
