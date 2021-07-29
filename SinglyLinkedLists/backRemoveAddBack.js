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
        // creating new node
        var newNode = new Node(value);
        // forming connection from newNode to current head node
        newNode.next = this.head;
        // reassigning this SLL's head to newNode
        this.head = newNode;
        // returning this, allowing for chaining methods
        return this;
    }
    //* BACK / REMOVE / ADD
    back() {
        // Returns the last value in SLL
        var runner = this.head;
        while (runner) {
            if ( runner.next == null) {
                return runner.value;
            }
            runner = runner.next;
        }
    }

    removeBack() {
        // Removes the last value in SLL and returns new list
        var runner = this.head;
        var displayStr = "[";

        while (runner) {
            displayStr += runner.value;
            if ( runner.next.next == null) {
                runner.next = null;
            }
            if (runner.next) {
                displayStr += ",";
            }
            runner = runner.next;
        }
        displayStr += "]";
        return displayStr;
    }

    addBack(value) {
        // Create a node containing value, add it to back of list
        var newNode = new Node(value);
        var runner = this.head;

        while (runner) {
            if (runner.next == null) {
                runner.next = newNode;
                newNode.next = null;
            }
            runner = runner.next;
        }
    }
}
var sll = new SLL();
sll.addFront(4);
sll.addFront(2);
sll.addFront(3);
console.log(`Add Back: 6`, sll.addBack(6));
console.log(`Add Back: 7`, sll.addBack(7));