import * as http from "http"

const PORT = 8080

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hello World\n")
  })
  .listen(PORT, () => console.log(`http://localhost:${PORT}`))
