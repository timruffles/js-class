## Closures
{title:1}

## Functions retain context

- functions retain variables visible where they're defined

## In detail

- functions see var/let/const in surrounding function
- this link remains long after surrounding fn clears

##  

<img src="media/closures annotated.png">

## Context
{notitle:1}

We can see variables in functions that wrap us (red)

<img src="media/closures annotated.png">

## Privacy
{notitle:1}

We can't see variables from inner functions (blue)

<img src="media/closures annotated.png">

## Coding interview spoiler

```javascript
var elements = document.querySelectorAll("button");

// What is wrong here? How can we solve?
for(var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.addEventListener("click", function() {
    console.log(element.innerHTML);
  });
}
```

## Exercise
{title:true}

    exercise/closures


