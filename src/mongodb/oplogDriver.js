var MongoClient = require('mongodb').MongoClient;
OPLOG_COLLECTION = 'oplog.rs';
REPLSET_COLLECTION = 'system.replset';
MATCHER_COLLECTION = '__matcher__';

var oplogDriver = function(){

};
/**
MongoClient.connect('mongodb://localhost:27001/local', function(err, db){
    if (err) throw err;
    var collection = db.collection(OPLOG_COLLECTION);
    collection.find({}, {tailable:true}).each(function(error, entry) {
        if (error) {
            console.log(error);
        } else {
            console.log('--- entry', entry);
        }
    });
});
*/