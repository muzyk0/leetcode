import {
  createLinkedList,
  ListNode,
  mergeTwoListsRecursive,
  mergeTwoListsWhile,
} from "./21.MergeTwoSortedLists";

describe("21. Merge Two Sorted Lists", function () {
  it("linedList create3d currently", function () {
    const res = new ListNode(10, { val: 15, next: null });

    const reqEqual = {
      val: 10,
      next: {
        val: 15,
        next: null,
      },
    };
    expect(res.val).toBe(reqEqual.val);
    expect(res.next?.val).toBe(reqEqual.next.val);
    expect(res.next?.next).toBeNull();
  });

  it("createLinkedList work currently", function () {
    const res = createLinkedList([1, 1, 2, 3, 4, 4]);
    const res2 = createLinkedList([0]);

    expect(res).toStrictEqual({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null,
              },
            },
          },
        },
      },
    });
    expect(res2).toStrictEqual({
      next: null,
      val: 0,
    });
  });

  it("should return [1,1,2,3,4,4] if input data list1 = [1,2,4], list2 = [1,3,4]", function () {
    const res = mergeTwoListsRecursive(
      createLinkedList([1, 2, 4]),
      createLinkedList([1, 3, 4]),
    );
    const res2 = mergeTwoListsWhile(
      createLinkedList([1, 2, 4]),
      createLinkedList([1, 3, 4]),
    );

    expect(res).toStrictEqual(createLinkedList([1, 1, 2, 3, 4, 4]));
    expect(res2).toStrictEqual(createLinkedList([1, 1, 2, 3, 4, 4]));
  });
  it("should return [] if input data list1 = [], list2 = []", function () {
    const res = mergeTwoListsRecursive(
      createLinkedList([]),
      createLinkedList([]),
    );
    const res2 = mergeTwoListsWhile(createLinkedList([]), createLinkedList([]));

    expect(res).toStrictEqual(createLinkedList([]));
    expect(res2).toStrictEqual(createLinkedList([]));
  });

  it("should return [0] if input data list1 = [], list2 = [0]", function () {
    const res = mergeTwoListsRecursive(
      createLinkedList([]),
      createLinkedList([0]),
    );
    const res2 = mergeTwoListsWhile(
      createLinkedList([]),
      createLinkedList([0]),
    );

    expect(res).toStrictEqual(createLinkedList([0]));
    expect(res2).toStrictEqual(createLinkedList([0]));
  });
});
