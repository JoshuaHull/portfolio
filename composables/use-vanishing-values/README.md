# use-vanishing-values

Vue composable which yields a `Ref<T[] | null>` object and a function to push new ephemeral values onto the queue. You provide a duration in milliseconds: every time that duration has elapsed, there will be a dequeue.

## Usage

```js
const vanishAfter = 3000;

const [queuedNumbers, pushNextNumber] = useVanishingValues<boolean>(vanishAfter);
```

The initial value for `queuedNumbers` will be `[]`.

When you push a value:
```js
const nextValue = 3;

pushNextNumber(nextValue);
```

The `queuedNumbers` will immediately become `[nextValue]`, for `vanishAfter` milliseconds, after which `queuedNumbers` will update to `[]`.

If you quickly push multiple values, `queuedNumbers` will grow, and drop the values over time.
