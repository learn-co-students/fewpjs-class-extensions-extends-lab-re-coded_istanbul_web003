// Your code here

class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    get countSides() {
        return this.arr.length;
    }
    get perimeter() {
        console.log(Array.isArray(this.arr));
        let total = 0;
        for (const each of this.arr) {
            total += each;
        }
        return total;
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (
            this.arr[0] + this.arr[1] > this.arr[2] &&
            this.arr[2] + this.arr[1] > this.arr[0] &&
            this.arr[0] + this.arr[2] > this.arr[1]
        );
    }
}

class Square extends Polygon {
    get isValid() {
        return (
            this.arr[0] === this.arr[1] &&
            this.arr[1] === this.arr[2] &&
            this.arr[2] === this.arr[3]
        );
    }
    get area() {
        if (this.isValid === true) {
            return this.arr[0] ** 2;
        }
    }
}
