// - Length
/*
Create a new SLL method length() that returns number of nodes in that list.
*/

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

    addNode(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    length() {
        // return # of nodes in the list
        var runner = this.head; // initialize runner
        var count = 0;  // getting ready to count

        // Loop until end of SLL is reached
        while (runner){
            count ++; // will add until runner.next is null
            runner = runner.next; // points the runner to the subsequent node
        }
        return count
    }
    
    
}

let sll = new SLL();
sll.addNode(19);
sll.addNode(26);
console.log(sll.length()); // should output 2