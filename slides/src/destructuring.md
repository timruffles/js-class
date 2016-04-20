## Destructuring
{title:1}

## Pulling variables from composite values

## e.g

```javascript
const [breakfast, lunch, ...more]
  = ["eggs", "falafel", "high tea", "a feast!", "hot chocolate"];

console.log(breakfast) // "eggs"
console.log(more) // ["high tea", "a feast!", "hot chocolate"];
```

## Structure

```sh
PATTERN DEFINING VARIABLES = VALUE TO DESTRUCTURE;
```

## Objects

```javascript
const guest = { name: "Hare", treat: "chocolate eggs" };
const { name, treat } = guest;

console.log(name) // Hare
```

## Renaming

```javascript
const guest = { name: "Hare", treat: "chocolate eggs" };
const { name: guestName, treat } = guest;

console.log(guestName) // Hare
```

## Objects continued

```javascript
const guest = { name: "Hare", treat: "chocolate eggs" };

let name, treat;

// syntax issue: can't have a naked {} on left hand
({ name, treat } = guest);

console.log(name, mood) // Hare, Jumpy
```

## Failing

```javascript
const notGuest = 1;
const { name, treat } = notGuest;

console.log(name, treat) // undefined, undefined
```

## Defaults

```javascript
const guest = { name: "Hare", treat: "chocolate eggs" };
const { name, treat, mood = "jumpy" } = guest;

console.log(name, mood) // Hare, Jumpy

const [ firstGuest = "cheshire cat" ] = [];
```

## Recursive

```javascript
const guest = {
  name: "Hare",
  treats: ["chocolate eggs", "toast", "rich tea biscuits"],

};
const { name, treats: [best, ...rest], mood = "jumpy" } = guest;

console.log(name, rest) // Hare, ["toast", "rich tea biscuits"]
```

## Let's try
{exercise:true}

    exercises/destructuring







