var app = angular.module('pApp.home');
app.controller('PortfolioCtrl', ['$scope', '$modal', '$http', function($scope, $modal, $http){
	var self = this;
    
    self.projects = [
        {
            name: 'Marijuana Awareness Brochure',
            thumb: 'images/design/thumb/mj.png',
            image: 'images/design/mjbrochure.png',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe Illustrator', 'Adobe InDesign']
        },
        {
            name: 'Soco Nightlife Flyer',
            thumb: 'images/design/thumb/soco.png',
            image: 'images/design/socoflyer.png',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe Photoshop']
        },
        {
            name: 'Design Helper App',
            thumb: 'images/web/thumb/designhelper.png',
            image: 'images/web/design-helper_fullsm.png',
            link: 'https://limitless-gorge-94190.herokuapp.com/',
            github: 'https://github.com/nicolechie/design-helper',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'AngularStrap', 'AngularJS', 'NodeJS', 'MongoDB/Mongoose', 'Express', 'SocketIO', 'Passport']
        },
        {
            name: 'College Avenue Layouts',
            thumb: 'images/design/thumb/ca.jpg',
            image: 'images/design/ca6.png',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator']
        },
        {
            name: 'Marvel Game App',
            thumb: 'images/web/thumb/marvel.png',
            image: 'images/web/marvel_full.png',
            link: 'http://nicolechie.github.io/marvel-game/',
            github: 'https://github.com/nicolechie/marvel-game',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'JQuery', 'AJAX']
        },
        {
            name: 'Prescription Bags',
            thumb: 'images/design/thumb/rx.jpg',
            image: 'images/design/rx.jpg',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe Illustrator', 'Adobe InDesign']
        },
        {
            name: 'Quiz App',
            thumb: 'images/web/thumb/quiz-app.png',
            image: 'images/web/quiz_full.png',
            link: 'http://nicolechie.github.io/quiz-app/" ',
            github: 'https://github.com/nicolechie/quiz-app',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'JQuery']
        },
        {
            name: 'Shopping List App',
            thumb: 'images/web/thumb/shopping-list.png',
            image: 'images/web/shopping-list_full.png',
            link: 'http://nicolechie.github.io/shopping-list/',
            github: 'https://github.com/nicolechie/shopping-list',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'JQuery']
        },
        {
            name: 'Resort 2 Kindness Poster',
            thumb: 'images/design/thumb/R2K.png',
            image: 'images/design/r2kposter.jpg',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe Photoshop']
        },
        {
            name: 'My Portfolio',
            thumb: 'images/web/thumb/portfolio.png',
            image: 'images/web/portfolio_full.png',
            link: '/',
            github: '',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'AngularStrap', 'AngularJS', 'NodeJS', 'MongoDB/Mongoose', 'Express']
        }
    ];
    
    self.projectHover = false;
    
    // Brings up the project modal
    self.showModal = function (project) {
        var projectDetailsModal = $modal({ scope: $scope, templateUrl: 'components/home/project-details.template.html', contentTemplate: false, html: true, show: false });
        projectDetailsModal.$promise.then(projectDetailsModal.show);
        self.project = project;
    };
    
}]);