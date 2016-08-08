var app = angular.module('pApp');

app.directive('navBar', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/nav/nav.template.html',
    };
});