console.log('client/assets/factories/pollsFactory.js | loaded');
app.factory('pollsFactory', ['$http', function($http) {
    var polls = [];
    var poll = [];
    var user = {};

    function PollsFactory(){
        var _this = this;
        this.login = function (username, callback) {
            user = username;
            console.log(user);
            callback(user);
        };
        this.create = function(newpoll, callback){
            $http.post('/poll/create', newpoll).then(function(returned_data){
                callback(returned_data);
            });
        };
        this.index = function(callback){
            $http.get('/polls').then(function(returned_data){
                polls = returned_data.data;
                callback(polls);
            });
        };
        this.delete = function(id, callback){
            $http.get('/poll/delete/'+id).then(function (returned_data) {
                polls = returned_data.data;
                callback(returned_data);
            });
        };
        this.show = function(id, callback){
            $http.get('/poll/show/'+id).then(function(returned_data){
                callback(returned_data);
            });
        };
        this.getPolls = function(callback){
            callback(polls);
        };
        this.getPoll = function(callback){
            callback(poll);
        };
        this.vote = function (id, option, callback) {
            $http.post('/poll/vote/'+id+'/'+option).then(function (data) {
                callback(data);
            });
        }
    }
    return new PollsFactory();
}]);