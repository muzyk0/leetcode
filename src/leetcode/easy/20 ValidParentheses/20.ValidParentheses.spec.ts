import { isValid } from "./20.ValidParentheses";

describe("20. Valid Parentheses", function () {
  it('should return true if input data s = "()"', function () {
    const res = isValid("()");

    expect(res).toBeTruthy();
  });
  it('should return true if input data s = "()[]{}"', function () {
    const res = isValid("()[]{}");

    expect(res).toBeTruthy();
  });
  it('should return false if input data s = "(]"', function () {
    const res = isValid("(]");

    expect(res).toBeFalsy();
  });
  it('should return false if input data s = "{[]}"', function () {
    const res = isValid("{[]}");

    expect(res).toBeTruthy();
  });
});
