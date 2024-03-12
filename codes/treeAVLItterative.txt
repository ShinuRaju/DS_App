console.log("================AVL tree itterative approach");

class Node {
    constructor(item) {
        this.item = item;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    #root;
    constructor() {
        this.#root = null;
    }

    // Helper function to get height of the node
    getHeight(node) {
        if (node === null) return 0;
        else return node.height;
    }

    // Helper function to get balance factor of the node
    getBalanceFactor(node) {
        if (node === null) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Rotate right subtree rooted with y
    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return new root
        return x;
    }

    // Rotate left subtree rooted with x
    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return new root
        return y;
    }

    // Iterative in-order traversal
    printInOrder() {
        if (this.root === null) {
            console.log("Tree is empty");
            return;
        }

        let stack = [];
        let current = this.root;

        while (current !== null || stack.length > 0) {
            // Reach the leftmost node of current node
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            // Current is null, pop a node and print it
            current = stack.pop();
            console.log(current.value);

            // Move to the right subtree
            current = current.right;
        }
    }

    // Get the minimum value node in a subtree rooted with given node
    getMinValueNode(node) {
        let current = node;
        while (current.left !== null)
            current = current.left;
        return current;
    }

    // Insert a new node with given value itteratively
    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        let parent = null;

        while (currentNode) {
            parent = currentNode;

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        if (value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        this.root = this._insertBalance(this.root, newNode);
    }

    // Helper function to insert and balance the tree iteratively
    _insertBalance(root, newNode) {
        let stack = [];
        let current = root;

        // Traverse the tree to find the insertion point
        while (current) {
            stack.push(current);

            if (newNode.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        // Insert the new node
        let parent = stack.pop();
        if (!parent) {
            root = newNode;
        } else if (newNode.value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        // Balance the tree
        while (stack.length > 0) {
            current = stack.pop();
            current.height = 1 + Math.max(this.getHeight(current.left), this.getHeight(current.right));
            let balance = this.getBalanceFactor(current);

            // Perform rotations if necessary
            if (balance > 1 && newNode.value < current.left.value) {
                current = this.rotateRight(current);
            } else if (balance < -1 && newNode.value > current.right.value) {
                current = this.rotateLeft(current);
            } else if (balance > 1 && newNode.value > current.left.value) {
                current.left = this.rotateLeft(current.left);
                current = this.rotateRight(current);
            } else if (balance < -1 && newNode.value < current.right.value) {
                current.right = this.rotateRight(current.right);
                current = this.rotateLeft(current);
            }

            // Update the parent node
            if (stack.length > 0) {
                parent = stack[stack.length - 1];
                if (current.value < parent.value) {
                    parent.left = current;
                } else {
                    parent.right = current;
                }
            } else {
                root = current;
            }
        }

        return root;
    }

    // Delete a node with given value
    delete(value) {
        let stack = [];
        let current = this.root;
        let parent = null;

        // Find the node to delete and track the traversal path
        while (current !== null && current.value !== value) {
            stack.push(current);
            parent = current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        // Node not found
        if (current === null) return;

        // Case 1: Node to delete has no children
        if (current.left === null && current.right === null) {
            if (parent === null) {
                this.root = null; // Deleting the root node
            } else if (current === parent.left) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }

        // Case 2: Node to delete has one child
        else if (current.left === null || current.right === null) {
            let child = (current.left !== null) ? current.left : current.right;
            if (parent === null) {
                this.root = child; // Deleting the root node
            } else if (current === parent.left) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        }

        // Case 3: Node to delete has two children
        else {
            let successor = this.getMinValueNode(current.right);
            let successorValue = successor.value;
            this.delete(successorValue); // Recursively delete the successor
            current.value = successorValue;
        }

        // Rebalance the tree
        while (stack.length > 0) {
            current = stack.pop();
            current.height = 1 + Math.max(this.getHeight(current.left), this.getHeight(current.right));
            let balance = this.getBalanceFactor(current);

            // Perform rotations if necessary
            if (balance > 1 && this.getBalanceFactor(current.left) >= 0) {
                current = this.rotateRight(current);
            } else if (balance > 1 && this.getBalanceFactor(current.left) < 0) {
                current.left = this.rotateLeft(current.left);
                current = this.rotateRight(current);
            } else if (balance < -1 && this.getBalanceFactor(current.right) <= 0) {
                current = this.rotateLeft(current);
            } else if (balance < -1 && this.getBalanceFactor(current.right) > 0) {
                current.right = this.rotateRight(current.right);
                current = this.rotateLeft(current);
            }

            // Update the parent node
            if (stack.length > 0) {
                parent = stack[stack.length - 1];
                if (current.value < parent.value) {
                    parent.left = current;
                } else {
                    parent.right = current;
                }
            } else {
                this.root = current;
            }
        }
    }

}

