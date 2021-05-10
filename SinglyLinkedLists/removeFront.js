// - Remove Front
/*
Write a method to remove the head node and return the new list head node. 
If the list is empty, return null.
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

    removeFront(){
        // remove head node
        if(this.head){ // if there IS a head node
            this.head = this.head.next; // make it the next lists head
        }
        return this.head;
    }
}


let sll = new SLL();
sll.addFront(5);
sll.addFront(4);
sll.removeFront();
console.log(sll);