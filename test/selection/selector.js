var assert = require('assert');
var livemongo = require('../../index');

suite("matcher - selector", function() {
    
    test("simple", function() {
        var matcher = new livemongo.selection.Matcher({a: 5});
        assert.equal(matcher.matchDocument({a: 5}), true);
    });

});