/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * Example 2:
 *
 * Input: list1 = [], list2 = []
 * Output: []
 * Example 3:
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 *
 * Constraints:
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 * @param list
 */
export const createLinkedList = (list: number[]): ListNode | null => {
  const linkedList = new ListNode();

  let node = linkedList;

  for (let i = 0; i < list.length; i++) {
    node.next = {
      val: list[i],
      next: null,
    };
    node = node.next;
  }

  return linkedList.next;
};

export function mergeTwoListsRecursive(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsRecursive(list1, list2.next);
    return list2;
  }
}

export function mergeTwoListsWhile(
  list1: ListNode | null,
  list2: ListNode | null,
) {
  const head = new ListNode();
  let node = head;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }
    node = node.next;
  }
  node.next = list1 || list2;
  return head.next;
}

console.log(JSON.stringify(createLinkedList([1, 2, 3, 4])));
