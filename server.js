const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const ejs = require('ejs')

const port = 80

app.get('/', (req, res) => {
    const bozs = ["you","i","ship"]
    const htmlResult = ejs.renderFile("template.ejs",{persons : bozs})
    res.send(htmlResult)
});

server.listen(port, () => {
    console.log(`adams listen on ${port}`);
});