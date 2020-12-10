/**
 * For unwrapping Async functions
 * ex:
 * async function foo(): Promise<number> {
 *  return 42;
 * }
 *
 * const fooRes: Await<ReturnType<typeof foo>> = foo();
 * // fooRes type == number
 */

export type Await<T> = T extends {
    then(onfulfilled?: (value: infer U) => unknown): unknown;
}
    ? U
    : T;
