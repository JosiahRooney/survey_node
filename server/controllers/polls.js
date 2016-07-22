console.log('server/controllers/polls.js | loaded');

var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

function PollsController(){

    // app.get('/polls', polls.index);
    this.index = function(req, res){
        Poll.find({}, function (err, polls) {
            if (err) {
                console.log('GET / error', err);
                res.json({
                    status: false,
                    message: 'Error getting polls'
                });
            } else {
                res.json(polls);
            }
        });
    };

    // app.post('/poll/create', polls.create);
    this.create = function(req, res){
        var poll = new Poll();
        poll.author = req.body.author;
        poll.question = req.body.question;
        poll.options = req.body.options;
        poll.save(function (err) {
            if (err) {
                console.log('Error saving poll in DB', err);
                res.json({
                    status: false,
                    message: 'Error saving poll in DB'
                });
            } else {
                console.log('New poll in DB.',poll.author, poll.question, poll.options);
                res.json(poll);
            }
        });
    };

    // app.get('/poll/show/:id', polls.show);
    this.show = function(req, res){
        Poll.findOne({'_id': req.params.id}, function (err, poll) {
            if (err) {
                console.log('GET /poll/show/', req.params.id, err);
            } else {
                res.json(poll);
            }
        });
    };

    // app.get('/poll/delete/:id', polls.delete);
    this.delete = function(req, res){
        Poll.remove({'_id': req.params.id}, function (err) {
            if (err) {
                console.log('POST /poll/delete/' + req.params.id + ' error', err);
                res.json({
                    status: false,
                    message: 'Error deleting poll'
                });
            } else {
                res.json({
                    status: true
                });
            }
        })
    };

    // app.post('/poll/vote/:id', polls.vote);
    this.vote = function(req, res){
        Poll.findOneAndUpdate({'_id': req.params.id, 'options.option': req.params.option}, {
            '$inc': {
                'options.$.votes': 1
            }
        }, function (err) {
            if (err) {
                console.log('POST /poll/vote/' + req.params.id + ' error', err);
                res.json({status: false, message: 'Error adding vote to poll.'});
            } else {
                res.json({status: true, message: "Updated poll"});
            }
        });
    };






}
module.exports = new PollsController();