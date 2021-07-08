"use strict"
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const routes = require('./serverSide/route')
const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL || 'mongodb+srv://Taiwo:56987456Taiwo@cluster0.lyrtx.mongodb.net/invisible?retryWrites=true&w=majority'
const cors = require('cors')
const client =  mongoose.connect(mongoURL, { useNewUrlParser: true,useUnifiedTopology: true  });
const corsOptions = {
    "origin":["*"],
    "methods": "GET,HEAD,POST",
    "preflightContinue": true,
    "optionsSuccessStatus": 200,
  };
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/',routes);

app.use(cors(corsOptions))
app.use((req, res, next)=> {
    req.db = client
    next();
});
// app.options('*', cors());
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
// app.get('/', function(req, res) {
//     res.send('register');
//   });
app.listen(process.env.PORT || 5000,(err)=>{
    console.log('You are listen to port 5000');
})



