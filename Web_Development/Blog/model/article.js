const mongoose = require('mongoose');
const marked = require('marked')
const slugify = require('slugify')

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String
    },
    markDown:{
        type: String,
        require: true
    },
    timeStamp:{
        type: Date,
        default : Date.now
    },
    slug:{
        type : String,
        require : true,
        unique : true
    }
})

articleSchema.pre('validate', (next) => {
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }

    next()
})

module.exports = mongoose.model('Article', articleSchema)