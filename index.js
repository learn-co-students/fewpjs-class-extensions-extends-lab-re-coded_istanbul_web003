class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, current) => current + total);
    }
}

class Triangle extends Polygon {

    get isValid(){
        const firstSide = this.sides[0];
        const secondSide = this.sides[1];
        const thirdSide = this.sides[2];

        if( firstSide + secondSide > thirdSide &&
            firstSide + thirdSide > secondSide &&
            secondSide + thirdSide > firstSide) {
                return true;
            }

        return false;
    }
}

class Square extends Polygon {

    get isValid(){
        const firstSide = this.sides[0];
        const secondSide = this.sides[1];
        const thirdSide = this.sides[2];
        const forthSide = this.sides[3];

        if( firstSide === secondSide &&
            secondSide === thirdSide &&
            thirdSide === forthSide) {
                return true;
            }

        return false;
    }

    get area() { 
        return this.sides[0] ** 2;
    }
}