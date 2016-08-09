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
            skillset: ['Adobe Illustrator', 'Adobe InDesign'],
            description: 'This is a brochure I designed for the Colorado State University Health Network that discusses the health and legal elements that student should be aware of when it comes to marijuana.'
        },
        {
            name: 'Soco Nightlife Flyer',
            thumb: 'images/design/thumb/soco.png',
            image: 'images/design/socoflyer.png',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe Photoshop'],
            description: 'This is a flyer I did for South of Colfax Nightlife District to promote their resident dancer auditions.'
        },
        {
            name: 'Design Helper App',
            thumb: 'images/web/thumb/designhelper.png',
            image: 'images/web/design-helper_fullsm.png',
            link: 'https://limitless-gorge-94190.herokuapp.com/',
            github: 'https://github.com/nicolechie/design-helper',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'AngularStrap', 'AngularJS', 'NodeJS', 'MongoDB/Mongoose', 'Express', 'SocketIO', 'Passport'],
            description: 'Design Helper is a fast and simple way for web-based designers to visualize and implement different font, font-size, and font-color combination options for the design of a website. Once a user is happy with their chosen font options, design helper will generate the necessary HTML & CSS to add the font styles to their website.  Users can then name and save their design so that they can edit or review it at a later time.'
        },
        {
            name: 'College Avenue Layouts',
            thumb: 'images/design/thumb/ca.jpg',
            image: 'images/design/ca6.png',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
            description: 'College Avenue is a monthly publication put out by Colorado State University. These are a few layouts I did for them.'
        },
        {
            name: 'Marvel Game App',
            thumb: 'images/web/thumb/marvel.png',
            image: 'images/web/marvel_full.png',
            link: 'http://nicolechie.github.io/marvel-game/',
            github: 'https://github.com/nicolechie/marvel-game',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'JQuery', 'AJAX'],
            description: 'A "game" that loads a group of Marvel comic book characters (currently from the Avengers series) from the Marvel API and displays their image in a grid.  A user can click on any two characters to see who would win in a fight.  The winner is determine by which character has more experience aka which character has been in more comic books according to their Marvel data.'
        },
        {
            name: 'Prescription Bags',
            thumb: 'images/design/thumb/rx.jpg',
            image: 'images/design/rx.jpg',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe Illustrator', 'Adobe InDesign'],
            description: 'I designed these prescription bags for the Colorado State University Health Network as part of a presciption drug awareness campaign.'
        },
        {
            name: 'Quiz App',
            thumb: 'images/web/thumb/quiz-app.png',
            image: 'images/web/quiz_full.png',
            link: 'http://nicolechie.github.io/quiz-app/',
            github: 'https://github.com/nicolechie/quiz-app',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'JQuery'],
            description: 'Test your nerd knowledge with this simple 5-question quiz app.'
        },
        {
            name: 'Shopping List App',
            thumb: 'images/web/thumb/shopping-list.png',
            image: 'images/web/shopping-list_full.png',
            link: 'http://nicolechie.github.io/shopping-list/',
            github: 'https://github.com/nicolechie/shopping-list',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'JQuery'],
            description: 'Easily add, delete, and check off items on a grocery list.'
        },
        {
            name: 'Resort 2 Kindness Poster',
            thumb: 'images/design/thumb/R2K.png',
            image: 'images/design/r2kposter.jpg',
            link: '',
            github: '',
            category: 'hc.graphic',
            skillset: ['Adobe Photoshop'],
            description: 'A poster designed for Resort2Kindess.'
        },
        {
            name: 'My Portfolio',
            thumb: 'images/web/thumb/portfolio.png',
            image: 'images/web/portfolio_full.png',
            link: 'https://nicolechie.herokuapp.com/',
            github: 'https://github.com/nicolechie/portfolio',
            category: 'hc.web',
            skillset: ['HTML5', 'CSS3', 'Bootstrap', 'AngularStrap', 'AngularJS', 'NodeJS', 'MongoDB/Mongoose', 'Express'],
            description: 'The webiste you are currently on! My portfolio showcases my development and design work and also houses a blog.'
        }
    ];

    // Brings up the project modal
    self.showModal = function (project) {
        var projectDetailsModal = $modal({ scope: $scope, templateUrl: 'components/home/project-details.template.html', contentTemplate: false, html: true, show: false });
        projectDetailsModal.$promise.then(projectDetailsModal.show);
        self.project = project;
    };
    
}]);