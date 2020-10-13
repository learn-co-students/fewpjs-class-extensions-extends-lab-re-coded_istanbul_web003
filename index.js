// Your code here
class Polygon {
   constructor(arr){
       this.sides = arr;
   }
   get countSides() {
       return this.sides.length
   } 
   get perimeter() {
       return this.sides.reduce((acc,curr) => {
           return acc+curr
       })
   }
}

class Triangle extends Polygon {
    get isValid(){
        const a = this.sides[0];
        const b = this.sides[1];
        const c = this.sides[2];
        
        if (this.sides.length === 3 && (a+b)>c && a+c>b&& b+c>a){
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get isValid(){
        const a = this.sides[0];
        const b = this.sides[1];
        const c = this.sides[2];
        const d = this.sides[3];

        if (this.sides.length === 4 && a ===b && b ===c && c===d){
            return true
        }else {
            return false
        }
    }

    get area(){
        return this.sides[0]**2
    }
}