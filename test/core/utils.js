var assert = require('assert');
var livemongo = require('../../index');

suite("core - utils", function() {
    /**
    test("equal", function() {
        var equals = livemongo.core.utils.equals;

        //array
        assert.equal(equals([1, 2], [1, 2]), true);
        assert.equal(equals([1, 2], [3, 2]), false);
        
        //object

        assert.equal(equals({
                a: 1,
                c: 1,
                b: 1
            }, {
                'a': 1,
                'c': 1 
        }), false);

        assert.equal(equals({
            a: 1,
            c: 1 
            }, {
            a: 1,
            c: 1,
            b: 1
        }), true);

        assert.equal(equals({}, {}), true);
        assert.equal(equals({}, {a: 1}), false);
        assert.equal(equals({
            a: {b: 1, c: 2},
            d: {e: 3, f: 4}
        }, {
            d: {f: 4, e: 3},
            a: {c: 2, b: 1}
        }), true);

        assert.equal(equals({
            a: {b: 1, c: 2},
            d: {e: 3, f: 4}
        }, {
            d: {f: 4, e: 3},
            a: {c: 2, b: 1}
        }), true);

    });

    test("some equality tests", function() {
        var equals = livemongo.core.utils.equals;
        assert.equal(equals({a: 1, b: 2, c: 3}, {a: 1, c: 3, b: 2}), true);
        assert.equal(equals({a: 1, b: 2}, {a: 1, c: 3, b: 2}), true);
        assert.equal(equals({a: 1, b: 2, c: 3}, {a: 1, b: 2}), false);
        assert.equal(equals({a: 1, b: 2, c: 3}, {a: 1, c: 3, b: 4}), false);
        assert.equal(equals({a: {}}, {a: {b:2}}), false);
        assert.equal(equals({a: {b:2}}, {a: {}}), false);
    });

    test("equality and falsiness", function() {
        var equals = livemongo.core.utils.equals;
        assert.equal(equals(null, null), true);
        assert.equal(equals(undefined, undefined), true);
        assert.equal(equals({foo: "foo"}, null), false);
        assert.equal(equals(null, {foo: "foo"}), false);
        assert.equal(equals(undefined, {foo: "foo"}), false);
        assert.equal(equals({foo: "foo"}, undefined), false);
    });

    test("NaN and Inf", function() {
        var equals = livemongo.core.utils.equals;
        assert.equal(equals(NaN, NaN), true);
        assert.equal(equals(Infinity, Infinity), true);
        assert.equal(equals(-Infinity, -Infinity), true);
        assert.equal(equals(Infinity, -Infinity), false);
        assert.equal(equals(Infinity, NaN), false);
        assert.equal(equals(Infinity, 0), false);
        assert.equal(equals(NaN, 0), false);
    });
    */

    test("matching one or more keys", function() {
        var equals = livemongo.core.utils.equals;
        assert.equal(equals({a: 12}, {}), false);
        assert.equal(equals({a: 12}, {a: 12}), true);
        assert.equal(equals({a: 12}, {a: 12, b: 13}), true);
        assert.equal(equals({a: 12, b: 13}, {a: 12, b: 13}), true);
        assert.equal(equals({a: 12, b: 13}, {a: 12, b: 13, c: 14}), true);
        assert.equal(equals({a: 12, b: 13, c: 14}, {a: 12, b: 13}), false);
        assert.equal(equals({a: 12, b: 13}, {b: 13, c: 14}), false);

        //assert.equal(equals({a: 12}, {a: [11, 12, 13]}), true);
        //assert.equal(equals({a: 12}, {a: [12]}), true);
        assert.equal(equals({a: 12}, {a: [11, 13]}), false);
        //assert.equal(equals({a: 12, b: 13}, {a: [11, 12, 13], b: [13, 14, 15]}), true);
        assert.equal(equals({a: 12, b: 13}, {a: [11, 12, 13], b: [14, 15]}), false);
    });

    test("dates", function() {
        var equals = livemongo.core.utils.equals;
        var date1 = new Date;
        var date2 = new Date(date1.getTime() + 1000);
        assert.equal(equals({a: date1}, {a: date1}), true);
        assert.equal(equals({a: date1}, {a: date2}), false);
    });

    test("arrays", function() {
        var equals = livemongo.core.utils.equals;
        
        assert.equal(equals({a: [1,2]}, {a: [1, 2]}), true);
        //assert.equal(equals({a: [1,2]}, {a: [[1, 2]]}), true);
        //assert.equal(equals({a: [1,2]}, {a: [[3, 4], [1, 2]]}), true);
        assert.equal(equals({a: [1,2]}, {a: [3, 4]}), false);
        assert.equal(equals({a: [1,2]}, {a: [[[1, 2]]]}), false);
    });

    test("null", function() {
        var equals = livemongo.core.utils.equals;
        
        assert.equal(equals({a: null}, {a: null}), true);
        //assert.equal(equals({a: null}, {b: 12}), true);
        //assert.equal(equals({a: null}, {a: [1, 2, null, 3]}), true);
        assert.equal(equals({a: null}, {a: 12}), false);
        assert.equal(equals({a: null}, {a: [1, 2, {}, 3]}), false);
    });

});