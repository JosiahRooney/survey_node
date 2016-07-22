var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    // app.get('/');
    .when('/', {
        templateUrl: 'partials/login.html'
    })
    // app.get('/dashboard', polls.index);
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'pollsController'
    })
    // app.get('/poll/new', polls.create);
    .when('/poll/new', {
        templateUrl: 'partials/create.html',
        controller: 'pollsController'
    })
    // app.get('/poll/show/:id', polls.show);
    .when('/poll/show/:id', {
        templateUrl: 'partials/poll.html',
        controller: 'pollsController'
    })
    .otherwise({
        redirectTo: '/'
    });
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});