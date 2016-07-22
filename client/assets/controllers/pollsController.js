console.log('client/assets/controllers/pollsController.js | loaded');
app.controller('pollsController', ['$scope','pollsFactory','userFactory','$routeParams', '$location', function($scope, pollsFactory,userFactory, $routeParams, $location) {
    $scope.user_hasnt_voted = true;
    $scope.polls = [];
    $scope.poll = {};
    $scope.newPoll = {
        author: '',
        question: '',
        options: [
            {
                option: "",
                votes: 0
            },
            {
                option: "",
                votes: 0
            },
            {
                option: "",
                votes: 0
            },
            {
                option: "",
                votes: 0
            }
        ]
    };
    pollsFactory.index(function (data) {
        $scope.polls = data;
    });
    pollsFactory.show($routeParams.id, function (data) {
        user_hasnt_voted = true;
        $scope.poll = data.data;
    });
    $scope.vote = function (option, index) {
        user_hasnt_voted = false;
        $scope.poll.options[index].votes++;
        pollsFactory.vote($routeParams.id, option, function (data) {});
    };
    $scope.create = function () {
        console.log('Creating new poll', $scope.newPoll);
        $scope.newPoll.author = userFactory.currentUser().name;
        pollsFactory.create($scope.newPoll, function (data) {
            $scope.polls.push(data);
            $scope.newPoll = {
                author: '',
                question: '',
                options: [
                    {
                        option: "",
                        votes: 0
                    },
                    {
                        option: "",
                        votes: 0
                    },
                    {
                        option: "",
                        votes: 0
                    },
                    {
                        option: "",
                        votes: 0
                    }
                ]
            };
            $location.url('/dashboard');
        });
    };
    $scope.delete = function (id) {
        if (confirm("Are you sure you want to delete this poll?")) {
            pollsFactory.delete(id, function () {
                pollsFactory.index(function (data) {
                    $scope.polls = data;
                });
            });
        }
    };
}]);

