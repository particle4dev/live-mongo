var _ = require('lodash');

var Matcher = function(pattern){
	this._pattern = pattern;
};

_.extend(Matcher.prototype, {
    constructor: Matcher,
    matchDocument: function(doc){
        
        return false;
    }
});

module.exports = Matcher;