# use-vanishing-value

Vue composable which yields a `Ref<T | null>` object and a function to push new ephemeral values to that object. You provide a duration in milliseconds: the current value will be updated to the next pushed value every time that duration has elapsed.

## Usage

```js
const vanishAfter = 3000;

const [currentBool, pushNextBool] = useVanishingValue<boolean>(vanishAfter);
```

The initial value for `currentBool` will be `null`.

When you push a value:
```js
const nextValue = true;

pushNextBool(nextValue);
```

The `currentBool` will immediately become `nextValue`, for `vanishAfter` milliseconds, after which `currentBool` will update to `null`.

If you quickly push multiple values, they queue up, rather than overwriting one another.
