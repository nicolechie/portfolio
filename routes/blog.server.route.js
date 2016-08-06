'use strict';

/**
 * Module dependencies
 */
var BlogPost = require('../models/blog-post.model.js');
var blog = require('../controllers/blog.server.controller');
//   var bodyParser = require('body-parser');
//   var jsonParser = bodyParser.json();
// var mongoose = require('mongoose');
// var BlogPost = mongoose.model('BlogPost');

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

// module.exports = function (app) {
//   // Blog collection routes
//   app.route('/api/blog', jsonParser)
//     .get(blog.list)
//     .post(blog.create);

//   // Single article routes
//   app.route('/api/blog/:blogPostId')
//     .get(blog.read)
//     .put(blog.update)
//     .delete(blog.delete);

//   // Finish by binding the article middleware
//   app.param('blogPostId', blog.blogPostByID);
// };
};