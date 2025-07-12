// Stack

let stack = [];

// add elements to stack - push
stack.push(1);
stack.push(2);
stack.push(3);

console.log("stack: ", stack);

// Last element of stack
console.log("Last element of stack: ", stack[stack.length-1]);

// remove element from stack - pop
// stack.pop();
console.log(stack.pop());

console.log("stack: ", stack);


// Queue 

let queue = [];

// add elements to queue - enqueue
queue.push(1);
queue.push(2);
queue.push(3);

console.log("queue: ", queue);

// First element of queue
console.log("First element of queue: ", queue[0]);

// remove element from queue - dequeue
// queue.shift();
console.log(queue.shift());

console.log("queue: ", queue);

