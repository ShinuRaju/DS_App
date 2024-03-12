console.log("================Stack using linked list");
class SNode {
    constructor(el) {
        this.value = el;
        this.next = null;
    }
}
class Stack {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }
    push(el) {
        let node = new SNode(el);
        if (this.#head === null) {
            this.#head = node;
        } else {
            node.next = this.#head;
            this.#head = node;
        }
        this.#size++;
        return el + " added to stack";
    }
    pop() {
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
    printStack() {
        let el = "";
        let curr = this.#head;
        while (curr !== null) {
            el = el + curr.value + " ";
            curr = curr.next;
        }
        return "stack -> " + el;
    }
    length() {
        return this.#size;
    }
    isEmpty() {
        return this.#head === null;
    }
}