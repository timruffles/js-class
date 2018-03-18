## Variable args
{title:1}

<img src="slides-theme/img/eval-apply.jpg" style='width:476px; display:block; margin: 0 auto'>

## Piece

```javascript
export function add(...numbers) {
    let sum = 0;
    for(const x of numbers) {
        sum += x;
    }
    return sum;
}
```

## Export

```javascript
export const someName = 1;
export let otherName = 1;
export function someFn() {}
```

## Variable arguments

```javascript
function manyArgs(...things) {
    return things;
}

manyArgs(1,2,3) // [1,2,3]
manyArgs(1)     // [1]
manyArgs()      // []
```


