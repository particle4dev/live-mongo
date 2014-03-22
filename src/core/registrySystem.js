var _ = require('lodash');
var Registry = require('./registry');
var utils = require('./utils');

// Singleton
var RegistrySystem = (function () {
    var instance;
    function init() {
        instance = new Registry();
    }
    return {
        getInstance: function () {
            if ( !instance ) {
                init();
            }
            return instance;
        }
    };
})();

module.exports = RegistrySystem;