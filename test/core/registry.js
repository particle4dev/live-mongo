var assert = require('assert');
var livemongo = require('../../index');

suite("core - registry", function() {
    
    test("simple", function() {
        var reg = new livemongo.core.Registry();
        assert.equal(reg.get('a'), null);
        assert.equal(reg.set('a', 'b'), true);
        assert.equal(reg.get('a'), 'b');
        reg.remove('a')
        assert.equal(reg.get('a'), null);
        assert.equal(reg.set('a', 'c'), true);
        try {
            reg.set('a', 'c');
        }
        catch(e){
            assert.equal(e.message, 'Unable to set a. Already set.');
        }
        assert.equal(reg.get('a'), 'c');
    });

});