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

console.log(sll.max());
