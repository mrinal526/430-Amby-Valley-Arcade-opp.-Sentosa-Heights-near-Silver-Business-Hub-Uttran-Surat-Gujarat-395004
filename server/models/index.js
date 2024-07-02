const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE || 'mongodb+srv://mrinal77sawarn:test123@cluster0.kpko6id.mongodb.net/vote?retryWrites=true&w=majority&appName=Cluster0');

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
