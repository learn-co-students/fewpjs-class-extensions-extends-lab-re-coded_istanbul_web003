// Your code here

class Polygon{
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length;
    }

    get perimeter() {
        return this.arr.reduce((acc,curr) => acc + curr, 0);
    }
}

class Triangle extends Polygon{
    constructor(arr){
        super(arr)
    }

   get isValid() {
        for(let i = 0; i < this.arr.length; i++ ){
            let current = this.arr[i];
            switch(i) {
                case 0:
                    if(current < (this.arr[i+1] + this.arr[i+2]) && current > Math.abs(this.arr[i+1] - this.arr[i+2])) {
                        return true;
                    } else {
                        return false;
                    }
                case 1: 
                    if(current < (this.arr[i-1] + this.arr[i+1]) && current > Math.abs(this.arr[i-1] - this.arr[i+1])) {
                        return true;
                    } else {
                        return false;
                    }
                case 2: 
                    if(current < (this.arr[i-1] + this.arr[i-2]) && current > Math.abs(this.arr[i-1] - this.arr[i-2])) {
                        return true;
                    } else {
                        return false;
                    }
            }
        }
   }
}

class Square extends Polygon{
    constructor(arr) {
        super(arr);
    }

    get isValid() {
        for (let i = 0; i < this.arr.length; i++ ) {
            return this.arr[i] === this.arr[i+1] && true;
        }
    }

    get area() {
        for (let i = 0; i < this.arr.length; i++ ) {
            return this.arr[i]**2;
        }
    }
}