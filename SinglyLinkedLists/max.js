// - Max
// Create method max() to return list’s largest val.

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

    max() {
        var max = this.head.value;
        var runner = this.head;

        while (runner){
            if(max < runner.value){
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }
}

let sll = new SLL();
sll.addFront(3);
sll.addFront(5);

console.log(sll.max());
