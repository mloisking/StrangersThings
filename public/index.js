

// import the posts array from data.js
const posts = require('./data');
console.log(posts)


// init express app
const express = require('express');
const app = express();
const PORT = 3000;

// GET - / - returns homepage
//serve up the public folder as static index.html file
app.get('/', (req, res) => {
    console.log(req.params['Home'])
    res.send('Home Page')
    app.use (express.static ('public'))

});
app.listen(PORT, () => {
    console.log('Server is listening on' + PORT)
});


// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
    req.params('Hello World')
    console.log("Hello World")
      });

// Get all posts from the database
 // send the posts array as a response
app.get('/api/posts', (req, res) => {
    console.log(req.params['title, description, price, location, willDeliver']);
    res.send(['posts'])

});

// Get posts by title
// get the name from the request
app.get('/api/posts/post_id', (req, res) => {
    console.log(req.params['title']);
    res.send('title')

    // find the post in the posts array
    // send the post as a response
    const posts = posts.find(post => post.name === name);
    console.log(req.params['id'])
    res.send(['post'])
    
});

// Get post by author with query string
app.get('/api/author', (req, res) => {
    console.log(req.params.author)
    res.send('author')

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;