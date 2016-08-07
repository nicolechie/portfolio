var app = angular.module('pApp', ['ngRoute', 'pApp.blog', 'pApp.admin', 'pApp.home']);

app
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    	$locationProvider.html5Mode(true);
        $routeProvider
        .when('/', {
            templateUrl : './components/home/home.html',
            controller : 'HomeCtrl as hc'
        })
        .when('/blog', {
            templateUrl : './components/blog/blog.html',
            controller : 'BlogCtrl as bc'
        })
        .when('/blog/:blogPostId', {
            templateUrl : './components/blog/blog-post.html',
            controller : 'BlogPostCtrl as bpc'
        })
        .when('/admin', {
            templateUrl : './components/admin/admin.html',
            controller : 'AdminCtrl as ac'
        })
        .when('/admin/blog', {
            templateUrl : './components/blog/blog.html',
            controller : 'BlogCtrl as bc'
        })
        .when('/admin/blog-post', {
            templateUrl : './components/admin/blog-post.html',
            controller : 'AdminBlogPostCtrl as abc'
        })
        .when('/admin/:blogPostId/edit', {
            templateUrl : './components/admin/blog-post.html',
            controller : 'AdminBlogPostCtrl as abc'
        })
		.otherwise({
    		redirectTo : '/'
		});
    }]);
