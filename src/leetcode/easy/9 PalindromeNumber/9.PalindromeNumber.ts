/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * Given an integer x, return true if x is a
 * palindrome
 * , and false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 *
 * Constraints:
 *
 * -231 <= x <= 231 - 1
 *
 *
 * Follow up: Could you solve it without converting the integer to a string?
 * @param x
 */
export function isPalindrome(x: number): boolean {
    return String(x).split('').reverse().join('') === String(x)
}


export const isPalindromeWithoutConvert  = function (x: number) {
    let reverse = 0; // set to zero
    let copy = x; // copy the input eg. 1141

    while (copy > 0) { // while our copy is positive (negative numbers cannot be palindromes)
        const digit = copy % 10; //  i=1 ==> 1141 % 10 = 1 |i=2 ==> 114 % 10 = 4 | i=3 ==> 11 % 10 = 1| i=4  ==> 1 % 10 = 1
        reverse = reverse * 10 + digit; //  i=1 ==> 0 * 10 + 1 =1| i=2 ==> 1 * 10 + 4 = 14| i=3 ==> 14 * 10 + 1 = 141 | i=4 ==> 141 * 10 + 1 = 1411
        copy = ~~(copy / 10); //Math.floor(copy / 10) |/|/ i=1 ==>  1141 / 10 (rounded down) = 114 |i=2  ==> 114/10 = 11| i=3 ==> 11/10  = 1| i=4 ==> 1/10 = 0 - break while loop
    }

    return reverse == x; // is 1411 == 1141? ==> false
};