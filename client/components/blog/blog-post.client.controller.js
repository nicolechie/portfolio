var app = angular.module('pApp.blog');
app.controller('BlogPostCtrl', ['$scope', 'blogData', '$location', 'UserInfo', function($scope, blogData, $location, UserInfo){
	var self = this;
    self.admin = false;
    
    var user = UserInfo.getData();
    if (user.role === 'admin') {
        self.admin = true;
    }
    
    self.lineLimit = 500;
    var blog = [];
    var currentBlogPost = {};
    blog = blogData.getData();
    self.blog = blog;
    console.log($location.path());
    blog.forEach(function(blogPost) {
        if ("/blog/"+blogPost._id === $location.path()) {
            currentBlogPost = blogPost;
            console.log("match!");
            self.currentBlogPost = currentBlogPost;
        }
    });
    
}]);