var config = require('./config.global');

config.env = 'production';
config.hostname = 'http://.herokuapp.com/';
config.mongo.db = 'mongodb://' + process.env.user + ':' + process.env.password + '@ds047315.mongolab.com:47315/5aside';

module.exports = config;
