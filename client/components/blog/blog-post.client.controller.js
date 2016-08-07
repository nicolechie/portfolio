var app = angular.module('pApp.blog');
app.controller('BlogPostCtrl', ['$scope', 'BlogData', '$location', 'UserInfo', '$http', function($scope, BlogData, $location, UserInfo, $http){
	var self = this;
    
    var user = UserInfo.getData();
    if (user.role === 'admin') {
        self.admin = true;
    }
    else {
        self.admin = false;
    }
    
    self.lineLimit = 500;
    var blog = [];
    var currentBlogPost = {};
    blog = BlogData.getData();
    self.blog = blog;
    blog.forEach(function(blogPost) {
        if ("/blog/"+blogPost._id === $location.path()) {
            currentBlogPost = blogPost;
            BlogData.setCurrentBlog(currentBlogPost);
            console.log("match!");
            self.currentBlogPost = currentBlogPost;
        }
    });
    
    var deleteBlogPost = function() {
        $http.delete('/api/blog/'+currentBlogPost._id)
        .then(function successCallback(response) {
            console.log('successful deletion', response.data);
            // Redirect to admin blog page
            $location.path('/admin/blog');
        }, function errorCallback(response) {
            console.log("Error", response);
        });
    };
    self.deleteBlogPost = deleteBlogPost;
}]);