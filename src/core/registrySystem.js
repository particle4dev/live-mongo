var _ = require('lodash');
var Registry = require('./registry');
var utils = require('./utils');

/**
From my old framework
class RegistrySystem extends Registry {
    protected static $instance = false;
    public static function getInstance(){
        if(!self::$instance){
            self::$instance = new \system\core\RegistrySystem();
        }
        return self::$instance;
    }
    public function __construct() {}
}
 */

var RegistrySystem = (function (_super) {
    utils.extends(RS, _super);
    function RS(name) {
        _super.call(this, name);
    }
    _.extend(RS.prototype, {
        constructor: RS
        
    });

    return RS;
})(Registry);

module.exports = RegistrySystem;