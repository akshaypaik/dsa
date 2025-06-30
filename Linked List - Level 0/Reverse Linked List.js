/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLinkedList(head) {

    let curr = head;
    let prev = null;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
}