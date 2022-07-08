const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const ejs = require('ejs')
const path = require("path");

const PORT = 8080

app.set("views",path.join(__dirname, 'views'))
app.set("view engine","ejs")

app.get('/', (req, res) => {
    const bozs = ["you","i","ship"]
    res.render('index',{persons : bozs})
});

server.listen(PORT, () => {
    console.log(`adams listen on ${PORT}`);
});