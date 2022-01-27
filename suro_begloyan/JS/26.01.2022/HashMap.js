class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
    }
    toStr(key) {
        return key.toString().length
    };

    add(key, value) {
        const hash = this.toStr(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        };
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        };
        this.values[hash][key] = value;
    }
    get(key) {
        const hash = this.toStr(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else {
            return null;
        }
    }
    delete(key) {
        const hash = this.toStr(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            delete this.values[hash][key];
        }
        return {
            hash: null,
            key: null,
        }
    }
    has(key) {
        const hash = this.toStr(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return true;
        };
        return false;
    }
}
const hashMap = new HashTable();