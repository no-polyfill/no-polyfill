export default (
  arr: Array<any>,
  searchElement: any,
  fromIndex?: number | undefined,
): boolean => arr.includes(searchElement, fromIndex);
