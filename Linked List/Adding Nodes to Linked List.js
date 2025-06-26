function Node(val) {
    this.val = val;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

MyLinkedList.prototype.addAtTail = function (val) {

    let newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;

}

MyLinkedList.prototype.addAtIndex = function (index, val) {

    let curr = this.head;
    let count = 0;

    let newNode = new Node(val);

    if (index === 0) {
        this.addAtHead(val);
        return;
    }else if(index === this.size){
        this.addAtTail(val);
        return;
    }

    while (curr.next != null) {

        if (count === index - 1) {
            newNode.next = curr.next;
            curr.next = newNode;
            this.size++;
        }

        curr = curr.next;
        count++;

    }

}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(6);
myLinkedList.addAtHead(4);
myLinkedList.addAtTail(7);
myLinkedList.addAtIndex(0, 5);
myLinkedList.addAtTail(8);

console.log(myLinkedList);


