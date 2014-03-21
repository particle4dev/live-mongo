var assert = require('assert');
var livemongo = require('../index');

suite("mongoConnection.js", function() {
    
    test("code style", function() {
        /**
        var User = new Collection('user');
        User.find({username: 'particle4dev'}).watch({
            added: function (newDocument) {
            },
            removed: function (oldDocument) {
            }
        });
        */
    });

    test("config", function() {
        livemongo.config({
            'b': 'a'
        });
        assert.equal(livemongo.config('b'), 'a');
        livemongo.config('b', null);
        assert.equal(livemongo.config('b'), null);
    });

});