var MongoClient = require('mongodb').MongoClient;
var Q = require("q");

MongoConnection = function(url){
    this._url = url;
    this._connect();
};

var connectPromise = function(url){
    var deferred = Q.defer();
    try {
        MongoClient.connect(url, function(err, db){
            if (err)
                deferred.reject(err);
            deferred.resolve(db);
        });
    }
    catch(e){
        deferred.reject(e);
    }
    return deferred.promise;
};

/**
 * singleton pattern (one connect)
 */
MongoConnection.prototype = {
    constructor: MongoConnection,

    _connect: function(){
        var self = this;
        this._promiseConnection = connectPromise(self._url);
        this._promiseConnection.then(function(db) {
            self._db = db;
        }).catch(function (error) {
            // Handle any error from all above steps
            console.error(error);
        });
    },

    close: function(){
        var self = this;
        this._promiseConnection.then(function(db) {
            db.close();
        }).catch(function (error) {
            // Handle any error from all above steps
            console.error(error, 'close');
        });
    },

    _asyncDbCall: function(callback){
        this._promiseConnection.then(callback).catch(function (error) {
            // Handle any error from all above steps
            console.error(error, '_asyncDbCall');
        });
    },

    _getCollection: function(name, callback){
        var self = this;
        self._asyncDbCall(function(){
            var collection = self._db.collection(name);
            callback(collection);
        });
    }
};

module.exports = MongoConnection;