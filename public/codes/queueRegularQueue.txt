console.log("================Queue Regular using linked list");
class QNode {
    constructor(el) {
        this.value = el;
        this.next = null;
    }
}
class QueueRegular {
    #head;
    #tail;
    #size;
    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }
    enqueue(el) {
        let node = new QNode(el);
        if (this.#head === null) {
            this.#head = node;
            this.#tail = node;
        } else {
            this.#tail.next = node;
            this.#tail = node;
        }
        this.#size++;
        return el;
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
        if (this.#head === null)
            return null;
        else
            return this.#head.value;
    }
    length() {
        return this.#size;
    }
    isEmpty() {
        return this.#head === null;
    }
    print() {
        if (this.#head === null) {
            return null;
        } else {
            let curr = this.#head;
            let el = "";
            while (curr !== null) {
                el = el + curr.value + " ";
                curr = curr.next;
            }
            return el;
        }
    }
}