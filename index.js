// Your code here

class Polygon {
  constructor(arrOfIntegers) {
    this.arrOfIntegers = arrOfIntegers;
  }
  get countSides() {
    return this.arrOfIntegers.length;
  }

  get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.arrOfIntegers.length; i++) {
      sum += this.arrOfIntegers[i];
    }
    return sum;
  }
}
class Triangle extends Polygon {
  get isValid() {
    const sideOne = this.arrOfIntegers[0];
    const sideTwo = this.arrOfIntegers[1];
    const sideThree = this.arrOfIntegers[2];
    if (this.arrOfIntegers.length === 3) {
      if (
        sideOne + sideTwo > sideThree == true &&
        sideThree + sideTwo > sideOne == true &&
        sideOne + sideThree > sideTwo == true
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
    const sideOne = this.arrOfIntegers[0];
    const sideTwo = this.arrOfIntegers[1];
    const sideThree = this.arrOfIntegers[2];
    const sideFour = this.arrOfIntegers[3];
    if (this.arrOfIntegers.length === 4) {
      if (
        sideOne === sideTwo &&
        sideTwo === sideThree &&
        sideThree === sideFour
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  get area() {
    return this.arrOfIntegers[0] ** 2;
  }
}
