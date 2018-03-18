function spy(spyFunction, {
    target,
    method,
}) {
    const spiedFunction = method
        ? createWrappedMethod()
        : target;

    const name = `${method || target.name}Spied`;
    const {
        [name]: wrapped,
    } = {
        [name](...args) {
            const result = spiedFunction(...args);
            spyFunction(result, ...args);
            return result;
        },
    };

    return wrapped;

    function createWrappedMethod() {
        const method = target[method];
        return (...args) => method.apply(target, args);
    }
}

function add(a,b) { return a + b }
function logArg(result, args, count) { console.log(result, args, count) }

const spiedAdd = spy(logArg, {
    target: add,
});
console.log(spiedAdd.name)
const result = spiedAdd(2, 2); // will result in 'on call 1 I received 2,2' being logged

