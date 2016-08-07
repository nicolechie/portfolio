var app = angular.module('pApp.blog', ['mgcrea.ngStrap', 'ngAnimate', 'mgcrea.ngStrap.modal']);
app.controller('BlogCtrl', ['$scope', '$modal', '$http', 'BlogData', '$location', 'UserInfo', function($scope, $modal, $http, BlogData, $location, UserInfo){
	var self = this;
    
    self.lineLimit = 500;
    var blog = [];
    
    var user = UserInfo.getData();
    if (user.role === 'admin') {
        self.admin = true;
        console.log(self.admin);
    }
    else {
       self.admin = false; 
    }
    
    // Get blog posts and push them blog
    var getBlogPosts = function() {
        $http.get('/api/blog')
        .then(function successCallback(response) {
            console.log('success', response.data);
            if (response.data[0]) {
                console.log("data exists!");
                response.data.forEach(function(blogPost) {
                    blog.push(blogPost);
                });
                BlogData.setData(blog);
            }
            else {
                self.emptyBlog = true;
                console.log("empty");
            }
            self.blog = blog;
        }, function errorCallback(response) {
            console.log("Error");
        });
    };

    getBlogPosts();
    
}]);

app.factory('BlogData', function () {
    var blogData = {};
    var currentBlogData = {};
    return {
        setData: function (data) {
            blogData = data;
        },
        getData: function () {
            return blogData;
        },
        setCurrentBlog: function(data) {
            currentBlogData = data;
        },
        getCurrentBlog: function() {
            return currentBlogData;
        }
    };
});