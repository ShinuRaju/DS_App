console.log("================ SET");
class SetDS {
    #items;
    constructor() {
        this.#items = {};
    }

    has(element) {
        return this.#items.hasOwnProperty(element);
    }

    add(element) {
        if (!this.has(element)) {
            this.#items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.#items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.#items = {};
    }

    size() {
        return Object.keys(this.#items).length;
    }

    values() {
        return Object.values(this.#items);
    }

    keys() {
        return Object.keys(this.#items);
    }

    entries() {
        return Object.entries(this.#items);
    }

    //returns a new set containing elements which are in either or both of this set and the given set.
    union(otherSet) {
        let unionSet = new SetDS();

        let values = this.values();

        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();

        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet;
    }

    //returns a new set containing elements in both this set and the given set.
    intersection(otherSet) {
        let intersectionSet = new SetDS();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    // returns a new set containing elements in this set but not in the given set.
    difference(otherSet) {
        let differenceSet = new SetDS();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    //returns a boolean indicating if all elements of this set are in the given set.
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
    //returns a boolean indicating if all elements of the given set are in this set.
    isSupersetOf(otherSet) {
        if (otherSet.size() > this.size()) {
            return false;
        } else {
            let values = otherSet.values();
            for (let i = 0; i < values.length; i++) {
                if (!this.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
    // returns a boolean indicating if this set has no elements in common with the given set.
    isDisjointFrom(otherSet) {
        return this.intersection(otherSet).values().length === 0;
    }
    //returns a new set containing elements which are in either this set or the given set, but not in both.
    symmetricDifference(otherSet) {
        let differenceAB = this.difference(otherSet);
        let differenceBA = otherSet.difference(this);
        return differenceAB.union(differenceBA);
    }

    foreach(cb) {
        for (let i = 0; i < this.values().length; i++) {
            cb(this.values()[i], i = i)
        }
    }
}


const mySet = new SetDS();
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet.values());
console.log(mySet.keys());
console.log(mySet.entries());

mySet.delete(2);
console.log(mySet.values())
console.log(mySet.size())

let setA = new SetDS();
setA.add(1)
setA.add(2)
setA.add(3);

let setB = new SetDS();
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6);

let unionAB = setA.union(setB);
console.log("unionAB", unionAB.values());

let intersectionAB = setA.intersection(setB);
console.log("intersectionAB", intersectionAB.values());

let differenceAB = setA.difference(setB);
console.log("differenceAB", differenceAB.values());

let setC = new SetDS();
setC.add(1)
setC.add(2)
setC.add(3);
setC.add(4);

let isSubset = setA.isSubsetOf(setC);
console.log("isASubsetOfC", isSubset);

let setD = new SetDS();
setD.add(1)
setD.add(2)

let isSuperset = setA.isSupersetOf(setD);
console.log("isASupersetOfD", isSuperset);

let isDisjointFrom1 = setB.isDisjointFrom(setD);
console.log("isDisjointFrom1", isDisjointFrom1);

let isDisjointFrom2 = setA.isDisjointFrom(setB);
console.log("isDisjointFrom2", isDisjointFrom2);

let symmetricDifference = setA.symmetricDifference(setB);
console.log("symmetricDifference", symmetricDifference.values())

mySet.foreach((e) => console.log([e]))