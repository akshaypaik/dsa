// Leetcode link -> https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {

    let currA = headA;
    let lookupA = new Set();
    while (currA) {
        lookupA.add(currA);
        currA = currA.next;
    }

    let currB = headB;
    while (currB) {
        if (lookupA.has(currB)) {
            return currB;
        }
        currB = currB.next;
    }

    return null;

}