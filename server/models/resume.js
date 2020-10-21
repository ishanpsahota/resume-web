const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({

    name: {
        type: String
    },

    workexp: [{

        org: String,
        start: Date,
        end: Date,
        location: String,
        title: String,
        details: []

    }],

    education: [{

        institute: String,
        start: Date,
        end: Date,
        location: String,
        gpa: String,
        title: String

    }],

    projects: [{

        title: String,
        url: String,
        duration: String,
        pic: String,
        details: String

    }],

    skills: [{
        title: String,
        level: String
    }],

    certificates: [{

        title: String,
        date: Date

    }],

    interests: [],

    volunteer: [{

        title: String,
        details: String

    }],

    achievements: [{
        
        title: String,
        details: String
    }],

    causes: [{

        title: String,
        details: String,
        date: Date

    }],

    references: [{

        name: String,
        quote: String

    }],

    github: String,

    bio: String,

    title: String,

    profile: String,

    background: String,

    email: {
        type: String
    },

    instagram: {
        type: String
    },

    linkedin: {
        type: String
    }

})

module.exports = mongoose.model('resume', resumeSchema)