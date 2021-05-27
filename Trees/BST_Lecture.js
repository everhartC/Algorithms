class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        var newNode = new BSTNode(val);
        // If tree is empty...
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        // There is at least one node in the tree at this point
        var runner = this.root; // Runner will point to the current node you're looking at
        while (runner !== null) {
            // Go left
            if (val < runner.value) {
                if (runner.left === null) { // if no node's to the left, insert here
                    runner.left = newNode;
                    return this;
                } else { // node exists to the left so move down 
                    runner = runner.left;
                }
            } else {// Go right
                if (runner.right === null) {
                    runner.right = newNode;
                    return this;
                } else {
                    runner = runner.right;
                }
            }
        }
    }
}

class DLNode {
    constructor(value) {
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}
class BSTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}