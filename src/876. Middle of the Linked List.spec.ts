import { ListNode, middleNode } from "./876. Middle of the Linked List";

describe("876. Middle of the Linked List", () => {
  it("middleNode 1", () => {
    const input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const output = new ListNode(3, new ListNode(4, new ListNode(5)));

    const result = middleNode(input);

    expect(result).toEqual(output);
  });

  it("middleNode 2", () => {
    const input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
    const output = new ListNode(4, new ListNode(5, new ListNode(6)));

    const result = middleNode(input);

    expect(result).toEqual(output);
  });
});
