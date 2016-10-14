var help = require("../.sys/test-help");

describe("co", function() {

    help.importAndTest(__dirname, function(exported) {

 describe("async generators", function() {

        it("catches errors - should always resolve", function() {
          const e1 = Error(help.rstring());

          // shouldn't be rejected
          return exported.settleAll(e1)
        })

        it("returns resolved value for resolved promises", function() {
          const [s1,s2,s3] = [help.rstring(), help.rstring(), help.rstring()];

          const e1 = Error(s1);
          const rj1 = Promise.reject(e1);
          const r1 = Promise.resolve(s2);
          const r2 = Promise.resolve(s3);

          return exported.settleAll(r1, rj1, r2)
            .then(function([v1,_,v3]) {
              assert.equal(v1, s2, "first promise resolved with wrong value");
              assert.equal(v3, s3, "last promise resolved with wrong value");
            })
        })

        it("returns error for rejected promises", function() {
          const [s1,s2,s3] = [help.rstring(), help.rstring(), help.rstring()];
          const e1 = Error(s1);
          const rj1 = Promise.reject(e1);
          const r1 = Promise.resolve(s2);
          const r2 = Promise.resolve(s3);

          return exported.settleAll(r1, rj1, r2)
            .then(function([_, e, _2]) {
              assert.equal(e.name, e1.name, "unexpected value returned instead of rejection value");
            })
        })


      })


    });


});
