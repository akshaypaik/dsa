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

    let slow = sentinel;
    let fast = sentinel;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    let prev = slow;

    prev.next = prev.next.next;

    return sentinel.next;

};