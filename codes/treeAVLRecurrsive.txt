console.log("================AVL tree recurrsive approach");

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

    // Insert a new node with given value recurrsively
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (node === null) return new Node(value);

        if (value < node.value)
            node.left = this._insert(node.left, value);
        else if (value > node.value)
            node.right = this._insert(node.right, value);
        else // Duplicate values not allowed
            return node;

        // Update height of this node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get balance factor of this node
        let balance = this.getBalanceFactor(node);

        // Left Left Case
        if (balance > 1 && value < node.left.value)
            return this.rotateRight(node);

        // Right Right Case
        if (balance < -1 && value > node.right.value)
            return this.rotateLeft(node);

        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    // Print the inorder traversal of the tree
    printInOrder(node = this.root) {
        if (node !== null) {
            this.printInOrder(node.left);
            console.log(node.value);
            this.printInOrder(node.right);
        }
    }

    // Get the minimum value node in a subtree rooted with given node
    getMinValueNode(node) {
        let current = node;
        while (current.left !== null)
            current = current.left;
        return current;
    }

    // Delete a node with given value recurrsively
    delete(value) {
        this.root = this._delete(this.root, value);
    }

    _delete(root, value) {
        if (root === null) return root;

        // Perform standard BST delete
        if (value < root.value)
            root.left = this._delete(root.left, value);
        else if (value > root.value)
            root.right = this._delete(root.right, value);
        else {
            // Node with only one child or no child
            if (root.left === null || root.right === null) {
                let temp = null;
                if (temp === root.left)
                    temp = root.right;
                else
                    temp = root.left;

                // No child case
                if (temp === null) {
                    temp = root;
                    root = null;
                } else // One child case
                    root = temp; // Copy the contents of the non-empty child
            } else {
                // Node with two children: Get the inorder successor (smallest in the right subtree)
                let temp = this.getMinValueNode(root.right);

                // Copy the inorder successor's data to this node
                root.value = temp.value;

                // Delete the inorder successor
                root.right = this._delete(root.right, temp.value);
            }
        }

        // If the tree had only one node then return
        if (root === null)
            return root;

        // Update height of the current node
        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        // Get the balance factor of this node
        let balance = this.getBalanceFactor(root);

        // Left Left Case
        if (balance > 1 && this.getBalanceFactor(root.left) >= 0)
            return this.rotateRight(root);

        // Left Right Case
        if (balance > 1 && this.getBalanceFactor(root.left) < 0) {
            root.left = this.rotateLeft(root.left);
            return this.rotateRight(root);
        }

        // Right Right Case
        if (balance < -1 && this.getBalanceFactor(root.right) <= 0)
            return this.rotateLeft(root);

        // Right Left Case
        if (balance < -1 && this.getBalanceFactor(root.right) > 0) {
            root.right = this.rotateRight(root.right);
            return this.rotateLeft(root);
        }

        return root;
    }



}

