'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * BlogPost Schema
 */
var BlogPostSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },
  content: {
    type: String,
    default: '',
    trim: true
  }
});

var BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;