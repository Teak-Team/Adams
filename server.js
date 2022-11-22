const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require("path");
const persianDate = require('@alireza-ab/persian-date')

const configs = require('./config')
const schemes = require('./db/schemes')

//database
const Realm = require('realm')
const { ObjectId } = require('bson')
const FolderCollection = new Realm({
    path: 'db/folders.realm',
    schema: [schemes.FolderSchema]
});




//express conf
app.set("views",path.join(__dirname, 'views'))
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', (req, res) => {
    const bozs = ["you","i","ship"]
    res.render('index',{persons : bozs})
});


app.post('/createFolder',(req, res) => {

    const insertData = {
        _id : new ObjectId(),
        name : req.body.name,
        pass : req.body.pass
    }

    FolderCollection.write(() => {
        FolderCollection.create("Folders",insertData)
    })

    res.send(insertData)

})


server.listen(configs.PORT, () => {
    console.log(`adams listen on ${configs.PORT}`);
});