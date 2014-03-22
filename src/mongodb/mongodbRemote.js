var _ = require('lodash');
var MongoConnection = require('./mongoConnection');
//var config = require('./config');

var MongodbRemoteDriver = function(){
	//var url = config('url') + config('database');
	//this._connection = new MongoConnection(url);
};
var MongodbRemote = {};
MongodbRemote.defaultMongodbRemoteDriver = _.once(function(){

	return new MongodbRemoteDriver();
});

module.exports = MongodbRemote;
