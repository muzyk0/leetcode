import {
  getConcatenation,
  getConcatenation2,
} from "./1929.ConcatenationOfArray";

describe("1929. Concatenation of Array", function () {
  it("should return [1,2,1,1,2,1] if input data nums = [1,2,1]", function () {
    const res = getConcatenation([1, 2, 1]);
    const res2 = getConcatenation2([1, 2, 1]);

    expect(res).toStrictEqual([1, 2, 1, 1, 2, 1]);
    expect(res2).toStrictEqual([1, 2, 1, 1, 2, 1]);
  });
  it("should return [1,3,2,1,1,3,2,1] if input data nums = [1,3,2,1]", function () {
    const res = getConcatenation([1, 3, 2, 1]);
    const res2 = getConcatenation2([1, 3, 2, 1]);

    expect(res).toStrictEqual([1, 3, 2, 1, 1, 3, 2, 1]);
    expect(res2).toStrictEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
