class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// same like above class Node
// function Node(val) {
//     this.val = val;
//     this.next = null;
// }

class myLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index) {

    }

    addAtHead(val) {

    }

    addAtTail(val) {

    }

    addToIndex(index, val) {

    }

    deleteAtIndex(index) {

    }


}

let newNode = new Node(5);
let newNode2 = new Node(6);
newNode.next = newNode2;

console.log(newNode);
