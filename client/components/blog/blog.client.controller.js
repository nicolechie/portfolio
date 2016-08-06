var app = angular.module('pApp.blog', ['mgcrea.ngStrap', 'ngAnimate', 'mgcrea.ngStrap.modal']);
app.controller('BlogCtrl', ['$scope', '$modal', '$http', 'blogData', '$location', function($scope, $modal, $http, blogData, $location){
	var self = this;
    
    self.lineLimit = 500;
    var blog = [];
    
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
                blogData.setData(blog);
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

app.factory('blogData', function () {
    var blogData = {};
    return {
        setData: function (data) {
            blogData = data;
        },
        getData: function () {
            return blogData;
        }
    };
});