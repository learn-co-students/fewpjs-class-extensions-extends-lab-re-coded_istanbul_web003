// // Your code here
// // Your code here

class Polygon {
    constructor(arrOfInts){
        this.arr = arrOfInts
    }

    get countSides(){
        return this.arr.length 
    }

    get perimeter(){
        let sum = 0;
        for (const side of this.arr){
            sum += side
        }
        return sum
    }
}

class Triangle extends Polygon{
    constructor(arrOfInts){
        super(arrOfInts)
    }

    get isValid(){
        if (this.arr[0]+this.arr[1] > this.arr[2]){
            if (this.arr[1]+this.arr[2] > this.arr[0]){
                if(this.arr[0]+this.arr[2] > this.arr[1]){
                    return true
                }
            }
        }
        return false
    }
}

class Square extends Polygon {
    constructor(arrOfInts){
        super(arrOfInts)
    }
    get isValid(){
        if (this.arr.every( (side, i, array) => side === array[0])){
            return true
        }
        else{
            return false
        }
        
    }

    get area(){
        return this.arr[0]**2;
    }
}