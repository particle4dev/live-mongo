require('./oplogDriver');

var _ = require('lodash');
var Collection = require('./collection');
var config = require('./config');
var core =  require('./core');

module.exports = {
	Collection: Collection,
	config: config,
	core: core
};