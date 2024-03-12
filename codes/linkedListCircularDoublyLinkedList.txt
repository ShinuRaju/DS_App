console.log("================Circular DoublyLinkedList");
class CDLLNode {
    constructor(el) {
        this.value = el;
        this.next = null;
        this.prev = null;
    }
}
class CircularDoublyLinkedList {
    #head;
    #tail;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
        this.#tail = null;
    }
    prepend(el) {
        let node = new CDLLNode(el);
        if (this.#head === null) {
            this.#head = node;
            this.#tail = node;
            this.#tail.next = this.#head;
            this.#head.prev = this.#tail;
        } else {
            node.next = this.#head;
            node.prev = this.#tail;
            this.#head.prev = node;
            this.#head = node;
            this.#tail.next = this.#head;
        }
        this.#size++;
        return el;
    }
    append(el) {
        let node = new CDLLNode(el);
        if (this.#head === null) {
            this.#head = node;
            this.#tail = node;
            this.#head.next = this.#tail;
            this.#tail.next = this.#head;
            this.#head.prev = this.#tail;
            this.#tail.prev = this.#head;
        } else {
            this.#tail.next = node;
            node.next = this.#head;
            node.prev = this.#tail;
            this.#tail = node;
            this.#head.prev = this.#tail;
        }
        this.#size++;
        return el;
    }
    insertAt(idx, el) {
        let node = new CDLLNode(el);
        if (idx === 0) {
            return this.prepend(el);
        } else if (idx === this.#size) {
            return this.append(el);
        } else {
            let counter = 1;
            let curr = this.#head;
            while (curr.next !== null) {
                if (counter === idx) {
                    break;
                }
                counter++;
                curr = curr.next;
            }
            node.next = curr.next;
            node.prev = curr;
            curr.next = node;
            this.#size++;
            return el;
        }
    }
    removeFront() {
        if (this.#head === null) {
            return "no elements in the list";
        } else {
            if (this.#size === 1) {
                let el = this.#head.value;
                this.#head = null;
                this.#tail = null;
            } else {
                let el = this.#head.value;
                this.#head = this.#head.next;
                this.#head.prev = this.#tail;
                this.#tail.next = this.#head;
            }
            this.#size--;
            return el;
        }
    }
    removeBack() {
        if (this.#head === null) {
            return "no elements in the list";
        } else {
            let el = '';
            if (this.#size === 1) {
                el = this.#head.value;
                this.#head = null;
                this.#tail = null;
            } else {
                el = this.#tail.value;
                let prevElement = this.#tail.prev;
                prevElement.next = this.#head;
                this.#tail = prevElement;
                this.#head.prev = prevElement;
            } this.#size--;
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
                let after = curr.next.next;
                curr.next = after;
                after.prev = curr;
                this.#size--;
                return el;
            }
        } else {
            return "no elements found";
        }
    }
    removeByVal(val) {
        let idx = this.search(val);
        return this.removeByIdx(idx);
    }
    printList() {
        let el = "";
        let curr = this.#head;
        let counter = 0;
        while (curr !== null && counter < this.#size) {
            el = el + curr.value + " ";
            counter++;
            curr = curr.next;
        }
        return el;
    }
    search(val) {
        if (this.#head === null) {
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