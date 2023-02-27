// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

const Test = require('@codewars/test-compat');

describe('Basic inputs', function() {
  it('should pass all conditions', function() {
    Test.assertEquals(isInteresting(99, [10000012]), 1);
    Test.assertEquals(isInteresting(98, [10000012]), 1);
    Test.assertEquals(isInteresting(100, [10000012]), 2);
    Test.assertEquals(isInteresting(999, [10000012]), 2);
    Test.assertEquals(isInteresting(899, [10000012]), 1);
    Test.assertEquals(isInteresting(898, [10000012]), 1);
    Test.assertEquals(isInteresting(89998, [10000012]), 2);
    Test.assertEquals(isInteresting(1337, [1337, 31415, 314159, 24680]), 2);
    Test.assertEquals(isInteresting(31414, [1337, 31415, 314159, 24680]), 1);
    Test.assertEquals(isInteresting(31413, [1337, 31415, 314159, 24680]), 2);
    Test.assertEquals(isInteresting(1338, [1337, 31415, 314159, 24680]), 0);
    Test.assertEquals(isInteresting(2477, [1337, 31415, 314159, 24680]), 0);
    Test.assertEquals(isInteresting(24681, [1337, 31415, 314159, 24680]), 0);
    Test.assertEquals(isInteresting(3, [1337, 256]),     0);
    Test.assertEquals(isInteresting(98, [1337, 256]),    1);
    Test.assertEquals(isInteresting(3, [1337, 256]),     0);
    Test.assertEquals(isInteresting(1336, [1337, 256]),  1);
    Test.assertEquals(isInteresting(1337, [1337, 256]),  2);
    Test.assertEquals(isInteresting(11208, [1337, 256]), 0);
    Test.assertEquals(isInteresting(11209, [1337, 256]), 1);
    Test.assertEquals(isInteresting(11211, [1337, 256]), 2);
  });
});  });
});
