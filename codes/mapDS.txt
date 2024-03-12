
console.log("================ MAP");
class MapDS {
    #map;
    #size;

    constructor() {
        this.#map = {};
        this.#size = 0
    }

    get size() { //property
        return this.#size;
    }

    set(key, value) {
        this.#size++;
        this.#map[key] = value;
        return this //so we can chain the method set
    }

    get(key) {
        return this.#map[key]
    }

    has(key) {
        return key in this.#map;
    }

    delete(key) {
        if (this.has(key)) {
            delete this.#map[key];
            this.#size--;
            return true;
        }
        return false;
    }

    keys() {
        let arr = Object.keys(this.#map);
        return arr[Symbol.iterator]();
    }

    values() {
        let arr = Object.values(this.#map);
        return arr[Symbol.iterator]();
    }

    entries() {
        let arr = Object.entries(this.#map);
        return arr[Symbol.iterator]();
    }



    clear() {
        this.#map = {};
        this.#size = 0;
    }

    iterator() {
        let arr = Object.entries(this.#map);
        return arr[Symbol.iterator]();
    }

    forEach(cb) {
        for (let each of Array.from(this.entries())) {
            cb(each.value, each.key, map = each)
        }
    }

    groupBy(arr, cb) {
        for (let each of arr) {
            let groupKey = cb(each);
            if (!this.has(groupKey)) {
                this.set(groupKey, [])
            }
            this.get(groupKey).push(each);
            return this.#map
        }
    }

}

const myMap = new MapDS();


// Using set()
// Add new elements to the map
myMap.set("shinu", "raju");
myMap.set('asd', "foobar");

// Update an element in the map
myMap.set("bar", "baz");

// Using the set() with chaining 
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz"); // chaining


// Using get() 
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Returns "foo"
console.log(myMap.get("baz")); // Returns undefined

//using has()
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false

console.log(myMap.entries());

// using delete
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // Returns true. Successfully removed.
console.log(myMap.has("bar")); // Returns false. The "bar" element is no longer present.

// using keys
myMap.clear();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {} 

//using values
myMap.clear();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter2 = myMap.values();

console.log(mapIter2.next().value); // "foo"
console.log(mapIter2.next().value); // "bar"
console.log(mapIter2.next().value); // "baz"

//using entries
myMap.clear();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter3 = myMap.entries();

console.log(mapIter3.next().value); // ["0", "foo"]
console.log(mapIter3.next().value); // [1, "bar"]
console.log(mapIter3.next().value); // [Object, "baz"]

// using size property
myMap.clear();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3

// using clear
myMap.clear()
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false

//foreach
function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`);
}
new Map([
    ["foo", 3],
    ["bar", {}],
    ["baz", undefined],
]).forEach(logMapElements);
// Logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"

// using groupby

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 9 },
    { name: "bananas", type: "fruit", quantity: 5 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 12 },
    { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? restock : sufficient,
);
console.log(result.get(sufficient));
// [{ name: "bananas", type: "fruit", quantity: 5 }]