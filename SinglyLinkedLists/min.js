// - Min
// Create method min() to return list’s smallest val.

class Node {
    constructor(value){
        this.value = value; // data
        this.next = null; // pointer
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    min() {
        var min = this.head.value;
        var runner = this.head;

        while (runner){
            if(min > runner.value){
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
}

let sll = new SLL();
sll.addFront(3);
sll.addFront(5);

console.log(sll.min());