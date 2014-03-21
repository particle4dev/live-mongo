//var MongoClient = require('mongodb').MongoClient;
/**
MongoClient.connect('mongodb://localhost:27017/blog', function(err, db){
    if (err) throw err;
    var collection = db.collection('account');
    /**
    collection.insert({
        user: 'new_one',
        pass: 'pass'
    }, function(error, res){
        if(error)
            throw error;
        console.log(res);
        db.close();
    });
    var stream = collection.find().stream();
    stream.on('data', function(i){
        console.log(i);
    });
    stream.on('end', function(){
        db.close();
    });
    */
    // update
    /**
    collection.update({user: 'le_hoang'}, {$set: {user: 'le_hoang2'}}, function(e, r){
        console.log(e, r);
        if(e) {
            throw e;
        }
        if(r)
            db.close();
    });
    */
    // save
    /**
    collection.save({
        _id: '1234',
        user: 'mai lan changed',
        pass: '0987 changed'
    }, {
        safe: true
    }, function(e, r){
        if(e)
            throw e;
        if(r)
            console.log(r);
        db.close();
    });
    * /
    // remove
    collection.remove({_id: '1234'}, function(e, r){
        if(e) throw e;
        console.log(r);
        db.close();
    });
});
*/
module.exports = require('./src/index');