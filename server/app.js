const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', function()
{
    console.log('Connection established');
}).on('error', function(err)
{
    console.log('Connection error: ' + err);
});

app.use(bodyParser.json());
app.use('/', routes)
app.use(cors());
app.use(helmet())

module.exports = app
