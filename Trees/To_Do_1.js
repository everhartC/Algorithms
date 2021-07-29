class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        var newNode = new BTNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let runner = this.root;

        while (runner) {
            if (value === runner.value) return undefined;

            if (value < runner.value) {
                if (runner.left === null) {
                    runner.left = newNode;
                    return this;
                }
                runner = runner.left;
            } else {
                if (runner.right === null) {
                    runner.right = newNode;
                    return this;
                }
                runner = runner.right;
            }
        }
    }


}

var bst = new BST();
console.log(bst.add(12));
console.log(bst.add(103));
console.log(bst.add(31));
console.log(bst.add(29));
console.log(bst.add(76));
console.log(bst.add(89));
// console.log(bst);