/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function findMiddleLinkedList(head) {

    // slow and fast pointer approach
    let slow = head;
    let fast = head;

    while (fast && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;

}