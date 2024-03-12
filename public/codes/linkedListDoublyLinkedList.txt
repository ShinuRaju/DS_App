console.log("================Doubly LinkedList");
class DLLNode {
    constructor(el) {
        this.prev = null;
        this.value = el;
        this.next = null;
    }
}
class DoublyLinkedList {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }
    prepend(el) {
        let node = new DLLNode(el);
        if (this.#head === null) {
            this.#head = node;
        } else {
            this.#head.prev = node;
            node.next = this.#head;
            this.#head = node;
        }
        this.#size++;
        return el;
    }
    append(el) {
        let node = new DLLNode(el);
        if (this.#head === null) {
            this.#head = node;
        } else {
            let curr = this.#head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
            node.prev = curr;
        }
        this.#size++;
        return el
    }
    insertAt(idx, ele) {
        let node = new DLLNode(ele);
        if (idx >= 0 && idx <= this.#size) {
            if (idx === 0) {
                return this.prepend(ele);
            } else if (idx === this.#size) {
                return this.append(ele);
            } else {
                let counter = 1;
                let curr = this.#head;
                while (curr) {
                    if (idx === counter) {
                        break;
                    }
                    curr = curr.next;
                    counter++;
                }
                node.next = curr.next;
                node.prev = curr;
                curr.next = node;
                this.#size++;
                return el;
            }
        } else {
            console.log("idx out of bound");
        }
    }
    removeFront() {
        if (this.#head === null) {
            console.log("no elements to remove");
        } else {
            let el = this.#head.value;
            this.#head = this.#head.next;
            this.#head !== null && (this.#head.prev = null);
            this.#size--;
            return el;
        }
    }
    removeBack() {
        let el = "no elements to remove";
        if (this.#head === null) {
            return el;
        } else {
            if (this.#head.next === null) {
                el = this.#head.value;
                this.#head = null;
            } else {
                let curr = this.#head;
                while (curr.next.next !== null) {
                    curr = curr.next;
                }
                el = curr.next.value;
                curr.next = null;
            }
            this.#size--;
            return el;
        }
    }
    removeByIdx(idx) {
        let el = "";
        if (idx >= 0 && idx <= this.#size - 1) {
            if (idx === 0) {
                return this.removeFront();
            } else if (idx === this.#size - 1) {
                return this.removeBack();
            } else {
                let counter = 1;
                let curr = this.#head;
                while (curr.next !== null) {
                    if (idx === counter) {
                        break;
                    }
                    counter++;
                    curr = curr.next;
                }
                el = curr.next.value;
                let nextValue = curr.next.next;
                curr.next = nextValue;
                nextValue.prev = curr;
                this.#size--;
                return el;
            }
        } else {
            return "index out of bound error";
        }
    }
    removeByVal(val) {
        let idx = this.search(val);
        return this.removeByIdx(idx);
    }
    search(val) {
        if (this.#head === null) {
            return -1;
        } else {
            let curr = this.#head;
            let counter = 0;
            while (curr !== null) {
                if (curr.value === val) break;
                else {
                    curr = curr.next;
                    counter++;
                }
            }
            return counter;
        }
    }
    printList() {
        let el = "";
        let curr = this.#head;
        while (curr !== null) {
            el += curr.value + " ";
            curr = curr.next;
        }
        return el;
    }
    reverse() {
        let curr = this.#head;
        let prev = null;
        while (curr !== null) {
            let after = curr.next;
            curr.next = prev;
            curr.prev = after;
            prev = curr;
            curr = after;
        }
        this.#head = prev;
        return 'list reversed'
    }
    isCircular() {
        if (this.#head === null) {
            return true;
        } else {
            let curr = this.#head;
            while (curr.next !== null) {
                if (curr.next === this.#head) {
                    return true;
                }
                curr = curr.next;
            }
            return false;
        }
    }
    length() {
        return this.#size;
    }
}