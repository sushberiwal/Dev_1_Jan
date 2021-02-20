// functions inside a class are knows as methods
// variable inside a class are knowns as properties

// this is defined on runtime
// this cannot be changed 
// this refers to the calling object

class SuperCar{
    constructor(turbo){
        this.turbo = turbo
    }
}

class Car extends SuperCar{
    
    constructor(name , price , transmission , turbo){
        super(turbo); // extended class ka constructor wo fire hota hai
        this.name = name;
        this.price = price;
        this.transmission = transmission;
    }

    getDetails(){
        console.log(this);
        console.log(this.name + this.price + this.transmission); 
    }

}




// let swift = new Car("swift" , "7L" ,"Automatic");
// // console.log(swift);
// swift.getDetails();

// let i20 = new Car("i20" , "8L" , "Automatic");
// i20.getDetails();


let mustang = new Car("mustang" , "80L" , "Automatic" , "SuperJet");
mustang.getDetails();