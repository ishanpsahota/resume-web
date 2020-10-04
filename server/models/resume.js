const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({

    name: {
        type: String
    },

    blocks: [{

        name: String,
        image: String,
        heading: String,
        subheading: String,
        list: Array,
        link: [{
            title: String,
            url: String
        }]

    }],

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