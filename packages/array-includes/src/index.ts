export default (
  arr: Array<unknown>,
  searchElement: unknown,
  fromIndex?: number,
): boolean => arr.includes(searchElement, fromIndex);
