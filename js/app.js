var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/drivers', {
        controller: 'driversController',
        templateUrl: 'views/drivers.html'
    })
        .when("/driver/:id", {
            controller: 'driverController',
            templateUrl: 'views/driver.html'
        })
        .otherwise({
            redirectTo: 'yahoo'
        });
}]);