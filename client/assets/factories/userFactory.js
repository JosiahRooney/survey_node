console.log('client/assets/factories/userFactory.js | loaded');
app.factory('userFactory', function() {
    var currentUser = {
        name: ''
    };

    return {
        login: function(data, callback) {
            currentUser = data;
            callback();
        },
        logout: function() {
            currentUser = {};
        },
        isLoggedIn: function() { return currentUser.name.length > 0; },
        currentUser: function() {
            return currentUser;
        }
    };
});