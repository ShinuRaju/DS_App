console.log("================Binary Search Tree");

class BSTNode {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.value = data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Insertion (recursive)
    insertRecr(el) {
        const newNode = new BSTNode(el);
        this.root = this._insertRecursively(this.root, newNode);
        return `${el} added to the tree`;
    }

    _insertRecursively(currNode, newNode) {
        if (currNode === null) {
            return newNode;
        }

        if (newNode.value < currNode.value) {
            currNode.left = this._insertRecursively(currNode.left, newNode);
        } else if (newNode.value > currNode.value) {
            currNode.right = this._insertRecursively(currNode.right, newNode);
        }

        return currNode;
    }

    // Deletion (recursive)
    deleteRecr(el) {
        this.root = this._deleteRecursively(this.root, el);
    }

    _deleteRecursively(root, elem) {
        if (root === null) {
            return null;
        }

        if (elem < root.value) {
            root.left = this._deleteRecursively(root.left, elem);
        } else if (elem > root.value) {
            root.right = this._deleteRecursively(root.right, elem);
        } else {
            if (root.left === null && root.right === null) {
                return null;
            } else if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                root.value = this._findMinRecursively(root.right);
                root.right = this._deleteRecursively(root.right, root.value);
            }
        }

        return root;
    }

    // Search (recursive)
    searchRecr(el) {
        return this._searchRecursively(this.root, el);
    }

    _searchRecursively(root, el) {
        if (root === null) {
            return false;
        }

        if (root.value === el) {
            return true;
        }

        return el < root.value ? this._searchRecursively(root.left, el) : this._searchRecursively(root.right, el);
    }

    // Traversals (recursive)
    preOrderRecr() {
        return this._preOrderRecursively(this.root);
    }

    _preOrderRecursively(node) {
        if (node === null) {
            return [];
        }

        return [node.value, ...this._preOrderRecursively(node.left), ...this._preOrderRecursively(node.right)];
    }

    inOrderRecr() {
        return this._inOrderRecursively(this.root);
    }

    _inOrderRecursively(node) {
        if (node === null) {
            return [];
        }

        return [...this._inOrderRecursively(node.left), node.value, ...this._inOrderRecursively(node.right)];
    }

    postOrderRecr() {
        return this._postOrderRecursively(this.root);
    }

    _postOrderRecursively(node) {
        if (node === null) {
            return [];
        }

        return [...this._postOrderRecursively(node.left), ...this._postOrderRecursively(node.right), node.value];
    }

    // Level Order (recursive)
    levelOrderRecr() {
        const levels = [];
        this._levelOrderRecursively(this.root, 0, levels);
        return levels;
    }

    _levelOrderRecursively(node, level, levels) {
        if (node === null) {
            return;
        }

        if (levels[level] === undefined) {
            levels[level] = [];
        }

        levels[level].push(node.value);

        this._levelOrderRecursively(node.left, level + 1, levels);
        this._levelOrderRecursively(node.right, level + 1, levels);
    }

    // Find Min (recursive)
    findMinRecr() {
        return this._findMinRecursively(this.root);
    }

    _findMinRecursively(node) {
        if (node === null) {
            return null;
        }

        return node.left === null ? node.value : this._findMinRecursively(node.left);
    }

    // Find Max (recursive)
    findMaxRecr() {
        return this._findMaxRecursively(this.root);
    }

    _findMaxRecursively(node) {
        if (node === null) {
            return null;
        }

        return node.right === null ? node.value : this._findMaxRecursively(node.right);
    }

    // Height (recursive)
    heightRecr() {
        return this._heightRecursively(this.root);
    }

    _heightRecursively(node) {
        if (node === null) {
            return -1;
        }

        return Math.max(this._heightRecursively(node.left), this._heightRecursively(node.right)) + 1;
    }

    // Check if the BST is balanced (recursive)
    isBalancedRecr() {
        return this._isBalancedRecursively(this.root);
    }

    _isBalancedRecursively(node) {
        if (node === null) {
            return true;
        }

        const leftHeight = this._heightRecursively(node.left);
        const rightHeight = this._heightRecursively(node.right);

        return Math.abs(leftHeight - rightHeight) <= 1 &&
            this._isBalancedRecursively(node.left) &&
            this._isBalancedRecursively(node.right);
    }
}

// Usage example:
const bst = new BST();
[8, 3, 10, 1, 6, 14].forEach((e) => bst.insertRecr(e));

console.log("Pre-order: ", bst.preOrderRecr()); // [8, 3, 1, 6, 10, 14]
console.log("In-order: ", bst.inOrderRecr()); // [1, 3, 6, 8, 10, 14]
console.log("Post-order: ", bst.postOrderRecr()); // [1, 6, 3, 14, 10, 8]
console.log("Level-order: ", bst.levelOrderRecr()); // [[8], [3, 10], [1, 6, 14]]
console.log("Minimum element: ", bst.findMinRecr()); // 1
console.log("Maximum element: ", bst.findMaxRecr()); // 14
console.log("Is balanced? ", bst.isBalancedRecr()); // true
