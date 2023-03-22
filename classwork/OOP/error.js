class RangeValidator{
  constructor(from, to){
      from = Number(from);
      to = Number(to);
      if(isNaN(from) == true){
          throw new Error('params FROM: error');
      }
      if(isNaN(to)){
          throw new Error('params TO: error');
      }
      if(from > to){
          this.from = to;
          this.to = from;
      } else{
          this.from = from;
          this.to = to;
      }
  }
  range(){
      return [this.from, this.to];
  }
  validate(value){
      if(isNaN(value) || !isFinite(value)){
          throw new Error('VALUE: error');
      }
      if(value >= this.from && value <=this.to){
          return true;
      }
    }
}
let range1 = new RangeValidator(10, 100);
console.log(range1.range());
console.log('Validate 77: ',range1.validate(77));
console.log('Validate 200: ',range1.validate(200));
let range2 = new RangeValidator("hello", 100);
console.log(range2);