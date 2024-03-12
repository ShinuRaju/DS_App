console.log("================Red Black tree recurrsive approach");

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
        this.root = this._insertRecursively(this.root, data);
        this.root.color = this.BLACK; // Root must always be black
    }

    _insertRecursively(node, data) {
        if (node === null) {
            return new RBNode(data, this.RED); // New node is initially red
        }

        if (data < node.data) {
            node.left = this._insertRecursively(node.left, data);
            node.left.parent = node;
        } else if (data > node.data) {
            node.right = this._insertRecursively(node.right, data);
            node.right.parent = node;
        }

        return this._fixInsertion(node);
    }

    _fixInsertion(node) {
        // Red-Black Tree balancing code after insertion
    }

    delete(data) {
        this.root = this._deleteRecursively(this.root, data);
        if (this.root !== null) {
            this.root.color = this.BLACK;
        }
    }

    _deleteRecursively(node, data) {
        // Deletion implementation
    }

    search(data, node = this.root) {
        if (node === null) {
            return false;
        }

        if (data === node.data) {
            return true;
        } else if (data < node.data) {
            return this.search(data, node.left);
        } else {
            return this.search(data, node.right);
        }
    }

    minimum(node = this.root) {
        if (node === null) {
            return null;
        }
        while (node.left !== null) {
            node = node.left;
        }
        return node.data;
    }

    maximum(node = this.root) {
        if (node === null) {
            return null;
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node.data;
    }

    successor(data) {
        // Successor node implementation
    }

    predecessor(data) {
        // Predecessor node implementation
    }

    _inOrderTraversal(node) {
        if (node !== null) {
            this._inOrderTraversal(node.left);
            console.log(node.data);
            this._inOrderTraversal(node.right);
        }
    }

    inOrderTraversal() {
        this._inOrderTraversal(this.root);
    }

    _preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.data);
            this._preOrderTraversal(node.left);
            this._preOrderTraversal(node.right);
        }
    }

    preOrderTraversal() {
        this._preOrderTraversal(this.root);
    }

    _postOrderTraversal(node) {
        if (node !== null) {
            this._postOrderTraversal(node.left);
            this._postOrderTraversal(node.right);
            console.log(node.data);
        }
    }

    postOrderTraversal() {
        this._postOrderTraversal(this.root);
    }

    levelOrderTraversal() {
        const queue = [];
        const result = [];
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
        return this._validate(this.root);
    }

    _validate(node) {
        if (node === null) {
            return true;
        }

        if (node.color === this.RED && (node.left !== null && node.left.color === this.RED)) {
            return false;
        }

        if (!this._isBST(node.left, null, node.data) || !this._isBST(node.right, node.data, null)) {
            return false;
        }

        return this._validate(node.left) && this._validate(node.right);
    }

    _isBST(node, min, max) {
        if (node === null) {
            return true;
        }

        if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
            return false;
        }

        return this._isBST(node.left, min, node.data) && this._isBST(node.right, node.data, max);
    }

    height(node = this.root) {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
