var _ = require('lodash');
var MongoConnection = require('./mongoConnection');
var core = require('../core');

var MongodbRemoteDriver = (function (_super) {
    core.utils.extends(MongodbRemoteDriver, _super);
    function MongodbRemoteDriver() {
        _super.call(this, "MongodbRemoteDriver");
        this.newConnect();
    }
    MongodbRemoteDriver.prototype.newConnect = function () {
        if(this._connection){
            this._connection.close();
            this._connection = null;
        }
        var config = this.getComponent('config');
        var url = config.get('url') + config.get('database');
        this._connection = new MongoConnection(url);
    };
    return MongodbRemoteDriver;
})(core.ObjectSystem);

var MongodbRemote = {};
MongodbRemote.defaultMongodbRemoteDriver = _.once(function(){
    return new MongodbRemoteDriver();
});

module.exports = MongodbRemote;
