/**
 * @param {any} value
 * @returns {number}
 */
export const assertNumber = (value) => {
  if (typeof value === "string") return parseInt(value);
  if (typeof value === "number") return value;
  throw new Error(`Argument must be a number, received ${value}`);
};

/**
 * @param {any} value
 * @returns {string}
 */
export const assertString = (value) => {
  if (typeof value === "string") return value;
  throw new Error(`Argument must be a string, received ${value}`);
};

/**
 * @param {any} value
 * @param {number} length
 * @returns {number}
 */
export const assertLength = (value, length) => {
  if (value?.length !== length)
    throw new Error(`Argument must have length ${length}, received length ${value?.length}`);
  return value.length;
};
