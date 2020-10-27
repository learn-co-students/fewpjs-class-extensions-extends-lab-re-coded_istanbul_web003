// Your code here

class Polygon {
    constructor (arr){
        this.arr = arr;
    }

    get countSides(){
        let num = 0;
        this.arr.forEach(element => {
           num++
       });
       return num
    }

    get perimeter (){
        let sum = 0;
        this.arr.forEach(el => {
            return sum += el
        });
        return sum;
    }
};

class Triangle extends Polygon {
    
    get isValid(){
        let option1= this.arr[0] + this.arr[1] > this.arr[2]
        let option2= this.arr[2] + this.arr[1]> this.arr[0]
        let option3= this.arr[2] + this.arr[0] > this.arr[1]
        if(option1 && option2 && option3){
            return true;
        }else {
            return false;
        }
    } 
};

class Square extends Polygon{
    get isValid(){
        if(this.arr[0]===this.arr[1] && this.arr[0]===this.arr[2] && this.arr[0]===this.arr[3] ){
            return true;
        }
        return false;
    }

    
    get area(){
        return this.arr[0]**2
    }
}