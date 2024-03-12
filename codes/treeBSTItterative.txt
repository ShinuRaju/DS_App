console.log("================Binary Search Tree");

class BSTNode {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.value = data;
    }
}

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    get root() {
        return this.#root;
    }

    // Insert a node iteratively
    insertIteratively(data) {
        const newNode = new BSTNode(data);
        if (this.#root === null) {
            this.#root = newNode;
            return `${data} added to the tree`;
        }
        let current = this.#root;
        while (true) {
            if (newNode.value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return `${data} added to the tree`;
                }
                current = current.left;
            } else if (newNode.value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return `${data} added to the tree`;
                }
                current = current.right;
            } else {
                return "Data already present";
            }
        }
    }

    // Delete a node with given value
    delete(data) {
        let current = this.#root;
        let parent = null;
        while (current !== null && current.value !== data) {
            parent = current;
            if (data < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        if (current === null) return;

        if (current.left === null && current.right === null) {
            if (parent === null) {
                this.#root = null;
            } else if (current === parent.left) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else if (current.left === null || current.right === null) {
            const child = current.left !== null ? current.left : current.right;
            if (parent === null) {
                this.#root = child;
            } else if (current === parent.left) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        } else {
            let successor = current.right;
            while (successor.left !== null) {
                successor = successor.left;
            }
            current.value = successor.value;
            this.delete(successor.value);
        }
    }

    // Print tree using one queue
    printTree1() {
        console.log("---- Printing the tree using one queue ----");
        if (this.#root === null) return "No elements in the tree";
        const queue = [this.#root, "N"]; // "N" refers to null pointer
        let str = "";
        while (queue.length > 0) {
            const el = queue.shift();
            if (el === "N") {
                console.log(str);
                str = "";
                if (queue.length === 0) return;
                queue.push("N");
                continue;
            }
            str = str + el?.value + "\t";
            if (el?.left) queue.push(el.left);
            if (el?.right) queue.push(el.right);
        }
    }

    // Print tree using two queues
    printTree2() {
        console.log("---- Printing the tree using two queues ----");
        if (this.#root === null) return "No elements in the tree";
        const q1 = [];
        const q2 = [];
        let curr = this.#root;
        q1.push(curr);
        let str = "";
        while (q1.length > 0 || q2.length > 0) {
            while (q1.length > 0) {
                const el = q1.shift();
                str = str + el?.value + "\t";
                if (el?.left) q2.push(el.left);
                if (el?.right) q2.push(el.right);
            }
            console.log(str);
            str = "";
            while (q2.length > 0) {
                const el = q2.shift();
                str = str + el?.value + "\t";
                if (el?.left) q1.push(el.left);
                if (el?.right) q1.push(el.right);
            }
            console.log(str);
            str = "";
        }
    }

    // Search for a value iteratively
    searchIteratively(data) {
        let curr = this.#root;
        while (curr !== null) {
            if (curr.value === data) return true;
            else if (data < curr.value) curr = curr.left;
            else if (data > curr.value) curr = curr.right;
        }
        return false;
    }

    // Preorder traversal (iterative)
    preOrderIteratively() {
        if (this.#root === null) return "No elements in the tree";
        const stack = [];
        const result = [];
        stack.push(this.#root);
        while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.value);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        return result;
    }

    // Inorder traversal (iterative)
    inOrderIterative() {
        if (this.#root === null) {
            return [];
        }

        const stack = [];
        const result = [];
        let current = this.#root;

        while (stack.length > 0 || current !== null) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.value);
            current = current.right;
        }

        return result;
    }

    // Postorder traversal (iterative)
    postOrderIterative() {
        if (this.#root === null) {
            return [];
        }

        const stack = [this.#root];
        const result = [];

        while (stack.length > 0) {
            const current = stack.pop();
            result.unshift(current.value);

            if (current.left !== null) {
                stack.push(current.left);
            }
            if (current.right !== null) {
                stack.push(current.right);
            }
        }

        return result;
    }

    // Levelorder traversal (iterative)
    levelOrderIterative() {
        if (this.#root === null) {
            return [];
        }

        const queue = [this.#root];
        const result = [];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        return result;
    }

    // Find the minimum value in the BST (iterative)
    findMinIterative() {
        if (this.#root === null) {
            return null;
        }

        let current = this.#root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    // Find the maximum value in the BST (iterative)
    findMaxIterative() {
        if (this.#root === null) {
            return null;
        }

        let current = this.#root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

    // Check if the BST is balanced using iterative approach
    isBalanced() {
        if (this.#root === null) {
            return true;
        }

        const queue = [this.#root];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            const leftHeight = this.height(currentNode.left);
            const rightHeight = this.height(currentNode.right);

            // Check if the height difference of left and right subtrees is within 1
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return false;
            }

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        return true;
    }

    // Calculate the height of a subtree iteratively
    height(node) {
        if (node === null) {
            return 0;
        }

        let level = 0;
        const queue = [node];

        while (queue.length > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                const currentNode = queue.shift();

                if (currentNode.left !== null) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right);
                }
            }

            level++;
        }

        return level;
    }
}

let bst = new BST();
[8, 3, 10, 1, 6, 14].forEach((e) => console.log(bst.insertIteratively(e)));
bst.printTree1();
bst.printTree2();
console.log("preOrderRecr " + bst.preOrderIteratively().join(",")); //47,21,18,12,27,34,43,76,52,54,57,66,82,77,98
console.log("inOrderRecr " + bst.inOrderIterative().join(",")); //12,18,21,27,34,43,47,52,54,57,66,76,77,82,98
console.log("postOrderRecr " + bst.postOrderIterative().join(",")); //12,18,43,34,27,21,66,57,54,52,77,98,82,76,47
console.log("levelOrderIttr " + bst.levelOrderIterative().join(",")); //47,21,76,18,27,52,82,12,34,54,77,98,43,57,66
console.log("findMinItrr " + bst.findMinIterative());
console.log("findMaxItrr " + bst.findMaxIterative());
console.log("balanceRecr " + bst.isBalanced());
