console.log("================Circular SinglyLinkedList");
class CSLLNode {
    constructor(el) {
        this.value = el;
        this.next = null;
    }
}
class CircularSinglyLinkedList {
    #head;
    #tail;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
        this.#tail = null;
    }
    append(el) {
        let node = new CSLLNode(el);
        if (this.#head === null) {
            this.#head = node;
            this.#tail = node;
            this.#tail.next = this.#head;
        } else {
            let tailNext = this.#tail.next;
            this.#tail.next = node;
            node.next = tailNext;
            this.#tail = node;
        }
        this.#size++;
        return el;
    }
    prepend(el) {
        let node = new CSLLNode(el);
        if (this.#head === null) {
            this.#head = node;
            this.#tail = node;
            this.#tail.next = this.#head;
        } else {
            this.#tail.next = node;
            node.next = this.#head;
            this.#head = node;
        }
        this.#size++;
        return el;
    }
    insertAt(idx, el) {
        let node = new CSLLNode(el);
        if (idx >= 0 && idx <= this.#size) {
            if (idx === 0) {
                return this.prepend(el);
            } else if (idx === this.#size) {
                return this.append(el);
            } else {
                let counter = 1;
                let curr = this.#head;
                while (curr !== null) {
                    if (idx === counter) {
                        break;
                    }
                    curr = curr.next;
                    counter++;
                }
                let after = curr.next;
                curr.next = node;
                node.next = after;
                this.#size++;
                return el;
            }
        }
    }
    removeFront() {
        if (this.#size === 0) {
            console.log("no elements in the list");
        } else {
            let el = this.#head.value;
            this.#head = this.#head.next;
            this.#tail = this.#head;
            this.#size--;
            return el;
        }
    }
    removeBack() {
        let el = "no elements in the list";
        if (this.#size === 0) {
            return el;
        } else {
            if (this.#size === 1) {
                el = this.#head.value;
                this.#head = null;
                this.#tail = null;
            } else {
                let curr = this.#head;
                let counter = 1;
                while (true) {
                    if (counter === this.#size - 1) {
                        break;
                    }
                    curr = curr.next;
                    counter++;
                }
                el = curr.next.value;
                this.#tail = curr;
                this.#tail.next = this.#head;
            }
            this.#size--;
            return el;
        }
    }
    removeByIdx(idx) {
        if (idx >= 0 && idx <= this.#size - 1) {
            if (idx === 0) {
                return this.removeFront();
            } else if (idx === this.#size - 1) {
                return this.removeBack();
            } else {
                let counter = 1;
                let curr = this.#head;
                while (true) {
                    if (counter === idx) {
                        break;
                    }
                    curr = curr.next;
                    counter++;
                }
                let el = curr.next.value;
                curr.next = curr.next.next;
                this.#size--;
                return el;
            }
        } else {
            return "no elements at this index";
        }
    }
    removeByVal(val) {
        let idx = this.search(val);
        return this.removeByIdx(idx);
    }
    search(val) {
        if (this.#size === 0) {
            return -1;
        } else {
            let curr = this.#head;
            let counter = 0;
            while (counter <= this.#size - 1) {
                if (curr.value === val) {
                    return counter;
                }
                curr = curr.next;
                counter++;
            }
            return -1;
        }
    }
    printList() {
        let el = "";
        let counter = 0;
        let curr = this.#head;
        while (counter < this.#size) {
            el = el + curr.value + " ";
            curr = curr.next;
            counter++;
        }
        return el;
    }
    reverse() {
        let prev = null;
        let end = null;
        let counter = 0;
        let curr = this.#head;
        while (counter !== this.#size) {
            let after = curr.next;
            curr.next = prev;
            prev = curr;
            if (end === null) {
                end = curr;
            }
            counter++;
            curr = after;
        }
        this.#head = prev;
        this.#tail = end;
        this.#tail.next = this.#head;
        return "list reversed";
    }
    isCircular() {
        if (this.#head === null) {
            return true;
        } else {
            let curr = this.#head;
            while (curr.next !== null) {
                if (curr === this.#head) {
                    return true;
                }
            }
            return false;
        }
    }
    length() {
        return this.#size
    }
}