import { twoSum } from "./1.TwoSum";

describe("1. Two Sum", function () {
  it("should return [0,1] if input data nums = [2,7,11,15], target = 9", function () {
    const res = twoSum([2, 7, 11, 15], 9);

    expect(res).toStrictEqual([0, 1]);
  });
  it("should return [1,2] if input data nums = [3,2,4], target = 6", function () {
    const res = twoSum([3, 2, 4], 6);

    expect(res).toStrictEqual([1, 2]);
  });
  it("should return [0,1] if input data nums = [3,3], target = 6", function () {
    const res = twoSum([3, 3], 6);

    expect(res).toStrictEqual([0, 1]);
  });

  it("should return [1,3] if input data nums = [1,2,3,4], target = 6", function () {
    const res = twoSum([1, 2, 3, 4], 6);

    expect(res).toStrictEqual([1, 3]);
  });
});
