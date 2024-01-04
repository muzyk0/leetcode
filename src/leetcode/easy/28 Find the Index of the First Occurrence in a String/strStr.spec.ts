import { removeElement } from "./strStr";

describe("Remove Duplicates from Sorted Array", () => {
  const sortForStrictEqual = (array1: number[], array2: number[]) => [
    array1.sort((a, b) => a - b),
    array2.sort((a, b) => a - b),
  ];

  it("should work correctly with input nums = [3,2,2,3], val = 3", () => {
    const input = [3, 2, 2, 3];
    const result = removeElement(input, 3);
    console.log(input);

    expect(result).toBe(2);
    expect(input.length).toBe(2);
    const [array1, array2] = sortForStrictEqual(input, [2, 2]);
    expect(array1).toStrictEqual(array2);
  });

  it("should work correctly with input nums = [0,1,2,2,3,0,4,2], val = 2", () => {
    const input = [0, 1, 2, 2, 3, 0, 4, 2];
    const result = removeElement(input, 2);
    console.log(input);

    expect(result).toBe(5);
    expect(input.length).toBe(5);
    const [array1, array2] = sortForStrictEqual(input, [0, 1, 4, 0, 3]);
    expect(array1).toStrictEqual(array2);
  });

  it("should work correctly with input nums = [2,2,3], val = 2", () => {
    const input = [2, 2, 3];
    const result = removeElement(input, 2);

    console.log(input);

    expect(result).toBe(1);
    expect(input.length).toBe(1);
    const [array1, array2] = sortForStrictEqual(input, [3]);
    expect(array1).toStrictEqual(array2);
  });
});
