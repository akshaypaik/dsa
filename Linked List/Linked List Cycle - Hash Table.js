/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {

    let curr = head;
    let elmSet = new Set();

    if (size === 1) {
        return false;
    }

    while (curr) {
        // do not check only the node value like elmSet.add(curr.val)
        if (elmSet.has(curr)) {
            return true;
        } else {
            // stores the node reference. do not check only the node value like elmSet.add(curr.val);
            elmSet.add(curr);
            curr = curr.next;
        }
    }

    return false;

};