import { twoSum } from './1.TwoSum';
import {isPalindrome} from "./9.PalindromeNumber";

describe('9. Palindrome Number', function () {
    it('should return true if input data x = 121', function () {
        const res = isPalindrome(121);

        expect(res).toBeTruthy();
    });
    it('should return false if input data x = -121', function () {
        const res = isPalindrome(-121);

        expect(res).toBeFalsy()
    });
    it('should return false if input data ', function () {
        const res = isPalindrome(10);

        expect(res).toBeFalsy();
    });
});
