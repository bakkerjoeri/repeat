# repeat

Repeat a callback a given number of times.

## Installation

```sh
npm install @bakkerjoeri/repeat
```

## Usage

```js
import repeat from '@bakkerjoeri/repeat';

const count = (i) => console.log(i);
repeat(3, count);
// => 0
// => 1
// => 2
```

The callback is called with a 0-based iteration count as its first argument.
