var assert = require('assert');
var livemongo = require('../../index');

suite("core - registrysystem", function() {
    
    test("simple", function() {
        var rs1 = livemongo.core.RegistrySystem.getInstance();
        var rs2 = livemongo.core.RegistrySystem.getInstance();
        assert.equal(rs1.get('a'), null);
        assert.equal(rs2.set('a', 'b'), true);
        assert.equal(rs1.get('a'), 'b');
        rs1.remove('a')
        assert.equal(rs2.get('a'), null);
        assert.equal(rs1.set('a', 'c'), true);
        try {
            rs2.set('a', 'c');
        }
        catch(e){
            assert.equal(e.message, 'Unable to set a. Already set.');
        }
        assert.equal(rs1.get('a'), 'c');
    });

});