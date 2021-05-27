class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    // add methods here...
    add(value){
        if (this.root === null){ //checking if node actually exists
            this.root = new BTNode(value);
        } else {
            var runner = this.root;
        
            while (runner) {
                if (value === runner.val) { // If equal
                    runner.count++;
                    break;
                // if less than
                } else if (value < runner.val) {
                    if (!runner.left) {
                        runner.left = new BTNode(value);
                        break;
                    } else {
                        runner = runner.left;
                    }
                // If greater than
                } else {
                    if (!runner.right) {
                        runner.right = new BTNode(value);
                        break;
                    } else {
                        runner = runner.right;
                    }
                }
            }
        }
    }
    max(value) {
        if (this.root === null) {
            return null;
        }
        var runner = this.root;
        while (runner.right) {
            runner = runner.right;
        }
        return runner.val;
    }
}

var tree = new BST();
tree.add(3);
// console.log(tree);
tree.add(4);
console.log("Max: ", tree.max());