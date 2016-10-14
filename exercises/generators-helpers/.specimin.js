/**
 * Exercise 2
 *
 * Create a helper that *accepts* generator functions to
 * make sequencing events much easier:
 *
 * It'll be used as follows:
 *
 *       const moveDistance = exported.events(someElement, function*() {
 *         const over = yield "mousedown";
 *         const out = yield "mouseup";

 *         return {
 *           dx: out.clientX - over.clientX, 
 *           dy: out.clientY - over.clientY, 
 *         };
 *       });
 *
 * You need to implement the `events` function to be used in this way. The
 * generator function you'll be passed will only even `yield` an event string.
 *
 *
 * TODO create the generator (remember generator function vs generator distinction)
 * TODO get an initial event string
 * TODO listen, and resume once the event fires
 * TODO when the generator is done, return the final value
 */
export function events(emitter, makeGen) {

  return new Promise(function(resolve, reject) {
    const gen = makeGen();

    loop();
    
    function loop(lastEvent) {
      const { done, value } = gen.next(lastEvent);

      if(done) {
        return resolve(value);
      }

      if(typeof value !== "string") {
        throw Error("must be an event string");
      }

      emitter.once(value, loop);
    }
  })

}


