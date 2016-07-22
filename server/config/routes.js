var polls = require('../controllers/polls.js');

console.log("server/config/routes.js | connected");

module.exports = function(app){
    app.get('/polls', polls.index);
    app.post('/poll/create', polls.create);
    app.get('/poll/show/:id', polls.show);
    app.get('/poll/delete/:id', polls.delete);
    app.post('/poll/vote/:id/:option', polls.vote);
};