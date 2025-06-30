// Leetcode link -> https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Converting linked list to array and then checking palindrome
// const isPalindrome = function (head) {

//     const arr = [];

//     let curr = head;

//     while (curr) {
//         arr.push(curr.val);
//         curr = curr.next;
//         if (curr === null) {
//             break;
//         }
//     }

//     console.log(arr);

//     let x = arr.length - 1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] != arr[x]){
//             return false;
//         }
//         --x;
//     }

//     return true;

// };


const isPalindrome = function (head) {

    // Find the middle element
    let slow = head;
    let fast = head;


    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let middle = slow;

    // Reverse the second half of the list
    let prev = null;
    let curr = middle;


    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Check for palindrome
    let firstList = head;
    let secondList = prev;

    while (secondList) {
        if (firstList.val != secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next
    }

    return true;

}