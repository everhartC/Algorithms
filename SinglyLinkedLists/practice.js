// class Node {
//     constructor(value){
//         this.value = value; // data
//         this.next = null; // pointer
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     // a method for adding nodes to the front of our list
//     addFront(value) {
//         // creating new node
//         var newNode = new Node(value);
//         // forming connection from newNode to current head node
//         newNode.next = this.head;
//         // reassigning this SLL's head to newNode
//         this.head = newNode;
//         // returning this, allowing for chaining methods
//         return this
//     }
//     // a method for viewing our list
//     view() {
//         // will have to see all of the nodes...
//         // starting from the beginning of list
//         var currNode = this.head;
        // as long as currNode exists, ir is NOT null
//         while(currNode) {
//             console.log('current nodes value is ${currNode.value}')
//         }
//     }
//     front() {
//         var currNode = this.head;
//         while(currNode) {
//             return currNode.value
//         }
//     }
//     contains(value) {
//         var runner = this.head;
//         while(runner) {
//             if (runner.value === value) {
//                 return true;
//             }
//             runner = runner.next;
//         }
//         return false;
//     }
// }

// var sll = new SLL();
// sll.addFront(4);
// sll.addFront(2);
// // sll.front();
// console.log(sll.contains(4));


/*
SLL { head: Node { value: 2, next: Node { value: 4, next: Null }}}
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
    // a method for adding nodes to the front of our list
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

    view() {
        // will have to see all of the nodes...
        // starting from the beginning of list
        var currNode = this.head;
        // as long as currNode exists, ir is NOT null
        while(currNode) {
            console.log('current nodes value is ${currNode.value}')
        }
    }

    contains(value) {
        var runner = this.head;
        while(runner) {
            if (runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    length() {
    // how many nodes are in this SLL?

        var runner = this.head;
        var nodes = 0;
        while (runner) {
            runner = runner.next;
            nodes++;
        }
        return nodes;
    }

    display() {
    // Neatly display nodes in my list
        var runner = this.head;
        var displayStr = "";

        while(runner) {
            displayStr += runner.value + " ";
            runner = runner.next;
        }
        return displayStr;
    }

    displayFancy() {
        // Neatly display nodes in my list
            var runner = this.head;
            var displayStr = "[";
    
            while(runner) {
                displayStr += runner.value;
                if(runner.next) {
                    displayStr += ",";
                }
                runner = runner.next;
            }
            displayStr += "]";
            return displayStr;
        }

    //* MAX / MIN / AVERAGE
    
    max() {
        // Identifies the largest value in the list
        var runner = this.head;
        var max = runner.value;

        while (runner != null) {
            if (runner.value > max) {
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }

    min() {
        // Identifies the smallest value in the list
        var runner = this.head;
        var min = runner.value;

        while (runner) {
            if (runner.value < min) {
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }

    average() {
        // Identifies the smallest value in the list
        var runner = this.head;
        var sum = 0;

        while (runner) {
            sum += runner.value;
            runner = runner.next;
        }
        return sum/this.length();
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

    get(value) {
        // Search for value in list and get node location
        if(value < 0) {
            return null;
        }
        var runner = this.head;
        
        while (runner) {
            if (runner.value === value) {
                return runner;
            }
            runner = runner.next;
        }
    }

    //* MOVE - Move MIN to front, Move MAX to back
    min2front() {
        // Move min to front of list
        var runner = this.head;
        var minNode = this.get(this.min());
        // console.log("minNode: ", minNode);

        while (runner) {
            if (runner.next === minNode) {
                runner.next = minNode.next;
                minNode.next = this.head;
                this.head = minNode;
            }
            runner = runner.next;
        }
        return this.displayFancy();
    }

    max2back() {
        // Move max to back of list
        var runner = this.head;
        var maxNode = this.get(this.max());
        // console.log("maxNode: ", maxNode);
        while (runner != null) {
            // if (maxNode == this.head) {
            //     this.head = maxNode.next;
            //     runner.next = maxNode;
            //     maxNode.next = null;
            // }
            if (runner.next == null) {
                runner.next = maxNode;
                maxNode.next = null;
            }
            runner = runner.next;
        }
        return this.displayFancy();
    }

}

var sll = new SLL();
sll.addFront(4);
sll.addFront(2);
sll.addFront(3);
// sll.front();
console.log("Length: ", sll.length());
console.log(sll.display());
console.log('List of all Values: ', sll.displayFancy());

console.log(`Max: ${sll.max()}, Min: ${sll.min().value}, Average: ${sll.average()}`);
console.log('Last Value in List: ', sll.back());
console.log('List after Remove Back: ', sll.removeBack());
console.log(`Add Back: 6`, sll.addBack(6));
console.log(`Add Back: 7`, sll.addBack(7));
console.log('List after addBack: ', sll.displayFancy());
// sll.min2front();
// console.log('List after min2front: ', sll.displayFancy());
// console.log("Get(min): ",sll.get(sll.min()));
console.log(`Max: ${sll.max()}, Min: ${sll.min()}`);
// console.log("max2back: ", sll.max2back());
// console.log("Get: ", sll.get(3));
console.log('Min2Front: ', sll.min2front());
sll.addFront(9);
console.log(sll.displayFancy());
console.log("max: ", sll.max());
console.log('Max2Back: ', sll.max2back());
