// Define a Car prototype interface
interface CarPrototype {
    clone(): CarPrototype;
    getDetails(): string;
}

// Implement a Concrete Car class
class Car implements CarPrototype {
    constructor(private make: string, private model: string, private color: string) {}

    clone(): CarPrototype {
        return new Car(this.make, this.model, this.color);
    }

    getDetails(): string {
        return `Car: ${this.make} ${this.model}, Color: ${this.color}`;
    }
}

// Client code
const originalCar = new Car('Toyota', 'Camry', 'Red');
const clonedCar = originalCar.clone();

console.log(originalCar.getDetails()); // Output: Car: Toyota Camry, Color: Red
console.log(clonedCar.getDetails());   // Output: Car: Toyota Camry, Color: Red

/* Output: tsc PrototypePattern.ts, node PrototypePattern.js */