// Leetcode link -> https://leetcode.com/problems/swap-nodes-in-pairs/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {

    if (!head || !head.next) return head;

    let sentinal = new ListNode();
    sentinal.next = head;
    let p = sentinal;
    let c = head;
    let n = head.next;

    while (c && c.next) {

        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next;

    }

    return sentinal.next;

};