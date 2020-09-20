const express = require('express')
const mongoose = require('mongoose')

const routes = express.Router()  

const Admin = mongoose.model('admin')

routes.get('/', function(req, res) {

    res.send("OK")

})

routes.get('/getstate', function(req, res) {

    Admin.findOne({ }, function(err, webStatus) {

        if(err) 
        {
            return res.send({
                status: 400,
                error: "ERROR IN GETTING STATUS"
            })
        }

        if(!webStatus)
        {
            return res.send({
                status: 401,
                error: "DOESN'T EXISTS"
            })
        }

        if(webStatus)
        {
            return res.send({
                status: 200,
                msg: webStatus
            })
        }

    })

})


module.exports = routes