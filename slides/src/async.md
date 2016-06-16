## Async
{title: 1}

## Async IO

- ubiquitious in JS
- the ecosystem default
- vs subset of libraries in Ruby EM, Python Twisted

## Let's compare

## Synchronous IO

- AKA 'blocking IO'

```javascript
1 // we'll not continue to the next line until the OS
2 // has read the file and provided it back to our process
3 var contents = fs.readFileSync("/tmp/hello", "utf8");
4 
5 console.log("End of source file");
```

## Asynchronous IO

- AKA 'non-blocking IO'

```javascript
1 fs.readFile("/tmp/hello", { encoding: "utf8" },
2  function(err, content) {
3    // (2/2) ...we get here
4    console.log("Read the file");
5  });
6
7 // (1/2) we'll get here waaaaaaaaaaaay before...
8 console.log("End of source file");
```

## Clearing the stack

- no code ever runs simultaneously
- while code is running, no callbacks fire

## Diagram loop
{notitle:1}

<img src="media/event-loop-schematic.png">

## Rule: don't block the loop
{rule:1}

- avoid long running, synchronous code
- chunk
- or delegate to other processes/WebWorkers

## Diagram: starving the lop
{notitle:1}

<img src="media/event-loop.png">

## Sources of async

- `setTimeout`
- AJAX
- IndexedDB, WebWorkers
- most Node APIs (`fs`, `child_process`)

## Stacks

- languages with functions need a stack
- keeps point to return to
- stack 'unravels' with errors

## Stack
{notitle:1}

<img src="media/stacks.png">


## `try ... catch`

- JS looks back up the (sync) stack on errors
- if we're inside a `try ... catch` in the stack, we're ok

## try + catch

```javascript
function main() {
  try {
    helper();
  } catch(e) {
    console.log(e);
  }

}

function helper() {
  throw Error("bad thing");
}
```

##   
{notitle:1}

<img src="media/try-catch-sync.jpg">

## With async, `try ... catch` can't help you

## e.g

```javascript
function main() {
  try {
    // make a async HTTP request
    $.get("/some/json/url");
  } catch(e) {
    console.log(e);
  }
}
```

##   
{notitle:1}

<img src="media/try-catch-async.jpg">

## Let's try
{exercise:true}

    exercises/callbacks-and-async
