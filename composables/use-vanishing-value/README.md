# use-vanishing-value

`const [currentBool, pushNextBool] = useVanishingValue<boolean>(3000);`

Vue composable which yields a `Ref<T | null>` object and a function to push new ephemeral values to that object. You provide a duration in milliseconds: the current value will be updated to the next pushed value every time that duration has elapsed.
