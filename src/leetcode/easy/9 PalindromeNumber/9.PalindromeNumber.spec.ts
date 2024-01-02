import { isPalindrome, isPalindromeWithoutConvert } from "./9.PalindromeNumber";

describe("9. Palindrome Number", function () {
  it("should return true if input data x = 121", function () {
    const res = isPalindrome(121);
    const res2 = isPalindromeWithoutConvert(121);

    expect(res).toBeTruthy();
    expect(res2).toBeTruthy();
  });
  it("should return false if input data x = -121", function () {
    const res = isPalindrome(-121);
    const res2 = isPalindromeWithoutConvert(-121);

    expect(res).toBeFalsy();
    expect(res2).toBeFalsy();
  });
  it("should return false if input data ", function () {
    const res = isPalindrome(10);
    const res2 = isPalindromeWithoutConvert(10);

    expect(res).toBeFalsy();
    expect(res2).toBeFalsy();
  });
});
