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

exports.destroy = function(blogPost, callback, errback) {
    var query = {_id : blogPost.id};

    BlogPost.findOneAndRemove(query, function(err) {
        if (err) {
            errback(err);
            return;
        }
        console.log("deleted");
        callback(blogPost);
    });
};

exports.edit = function(blogPost, callback, errback) {
    var query = {_id : blogPost._id};
    BlogPost.findOneAndUpdate(query, {title: blogPost.title, content: blogPost.content}, function(err, blogPost) {
        if (err) {
            errback(err);
            return;
        }
        console.log("edit", blogPost);
        callback(blogPost);
    });
};