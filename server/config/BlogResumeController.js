
const { json } = require('body-parser')
const { readSync } = require('fs')
const Blog = require('../models/blogs')
const Resume = require('../models/resume')

// const email = 'ishanprasad.sahota@gmail.com'

exports.createBlog = async function(req, res) {

        if(!req.body) return res.status(400).json({err: ' Missing parameters! '})

        var blog = req.body

        const blogFound = await Blog.findOne({title: req.body.blogTitle});
        
        if(blogFound) return res.status(409).json({err: 'Same Titled Blog Exists!'});
                
        const newBlog = new Blog(blog)

        const saveBlog = newBlog.save();

        if(saveBlog)
        {
            return res.status(200).json({                
                blog: saveBlog.randomId
            })
        }
        else return res.status(401).json({err: 'Error creating blog!'})                                       
}

exports.getBlogs = async function(req, res)
{
    Blog.find().exec(function(err, blogFound) {

        if(err) res.status(400).json({err: 'Error in handling request'})
        if(!blogFound) res.status(404).json({err: 'No blog found'})
        if(blogFound) res.status(200).json({blogs: blogFound })

    })
}


exports.getBlog = async function(req, res) {

    if(!req.params.blogid) return res.status(401).json({err: ' Missing Parameters'});
    else
    {
        Blog.findOne({randomId: req.params.blogid}).exec(function(err, blog) {

            if(err) res.status(400).json({err: 'Bad Request'})
            if(!blog) res.status(404).json({err: ' Blog Not Found'})
            if(blog) res.status(200).json({blog})
        })
    }
}

exports.deleteBlog = async function(req, res) {    

    if(!req.body.randomId) return res.status(400).json({err: 'Missing Parameters'})
    else
    {
        const id = req.body.randomId;

        console.log(id)

        Blog.findOne({randomId: id}).exec(function(err, blogFound) {

            if(!blogFound) res.status(404).json({err: 'No Blog Found'});
            else
            {
                Blog.updateOne({randomId: id}, {'status': 0}, function(err, blogUpd) {

                    if(err) res.status(400).json({err})
                    if(!blogUpd) res.status(401).json({err: 'Not able to update status'})
                    else res.status(200).json({msg: 'OK'});
                })
            }
        });

    }
    
}

exports.showBlog = async function(req, res) {    

    if(!req.body.randomId) return res.status(400).json({err: 'Missing Parameters'})
    else
    {
        const id = req.body.randomId;

        console.log(id)

        Blog.findOne({randomId: id}).exec(function(err, blogFound) {

            if(!blogFound) res.status(404).json({err: 'No Blog Found'});
            else
            {
                Blog.updateOne({randomId: id}, {'status': 1}, function(err, blogUpd) {

                    if(err) res.status(400).json({err})
                    if(!blogUpd) res.status(401).json({err: 'Not able to update status'})
                    else res.status(200).json({msg: 'OK'});
                })
            }
        });

    }
    
}


// resume functions

exports.getResume = async function(req, res) {

    Resume.findOne().exec(function(err, findResume) {

        if(err) res.status(400).json({err: 'unknown error'})
        if(!findResume) res.status(404).json({err: 'Not Found'})
        else res.status(200).json({findResume});

    });

    

}

exports.createResume = async function(req, res) {

    var resume = req.body.resume;

    if(!req.body) res.status(400).json({err: 'No Parameters provided'})
    else
    {
        var newResume = new Resume(resume)

        if(newResume)
        {
            var saveResume = newResume.save()

            if(saveResume)
            {
                res.status(200).json({saveResume})
            }
            else res.status(401).json({err:" Not able to save resume"})
        }
        else res.status(401).json({err: 'Not able to create resume'})
        


    }
}

exports.updateResume = async function(req, res) {

    if(!req.body.resume) res.status(404).json({err: 'no parameter found'})
    else
    {
        var oldResume = Resume.findOne()
        var updatedResume = req.body.resume

        Resume.updateOne({id: oldResume._id}, updatedResume, function(err, updateDone) {
            
            if(err) res.status(400).json({err: err})
            if(!updateDone) res.status(401).json({err: 'Not able to do this task.'})
            else res.status(200).json(updateDone);

        } )
    }

}