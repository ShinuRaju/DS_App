console.log("================Queue Circular");
class QCNode {
    constructor(el) {
        this.value = el;
        this.next = null;
    }
}
class QueueCircular {
    #head;
    #capacity;
    #size;
    #tail;
    constructor(capacity) {
        this.#head = null;
        this.#capacity = capacity;
        this.#size = 0;
        this.#tail = null;
    }
    enqueue(el) {
        if (this.#size < this.#capacity) {
            let node = new QCNode(el);
            if (this.#head === null) {
                this.#head = node;
                this.#tail = node;
                this.#size++;
                this.#head.next = this.#tail;
                this.#tail.next = this.#head;
                return el;
            } else {
                this.#tail.next = node;
                this.#tail = node;
                this.#tail.next = this.#head;
                this.#size++;
                return el;
            }
        } else {
            return "capacity reached";
        }
    }
    dequeue() {
        if (this.#head === null) {
            return "no elements in the queue";
        } else {
            let el = '';
            if (this.#size === 1) {
                el = this.#head.value;
                this.#head = null;
                this.#tail = null;
            } else {
                el = this.#head.value;
                this.#head = this.#head.next;
                this.#tail.next = this.#head;
            }
            this.#size--;
            return el;
        }
    }
    peek() {
        return this.#head.value;
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
    printList() {
        let el = "";
        let curr = this.#head;
        let counter = 0;
        while (counter < this.#size) {
            el = el + curr.value + " ";
            counter++;
            curr = curr.next;
        }
        return el;
    }
    length() {
        return this.#size;
    }
    isEmpty() {
        return this.#head === null;
    }
    isFull() {
        return this.#size === this.#capacity
    }
}