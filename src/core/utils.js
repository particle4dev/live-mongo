var _ = require('lodash');
// from TypeScript
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

//angular js
var isArray = _.isArray;
var isDate  = _.isDate;
var isRegExp= _.isRegExp;
var isFunction = _.isFunction;
function isWindow(obj) {
    return obj && obj.document && obj.location && obj.alert && obj.setInterval;
}
function equals(o1, o2, options) {
    if (o1 === o2) return true;
    if (o1 === null || o2 === null) return false;
    if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2) {
        if (t1 == 'object') {
            if (isArray(o1)) {
                if (!isArray(o2)) return false;
                if ((length = o1.length) == o2.length) {
                    for(key=0; key < length; key++) {
                        if (!equals(o1[key], o2[key])) return false;
                    }
                    return true;
                }
            } else if (isDate(o1)) {
                return isDate(o2) && o1.getTime() == o2.getTime();
            } else if (isRegExp(o1) && isRegExp(o2)) {
                return o1.toString() == o2.toString();
            } else {
                if (isWindow(o1) || isWindow(o2) || isArray(o2)) return false;
                keySet = {};
                for(key in o1) {
                    if (key.charAt(0) === '$' || isFunction(o1[key])) continue;
                    if (!equals(o1[key], o2[key])) return false;
                    keySet[key] = true;
                }
                //console.log(keySet);
                //for(key in o2) {

                    //console.log("!keySet.hasOwnProperty(key)" + !keySet.hasOwnProperty(key) ,
                    //keySet,
                    //key
                    //);
                    //key.charAt(0) !== '$' ,
                    //o2[key] !== undefined ,
                    //!isFunction(o2[key]));

                    //if (!keySet.hasOwnProperty(key) &&
                    //key.charAt(0) !== '$' &&
                    //o2[key] !== undefined &&
                    //!isFunction(o2[key])) return false;
                //}
                return true;
            }
        }
    }
    return false;
}

/**
_.each({
type: 'food',
price: { $lt: 9.95 }
}, function (subSelector, key) {
    console.log(subSelector, key);
});
*/

module.exports = {
    extends: __extends,
    equals: equals
};