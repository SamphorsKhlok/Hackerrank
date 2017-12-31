var assert = require('assert');
var { LonelyInteger } =  require("./");

function add() {
    return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
}

describe('add()', function() {
    var tests = [
        {args: [1],       expected: 1},
        {args: [1, 1, 2],    expected: 2},
        {args: [0, 0, 1, 2, 1], expected: 2}
    ];

    tests.forEach(function(test) {
        it('Lonely Integer ', function() {
            var res = LonelyInterger.apply(null, test.args);
            assert.equal(res, test.expected);
        });
    });
});
