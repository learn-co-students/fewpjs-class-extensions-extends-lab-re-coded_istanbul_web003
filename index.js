class Polygon {
    constructor(side) {
        this.side = side
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
        return this.side.reduce((acc,curr) => acc + curr, 0);
    }
}

class Triangle extends Polygon{
    get isValid() {
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]

        if( 
            side1 + side2 > side3 &&
            side1 + side3 > side2 &&
            side2 + side3 > side1
        )  {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if((this.side[0] == this.side[1]) && (this.side[1] == this.side[2]) && 
        (this.side[2] == this.side[3])) {
            return true
            } else {
            return false
            }
        }

        get area() {
            return this.side[0] * this.side[0]
        }
}