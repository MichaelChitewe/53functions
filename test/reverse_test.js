var assert = require('assert');
var reverse = require('../reverse');

describe("reverse", function(){

    it("should return reversed string ", function(){

        var zee = ["Dogs", "Elephants", "Zebras"];
        var result = reverse(zee);
        assert.equal(result, zee);
    });

})
