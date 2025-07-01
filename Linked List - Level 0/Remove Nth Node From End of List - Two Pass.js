// Leetcode link -> https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {

    let sentinel = new ListNode();
    sentinel.next = head;

    let length = 0;

    while (head) {
        head = head.next;
        length++;
    }

    let prevPosition = length - n;

    let prev = sentinel;

    for (let i = 0; i < prevPosition; i++) {
        prev = prev.next;
    }

    prev.next = prev.next.next;

    return sentinel.next;

};