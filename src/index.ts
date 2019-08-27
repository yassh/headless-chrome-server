import * as http from "http"
import * as puppeteer from "puppeteer"

const PORT = 8888

async function main() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.emulate(puppeteer.devices["iPhone X"])

  function open(url: string) {
    console.log(`Open ${url}`)
    page.goto(url)
  }

  http
    .createServer((req, res) => {
      const url = req.headers["x-url"]

      if (url) {
        const urlStr = Array.isArray(url) ? url[0] : url
        open(urlStr)
      }

      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Headers", "*")
      res.end()
    })
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
}

main()
