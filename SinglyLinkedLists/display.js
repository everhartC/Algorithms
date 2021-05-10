// - Display
/*
Create display() that returns a string containing all list values
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

    display() {
        var runner = this.head;
        var listValues = [];

        while(runner.next) { // run loop as long as runner has next value and isn't null
            // listValues += String(runner.value);
            listValues.push(String(runner.value));
            runner = runner.next;
        }
        listValues.push(String(runner.value)); // to get the value of the last node
        // console.log(listValues);
        return listValues;
    }
    
    
}

let sll = new SLL();
sll.addNode(19);
sll.addNode(26);
console.log(sll.display()); // should output 2