## Core
{title:1}

## Aim

- Effective 'programming in the small'
- Writing JS like a native

## Challenge
{notitle:1}

```javascript
export function spy(spyFunction, {
    target,
    method,
}) {
    const spiedFunction = method
        ? createWrappedMethod()
        : target;

    const name = \`${method || target.name}Spied\`;
    const {
        \[name]: wrapped,
    } = {
        \[name](...args) {
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
```


