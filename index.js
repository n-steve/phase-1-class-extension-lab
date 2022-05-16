class Polygon{
    constructor(sides){
        this.sides = sides
        
    }
    get countSides(){
      return this.sides.length
        }
        
    
    get perimeter(){
        const initialValue = 0
    const result = this.sides.reduce((previousValue,currentValue)=> previousValue + currentValue,initialValue)
       return result;
    }
}

class Triangle extends Polygon{
    get isValid(){
        let result = [this.sides]
      for(const index of result){
          if(index[0] + index[1] <= index[2] || index[1] + index[2] <= index[0] ||
      index[0] + index[2] <= index[1]){return false} else {return true}}
  }

}


class Square extends Polygon{
    get isValid(){
      let result = [this.sides]
      for (const index of result){
          const sum = index[0] + index[1] + index[2] + index[3];
        if(sum/4 === index[0] && index[1] && index[2] && index[3])
        {return true}
        else {return false}
         
      }
    }

    get area(){
        for(const index of this.sides){
            let area = index * index
            return area
        }
    }
}
      
    

