// Leetcode link -> https://leetcode.com/problems/add-two-numbers/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1, l2) {

    let sum = 0;
    let carry = 0;
    let digit = 0;
    let result = new ListNode(0);
    let current = result;

    while (l1 || l2 || carry) {

        const l1Val = l1?.val ? l1.val : 0;
        const l2Val = l2?.val ? l2.val : 0;

        sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);
        digit = sum % 10;

        current.next = new ListNode(digit);

        l1 = l1 ? l1.next : 0;
        l2 = l2 ? l2.next : 0;
        current = current.next;

    }

    return result.next;

}

