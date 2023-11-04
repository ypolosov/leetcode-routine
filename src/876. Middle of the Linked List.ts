
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function middleNode(head: ListNode | null): ListNode | null {
    if (!head) { return null; }

    let length = 0;
    let current = head;
    while (current.next) {
        length++;
        current = current.next;
    }
    let middle = (length & 1) === 1 ? (length + 1) >> 1 : length >> 1;
    current = head;
    while (current.next && middle) {
        current = current.next;
        middle--;
    }
    return current;
};