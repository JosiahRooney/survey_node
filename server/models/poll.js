console.log('server/models/poll.js');
var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
    author: {type: String},
    question: {type: String},
    options: {type: []}
}, {timestamps: true});
var Poll = mongoose.model('Poll', PollSchema);