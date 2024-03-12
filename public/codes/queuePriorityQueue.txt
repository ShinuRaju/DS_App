console.log("================Queue Priority");
class PNode {
    constructor(el, priority) {
        this.value = el;
        this.priority = priority;
        this.next = null;
    }
}
class QueuePriority {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }
    enqueue(el, priority) {
        let node = new PNode(el, priority);
        if (this.#head === null) {
            this.#head = node;
            this.#size++;
            return el;
        } else {
            if (node.priority <= this.#head.priority) {
                node.next = this.#head;
                this.#head = node;
            } else {
                let curr = this.#head.next;
                let prev = null;
                while (curr.next !== null) {
                    if (node.priority <= curr.priority) {
                        prev.next = node;
                        node.next = curr;
                        this.#size++;
                        return el;
                    }
                    prev = curr;
                    curr = curr.next;
                }
                curr.next = node;
            }
            this.#size++;
            return el;
        }
    }
    dequeue() {
        if (this.#head === null) {
            return null;
        } else {
            let el = this.#head.value;
            this.#head = this.#head.next;
            this.#size--;
            return el;
        }
    }
    peek() {
        return this.#head.value;
    }
    length() {
        return this.#size;
    }
    isEmpty() {
        return this.#head === null
    }
    print() {
        let el = "";
        let curr = this.#head;
        while (curr !== null) {
            el = el + curr.value + " ";
            curr = curr.next;
        }
        return el;
    }
}