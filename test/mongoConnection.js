var assert = require('assert');
var l = require('../index');

suite("mongoConnection.js", function() {
    test("connect", function() {
        var newConnect = new l.MongoConnection('mongodb://localhost:27017/blog');
        //var newConnect = new l.MongoConnection('mongodb://localhost:0/blog');
        //var newConnect = new l.MongoConnection('');
        /**
        newConnect.close();
        newConnect._asyncDbCall(function(db){
            console.log(db._state);
        });
        */
        var account = newConnect._getCollection('account');
    });
});