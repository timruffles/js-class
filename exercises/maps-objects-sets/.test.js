var help = require("../.sys/test-help");
var _ = require("lodash");

describe("maps objects sets", function() {

    help.importAndTest(__dirname, function(exported) {

      describe('getCount', function() {
        it("counts events", function() {

          const [a,b,c] = _.sampleSize(["banana","monkey","cat","mat","spoon","hat"], 3)

          exported.getCount(function(fn) {

            fn(a)
            fn(b)
            fn(b)
            fn(a)
            fn(b)
            fn(a)
            assert.equal(fn(a), 4);
            assert.equal(fn(c), 1);
            assert.equal(fn(b), 4);
            
          });

        });
          
      })

      describe('getIpSets', function() {
        it("counts events", function() {

          const [a,b,c] = _.shuffle(["clap","snap"]);
          const [ipA, ipB, ipC] = [randIp(), randIp(), randIp()];

          exported.getIpSets(function(fn) {

            fn(a, ipA)
            fn(a, ipA)
            fn(a, ipC)
            assert.sameMembers(entries(fn(a, ipA)), [ipA,ipC]);
            
            fn(b, ipB)
            assert.sameMembers(entries(fn(b, ipB)), [ipB]);
          });

          function randIp() {

            return [block(),block(),block(),block()].join(".")
            
            function block() {
              return Math.round(Math.random() * 255);
            }
          }

          function entries(x) {
            const es = [];
            for(let v of x) {
              es.push(v);
            }
            return es;
          }

        });
          
      })

    });


});
