
class Polygon {
     constructor(side) {
        this.side = side;
    } 

     get countSides() {
        let count = 0;
        for (const e of this.side) {
           count++;
        }
        return count;
     }

     get perimeter(){
      let sum=0;
      for(const e of this.side){
          sum+=e;
      }
      return sum;
  }

} 

class Triangle extends Polygon {

 get isValid() {
     if(this.countSides === 3) {
        let hightestCorner = Math.max.apply(null,this.side);
        let sumSecond = this.perimeter - hightestCorner;
        return sumSecond > hightestCorner;
     }
    
 }
}

class Square extends Polygon{
   constructor(side){
       super(side);
   }
   get isValid(){
       if(this.countSides===4){
           let length= this.side[0];
           for(const e of this.side){
               if(e!==length){
                   return false;
               }
           }
           return true;
       } 
   }

   get area(){
       return (this.perimeter/4)**2
   }

}