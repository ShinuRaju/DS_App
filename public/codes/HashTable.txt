console.log("================Hash table");
class HashNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashTable {
    #capacity;
    #bucket;
    #count;
    constructor(capacity) {
        this.#capacity = capacity
        this.#bucket = new Array(capacity);
        this.#count = 0;
    }
    #hashFunction(str, size) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i)
        }
        return hash % size;
    }
    set(key, value) {
        if (this.#count / this.#capacity > 0.8) {
            this.#resize();
        }
        let idx = this.#hashFunction(key, this.#capacity);
        let node = new HashNode(key, value);
        if (!this.#bucket[idx]) {
            this.#bucket[idx] = node;
            this.#count++;
            return 'key added'
        } else {
            let curr = this.#bucket[idx];
            while (curr.next !== null) {
                if (curr.key === key) {
                    curr.value = value;
                    return 'key updated'
                }
                curr = curr.next;
            }
            if (curr.key === key) {
                curr.value = value;
                return 'key updated'
            }
            curr.next = node;
            return 'key added'
        }
    }
    get(key) {
        let idx = this.#hashFunction(key, this.#capacity);
        let curr = this.#bucket[idx];
        while (curr !== null) {
            if (curr.key === key) {
                return curr.value;
            }
            curr = curr.next;
        }
        return curr;
    }
    delete(key) {
        let idx = this.#hashFunction(key, this.#capacity);
        if (!this.#bucket[idx]) {
            return 'no data found'
        } else {
            let curr = this.#bucket[idx];
            let el = 'no elements found'
            if (curr.key === key) {
                el = this.#bucket[idx].key
                this.#bucket[idx] = this.#bucket[idx].next;
                return el + ' deleted';
            }
            while (curr.next !== null) {
                if (curr.next.key === key) {
                    el = curr.next.key;
                    curr.next = curr.next.next;
                    return el + ' deleted';
                }
                curr = curr.next;
            }
            return el;
        }
    }
    contains(key) {
        let idx = this.#hashFunction(key, this.#capacity);
        if (!this.#bucket[idx]) {
            return false;
        } else {
            let curr = this.#bucket[idx];
            while (curr) {
                if (curr.key === key) {
                    return true;
                }
                curr = curr.next;
            }
            return false;
        }
    }
    size() {
        return this.#count;
    }
    #resize() {
        let newSize = this.#capacity * 2;
        let newBucket = new Array(newSize);
        for (let i = 0; i < this.size; i++) {
            let node = this.#bucket[i];
            while (node) {
                let newIdx = this.#hashFunction(node.key, newSize);
                if (!newBucket[newIdx]) {
                    newBuckets[newIdx] = new HashNode(node.key, node.value);
                } else {
                    let curr = newBucket[newIdx];
                    while (curr.next) {
                        curr = curr.next;
                    }
                    curr.next = new HashNode(node.key, node.value);
                }
            }
        }
        this.#bucket = newBucket;
        this.#capacity = newSize;
    }
    iterate(callback) {
        for (let i = 0; i < this.#capacity; i++) {
            let node = this.#bucket[i];
            while (node) {
                callback(node.key, node.value);
                node = node.next
            }
        }
    }
}