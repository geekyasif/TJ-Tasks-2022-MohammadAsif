const express = require('express');
const Article = require('../model/article')
const router = express.Router();



// route for adding article
router.get('/addArticle', (req, res) => {
    res.render('articles/addArticle', {article : new Article()});

});



// route for reading article
router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    if (article == null ) res.render('/')
    res.render('articles/read_article', {article : article})

})



// this route is for for submmition to add article into database
// post request for form saving data into database
router.post('/', (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markDown: req.body.markDown
    })

    article.save()
    .then( () => {
        // res.json('Article Added !')
        console.log('added')
        res.redirect(`/articles/${article.id}`)
    })
    .catch( (err) => {
        // res.status(400).json("Error : " + err)
        console.log('Error : '+ err)
        res.render('/articles/new/', {article : article})
    })


})

// routing for edting article 
router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', {article: article})
})


router.post('/edit/:id', (req, res) => {

    let article = {}

    article.title = req.body.title
    article.description = req.body.description
    article.markDown = req.body.markDown

    let query = {_id: req.params.id}

    Article.findByIdAndUpdate(query, article, (err) => {
            if(err){
                console.log(err)
                return
            }else{
                res.redirect(`/articles/${req.params.id}`)
            }
    })


})



// routing for deleiting article 
router.get('/delete/:id', async (req, res) => {

        await Article.findByIdAndDelete(req.params.id)
        res.redirect('/')
        
})


// another method to delete using method-override package 
// router.delete('/:id', async (req, res) => {
//     await Article.findByIdAndDelete(req.params.id)
//     res.redirect('/')
//   })
  
module.exports = router;