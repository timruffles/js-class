describe("js",function() {

  describe("truncate",function() {

    function truncate(str, ellipsis, maxLen) {
      // TODO your code here
    }

    it("shortens string",function() {
      expect(truncate("I am too long","…",5))
        .toEqual("I am…");
    });

    it("accepts default length and ellipsis",function() {
      expect(truncate("I am too long"))
        .toEqual("I am to…");
    });

    it("handles 0 as length",function() {
      expect(truncate("I am too long","x",0))
        .toEqual("");
    });

  });


  describe("english list",function() {

    function englishList() {
      // YOUR CODE
    }

    it("formats [1,2,3] as '1, 2 and 3'",function() {
      expect(englishList(1,2,3)).toEqual('1, 2 and 3');
    });

    it("formats [1,2] as '1 and 2",function() {
      expect(englishList(1,2)).toEqual('1 and 2');
    });

    it("formats [1] as '1'",function() {
      expect(englishList(1)).toEqual('1');
    });

    it("formats [] as ''",function() {
      expect(englishList()).toEqual('');
    });

  });

  describe("until",function() {

    function until(done, iterator) {
      // TODO your code
    }

    function recursiveUntil(done, iterator) {
      // TODO your code
    }

    var i;
    beforeEach(function() {
      i = 10;
    });

    it("runs the iterator until the check returns true",function() {
      expect(i).toEqual(10);
      until(isZero, countDown);
      expect(i).toEqual(0);
    });

    it("recursiveUntil runs the iterator until the check returns true",function() {
      expect(i).toEqual(10);
      recursiveUntil(isZero, countDown);
      expect(i).toEqual(0);
    });

    function countDown() {
      i -= 1;
    }

    function isZero() {
      return i === 0;
    }

  });

});
