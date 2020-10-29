class Polygon {
    constructor(Array){
        this.Array = Array;
    }

    get countSides() {
        return this.Array.length;
    }

    get perimeter() {
        return this.Array.reduce((a,c) => a + c, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {

        return ((this.Array[0] + this.Array[1] > this.Array[2]) && 
            (this.Array[0] + this.Array[2] > this.Array[1]) && (this.Array[1] + this.Array[2] > this.Array[0]))

    }
} 

class Square extends Polygon {
    get isValid() {
        return (this.Array[0] === this.Array[1] && this.Array[1] === this.Array[2] && this.Array[2] === this.Array[3])
        
    }

    get area() {
        return this.Array[1]**2;
    }
}