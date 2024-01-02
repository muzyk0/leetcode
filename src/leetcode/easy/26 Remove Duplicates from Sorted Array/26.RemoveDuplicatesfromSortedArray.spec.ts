import {
  removeDuplicates,
  removeDuplicates2,
} from "./26.RemoveDuplicatesfromSortedArray";

describe("Remove Duplicates from Sorted Array", () => {
  it.each([
    { input: [], output: 0, length: 0, equal: [] },
    { input: [1, 1, 2], output: 2, length: 2, equal: [1, 2] },
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      output: 5,
      length: 5,
      equal: [0, 1, 2, 3, 4],
    },
  ])(
    "Should work correct removeDuplicates",
    ({ input, output, length, equal }) => {
      const result = removeDuplicates(input);
      expect(result).toBe(output);
      expect(input.length).toBe(length);
      expect(input).toStrictEqual(equal);
    },
  );

  it.each([
    { input: [], output: 0, length: 0, equal: [] },
    { input: [1, 1, 2], output: 2, length: 2, equal: [1, 2] },
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      output: 5,
      length: 5,
      equal: [0, 1, 2, 3, 4],
    },
  ])(
    "Should work correct removeDuplicates2",
    ({ input, output, length, equal }) => {
      const result = removeDuplicates2(input);
      expect(result).toBe(output);
      expect(input.length).toBe(length);
      expect(input).toStrictEqual(equal);
    },
  );
});
