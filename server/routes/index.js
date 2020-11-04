const express = require('express')
const mongoose = require('mongoose')

const fs = require('fs')
const multer = require('multer')

const cryptoJs = require('crypto-js')

// cloudinary
const cloudinary = require('cloudinary').v2;
const cConfig = require('../config/cloudinary')

const routes = express.Router()  

// const Admin = mongoose.model('admin')
// const Blog = mongoose.model('blog')

// controller
const adminController = require('../config/adminController')
const blogResumeController = require('../config/BlogResumeController')

// auth middleware
const auth = require('../auth/auth')

// multer
const blogStorage = multer.diskStorage({

    destination: '../dist/assets/images/blogs',
    filename: function(req, file, callback)
    {
        const ext = file.mimetype.split("/")[1]
        const name = file.originalname + '_' + req.userData._id + '.' + ext

        if(!name) return callback('not able to get name')
        else callback(null, name)
    }

})

const uploadBlog = multer({storage: blogStorage, limits: {fileSize: 50000000} });


const resumegStorage = multer.diskStorage({

    destination: '../dist/assets/images/resume',
    filename: function(req, file, callback)
    {
        const ext = file.mimetype.split("/")[1]
        const name = file.originalname + '_' + req.userData._id + '.' + ext

        if(!name) return callback('not able to get name')
        else callback(null, name)
    }

})

const uploadResume = multer({storage: resumegStorage, limits: {fileSize: 50000000} });

// publicid
function getPublicId(name)
{
    const start = Math.floor(Math.random() * 10)

    var id = cryptoJs.AES.encrypt(name, 'llth3b00k$g03sh3r3').toString();
    id = cryptoJs.AES.encrypt(id, 'llth3b00k$g03sh3r3').toString();
    id = id.replace(/[^a-zA-Z0-9]/g,'')

    id = id.substr(start, 10);

    console.log(id)

    return id

}

// routes
routes.get('/', function(req, res) {

    res.send("Hey There Intruder")

})

routes.get('/getstate', adminController.getStatus );

routes.post('/login', adminController.loginAdmin);

// routes.post('/addmaster', adminController.registerAdmin);

routes.post('/blog/new', auth, blogResumeController.createBlog);

routes.get('/blog/get', blogResumeController.getBlogs);

routes.get('/blog/getall', blogResumeController.getBlogsM);

routes.get('/blog/get/:blogid', blogResumeController.getBlog);

routes.post('/blog/update/delete', auth, blogResumeController.deleteBlog);

routes.post('/blog/update/show', auth, blogResumeController.showBlog);

// routes.get('/editblog/:blogid', blogResumeController.getBlog);

routes.post('/upload/blog', auth, uploadBlog.single('image'), function(req, res) {

    cloudinary.config({
        cConfig
    });

    if(!req.file.path) return res.status(401).json({err: 'Error uploading picture'})
    if(req.file.path) {
        
        if(fs.existsSync(req.file.path)) 
        { 
            console.log('file found & uploaded'); 

            console.log(req.file)

            cloudinary.uploader.upload(req.file.path, {

                public_id: 'blogs/' + getPublicId(req.file.originalname),
        
                }, function(err, image) {
        
                    if(err) { console.log('ce'); console.log(err); return res.status(400).json({err: 'File Uploaded x1 but unknown error'})}
                    if(!image) { console.log('ni'); return res.status(404).json({err: 'File Uploaded x1 but cloud error'})}
                    if(image) 
                    {
                        console.log('here')
                        console.log(image)

                        fs.unlink(req.file.path, function(error) {

                            if(error) return res.status(400).json({err: 'File Uploaded x2 but delete error'})
                            else { console.log('file deleted & uploaded x2'); return res.status(200).json({msg: 'File Uploaded & Deleted Successfully', path: image.url})}
                        })

                    }
            });

        }
        else return res.status(404).json({err: 'Picture not found!'})
    }
})

// resume links

routes.get('/resume/get', blogResumeController.getResume);

routes.post('/resume/new', auth, blogResumeController.createResume);

routes.post('/resume/edit', auth, blogResumeController.editResume);

routes.post('/upload/resume', auth, uploadResume.single('image'), function(req, res) {

    cloudinary.config({
        cConfig
    });

    if(!req.file.path) return res.status(401).json({err: 'Error uploading picture'})
    if(req.file.path) {
        
        if(fs.existsSync(req.file.path)) 
        { 
            console.log('file found & uploaded'); 

            console.log(req.file)

            cloudinary.uploader.upload(req.file.path, {

                public_id: 'resume/' + getPublicId(req.file.originalname),
        
                }, function(err, image) {
        
                    if(err) { console.log('ce'); console.log(err); return res.status(400).json({err: 'File Uploaded x1 but unknown error'})}
                    if(!image) { console.log('ni'); return res.status(404).json({err: 'File Uploaded x1 but cloud error'})}
                    if(image) 
                    {
                        console.log('here')
                        console.log(image)

                        fs.unlink(req.file.path, function(error) {

                            if(error) return res.status(400).json({err: 'File Uploaded x2 but delete error'})
                            else { console.log('file deleted & uploaded x2'); return res.status(200).json({msg: 'File Uploaded & Deleted Successfully', path: image.url})}
                        })

                    }
            });

        }
        else return res.status(404).json({err: 'Picture not found!'})
    }

} )

// routes.post('/temp/resume', blogResumeController.tempResume);


module.exports = routes