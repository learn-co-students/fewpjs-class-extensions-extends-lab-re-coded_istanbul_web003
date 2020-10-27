class Polygon{
    constructor(arr){
        this.side = arr;
    }
    get countSides(){
        return this.side.length;
    }
    get perimeter(){
        return this.side.reduce((acc,curr)=> acc+curr ,0);
    }
}

class Triangle extends Polygon{
    get isValid(){
        const a = this.side[0];
        const b = this.side[1];
        const c = this.side[2];
        return(a+b>c && a+c>b && b+c>a);
    }
}
class Square extends Polygon{
    get isValid(){
        const a = this.side[0];
        const b = this.side[1];
        const c = this.side[2];
        const d = this.side[3];
        return (a===b && b===c && c===d);
    }
    get area(){
        return this.side[0]**2;
    }
}