var app = angular.module('pApp.home', ['mgcrea.ngStrap', 'ngAnimate', 'mgcrea.ngStrap.modal', 'ngMaterial', 'ngAria']);
app.controller('HomeCtrl', ['$scope', '$modal', '$http', 'blogData', '$location', function($scope, $modal, $http, blogData, $location){
	var self = this;
    
    self.web = true;
    self.graphic = true;
    
    var showAllCategories = function() {
        self.web = true;
        self.graphic = true;
    };
    
    self.showAllCategories = showAllCategories;
    
    var showWeb = function() {
        self.web = true;
        self.graphic = false;
    };
    
    self.showWeb = showWeb;
    
    var showGraphic = function() {
        self.web = false;
        self.graphic = true;
    };
    
    self.showGraphic = showGraphic;
    
}]);