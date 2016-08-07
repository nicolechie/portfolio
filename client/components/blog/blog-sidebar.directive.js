var app = angular.module('pApp.blog');

app.directive('blogSidebar', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/blog/blog-sidebar.template.html',
    };
});