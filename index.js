// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }
  get countSides() {
    return this.array.length;
  }
  get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i];
    }
    return sum;
  }
}
class Triangle extends Polygon {
  get isValid() {
    if (this.array.length === 3) {
      if (
        this.array[0] + this.array[1] > this.array[2] &&
        this.array[1] + this.array[2] > this.array[0] &&
        this.array[0] + this.array[2] > this.array[1]
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
class Square extends Polygon {
  get isValid() {
    if (this.array.length === 4) {
      if (
        this.array[0] === this.array[1] &&
        this.array[0] === this.array[3] &&
        this.array[0] === this.array[2]
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  get area() {
    return this.array[0] * this.array[1];
  }
}
// polygon = new Polygon[(5, 5, 5)]();
triangle = new Triangle([5, 5, 5]);
triangle.isValid();
