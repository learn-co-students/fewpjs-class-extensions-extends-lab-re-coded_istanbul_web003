// Your code here
class Polygon{
    constructor(sides){
        this.sides= sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        const perimeter = this.sides.reduce((sum,side)=>{
           return sum += side
        }, 0)
        return perimeter
    }
}
// if side1 + side2 > side 3
//side3+side2>side1
// side3+side1>side2
//
class Triangle extends Polygon{
    get isValid(){
        let option1= this.sides[0] + this.sides[1] > this.sides[2]
        let option2= this.sides[2] + this.sides[1]> this.sides[0]
        let option3= this.sides[2] + this.sides[0] > this.sides[1]
        if(option1 && option2 && option3){
            return true;
        }else {
            return false;
        }

    }
}

class Square extends Polygon{
    get isValid(){
        if(this.sides[0]===this.sides[1] && this.sides[0]===this.sides[2] && this.sides[0]===this.sides[3] ){
            return true;
        }
        return false;
      }
      get area(){
          return this.sides[0]**2
      }
}