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