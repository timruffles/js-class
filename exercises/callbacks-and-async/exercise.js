// TODO
//
//   write a method that implements sampling a query stream
//
//   it should listen to 'n' queries, then report its result
//   to 'cb'
//
//   it should also disconnect from the 'query' events on queryStream
//
//   cumlative duration should be in the order the queries started,
//
//   e.g this scenario:
//
//       NAME     START    END     DURATION
//       query 1: 0        50      50
//       query 2: 5        10      5
//       query 3: 10       60      50
//
//   would give the following result. The query objects in the `queries`
//   array, their durations in the `durations` array:
//
//       {
//         queries: [q1,q2,q3]
//         durations: [50, 5, 50],
//       }
//
//   be careful - there's no guarantee the query which
//   starts first, will end first!
//
//   Both queryStream and queries emit events you can
//   subscribe to via the `.on` method:
//
//       queryStream.on("query", function(query, startTime) {
//         query.on("end", function(endTime) {
//
//         });
//       })
//
//   be sure to ignore further queries after the first `n`
//
export function sampleQueries(queryStream, n, cb) {

  queryStream.on('query', queryHandler);

  function queryHandler(query, time) {
    console.log(`start id:${query.id} time:${time}`);

    query.on('end', (time) => {
      console.log(`end id:${query.id} time:${time}`);
    });
  }
}

