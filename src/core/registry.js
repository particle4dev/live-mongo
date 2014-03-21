var _ = require('lodash');

var Registry = function(){
    this._list = {};
};
_.extend(Registry.prototype, {
    constructor: Registry,
    get: function(key){
        if(!_.isUndefined(this._list[key]))
            return this._list[key];
        return null;
    },
    set: function(key, value){
        if (this._list[key]) {
            throw new Error('Unable to set ' + key + '. Already set.');
        }
        this._list[key] = value;
        return true;
    },
    remove: function(key){
        if (this._list[key]) {
            this._list[key] = null;
        }
    }
});

module.exports = Registry;