class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = sides.length;
    }

    get countSides() {
        return this.count
    }
    get perimeter() {
        let sum = 0;
        this.sides.forEach(function (side) {
            sum += side;
        })
        return sum
    }

}



class Triangle extends Polygon {

    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        if (this.count === 3 && (a + b > c && a + c > b && b + c > a)) {

            return true
        }
        else {
            return false
        }


    }

}

class Square extends Polygon {

    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        let d = this.sides[3];
        if (this.countSides === 4 && (a === b && b === c && c === d && d === a)) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}