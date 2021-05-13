// - Average
// Create method average() to return list’s average val.

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

    average(){
        var sum = 0;
        var count = 0;
        var runner = this.head;
        while(runner){
            count++;
            sum += runner.value;
            runner = runner.next;
        }
        var avg = sum / count;
        return avg;
    }
}

let sll = new SLL();
sll.addFront(3);
sll.addFront(5);
sll.addFront(9);
sll.addFront(10);

console.log(sll.average());