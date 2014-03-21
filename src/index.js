require('./oplogDriver');

var _ = require('lodash');
var Collection = require('./collection');
var config = require('./config');
module.exports = {
	Collection: Collection,
	config: config
};