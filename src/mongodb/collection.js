var MongodbRemote = require('./mongodbRemote');

var Collection = function(name){
	var self = this;
	self._driver = MongodbRemote.defaultMongodbRemoteDriver();
};


module.exports = Collection;