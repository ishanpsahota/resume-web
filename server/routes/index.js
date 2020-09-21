const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const fs = require('fs')
const multer = require('multer')

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
                msg: webStatus.toJSON(),
                state: webStatus.toJSON().siteStatus
            })
        }

    })

})

routes.post('/login', function(req, res) {

    if(!req.body.email || !req.body.password) return res.sendStatus(401)
    else
    {
        // console.log(req.body)
        Admin.authenticate(req.body.email, req.body.password, function(error, found)
        {
            console.log("exp-rtr-lgn-dng")
            if(error) 
            {
                res.send({
                    success: false,
                    error: error,
                    status: 500
                })
            }
            else if(!found)
            {
                res.send({
                    success: false,
                    error: "Not found",
                    status: 400
                })
            }
            else if(found)
            {                
                // console.log(found)
                res.send({
                    success: true,
                    found,
                    status: 200
                })
            }
            else res.sendStatus(400)
        });
    }

})

// routes.post('/addmaster', function(req, res) {

//     var pass = 'N!k@lL@wd3'

//     bcrypt.genSalt(7, function(err, salt) {

//         if(err) console.log(err)
//         if(!salt) console.log("no salt")
//         if(salt)
//         {
//             console.log(salt)
//             bcrypt.hash(pass, salt, null, function(err, password) {
//                 if(err) console.log(err)
//                 if(!password) console.log("ERROR IN PASS");
//                 if(password) 
//                 {   
//                     var admin = {
//                         name: 'Ishan Prasad',
//                         email: 'ishanprasad.sahota@gmail.com',
//                         password: pass,
//                         username: 'ishanprasadsahota',
//                         resumeId: null,
//                         siteStatus: 'activenow'
//                     }
                
//                     console.log(admin)
                
//                     Admin.create(admin, function(err, done) {
                        
//                         if(err) return res.send(err)
//                         if(!done) return res.send("IDK")
//                         if(done) return res.send(done)
                
//                     }) 
//                 }
//             })
//         }

//     })

// })

routes.post('/create', function(req, res) {

    console.log(req.body)

})

routes.post('/upload', function(req, res) {

    console.log(req.files)

})

module.exports = routes