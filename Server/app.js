require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const socketio = require('socket.io')
const http = require('http')
const logger = require('morgan')
const cors = require('cors')

const initRouter = require('./Router/API')

const app = express()
const server = http.createServer(app);
const io = socketio(server)
const port = process.env.port


app.use(logger())
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


initRouter(app)

app.get('/',  (req, res) =>{
    res.status(200).json({message: "welcome nodejs api "})
})

server.listen(port, (err)=>{
    if (err) throw err
    console.log(`server connect success http://localhost:${port}`)
})