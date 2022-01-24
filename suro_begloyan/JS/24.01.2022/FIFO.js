class FIFO {
    constructor() {
        let arr = [];
        this.arr = arr;
    }
    set(a) {
        this.arr.push(a)
        return a
    }
    watch() {
        return this.arr[this.arr.length - 1]
    }
    get() {
        return this.arr.shift()
    }
}
let newFifo = new FIFO;