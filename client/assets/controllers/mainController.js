app.controller( 'mainController', function( $scope, userFactory, $location ) {
    $scope.user = userFactory.currentUser();
    $scope.$watch( userFactory.isLoggedIn, function ( isLoggedIn ) {
        $scope.isLoggedIn = isLoggedIn;
        $scope.currentUser = userFactory.currentUser();
    });
    $scope.login = function () {
        userFactory.login($scope.user, function () {
            $location.url('/dashboard');
        });
    }
});