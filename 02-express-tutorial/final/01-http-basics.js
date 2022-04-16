const http = require('http')
const {readFileSync} =require('fs')

const homePage = readFileSync('./../navbar-app/index.html', 'utf8')
const homeStyle = readFileSync('./../navbar-app/styles.css')
const homeImage= readFileSync('./../navbar-app/logo.svg')
const homeLogic = readFileSync('./../navbar-app/browser-app.js')
// console.log(homePage);
// 02-express-tutorial\final\01-http-basics.js
// 02-express-tutorial\methods-public\index.html

// 01-node-tutorial\1-event-loop-examples\1-read-file.js
//               01-node-tutorial\content\first.txt

//      02-express-tutorial\final\01-http-basics.js
// 02-express-tutorial\navbar-app\index.html
const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
    // about page
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
      }
      else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeStyle)
        res.end()
      }
      else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(homeStyle)
        res.end()
      }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
