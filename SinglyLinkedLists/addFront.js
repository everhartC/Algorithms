// - Add Front
/*
Write a method that accepts a value and create a new node, 
assign it to the list head, and return a pointer to the new head node.
*/
class Node {
    constructor(value){
        this.value = value; // data
        this.next = null; // pointer
    }
}

class SLL {
    constructor(head = null) {
        this.head = head;
    }

    addFront(value){
        //Write a method that accepts a value and create a new node
        //assign it to the list head, and return a pointer to the new head node

        //create new node
        var newNode = new Node(value);

        // attach new node to existing SLL
        newNode.next = this.head;

        // reassign SLL head
        this.head = newNode;

        // return the head
        return this.head;
    }
}


let sll = new SLL();
sll.addFront(2);
console.log(sll);

