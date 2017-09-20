const con =require('./config.js');
const herokuURI= con.herokuURI;

const express = require('express');
const bodyParser = require('body-parser');


const massive=require('massive');
const connectionString = herokuURI;

var app = express(); //creates app

massive(connectionString).then (db => {
    app.set('db',db);  // kind of makes and express level variable
                        // .then recieves callback fn that takes db, and uses db to pass into app.set,makes express level variable, our express app has a new variable called db that is = db object that massive gave us. db object contains all info we need to run some sql queries. should only hav issues if try to use db before connect it.;
})



var port = 3001
app.listen(port,function(){
    console.log(`app listening on port ${port}`);
})