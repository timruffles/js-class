/**
 * Finds how many steps up the prototype chain key
 * exists - or undefined if not present. 0 steps
 * if on object itself.
 *
 * @param {object} object
 * @param {string} key
 * @returns {(number | undefined)} -
 */
export function howFarUpTheChain(object, key) {
    let count = 0;

    while(object) {
        if(object.hasOwnProperty(key)) {
            return count;
        } else {
           count += 1;
           object = Object.getPrototypeOf(object);
        }
    }

    return undefined;
}
