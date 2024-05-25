// U41684674

// Base Car Class
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
}

// EV Class Extending
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }
// EV chargeBattery Method
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
    }
// Accelerate Method
    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`)
    }
}

// Testing the EV class
const tesla = new EV('Tesla', 120, 23)

tesla.accelerate(); // "Tesla going at 135 km/h, with a charge of 22%"

tesla.brake(); // "Tesla going at 135 km/h"

tesla.chargeBattery(50);
console.log(`${tesla.make} battery charged to ${tesla.charge}%`); // "Tesla battery charged to 50%"

// Multiple Accelerations
tesla.accelerate(); // "Tesla going at 155 km/h, with a charge of 49%"
tesla.accelerate(); // "Tesla going at 175 km/h, with a charge of 48%"