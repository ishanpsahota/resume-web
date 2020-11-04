
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
    Blog.find({'status': 1}).exec(function(err, blogFound) {

        if(err) res.status(400).json({err: 'Error in handling request'})
        if(!blogFound) return res.status(404).json({err: 'No blog found'})
        if(blogFound) res.status(200).json({blogs: blogFound })

    })
}

exports.getBlogsM = async function(req, res)
{
    Blog.find().exec(function(err, blogFound) {

        if(err) res.status(400).json({err: 'Error in handling request'})
        if(!blogFound) return res.status(404).json({err: 'No blog found'})
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
        console.log(req.body)
        const id = req.body.randomId;

        console.log(id)

        Blog.findOne({randomId: id}).exec(function(err, blogFound) {


            if(err) res.status(400).json({err})
            if(!blogFound) res.status(404).json({err: 'No Blog Found'});
            else
            {
                Blog.updateOne({randomId: id}, {'status': 0}, function(err, blogUpd) {

                    if(err) res.status(400).json({err})
                    if(!blogUpd) res.status(401).json({err: 'Not able to update status'})
                    if(blogUpd) res.status(200).json({msg: 'OK'});
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
        else res.status(200).json({resume: findResume});

    });
}

exports.createResume = async function(req, res) {

    console.log(req.body);

    var resume = req.body.resume;

    console.log(resume)

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

exports.editResume = async function(req, res) {

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

exports.tempResume = async function(req, res) {

    var resume = {

        name: 'Ishan Prasad',
        workexp: [
            {
                org: 'Omninos Solutions',
                start: new Date(" May 20 2019 "),
                end: new Date(" August 20 2019 "),
                location: "Mohali, Punjab",
                title: "PHP Intership",
                details: [
                    'Designed templates using HTML, CSS, BS4',
                    'Worked on Backend with PHP, MySQL & AJAX',
                    'Worked with the developers on live projects'
                ]
            },
            {
                org: 'Bansal IP Associates',
                start: new Date(" May 5 2019 "),
                end: new Date(" July 5 2019 "),
                location: "Mohali, Punjab",
                title: "IT Intership",
                details: [
                    'Automation of services',
                    'Integrating cloud',
                    'Upgrading systems'
                ]
            }
            
        ],
        education: [
            {
                institute: 'University of the Fraser Valley',
                start: new Date("August 2018"),
                end: new Date("December 2022"),
                location: 'Chandigarh, India',
                gpa: '4.06 GPA',
                title: 'Bachelor of Computer Information Systems - Year 3'
            }
        ],

        projects: [
            {
                title: 'Personal Website 1.0',
                url: 'http://ishanpsahota.000webhostapp.com',
                duration: '3 months',
                pic: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1603285341/resume/02_eltbiz.png',
                details: 'My first website ever created on BS4 & CodeIgniter'
            },
            {
                title: 'Blog Website 1.0',
                url: 'http://insomniacsblog.000webhostapp.com/',
                duration: '2 months',
                pic: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1603285341/resume/04_jpfgd9.png',
                details: 'It was initially an idea for a blog website, which then I used for my college project. It\'s created on Core PHP with basic front-end stuff.'
            },
            {
                title: 'Blog Website 2.0',
                url: 'https://insomniacsblogger.herokuapp.com/',
                duration: '2 months',
                pic: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1603285340/resume/03_sgun4f.png',
                details: 'A better version of my previous blog website redesiged from scratch on MongoDB, Express, Node & Pug. It was initially hosted on AWS but due to some technical issues now it is on heroku.'
            },
            {
                title: 'Family Tree Generator',
                url: 'https://family-tree-i.netlify.app/',
                duration: '3 days',
                pic: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1603285340/resume/05_s2ypec.png',
                details: 'This was a qualifying task for an internship with a 72-hr deadline. I didn\'t get the internship though but I got myslf a new project ;-)'
            },
            {
                title: 'Personal Website 2.0',
                url: '/',
                duration: '3 months',
                pic: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1603285342/resume/Untitled_uh81th.png',
                details: 'During the pandemic, I worked on MEVN stack, so to test it out, I made this!'
            }
        ],

        skills: [
            {
                title: 'MEVN Stack',
                level: 3
            },
            {
                title: 'HTML, CSS, BS4',
                level: 4
            },
            {
                title: 'Java',
                level: 3
            },
            {
                title: 'C++',
                level: 3
            },
            {
                title: 'GitHub + Hosting',
                level: 3
            }
        ],
        
        certificates: [
            {
                title: 'Certificate in Machine Learning by Coursera from Stanford University',
                date: new Date('September 2020')
            },
            {
                title: 'Cambridge Certification Authority\'s (CCA) Level 1 Certificate in PHP, HTML & CSS ',
                date: new Date("April 2019")
            }
        ],

        interests: [
            'Machine Learning', 'Music',
            'Cooking', 'Driving', 'Reading',
            'Travelling', 'Gaming'
        ],

        volunteer: null,

        achievements: [
            {
                title: 'Two Dean\'s List Holder at UFV',
                details: 'Awarded to those with GPA > 3.67. \n Scored 4+ GPA in three semesters '
            }
        ],

        causes: null,

        references: null,

        github: 'ishanpsahota',

        bio: 'Part time web-developer trying his hands in Machine Learning with an ambition to solve world problems and travel all around when this pandemic is over!',

        title: 'Third Year CIS student',

        profile: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1603285031/resume/home01_phszz2.jpg',

        background: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1603285049/resume/web-bg-04_zvkd0j.jpg',

        email: 'ishanprasad.sahota@gmail.com',

        instagram: 'ishanpsahota',

        linkedin: 'https://www.linkedin.com/in/ishan-prasad-b35a91181/'

    }

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