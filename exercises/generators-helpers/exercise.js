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
 *       moveDistance.then(function({dx,dy}) {
 *         // should have values
 *       });
 *
 * You need to implement the `events` function to be used in this way. The
 * generator function you'll be passed will `yield` event strings as above.
 *
 *
 */
export function events(emitter, makeGen) {

  return new Promise(function (resolve, reject) {

    //  TODO create the generator (remember generator function vs generator distinction)
    //  TODO get an initial event string
    //  TODO listen, and resume once the event fires
    //  TODO repeat the listen/resume process until the generator is done
    //  TODO when the generator is done, return the final value

  });

}
