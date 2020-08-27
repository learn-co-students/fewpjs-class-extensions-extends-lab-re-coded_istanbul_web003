class Polygon{
    constructor(array){
        this.array=array;
        this.count=this.array.length;
    }
    get countSides(){
        return this.count;
    }
    get perimeter(){
        let perimeterNum = 0
        for(let i = 0; i < this.array.length; i++){
          perimeterNum += this.array[i]
        }
        return perimeterNum
      }
}

class Triangle extends Polygon{
    get isValid() {
     if ( !Array.isArray( this.array ) ) return;
     if ( this.count !== 3 ) return;
     let array1 = this.array[ 0 ]
     let array2 = this.array[ 1 ]
     let array3 = this.array[ 2 ]
     return ( ( array1 === array2 ) && ( array1 === array3 ) && ( array2 === array3 ) )
   }
  }
   class Square extends Polygon {
  
    get isValid() {
      if ( !Array.isArray( this.array ) ) return;
      if ( this.count !== 4 ) return;
      let array1 = this.array[ 0 ]
      let array2 = this.array[ 1 ]
      let array3 = this.array[ 2 ]
      let array4 = this.array[ 3 ]
      return ( ( array1 === array2 ) && ( array1 === array3 ) && ( array1 === array4 ) )
    }
  
    get area() {
      if ( !Array.isArray( this.array ) ) return;
      if ( this.count !== 4 ) return;
      return this.array[ 0 ] * this.array[ 0 ]
    }
  }