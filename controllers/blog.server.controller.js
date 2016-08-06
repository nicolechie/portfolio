// 'use strict';

// /**
// * Module dependencies
// */
// var path = require('path'),
//   mongoose = require('mongoose'),
//   BlogPost = mongoose.model('BlogPost'),
//   errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
//   // var bodyParser = require('body-parser');
//   // var jsonParser = bodyParser.json();

// /**
// * Create a blog post
// */
// exports.create = jsonParser, function (req, res) {
//   var blogPost = new BlogPost(req.body);

//   blogPost.save(function (err) {
//     if (err) {
//       return res.status(400).send({
//         message: errorHandler.getErrorMessage(err)
//       });
//     } else {
//       res.json(blogPost);
//     }
//   });
// };

// /**
// * Show the current blog post
// */
// exports.read = function (req, res) {
//   // convert mongoose document to JSON
//   var blogPost = req.blogPost ? req.blogPost.toJSON() : {};

//   // Add a custom field to the Article, for determining if the current User is the "owner".
//   // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
//   blogPost.isCurrentUserOwner = !!(req.user && blogPost.user && blogPost.user._id.toString() === req.user._id.toString());

//   res.json(blogPost);
// };

// /**
// * Update a blog post
// */
// exports.update = function (req, res) {
//   var blogPost = req.blogPost;
  
//   blogPost.title = req.body.title;
//   blogPost.content = req.body.content;

//   blogPost.save(function (err) {
//     if (err) {
//       return res.status(400).send({
//         message: errorHandler.getErrorMessage(err)
//       });
//     } else {
//       res.json(blogPost);
//     }
//   });
// };

// /**
// * Delete a blog post
// */
// exports.delete = function (req, res) {
//   var blogPost = req.blogPost;

//   blogPost.remove(function (err) {
//     if (err) {
//       return res.status(400).send({
//         message: errorHandler.getErrorMessage(err)
//       });
//     } else {
//       res.json(blogPost);
//     }
//   });
// };

// /**
// * List of blog posts
// */
// exports.list = function (req, res) {
//   BlogPost.find().sort('-created').populate('user', 'displayName').exec(function (err, blog) {
//     if (err) {
//       return res.status(400).send({
//         message: errorHandler.getErrorMessage(err)
//       });
//     } else {
//       res.json(blog);
//     }
//   });
// };

// /**
// * Blog post middleware
// */
// exports.blogPostByID = function (req, res, next, id) {

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).send({
//       message: 'Blog post is invalid'
//     });
//   }

//   BlogPost.findById(id).populate('user', 'displayName').exec(function (err, blogPost) {
//     if (err) {
//       return next(err);
//     } else if (!blogPost) {
//       return res.status(404).send({
//         message: 'No blog post with that identifier has been found'
//       });
//     }
//     req.blogPost = blogPost;
//     next();
//   });
// };

var BlogPost = require('../models/blog-post.model.js');

exports.list = function(callback, errback) {
    BlogPost.find(function(err, blogPost) {
        if (err) {
            errback(err);
            return;
        }
        callback(blogPost);
    });
};

// exports.edit = function(codefile, callback, errback) {
//     var query = {_id : codefile.id};
//     Codefile.findOneAndUpdate(query, {chosenHeader: codefile.chosenHeader, chosenParagraph: codefile.chosenParagraph, headerLink: codefile.headerLink, paragraphLink: codefile.paragraphLink}, function(err, codefile) {
//         if (err) {
//             errback(err);
//             return;
//         }
//         console.log("edit", codefile);
//         callback(codefile);
//     });
// };