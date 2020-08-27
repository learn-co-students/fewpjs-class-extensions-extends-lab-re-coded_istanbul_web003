// Your code here
let polygon;
class Polygon {
    constructor(array) {
        this._sides = array;
    }
    get countSides() {
        return this._sides.length;
    }
    get perimeter() {
        return this._sides.reduce((acc, curr) => acc + curr);
    }
}
class Triangle extends Polygon {
    constructor(array) {
        super(array);
    }
    get isValid() {
        let a = this._sides[0], b = this._sides[1], c = this._sides[2];
        return (a + b <= c || a + c <= b || b + c <= a) ? false : true;
    }
}
class Square extends Polygon {
    constructor(array) {
        super(array);
    }
    get area() {
        return this._sides[0] * this._sides[1];
    }
    get isValid() {
        return this._sides.every((item, index, array) => item === array[0]);
    }
}