var _ = require('lodash');
var RegistrySystem = require('./registrySystem');
var utils = require('./utils');

var ObjectSystem = function(){
    this._registry = RegistrySystem.getInstance();
};

_.extend(ObjectSystem.prototype, {
    constructor: ObjectSystem,
    getComponent: function (key) {
        return this._registry.get(key);
    }
});

module.exports = ObjectSystem;
