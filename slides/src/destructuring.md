## Two: variable declarations can launch rockets
{title:1}

## How?

## Destructuring

## Expressive way to work with structures

```javascript
const {
    data: {
        children: [
            firstStory,
            ...rest,
        ],
    }
} = await json('https://reddit.com/r/funny.json');
```

## Simple example

```javascript
const person = {
    name: 'Ada Lovelace',
    dob: new Date('1815-12-10'),
};
const {
    name,
    dob
} = person;
```

## Renaming

```javascript
const person = {
    name: 'Ada Lovelace',
    dob: new Date('1815-12-10'),
};
const {
    // left hand side is the source property the variable
    name: nameOfPerson,
    dob: dateOfBirth,
} = person;
```

## Arrays


```javascript
const [breakfast, lunch, ...more]
  = ["eggs", "falafel", "high tea", "a feast!", "hot chocolate"];

console.log(breakfast) // "eggs"
console.log(more) // ["high tea", "a feast!", "hot chocolate"];
```


## No limit!

- warning: may cause colleagues to shun you

```javascript
const party = {
  guests: [
    {
      name: "Hare",
      treats: [
        "chocolate eggs",
        "toast",
        "rich tea biscuits"
      ],
    },
  ],
};
const {
    guests: [{name, treats: [best, ...rest], mood = "jumpy" }],
} = party;

console.log(name, rest) // "Hare", ["toast", "rich tea biscuits"]
```

## Okay, but what about the rockets?


## Failing

```javascript
const notGuest = 1;
const { name, treat } = notGuest;

console.log(name, treat) // undefined, undefined
```

## Default expressions!

## e.g

```javascript
const BOOM = function() {
    console.log('LIFTOFF 🚀');
};

console.log("Begin");

const rocketLaunches = [];
const [
   mostRecent = BOOM(),
   ...rest
] = rocketLaunches;

console.log('End');

// we see 'Begin, LIFTOFF 🚀, End'
```

## What could we do with this?

## Validate structure!

```javascript
function formatPerson(person) {
    function required(property) {
        throw Error('Missing ' + property);
    }

    const {
        // left hand side is the source property the variable
        name: nameOfPerson = required('name'),
        dob: dateOfBirth = require('dob'),
    } = person;

    return {
        nameOfPerson,
        dateOfBirth,
    };
}

// Error: missing name
formatPerson({});
```

## What's the idiomatic way of writing this?

## Destructuring in function arguments

```javascript
function required(property) {
    throw Error('Missing ' + property);
}

function formatPerson({
        // left hand side is the source property the variable
        name: nameOfPerson = required('name'),
        dob: dateOfBirth = require('dob'),
}) {
    return {
        nameOfPerson,
        dateOfBirth,
    };
}

// Error: missing name
formatPerson({});
```

## Optionals

```javascript
function englishListA(words, {
    oxfordComma = false,
}) {}

function englishListB(words, {
    oxfordComma = false,
} = {}) {}

// TypeError: Cannot destructure property `x`
// of 'undefined' or 'null'.
englishListA([])

// OK - the default expression gives us something to destructure
englishListB([])
```

## Let's try
{exercise:true}

    exercises/destructuring







