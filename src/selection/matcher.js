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

// Takes a RegExp object and returns an element matcher. (meteor-js)
var regexpElementMatcher = function (regexp) {
    return function (value) {
        if (value instanceof RegExp) {
            // Comparing two regexps means seeing if the regexps are identical
            // (really!). Underscore knows how.
            return _.isEqual(value, regexp);
        }
        // Regexps only work against strings.
        if (typeof value !== 'string')
            return false;
        return regexp.test(value);
    };
};

module.exports = Matcher;