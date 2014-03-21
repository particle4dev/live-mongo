var assert = require('assert');
var livemongo = require('../index');

suite("mongoConnection.js", function() {
    test("connect", function() {
        //var newConnect = new livemongo.MongoConnection('mongodb://localhost:27017/blog');
        //var newConnect = new l.MongoConnection('mongodb://localhost:0/blog');
        //var newConnect = new l.MongoConnection('');
        /**
        newConnect.close();
        newConnect._asyncDbCall(function(db){
            console.log(db._state);
        });
        
        newConnect._getCollection('account', function(account){
            console.log('1');
            account.insert({
                user: 'new_one',
                pass: 'pass'
            }, function(error, res){
                if(error)
                    throw error;
            });
        });
        newConnect._getCollection('account', function(account){
            console.log('2');
            var stream = account.find({user: 'new_one'}).stream();
            stream.on('data', function(i){
                console.log(i);
            });
            stream.on('end', function(){
            });
        });
        newConnect._getCollection('account', function(account){
            console.log('3');
            /**
            account.remove({}, function(err){
                if(err)
                    throw err;
            });
            * /
        });
        */
    });
});