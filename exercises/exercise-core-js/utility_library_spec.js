describe("js",function() {

  describe("truncate",function() {

    function truncate(str,ellipsis,maxLen) {
      // YOUR CODE
      // optional arguments
    }

    it("shortens string",function() {
      expect(truncate("I am too long","…",5))
        .toEqual("I am…");
    });

    it("handles implicit length and ellipsis",function() {
      expect(truncate("I am too long"))
        .toEqual("I am to…");
    });

    it("handles 0 as length (without a === 0 case)",function() {
      expect(truncate("I am too long","x",0))
        .toEqual("");
    });

  });


  describe("english list",function() {

    function englishList(/* words */) {
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

    function until(iterator,check) {
      // YOUR CODE
    }

    var countDown;
    var isZero;
    var i;
    beforeEach(function() {
      i = 10;
      countDown = function() {
        i -= 1;
      }
      isZero = function() {
        return i === 0;
      }
    });

    it("runs the iterator until the check returns true",function() {
      expect(i).toEqual(10);
      until(countDown,isZero);
      expect(i).toEqual(0);
    });

  });

});
