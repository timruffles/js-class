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

## Stack diagram
{notitle: 1}

<img src="media/stack-clear-errors.png">

## With async, no one can hear you throw
{notitle: 1}

<img src="media/stack-clear.png">

## e.g

```javascript
// this stack is long gone...
try {

  create({}, function() {
    // ...
  })

} catch(e) {
  // never going to catch!
}
// waaaaay before...(1)

function create(data, cb) {
  $post("/api/create", data, function(err, ok) {
    if(err) {
      // (1)...we get here
      throw err;
    }
  })
}
```

## Rule: don't throw in async
{rule:1}

## Let's try
{exercise:true}

    exercises/callbacks-and-async
