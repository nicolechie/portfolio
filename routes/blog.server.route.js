var BlogPost = require('../models/blog-post.model.js');
var blog = require('../controllers/blog.server.controller.js');

module.exports = function(app) {
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();
    
app.get('/api/blog', jsonParser, function(req, res) {
    blog.list(function(blogPost) {
        res.json(blogPost);
    }, function(err) {
        res.status(400).json(err);
    });
});
    
app.post('/api/blog', jsonParser, function(req, res) {
        if (!req.body) {
            return res.status(400).json({
                message: "No request body"
            });
        }
        
        console.log(req.body);
        
        var blogPost = new BlogPost({
            title: req.body.title,
            content: req.body.content,
        });

        blogPost.save(function(err, blogPost) {
            console.log(err, blogPost);
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }

            return res.status(201).json({});
        });

    });
    
    app.delete('/api/blog/:id', function(req, res) {
        BlogPost.remove({
            _id: req.params.id
		}, function(err, post){
			if(err) {
			    return res.send(err);
			}
			res.json({ message: 'Post deleted!' });
        });

    });
    
    app.put('/api/blog/:id', jsonParser,  function(req, res) {
        blog.edit(req.body, function(blogPost) {
            res.status(201).json(blogPost);
                console.log("BlogPost", blogPost);
        }, function(err) {
            res.status(400).json(err);
        });
    });

};