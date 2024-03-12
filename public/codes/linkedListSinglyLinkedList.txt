console.log("================Singly LinkedList");
class SSLNode {
    constructor(el) {
        this.value = el;
        this.next = null;
    }
}
class SinglyLinkedList {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }
    prepend(el) {
        let node = new SSLNode(el);
        if (this.#head === null) {
            this.#head = node;
        } else {
            [node.next, this.#head] = [this.#head, node];
        }
        this.#size++;
        return el
    }
    append(el) {
        let node = new SSLNode(el);
        if (this.#head === null) {
            this.#head = node;
        } else {
            let curr = this.#head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.#size++;
        return el;
    }
    insertAt(idx, el) {
        if (idx >= 0 && idx <= this.#size) {
            if (idx === 0) {
                return this.prepend(el);
            } else if (idx === this.#size) {
                return this.append(el);
            } else {
                let counter = 1;
                let node = new SSLNode(el);
                let curr = this.#head;
                while (curr.next) {
                    if (counter === idx) {
                        break;
                    }
                    ++counter;
                    curr = curr.next;
                }
                node.next = curr.next;
                curr.next = node;
                this.#size++;
                return el;
            }
        } else {
            console.log("idx out of bound error");
        }
    }
    removeFront() {
        let el = "no elements found";
        if (this.#head === null) {
            return el;
        } else {
            el = this.#head.value;
            this.#head = this.#head.next;
            this.#size--;
            return el;
        }
    }
    removeBack() {
        let el = "no elements found";
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
            } --this.#size;
            return el;
        }
    }
    removeByIdx(idx) {
        if (this.#head !== null) {
            if (idx >= 0 && idx <= this.#size - 1) {
                if (idx === 0) {
                    return this.removeFront();
                } else if (idx === this.#size - 1) {
                    return this.removeBack();
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
                    let el = curr.next.value;
                    curr.next = curr.next.next;
                    this.#size--;
                    return el;
                }
            } else {
                return "no element found";
            }
        } else {
            return "no element found";
        }
    }
    removeByVal(el) {
        let idx = this.search(el);
        return this.removeByIdx(idx);
    }
    printList() {
        let str = "";
        let curr = this.#head;
        while (curr !== null) {
            str = str + curr.value + ", ";
            curr = curr.next;
        }
        return str;
    }
    search(val) {
        if (this.#head !== null) {
            let curr = this.#head;
            let counter = 0;
            while (curr !== null) {
                if (curr?.value === val) {
                    return counter;
                }
                counter++;
                curr = curr.next;
            }
            return -1;
        } else {
            return -1;
        }
    }
    reverse() {
        let curr = this.#head;
        let prev = null;
        while (curr !== null) {
            let after = curr.next;
            curr.next = prev;
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