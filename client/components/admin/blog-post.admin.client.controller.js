var app = angular.module('pApp.admin');
app.controller('AdminBlogPostCtrl', ['$scope', '$http', '$location', '$modal', 'UserInfo', 'BlogData', function($scope, $http, $location, $modal, UserInfo, BlogData){
    var self = this;
    self.blogPost = {};
    self.edit = false;
    
    if ($location.path().indexOf('edit') > -1) {
        self.blogPost = BlogData.getCurrentBlog();
        console.log(self.blogPost.content);
        self.edit = true;
    }
    
    // New blog post
    self.createOrUpdatePost = function(data) {
        console.log("self.edit", self.edit);
        console.log("data",data);
        if (self.edit === true) {
            $http.put('/api/blog/' + data._id, data)
            .then(function (response) {
                console.log(response.data);
                // Redirect to blog page
                $location.path('/blog');
            }, function (response) {
                // If error, display error message
                console.log(response);
                console.log("Error");
            });
        }
        else {
            $http.post('/api/blog', self.blogPost)
            .then(function (response) {
                self.blogPost = response.data;
                console.log(response.data);
                // Redirect to blog page
                $location.path('/blog');
            }, function (response) {
                // If error, display error message
                console.log(response);
                console.log("Error");
            });
        }
    };
    
    // // Edit blog post
    // self.editBlogPost = function() {
        
    // }
}]);