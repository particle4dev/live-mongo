var _ = require('lodash');

var MONGO = {
    url: 'mongodb://localhost:27001/',
    database: 'app'
};
var config = function(c, v){
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
module.exports = config;