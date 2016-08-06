var app = angular.module('pApp.home');

app.controller('ContactFormCtrl', ['$scope', '$http', '$mdToast', '$animate', function($scope, $http, $mdToast, $animate) {

// Expose view variables
var self = this;
 
        self.toastPosition = {
            bottom: true,
            top: false,
            left: false,
            right: true
        };
        
        self.getToastPosition = function () {
            return Object.keys(self.toastPosition)
                .filter(function (pos) {
                    return self.toastPosition[pos];
                })
                .join(' ');
        };
 
        this.sendMail = function () {
 
            var data = ({
                contactName : this.contactName,
                contactEmail : this.contactEmail,
                contactMsg : this.contactMsg
            });
 
            // Simple POST request example (passing data) :
            $http.post('/contact-form', data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("success!");
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Thanks for your message ' + data.contactName + ' You Rock!')
                            .position(self.getToastPosition())
                            .hideDelay(5000)
                    );
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("error", data, status, headers, config);
                });
 
        };
    }
]);