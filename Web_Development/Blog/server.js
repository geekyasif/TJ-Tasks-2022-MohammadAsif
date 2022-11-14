// importing express from express
const express = require('express')
const mongoose = require('mongoose');
const Article = require('./model/article');
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')

// creating a server and giving a name app
const app = express()

// connecting to database 
mongoose.connect('mongodb://localhost/nodejsBlog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// checking our app is connected to databse or not 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});


// setting the ejs file to render
app.set('view engine', 'ejs')

//  all middlewares 
app.use(express.urlencoded({extended: false}))
app.use('/articles', articleRouter)
app.use(methodOverride('_method'))


app.get('/', async (req, res) =>{
    // const articles = [
    //     {
    //         title: "This is a title",
    //         timestamp: new Date(),
    //         desc : 'This is a description'
    //     },
    //     {
    //         title: "This is a title",
    //         timestamp: new Date(),
    //         desc : 'This is a description'
    //     },
 
    // ]

    const articles = await Article.find()

    res.render('articles/index', {articles : articles})
})


// setting port 
app.listen(3000)