import {removeDuplicates} from "./26.RemoveDuplicatesfromSortedArray";

describe('Remove Duplicates from Sorted Array', () => {

    it.each([
        {input: [], output: 0, length: 0, equal: []},
        {input: [1, 1, 2], output: 2, length: 2, equal: [1, 2]},
        {input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], output: 5, length: 5, equal: [0, 1, 2, 3, 4]},
    ])('Should work correct', ({input, output, length, equal}) => {
        const result = removeDuplicates(input)
        expect(result).toBe(output)
        expect(input.length).toBe(length)
        expect(input).toStrictEqual(equal)
    })

    it('should remove duplicates in input array [] and output 0', () => {
        const arr: number[] = [];
        const result = removeDuplicates(arr)

        expect(result).toBe(0)
        expect(arr.length).toBe(0)
        expect(arr).toStrictEqual([])
    })


    it('should remove duplicates in input array [1,1,2] and output 2', () => {
        const arr = [1, 1, 2];
        const result = removeDuplicates(arr)

        expect(result).toBe(2)
        expect(arr.length).toBe(2)
        expect(arr).toStrictEqual([1, 2])
    })


    it('should remove duplicates in input array [0,0,1,1,1,2,2,3,3,4] and output 5', () => {
        const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

        const result = removeDuplicates(arr)

        expect(result).toBe(5)
        expect(arr.length).toBe(5)
        expect(arr).toStrictEqual([0, 1, 2, 3, 4])
    })
});