import { strStr } from "../28 Find the Index of the First Occurrence in a String/strStr";

describe("Find the Index of the First Occurrence in a String", () => {
  it('should work correctly with input haystack = "sadbutsad", needle = "sad"', () => {
    const haystack = "sadbutsad";
    const needle = "sad";
    const result = strStr(haystack, needle);

    expect(result).toBe(0);
    expect(haystack.slice(0, 3)).toBe(needle);
  });

  it('should work correctly with input haystack = "leetcode", needle = "leeto"', () => {
    const haystack = "leetcode";
    const needle = "leeto";
    const result = strStr(haystack, needle);

    expect(result).toBe(-1);
    expect(haystack.includes(needle)).toBeFalsy();
  });

  it('should work correctly with input haystack = "aaa", needle = "aaaa"', () => {
    const haystack = "aaa";
    const needle = "aaaa";
    const result = strStr(haystack, needle);

    expect(result).toBe(-1);
    expect(haystack.includes(needle)).toBeFalsy();
  });

  it('should work correctly with input haystack = "mississippi", needle = "issip"', () => {
    const haystack = "mississippi";
    const needle = "issip";
    const result = strStr(haystack, needle);

    expect(result).toBe(4);
    expect(haystack.slice(4, 4 + needle.length)).toBe(needle);
  });
});
