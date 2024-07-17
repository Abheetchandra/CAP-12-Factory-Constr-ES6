function animal (noOFLegs , vegetarian){
  let obj ={}

  obj.noOFLegs = noOFLegs,
  obj.vegetarian = vegetarian

  obj.eat = function(){
    return "eating"
  }

  obj.greet = function(){
    return `Hi, I have ${noOFLegs} legs.`
  }

  return obj
}

let a1 = animal(4 , true);
console.log(a1.eat());
console.log(a1.greet());

function AnimalCF (noOfLegs , vegetarian){
    this.noOfLegs = noOfLegs,
    this.vegetarian = vegetarian,

    this.eat = function(){
        console.log("eating")
    }
     this.greet = function(){
        console.log(`Hi, I have ${noOfLegs} legs.`)
    }
    }
    let animalCF = new AnimalCF(4, true);
    console.log(animalCF);
    console.log(animalCF.eat()); // eating...
    console.log(animalCF.greet()); // Hi, I have 4 legs.

    class AnimalES6 {
        constructor(noOfLegs,vegetarian){
            this.noOfLegs = noOfLegs,
          this.vegetarian = vegetarian,

           
          this.eat = function(){
            console.log("eating")
        }
         this.greet = function(){
            console.log(`Hi, I have ${noOfLegs} legs.`)
        }
    }
}
let animalES6 = new AnimalES6(4, true);
console.log(animalES6);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.

    
    
