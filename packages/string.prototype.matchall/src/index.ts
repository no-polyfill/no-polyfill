export default (
  str: string,
  regex: RegExp,
): RegExpStringIterator<RegExpExecArray> => str.matchAll(regex);
