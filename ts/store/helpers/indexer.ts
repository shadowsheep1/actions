import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";

/**
 * represents a "list" of objects that have
 * been indexed by a specific property
 */
export interface IndexedById<T> {
  [key: string]: T | undefined;
  [key: number]: T | undefined;
}

/**
 * Returns an indexed object generated from a list of objects:
 * - V: object with a user-specified index (e.g. Wallet -> idWallet)
 * @param lst   input list to be indexed (e.g. [ { id: 1, payload: "X" }, { id: 42, payload: "Y" } ] )
 * @param key   function to extract the key from T
 * @returns     indexed object (e.g. { 1: { id: 1, payload: "X" }, 42: { id: 42, payload: "Y" } } )
 */
export const toIndexed = <T>(
  lst: ReadonlyArray<T>,
  key: (_: T) => string | number
): IndexedById<T> =>
  lst.reduce((o, obj) => ({ ...o, [key(obj)]: obj }), {} as IndexedById<T>);

/**
 * Convert an IndexedById<T> to an ReadonlyArray<T>
 * @param indexedById
 */
export const toArray = <T>(indexedById: IndexedById<T>): ReadonlyArray<T> =>
  Object.keys(indexedById).reduce(
    (acc: ReadonlyArray<T>, curr: string) =>
      pipe(
        indexedById[curr],
        O.fromNullable,
        O.fold(
          () => acc,
          val => [...acc, val]
        )
      ),
    []
  );
