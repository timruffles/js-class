describe("scopes",function() {

  quiz("on JS variables",function(question,valueOf) {

    question(function() {
      var name = "Zaphod";

      var setName = function() {
        name = "Arthur";
      }

      setName();

      valueOf(name).is( _YOUR_ANSWER_ );
    });

    question(function() {
      var name = "Zaphod";

      var setName = function() {
        var name = "Arthur";
      }

      setName();

      valueOf(name).is( _YOUR_ANSWER_ );
    });

    question(function() {
      name = "Zaphod";

      var setName = function() {
        name = "Arthur";
      }

      setName();

      valueOf(name).is( _YOUR_ANSWER_ );
    });

    question(function() {
      window.name = "Zaphod";

      valueOf(name).is( _YOUR_ANSWER_ );
    });

  });

  
  describe("listenToAll",function() {

    // listens to all elements for evt, will
    // call handler with `(el,indexOfEl)`
    function listenToAll(els,evt,handler) {
      // FIX THIS CODE
      for(var i = 0; i < els.length; i++) {
        els[i].addEventListener(evt,function() {
          handler(els[i],i);
        });
      }
    }

    var elsByIndex;
    var handlerSpy;

    beforeEach(function() {

      elsByIndex = {};
      handlerSpy = jasmine.createSpy("handler spy");
      var els = [];
      var i = 0;
      do {
        var el = document.createElement("div");
        els.push(el);
        elsByIndex[i] = el;
      } while(++i < 10);

      listenToAll(els,"click",handlerSpy);

      $(elsByIndex[0]).click();
      $(elsByIndex[2]).click();
      $(elsByIndex[9]).click();

      console.log(handlerSpy.calls.all());

    });

    it("calls handler with el",function() {
      expect(handlerSpy.calls.argsFor(0)[0]).toEqual(elsByIndex[0]);
      expect(handlerSpy.calls.argsFor(1)[0]).toEqual(elsByIndex[2]);
      expect(handlerSpy.calls.argsFor(2)[0]).toEqual(elsByIndex[9]);
    });

    it("calls handler with index",function() {
      expect(handlerSpy.calls.argsFor(0)[1]).toEqual(0);
      expect(handlerSpy.calls.argsFor(1)[1]).toEqual(2);
      expect(handlerSpy.calls.argsFor(2)[1]).toEqual(9);
    });

  });


});
