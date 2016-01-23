app.controller('driversController', function ($scope, ergastAPIservice) {

    $scope.nameFilter = null;
    // | filter: nameFilter
    $scope.driverList = [];

    ergastAPIservice.getDrivers()
        .success( function(response){
            $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });

    $scope.driversList2 = [
        {
            Driver: {
                givenName: 'Sebastian',
                familyName: 'Vettel'
            },
            points: 322,
            nationality: 'German',
            Constructors: [
                { name: 'Red Ball'}
            ]
        },
        {
            Driver: {
                givenName: 'Fernando',
                familyName: 'Alonso'
            },
            points: 293,
            nationality: 'Spanish',
            Constructor: [
                { name: 'Ferrari' }
            ]
        }
    ];

});