var app = angular.module('pApp');

app.controller('NavCtrl', ['$scope', function($scope){
    var self = this;
    self.isCollapsed = true;
}]);