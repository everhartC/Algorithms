// - Contains
/*
Add a method contains(value) to your SLL class, which is given a value as a parameter.  
Return a boolean (true/false); true, if the list possesses a node 
that contains the provided value.
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

    removeFront() {
        // remove head node
        if(this.head){ // if there IS a head node
            this.head = this.head.next; // make it the next lists head
        }
        return this.head;
    }

    front() {
        // Write a method to return the value (not the node) at the head of the list. 
        // If the list is empty, return null.
        if(this.head) {
            return this.head.value;
        }
        return null;
    }
    
    // Add a method contains(value) to your SLL class, which is given a value as a parameter.  
    // Return a boolean (true/false); 
    // true, if the list possesses a node that contains the provided value.
    contains(value) {
        var temp = this.head;
        while(temp) {
            if (temp.value == value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    
}

let sll = new SLL();
sll.addFront(5);
sll.addFront(15);
sll.addFront(25);
sll.addFront(35);
console.log(sll.contains(9));
console.log(sll.contains(15));


