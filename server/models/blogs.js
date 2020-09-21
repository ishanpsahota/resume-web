const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    title: {
        type: String
    },

    date: {
        type: Date
    },

    heroimg: {
        image: String,
        caption: String
    },
    
    blocks: [{
        name: String,
        heading: String,
        subheading: String,
        content: String,
        image: String
    }],

    status: Number,

    hits: Number,

    randomId: String


})

module.exports = mongoose.model('blog', blogSchema)