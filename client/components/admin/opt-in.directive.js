var app = angular.module('pApp.admin');

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'components/admin/opt-in.template.html',
        replace: true
    }
});