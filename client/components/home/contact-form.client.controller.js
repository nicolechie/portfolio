var app = angular.module('pApp.home');

app.controller('ContactFormCtrl', ['$scope', '$http', '$alert', '$modal', '$sce', function($scope, $http, $alert, $modal, $sce) {

// Expose view variables
var self = this;

var myAlert = $alert({title: 'Message Sent', content: 'Your message has been sent!', placement: 'top', type: 'info', container: '#contactSection', duration: '3', show: false});
self.myAlert = myAlert;

        self.sent = false;
 
        self.sendMail = function () {
 
            var data = ({
                contactName : self.contactName,
                contactEmail : self.contactEmail,
                contactMsg : self.contactMsg
            });
 
            // Simple POST request example (passing data) :
            $http.post('/contact-form', data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("success!");
                    console.log(data.contactName);
                    self.sent = true;
                    self.contactName = '';
                    self.contactEmail = '';
                    self.contactMsg = '';
                    self.myAlert.show();
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("error", data, status, headers, config);
                });
        };
    }
]);