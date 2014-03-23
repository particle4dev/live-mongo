var _ = require('lodash');
var core = require('./core');

var MONGO = {
    url: 'mongodb://localhost:27001/',
    database: 'app'
};

var config = (function (_super) {
    core.utils.extends(config, _super);
    function config() {
        _super.call(this, "config");
    }
    config.prototype.get = function(c, v){
        if(_.isObject(c)){
            _.extend(MONGO, c);
        }
        else if(_.isString(c) && !_.isUndefined(v)){
            MONGO[c] = v;
        }
        else if(_.isString(c)){
            return MONGO[c];
        }
    };
    return new config();
})(core.ObjectSystem);

module.exports = config;