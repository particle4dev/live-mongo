var MongoClient = require('mongodb').MongoClient;
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

    test("replset test", function() {
        OPLOG_COLLECTION = 'oplog.rs';
        REPLSET_COLLECTION = 'system.replset';

        MongoClient.connect('mongodb://localhost:27001/local', function(err, db){
            if (err) throw err;
            var collection = db.collection(OPLOG_COLLECTION);
            collection.find({}, {tailable:true}).each(function(error, entry) {
                if (error) {
                } else {
                    console.log('--- entry', entry);
                }
            })
        });
    });
});