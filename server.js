//express & ejs
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require("path");

const configs = require('./config')
const schemes = require('./db/schemes')

//database
const Realm = require('realm')
const { ObjectId } = require('bson')

//socket
const { Server } = require("socket.io");
const io = new Server(server);



//express conf
app.set("views",path.join(__dirname, 'views'))
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));


//socket
io.on('connection',(socket) => {

})



app.get('/', (req, res) => {
    const bozs = ["you","i","ship"]
    res.render('index',{persons : bozs})
});

server.listen(configs.PORT, () => {
    console.log(`adams listen on ${configs.PORT}`);
});