var config = require('./config.global');

config.env = 'test';
config.hostname = 'localhost';
config.mongo.db = 'mongodb://' + process.env.user + ':' + process.env.password + '@ds047315.mongolab.com:47315/5aside';

module.exports = config;
