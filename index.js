class Polygon {
  constructor(array) {
    this.sides = array;
  }

  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.perimeter / 4 == this.sides[0];
  }
  get area() {
    if (this.isValid) return this.sides[0] ** 2;
  }
}