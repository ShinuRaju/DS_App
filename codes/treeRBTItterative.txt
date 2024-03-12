class RBNode {
    constructor(data, color) {
        this.data = data;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
        this.BLACK = 'black';
        this.RED = 'red';
    }

    insert(data) {
        const newNode = new RBNode(data, this.RED);
        if (this.root === null) {
            this.root = newNode;
            this.root.color = this.BLACK; // Root must always be black
            return;
        }

        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    newNode.parent = current;
                    break;
                } else {
                    current = current.left;
                }
            } else if (data > current.data) {
                if (current.right === null) {
                    current.right = newNode;
                    newNode.parent = current;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                // Duplicate values are not allowed
                return;
            }
        }

        this.fixInsertion(newNode);
    }

    fixInsertion(node) {
        while (node !== this.root && node.parent.color === this.RED) {
            if (node.parent === node.parent.parent.left) {
                const uncle = node.parent.parent.right;
                if (uncle && uncle.color === this.RED) {
                    node.parent.color = this.BLACK;
                    uncle.color = this.BLACK;
                    node.parent.parent.color = this.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = this.BLACK;
                    node.parent.parent.color = this.RED;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent.left;
                if (uncle && uncle.color === this.RED) {
                    node.parent.color = this.BLACK;
                    uncle.color = this.BLACK;
                    node.parent.parent.color = this.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = this.BLACK;
                    node.parent.parent.color = this.RED;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root.color = this.BLACK;
    }

    delete(data) {
        let current = this.root;

        while (current) {
            if (current.data === data) {
                this.removeNode(current);
                return true;
            } else if (current.data < data) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        return false;
    }

    removeNode(node) {
        // Remove the node based on the cases (similar to BST delete)

        // Case 1: Node has no children
        if (!node.left && !node.right) {
            if (node.parent) {
                if (node.parent.left === node) {
                    node.parent.left = null;
                } else {
                    node.parent.right = null;
                }
            } else {
                this.root = null;
            }
            return;
        }

        // Case 2: Node has one child
        let child = node.left ? node.left : node.right;
        if (!node.parent) {
            this.root = child;
        } else {
            if (node.parent.left === node) {
                node.parent.left = child;
            } else {
                node.parent.right = child;
            }
            child.parent = node.parent;
        }

        // Case 3: Node has two children
        if (node.left && node.right) {
            let successor = this.successor(node.data);
            node.data = successor.data;
            this.removeNode(successor);
        }
    }

    fix(node) {
        // Perform Red-Black Tree fix operations after deletion
        while (node !== this.root && node.color === this.BLACK) {
            if (node === node.parent.left) {
                let sibling = node.parent.right;
                if (sibling.color === this.RED) {
                    sibling.color = this.BLACK;
                    node.parent.color = this.RED;
                    this.rotateLeft(node.parent);
                    sibling = node.parent.right;
                }
                if (sibling.left.color === this.BLACK && sibling.right.color === this.BLACK) {
                    sibling.color = this.RED;
                    node = node.parent;
                } else {
                    if (sibling.right.color === this.BLACK) {
                        sibling.left.color = this.BLACK;
                        sibling.color = this.RED;
                        this.rotateRight(sibling);
                        sibling = node.parent.right;
                    }
                    sibling.color = node.parent.color;
                    node.parent.color = this.BLACK;
                    sibling.right.color = this.BLACK;
                    this.rotateLeft(node.parent);
                    node = this.root;
                }
            } else {
                let sibling = node.parent.left;
                if (sibling.color === this.RED) {
                    sibling.color = this.BLACK;
                    node.parent.color = this.RED;
                    this.rotateRight(node.parent);
                    sibling = node.parent.left;
                }
                if (sibling.right.color === this.BLACK && sibling.left.color === this.BLACK) {
                    sibling.color = this.RED;
                    node = node.parent;
                } else {
                    if (sibling.left.color === this.BLACK) {
                        sibling.right.color = this.BLACK;
                        sibling.color = this.RED;
                        this.rotateLeft(sibling);
                        sibling = node.parent.left;
                    }
                    sibling.color = node.parent.color;
                    node.parent.color = this.BLACK;
                    sibling.left.color = this.BLACK;
                    this.rotateRight(node.parent);
                    node = this.root;
                }
            }
        }
        node.color = this.BLACK;
    }

    rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }

    rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }

    inOrderTraversal() {
        const stack = [];
        const result = [];
        let current = this.root;

        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            result.push(current.data);
            current = current.right;
        }

        return result;
    }

    preOrderTraversal() {
        if (this.root === null) {
            return [];
        }
        const stack = [this.root];
        const result = [];

        while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.data);
            if (node.right !== null) stack.push(node.right);
            if (node.left !== null) stack.push(node.left);
        }

        return result;
    }

    postOrderTraversal() {
        if (this.root === null) {
            return [];
        }

        const stack1 = [];
        const stack2 = [];
        stack1.push(this.root);

        while (stack1.length > 0) {
            const node = stack1.pop();
            stack2.push(node.data);
            if (node.left !== null) stack1.push(node.left);
            if (node.right !== null) stack1.push(node.right);
        }

        return stack2.reverse();
    }

    levelOrderTraversal() {
        const result = [];
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
            while (queue.length > 0) {
                const node = queue.shift();
                result.push(node.data);
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
        }
        return result;
    }

    validate() {
        if (!this.root) {
            return true; // Empty tree is always valid
        }

        const stack = [];
        const heights = new Map();
        let current = this.root;
        let prev = null;
        let blackHeight = 0;

        while (stack.length > 0 || current) {
            if (current) {
                stack.push(current);
                current = current.left;
            } else {
                const node = stack[stack.length - 1];

                if (node.right && prev !== node.right) {
                    current = node.right;
                } else {
                    // Visit the node
                    if (node.color === this.RED && node.parent && node.parent.color === this.RED) {
                        return false; // Red violation
                    }

                    if (node.color === this.BLACK) {
                        let leftHeight = heights.get(node.left) || 0;
                        let rightHeight = heights.get(node.right) || 0;

                        if (leftHeight !== rightHeight) {
                            return false; // Black height violation
                        }
                    } else {
                        blackHeight++;
                    }

                    heights.set(node, blackHeight);

                    // Move to the next node
                    prev = stack.pop();
                }
            }
        }

        return true;
    }

    height() {
        if (!this.root) {
            return 0; // Empty tree has height 0
        }

        const queue = [this.root];
        let height = 0;

        while (queue.length > 0) {
            let levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            height++;
        }

        return height;
    }

    successor(data) {
        let current = this.root;
        let successor = null;

        while (current) {
            if (current.data > data) {
                successor = current;
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return successor;
    }

    predecessor(data) {
        let current = this.root;
        let predecessor = null;

        while (current) {
            if (current.data < data) {
                predecessor = current;
                current = current.right;
            } else {
                current = current.left;
            }
        }

        return predecessor;
    }
}
