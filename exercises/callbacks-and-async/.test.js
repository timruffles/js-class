var help = require("../.sys/test-help");
var EventEmitter = require("events").EventEmitter;

describe("callbacks and async", function() {

    help.importAndTest(__dirname, function(exported) {

      describe('sampleQueries', function() {

        var querySetups = [];
        var result;
        var resultSpy;
        var n = 3;
        var ended = 0;

        before(function(done) {
          resultSpy = sinon.spy();
          scenario(
            query(help.rint(), 0, 15)
            , query(help.rint(), 5, 6)
            , query(help.rint(), 10, 11)
            , query(help.rint(), 15, 20)
            , query(help.rint(), 15, 16)
          );

          function scenario(...qs) {
            // run the events
            var stream = new EventEmitter;

            querySetups.forEach(function(setup, index) {
              var q = setup.query;
              if(!setup) {
                throw new Error("missing q " + q.id);
              }

              setTimeout(function() {
                stream.emit("query", q, setup.start);

                setTimeout(function() {
                  q.emit("end", setup.end);
                  if(++ended === querySetups.length) {
                    done();
                  }

                }, setup.end - setup.start);

              }, setup.start);
            });

            exported.sampleQueries(stream, n, function(r) {
              result = r;
              resultSpy.apply(null, arguments); 
            });
          }
        });

        it('reported once after n events', function() {
          assert.spyCalledOnce(resultSpy);    
        })


        it('reports the queries in the right order', function() {
          assert.deepEqual(result.queries.map(q => q.id), querySetups.slice(0, n).map(s => s.query.id));
        })

        it('reports the durations', function() {
          assert.deepEqual(result.durations, [15, 1, 1]);
        })



        function query(id, start, end) {
          var emitter = new EventEmitter;
          emitter.id = id;
          querySetups.push({
            query: emitter,
            start: start,
            end: end,
          });
        }
      })

    });


});
