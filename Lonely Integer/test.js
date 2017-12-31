var assert = require('assert');
var { LonelyInteger } =  require("./LonelyInteger");

describe('Lonely Integer', function() {
    var tests = [
        {args: [1],       expected: 1},
        {args: [1, 1, 2],    expected: 2},
        {args: [0, 0, 1, 2, 1], expected: 2},
        {args: [4, 9, 95, 93, 57, 4, 57, 93, 9], expected: 95}
    ];

    tests.forEach(function(test) {
        it('result', function() {
            var res = LonelyInteger(test.args);
            assert.equal(res, test.expected);
        });
    });
});
