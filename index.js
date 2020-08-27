// Your code here
class Polygon{
    constructor(array){
        this.array = array;

    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        return this.array.reduce((acc, cur) => acc + cur , 0)
    }
}
class Triangle extends Polygon{
    get isValid(){
       let a = this.array[0] + this.array[1] > this.array[2]
       let b = this.array[1] + this.array[2] > this.array[0]
       let c = this.array[0] + this.array[2] > this.array[1]
       if(a === true && b === true && c === true){
           return true
       }
       else{
           return false
       }
    }
}
class Square extends Polygon{
    get isValid(){
        let a = this.array.filter(x => x === this.array[0])
        if(a.length === 4){
            return true
        }
        else{
            return false
        }
    }
    get area(){
        return this.array[0] * this.array[1]
    }
}